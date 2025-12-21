"use client"

import { useState } from "react"
import Image from "next/image"

type PortfolioSession = {
  id: string
  title: string
  cover: string
}

const SESSIONS: PortfolioSession[] = [
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

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Портфолио
        </h2>

        <p className="text-white/70 mb-10">
          6 фотосессий. Нажмите на любую — откроется серия из 9 фото.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SESSIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setOpenSession(s.id)}
              className="relative group rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={s.cover}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xs tracking-[0.35em] font-light">
                    {s.title}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {openSession && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
            <div className="bg-black rounded-3xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setOpenSession(null)}
                className="absolute top-4 right-4 text-white/70"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <Image
                      src={`/portfolio/${openSession}/${i + 1}.jpg`}
                      alt=""
                      fill
                      className="object-cover"
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
