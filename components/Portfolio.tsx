"use client"

import { useState } from "react"

const SESSIONS = [
  { id: "session-1", title: "Индивидуальная съёмка" },
  { id: "session-2", title: "Love Story" },
  { id: "session-3", title: "Контент" },
  { id: "session-4", title: "Street" },
  { id: "session-5", title: "Lifestyle" },
  { id: "session-6", title: "Портрет" },
]

export default function Portfolio() {
  const [openSession, setOpenSession] = useState<string | null>(null)

  return (
    <section id="portfolio" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          Портфолио
        </h2>

        {/* GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {SESSIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setOpenSession(s.id)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30"
            >
              <img
                src={`/portfolio/${s.id}/cover.jpg`}
                alt={s.title}
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/55" />

              {/* title */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="text-center text-sm md:text-base font-light tracking-[0.3em] uppercase text-white/90">
                  {s.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {openSession && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
          onClick={() => setOpenSession(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-black p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close */}
            <button
              onClick={() => setOpenSession(null)}
              className="absolute right-4 top-4 rounded-full bg-white text-black px-3 py-1 text-sm"
            >
              ✕
            </button>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <img
                  key={i}
                  src={`/portfolio/${openSession}/${i + 1}.jpg`}
                  alt=""
                  className="w-full rounded-xl object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
