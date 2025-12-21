"use client"

import { useState } from "react"
import Image from "next/image"

type Session = {
  id: string
  title: string
  cover: string
}

const SESSIONS: Session[] = [
  { id: "session-1", title: "КОНТЕНТ СЪЁМКА", cover: "/portfolio/session-1/cover.jpg" },
  { id: "session-2", title: "LOVE STORY", cover: "/portfolio/session-2/cover.jpg" },
  { id: "session-3", title: "ИНДИВИДУАЛЬНАЯ", cover: "/portfolio/session-3/cover.jpg" },
  { id: "session-4", title: "СЕМЕЙНАЯ", cover: "/portfolio/session-4/cover.jpg" },
  { id: "session-5", title: "КОНТЕНТ СЪЁМКА", cover: "/portfolio/session-5/cover.jpg" },
  { id: "session-6", title: "ТВОРЧЕСКАЯ", cover: "/portfolio/session-6/cover.jpg" },
]

export default function Portfolio() {
  const [openSession, setOpenSession] = useState<string | null>(null)

  return (
    <section id="portfolio" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Портфолио
          </h2>
          <p className="mt-2 text-white/70">
            6 фотосессий. Нажмите на любую — откроется серия из 9 фото.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SESSIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setOpenSession(s.id)}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={s.cover}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs md:text-sm font-light tracking-[0.35em]">
                    {s.title}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* MODAL */}
        {openSession && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="relative max-w-5xl w-full bg-black rounded-3xl p-6 overflow-y-auto max-h-[90vh]">

              <button
                onClick={() => setOpenSession(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-sm"
              >
                ✕ Закрыть
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <Image
                      src={`/portfolio/${openSession}/${i + 1}.jpg`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  )
}
