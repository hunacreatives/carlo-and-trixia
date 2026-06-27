"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Status = "idle" | "submitting" | "success" | "error";

export default function MobileRsvp() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: String(fd.get("firstName") || ""),
          lastName: String(fd.get("lastName") || ""),
          email: String(fd.get("email") || ""),
          attending,
          allergies: String(fd.get("allergies") || ""),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const line =
    "w-full bg-transparent border-0 border-b-2 border-black/70 pb-1 font-serif text-[18px] text-black outline-none focus:border-[#7d9176]";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image src="/images/rsvp-forest.webp" alt="" aria-hidden fill priority className="object-cover" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="relative px-5 pb-16 pt-6 text-center">
        <Link href="/#home" className="font-sans text-[13px] uppercase tracking-[0.2em] text-cream/90">
          ← Home
        </Link>
        <h1 className="mt-6 font-script text-[64px] leading-none text-white [text-shadow:0px_-2px_6px_rgba(0,0,0,0.44)]">
          Carlo &amp; Trixia
        </h1>
        <p className="mt-2 font-serif text-[13px] font-bold uppercase tracking-[0.4em] text-white">
          Réponse Souhaitée
        </p>

        <div className="mx-auto mt-8 max-w-[360px] rounded-[18px] bg-[#eceadf]/95 p-6 text-left shadow-xl">
          {status === "success" ? (
            <div className="py-8 text-center">
              <p className="font-script text-[44px] text-[#2e3e09]">Thank you!</p>
              <p className="mt-2 font-serif text-[16px] text-black">
                Your response has been received. We can&apos;t wait to celebrate with you.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5 font-serif text-[16px] text-black">
              <div>
                <p className="mb-2">NAME (required)</p>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <input name="firstName" required aria-label="First name" className={line} />
                    <span className="mt-1 block text-[12px] text-black/60">First Name</span>
                  </div>
                  <div className="flex-1">
                    <input name="lastName" required aria-label="Last name" className={line} />
                    <span className="mt-1 block text-[12px] text-black/60">Last Name</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-2">Email (required)</p>
                <input name="email" type="email" required aria-label="Email" className={line} />
              </div>

              <div>
                <p className="mb-2">Will you be attending? (required)</p>
                <div className="flex gap-6">
                  {(["yes", "no"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setAttending(v)}
                      className="flex items-center gap-2"
                      aria-pressed={attending === v}
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black">
                        {attending === v && <span className="h-3.5 w-3.5 rounded-full bg-[#7d9176]" />}
                      </span>
                      <span className="capitalize">{v}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2">Do you have food allergies? (required)</p>
                <input name="allergies" aria-label="Food allergies" className={line} />
              </div>

              {status === "error" && <p className="text-[14px] text-red-700">{error}</p>}

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-full border border-black px-10 py-3 font-serif text-[18px] transition-colors hover:bg-black hover:text-white disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
