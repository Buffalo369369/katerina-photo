"use client"

import Image from "next/image"

type Session = {
  id: string
  title: string
  cover: string
}

const sessions: Session[] = [
  { id: "session-1", title: "INDIVIDUAL", cover: "/portfolio/session-1/cover.jpg" },
  { id: "session-2", title: "LOVE STORY", cover: "/portfolio/session-2/cover.jpg" },
  { id: "session-3", title: "STREET", cover: "/portfolio/session-3/cover.jpg" },
  { id: "session-4", title: "PORTRAIT", cover: "/portfolio/session-4/cover.jpg" },
  { id: "session-5", title: "FASHION", cover: "/portfolio/session-5/cover.jpg" },
  { id: "session-6", title: "CONTENT", cover: "/portfolio/session-6/cover.jpg" },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Портфолио
          </h2>
          <p className="mt-2 text-white/70">
            6 фотосессий. Нажмите на любую — откроется серия из 9 фото.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sessions.map((s) => (
            <a
              key={s.id}
              href={`/session/${s.id}`}
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
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full border border-white/20 bg-black/35 backdrop-blur-sm">
                    <span className="text-white/90 text-xs md:text-sm font-light tracking-[0.32em]">
                      {s.title}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
