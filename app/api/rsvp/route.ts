import { NextResponse } from "next/server";

export type RsvpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  attending: "yes" | "no" | "";
  allergies: string;
};

export async function POST(request: Request) {
  let data: RsvpPayload;
  try {
    data = (await request.json()) as RsvpPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Basic validation
  if (!data.firstName?.trim() || !data.lastName?.trim()) {
    return NextResponse.json({ ok: false, error: "Name is required" }, { status: 422 });
  }
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "Valid email is required" }, { status: 422 });
  }
  if (data.attending !== "yes" && data.attending !== "no") {
    return NextResponse.json({ ok: false, error: "Please choose Yes or No" }, { status: 422 });
  }

  // TODO(backend): Francis to choose a destination (Google Sheet / email / Formspree).
  // Once chosen, forward `data` here. For now we log so submissions are visible in server logs.
  console.log("[RSVP]", new Date().toISOString(), data);

  return NextResponse.json({ ok: true });
}
