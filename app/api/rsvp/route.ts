import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type RsvpEntry = {
  id: string;
  submittedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  attending: "yes" | "no" | "";
  plusOne: "yes" | "no" | "";
  guestName: string;
  allergies: string;
  songRequest: string;
  message: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "rsvps.json");

function readAll(): RsvpEntry[] {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) as RsvpEntry[];
  } catch {
    return [];
  }
}

function writeAll(entries: RsvpEntry[]) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
}

export async function POST(request: Request) {
  let data: Omit<RsvpEntry, "id" | "submittedAt">;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (!data.firstName?.trim() || !data.lastName?.trim())
    return NextResponse.json({ ok: false, error: "Name is required" }, { status: 422 });
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return NextResponse.json({ ok: false, error: "Valid email is required" }, { status: 422 });
  if (data.attending !== "yes" && data.attending !== "no")
    return NextResponse.json({ ok: false, error: "Please choose Yes or No" }, { status: 422 });

  const entry: RsvpEntry = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim(),
    attending: data.attending,
    plusOne: data.plusOne ?? "",
    guestName: (data.guestName ?? "").trim(),
    allergies: (data.allergies ?? "").trim(),
    songRequest: (data.songRequest ?? "").trim(),
    message: (data.message ?? "").trim(),
  };

  const all = readAll();
  all.push(entry);
  writeAll(all);

  console.log("[RSVP saved]", entry.id, entry.firstName, entry.lastName);
  return NextResponse.json({ ok: true });
}
