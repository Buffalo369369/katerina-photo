"use client"

import { useEffect, useMemo, useState } from "react"
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

function photosForSession(sessionId: string) {
  return Array.from({ length: 9 }, (_, i) => `/portfolio/${sessionId}/${i + 1}.jpg`)
}

export default function Portfolio() {
  const [openSession, setOpenSession] = useState<string | null>(null)

  const activeSession = useMemo(
    () => SESSIONS.find((s) => s.id === openSession) ?? null,
    [openSession]
  )

  const activePhotos = useMemo(
    () => (openSession ? photosForSession(openSession) : []),
    [openSession]
  )

  // Lock background scroll when modal is open
  useEffect(() => {
    if (!openSession) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [openSession])

  return (
    <section id="portfolio" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10 text-center">
          Портфолио
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SESSIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setOpenSession(s.id)}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition text-left"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={s.cover}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition" />

                {/* centered thin label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full border border-white/20 bg-black/35 backdrop-blur-sm">
                    <span className="text-white/90 text-xs md:text-sm font-light tracking-[0.32em]">
                      {s.title}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* MODAL */}
        {openSession && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpenSession(null)}
          >
            {/* This is the scroll container */}
            <div
              className="mx-auto max-w-6xl h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] overflow-y-auto rounded-3xl border border-white/10 bg-[#070A12] p-4 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-white/60 text-xs tracking-[0.28em] font-light">
                    {activeSession?.title}
                  </div>
                  <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
                    Фотосессия
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenSession(null)}
                  className="rounded-full border border-white/15 px-3 py-2 text-white/80 hover:text-white hover:border-white/25 transition"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activePhotos.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                  >
                    <Image
                      src={src}
                      alt="Photo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
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
