import Image from "next/image"
import Link from "next/link"

export const dynamic = "force-dynamic" // <- ключевой фикс (убираем prerender на Vercel)

type Params = { id: string }

function getImagesForSession(id: string) {
  // 9 фото + cover.jpg лежат в public/portfolio/<id>/
  // cover не показываем в галерее, только 1..9
  return Array.from({ length: 9 }, (_, i) => `/portfolio/${id}/${i + 1}.jpg`)
}

export default function SessionPage({ params }: { params: Params }) {
  const { id } = params

  // простая защита: разрешаем только session-1..session-6
  const allowed = new Set(["session-1", "session-2", "session-3", "session-4", "session-5", "session-6"])
  if (!allowed.has(id)) {
    return (
      <main className="min-h-screen bg-[#070A12] text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold">Фотосессия не найдена</h1>
          <Link href="/#portfolio" className="inline-block mt-6 underline text-white/80">
            ← Назад к портфолио
          </Link>
        </div>
      </main>
    )
  }

  const images = getImagesForSession(id)

  return (
    <main className="min-h-screen bg-[#070A12] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link href="/#portfolio" className="text-white/80 hover:text-white underline">
            ← Назад
          </Link>
          <div className="text-sm text-white/50">{id.toUpperCase()}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src) => (
            <div key={src} className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
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
