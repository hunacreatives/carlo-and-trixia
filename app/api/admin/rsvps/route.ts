import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { RsvpEntry } from "@/app/api/rsvp/route";

const DATA_FILE = process.env.VERCEL
  ? "/tmp/rsvps.json"
  : path.join(process.cwd(), "data", "rsvps.json");
const ADMIN_PASSWORD = "carloandtrixia";

function readAll(): RsvpEntry[] {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) as RsvpEntry[];
  } catch {
    return [];
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("pw") !== ADMIN_PASSWORD)
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const entries = readAll().sort(
    (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
  return NextResponse.json({ ok: true, entries });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("pw") !== ADMIN_PASSWORD)
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });

  const all = readAll().filter((e) => e.id !== id);
  fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2));
  return NextResponse.json({ ok: true });
}
