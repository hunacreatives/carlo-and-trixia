"use client";

import { useState, useEffect, useCallback } from "react";
import type { RsvpEntry } from "@/app/api/rsvp/route";

const PW_KEY = "admin-pw";

type Filter = "all" | "yes" | "no";

function Badge({ attending }: { attending: string }) {
  if (attending === "yes")
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Attending
      </span>
    );
  if (attending === "no")
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600 ring-1 ring-red-200">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        Declined
      </span>
    );
  return <span className="text-gray-400 text-xs">—</span>;
}

export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);
  const [entries, setEntries] = useState<RsvpEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(PW_KEY);
    if (saved) { setPw(saved); setAuthed(true); }
  }, []);

  const fetchEntries = useCallback(async (password: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/rsvps?pw=${encodeURIComponent(password)}`);
      const json = await res.json();
      if (!json.ok) throw new Error();
      setEntries(json.entries);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed && pw) fetchEntries(pw);
  }, [authed, pw, fetchEntries]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (pwInput === "carloandtrixia") {
      sessionStorage.setItem(PW_KEY, pwInput);
      setPw(pwInput);
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Remove this RSVP?")) return;
    setDeleting(id);
    await fetch(`/api/admin/rsvps?pw=${encodeURIComponent(pw)}&id=${id}`, { method: "DELETE" });
    setEntries((prev) => prev.filter((e) => e.id !== id));
    setDeleting(null);
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f7f5]">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
          <p className="mb-1 font-serif text-2xl text-gray-800">Admin Access</p>
          <p className="mb-6 text-sm text-gray-400">Carlo &amp; Trixia · RSVP Dashboard</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={pwInput}
              onChange={(e) => { setPwInput(e.target.value); setPwError(false); }}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10 ${
                pwError ? "border-red-300 bg-red-50" : "border-gray-200"
              }`}
            />
            {pwError && <p className="text-xs text-red-500">Incorrect password.</p>}
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  const attending = entries.filter((e) => e.attending === "yes");
  const declined = entries.filter((e) => e.attending === "no");
  const guests = attending.filter((e) => e.plusOne === "yes").length;

  const visible = entries.filter((e) => {
    if (filter === "yes" && e.attending !== "yes") return false;
    if (filter === "no" && e.attending !== "no") return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        `${e.firstName} ${e.lastName}`.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.guestName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8f7f5] p-6 font-sans">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">RSVP Responses</h1>
          <p className="text-sm text-gray-400">Carlo &amp; Trixia · 28 November 2026</p>
        </div>
        <button
          onClick={() => { fetchEntries(pw); }}
          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 shadow-sm hover:bg-gray-50"
        >
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-4 gap-4">
        {[
          { label: "Total RSVPs", value: entries.length },
          { label: "Attending", value: attending.length },
          { label: "Declined", value: declined.length },
          { label: "Total Guests (incl. +1)", value: attending.length + guests },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <p className="text-2xl font-semibold text-gray-900">{s.value}</p>
            <p className="mt-0.5 text-xs text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="mb-4 flex items-center gap-3">
        <input
          type="text"
          placeholder="Search name or email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 w-56"
        />
        <div className="flex rounded-lg border border-gray-200 bg-white overflow-hidden text-sm">
          {(["all", "yes", "no"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 capitalize ${filter === f ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              {f === "all" ? "All" : f === "yes" ? "Attending" : "Declined"}
            </button>
          ))}
        </div>
        <p className="ml-auto text-xs text-gray-400">
          {loading ? "Loading…" : `${visible.length} record${visible.length !== 1 ? "s" : ""}`}
        </p>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">+1</th>
                <th className="px-4 py-3">Guest Name</th>
                <th className="px-4 py-3">Dietary</th>
                <th className="px-4 py-3">Song Request</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Submitted</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading && (
                <tr>
                  <td colSpan={10} className="px-4 py-10 text-center text-sm text-gray-400">
                    Loading…
                  </td>
                </tr>
              )}
              {!loading && visible.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-4 py-10 text-center text-sm text-gray-400">
                    No responses yet.
                  </td>
                </tr>
              )}
              {!loading && visible.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-800">
                    {e.firstName} {e.lastName}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{e.email}</td>
                  <td className="px-4 py-3">
                    <Badge attending={e.attending} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    {e.plusOne === "yes" ? "✓" : e.plusOne === "no" ? "—" : ""}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{e.guestName || "—"}</td>
                  <td className="max-w-[140px] truncate px-4 py-3 text-gray-500" title={e.allergies}>
                    {e.allergies || "—"}
                  </td>
                  <td className="max-w-[160px] truncate px-4 py-3 text-gray-500" title={e.songRequest}>
                    {e.songRequest || "—"}
                  </td>
                  <td className="max-w-[180px] truncate px-4 py-3 text-gray-400 italic" title={e.message}>
                    {e.message || "—"}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-xs text-gray-400">
                    {new Date(e.submittedAt).toLocaleDateString("en-US", {
                      month: "short", day: "numeric", year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(e.id)}
                      disabled={deleting === e.id}
                      className="text-xs text-red-400 hover:text-red-600 disabled:opacity-40"
                    >
                      {deleting === e.id ? "…" : "Remove"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
