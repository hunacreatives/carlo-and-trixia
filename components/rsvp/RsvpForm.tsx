"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function RsvpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      email: String(fd.get("email") || ""),
      attending,
      allergies: String(fd.get("allergies") || ""),
    };
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const lineInput =
    "absolute bg-transparent font-serif text-[28px] text-black outline-none border-0 border-b-2 border-black/80 pb-1 focus:border-[#7d9176]";

  if (status === "success") {
    return (
      <div className="absolute left-[395px] top-[600px] w-[723px] font-serif text-black">
        <p className="font-script text-[64px] leading-tight text-[#2e3e09]">Thank you!</p>
        <p className="mt-4 text-[30px] leading-snug">
          Your response has been received. We can&apos;t wait to celebrate with you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      {/* NAME */}
      <p className="absolute left-[395px] top-[570px] font-serif text-[30px] text-black">
        NAME (required)
      </p>
      <p className="absolute left-[395px] top-[661px] font-serif text-[30px] text-black">
        First Name
      </p>
      <p className="absolute left-[773px] top-[661px] font-serif text-[30px] text-black">
        Last Name
      </p>
      <input
        name="firstName"
        required
        aria-label="First name"
        className={lineInput}
        style={{ left: 395, top: 730, width: 345 }}
      />
      <input
        name="lastName"
        required
        aria-label="Last name"
        className={lineInput}
        style={{ left: 773, top: 730, width: 345 }}
      />

      {/* EMAIL */}
      <p className="absolute left-[395px] top-[831px] font-serif text-[30px] text-black">
        Email (required)
      </p>
      <input
        name="email"
        type="email"
        required
        aria-label="Email"
        className={lineInput}
        style={{ left: 395, top: 888, width: 723 }}
      />

      {/* ATTENDING */}
      <p className="absolute left-[395px] top-[960px] font-serif text-[30px] text-black">
        Will you be attending? (required)
      </p>
      <button
        type="button"
        onClick={() => setAttending("yes")}
        className="absolute top-[1031px] flex items-center gap-3"
        style={{ left: 395 }}
        aria-pressed={attending === "yes"}
      >
        <span className="flex h-[47px] w-[47px] items-center justify-center rounded-full border-2 border-black">
          {attending === "yes" && <span className="h-6 w-6 rounded-full bg-[#7d9176]" />}
        </span>
        <span className="font-serif text-[30px] text-black">Yes</span>
      </button>
      <button
        type="button"
        onClick={() => setAttending("no")}
        className="absolute top-[1031px] flex items-center gap-3"
        style={{ left: 589 }}
        aria-pressed={attending === "no"}
      >
        <span className="flex h-[47px] w-[47px] items-center justify-center rounded-full border-2 border-black">
          {attending === "no" && <span className="h-6 w-6 rounded-full bg-[#7d9176]" />}
        </span>
        <span className="font-serif text-[30px] text-black">No</span>
      </button>

      {/* ALLERGIES */}
      <p className="absolute left-[395px] top-[1110px] font-serif text-[30px] text-black">
        Do you have food allergies? (required)
      </p>
      <input
        name="allergies"
        aria-label="Food allergies"
        className={lineInput}
        style={{ left: 395, top: 1167, width: 723 }}
      />

      {/* SEND */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="absolute left-[651px] top-[1265px] flex h-[79px] w-[211px] items-center justify-center rounded-[58px] border border-black font-serif text-[30px] text-black transition-colors hover:bg-black hover:text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p className="absolute left-[395px] top-[1360px] font-serif text-[22px] text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}
