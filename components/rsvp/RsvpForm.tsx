"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function RsvpForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [plusOne, setPlusOne] = useState<"yes" | "no" | "">("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate custom toggle fields
    const errors: Record<string, boolean> = {};
    if (!attending) errors.attending = true;
    if (attending === "yes" && !plusOne) errors.plusOne = true;
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      email: String(fd.get("email") || ""),
      attending,
      plusOne,
      guestName: String(fd.get("guestName") || ""),
      allergies: String(fd.get("allergies") || ""),
      songRequest: String(fd.get("songRequest") || ""),
      message: String(fd.get("message") || ""),
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

  const ToggleGroup = ({
    value,
    onChange,
    top,
    left = 395,
    hasError,
  }: {
    value: "yes" | "no" | "";
    onChange: (v: "yes" | "no") => void;
    top: number;
    left?: number;
    hasError?: boolean;
  }) => (
    <>
      <button
        type="button"
        onClick={() => { onChange("yes"); setFieldErrors(p => ({ ...p })); }}
        className="absolute flex items-center gap-3"
        style={{ top, left }}
        aria-pressed={value === "yes"}
      >
        <span className={`flex h-[47px] w-[47px] items-center justify-center rounded-full border-2 ${hasError ? "border-red-500" : "border-black"}`}>
          {value === "yes" && <span className="h-6 w-6 rounded-full bg-[#7d9176]" />}
        </span>
        <span className="font-serif text-[30px] text-black">Yes</span>
      </button>
      <button
        type="button"
        onClick={() => { onChange("no"); setFieldErrors(p => ({ ...p })); }}
        className="absolute flex items-center gap-3"
        style={{ top, left: left + 194 }}
        aria-pressed={value === "no"}
      >
        <span className={`flex h-[47px] w-[47px] items-center justify-center rounded-full border-2 ${hasError ? "border-red-500" : "border-black"}`}>
          {value === "no" && <span className="h-6 w-6 rounded-full bg-[#7d9176]" />}
        </span>
        <span className="font-serif text-[30px] text-black">No</span>
      </button>
      {hasError && (
        <p className="absolute font-serif text-[20px] text-red-500" style={{ top: top + 60, left }}>
          Please select an option
        </p>
      )}
    </>
  );

  return (
    <form onSubmit={onSubmit}>
      {/* NAME */}
      <p className="absolute left-[395px] top-[570px] font-serif text-[30px] text-black">
        NAME <span className="text-[#7d9176]">*</span>
      </p>
      <p className="absolute left-[395px] top-[641px] font-serif text-[26px] text-black/60">
        First Name
      </p>
      <p className="absolute left-[773px] top-[641px] font-serif text-[26px] text-black/60">
        Last Name
      </p>
      <input
        name="firstName"
        required
        aria-label="First name"
        className={lineInput}
        style={{ left: 395, top: 700, width: 345 }}
      />
      <input
        name="lastName"
        required
        aria-label="Last name"
        className={lineInput}
        style={{ left: 773, top: 700, width: 345 }}
      />

      {/* EMAIL */}
      <p className="absolute left-[395px] top-[800px] font-serif text-[30px] text-black">
        Email <span className="text-[#7d9176]">*</span>
      </p>
      <input
        name="email"
        type="email"
        required
        aria-label="Email"
        className={lineInput}
        style={{ left: 395, top: 858, width: 723 }}
      />

      {/* ATTENDING */}
      <p className="absolute left-[395px] top-[930px] font-serif text-[30px] text-black">
        Will you be attending? <span className="text-[#7d9176]">*</span>
      </p>
      <ToggleGroup
        value={attending}
        onChange={(v) => setAttending(v)}
        top={1001}
        hasError={fieldErrors.attending}
      />

      {/* ALLERGIES */}
      <p className="absolute left-[395px] top-[1100px] font-serif text-[30px] text-black">
        Food allergies or dietary restrictions
      </p>
      <input
        name="allergies"
        aria-label="Food allergies"
        className={lineInput}
        style={{ left: 395, top: 1157, width: 723 }}
      />

      {/* +1 GUEST */}
      <p className="absolute left-[395px] top-[1260px] font-serif text-[30px] text-black">
        Will you be bringing a guest? <span className="text-[#7d9176]">*</span>
      </p>
      <ToggleGroup
        value={plusOne}
        onChange={(v) => setPlusOne(v)}
        top={1331}
        hasError={fieldErrors.plusOne}
      />

      {/* GUEST NAME — only when +1 = yes */}
      {plusOne === "yes" && (
        <>
          <p className="absolute left-[395px] top-[1450px] font-serif text-[30px] text-black">
            Guest&apos;s Name <span className="text-[#7d9176]">*</span>
          </p>
          <input
            name="guestName"
            required
            aria-label="Guest name"
            className={lineInput}
            style={{ left: 395, top: 1510, width: 723 }}
          />
        </>
      )}

      {/* SONG REQUEST */}
      <p
        className="absolute left-[395px] font-serif text-[30px] text-black"
        style={{ top: plusOne === "yes" ? 1630 : 1460 }}
      >
        Song request for the dance floor
      </p>
      <input
        name="songRequest"
        aria-label="Song request"
        placeholder="Artist – Song title"
        className={`${lineInput} placeholder:text-black/30`}
        style={{ left: 395, top: plusOne === "yes" ? 1700 : 1530, width: 723 }}
      />

      {/* MESSAGE FOR THE COUPLE */}
      <p
        className="absolute left-[395px] font-serif text-[30px] text-black"
        style={{ top: plusOne === "yes" ? 1800 : 1630 }}
      >
        A message for Carlo &amp; Trixia
      </p>
      <textarea
        name="message"
        aria-label="Message for the couple"
        placeholder="Write something kind…"
        rows={1}
        className="absolute bg-transparent font-serif text-[28px] text-black outline-none border-0 border-b-2 border-black/80 pb-1 focus:border-[#7d9176] resize-none placeholder:text-black/30 leading-snug"
        style={{ left: 395, top: plusOne === "yes" ? 1870 : 1700, width: 723 }}
      />

      {/* SEND */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="absolute left-[651px] flex h-[79px] w-[211px] items-center justify-center rounded-[58px] border border-black font-serif text-[30px] text-black transition-colors hover:bg-black hover:text-white disabled:opacity-60"
        style={{ top: plusOne === "yes" ? 2050 : 1880 }}
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p
          className="absolute left-[395px] font-serif text-[22px] text-red-700"
          style={{ top: plusOne === "yes" ? 2150 : 1980 }}
        >
          {error}
        </p>
      )}
    </form>
  );
}
