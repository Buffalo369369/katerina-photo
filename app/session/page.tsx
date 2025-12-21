import Image from "next/image"

type Props = {
  params: { id: string }
}

const TITLES: Record<string, string> = {
  "session-1": "INDIVIDUAL",
  "session-2": "LOVE STORY",
  "session-3": "STREET",
  "session-4": "PORTRAIT",
  "session-5": "FASHION",
  "session-6": "CONTENT",
}

export default function SessionPage({ params }: Props) {
  const id = params.id
  const title = TITLES[id] ?? id.toUpperCase()

  const photos = Array.from({ length: 9 }, (_, i) => `/portfolio/${id}/${i + 1}.jpg`)

  return (
    <main className="min-h-screen bg-[#070A12] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-white/80 text-xs font-light tracking-[0.32em]">
              {title}
            </div>
            <h1 className="mt-2 text-2xl md:text-3xl font-semibold">Фотосессия</h1>
          </div>

          <a
            href="/#portfolio"
            className="px-4 py-2 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition text-white/90"
          >
            ← Назад
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
