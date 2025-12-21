import Portfolio from "../components/Portfolio"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-180px] top-[40%] h-[420px] w-[420px] rounded-full bg-white/6 blur-3xl" />
        <div className="absolute left-[-180px] top-[55%] h-[420px] w-[420px] rounded-full bg-white/6 blur-3xl" />
      </div>

      <Hero />
      <Portfolio /><section id="details" className="px-6 pb-20">
  <div className="mx-auto max-w-6xl">
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Детали фотосессии
      </h2>

      <p className="mt-4 text-white/75 leading-relaxed max-w-3xl">
        Съёмка проходит спокойно и комфортно: я подсказываю с позированием,
        помогаю выбрать локацию и образ, чтобы ты чувствовала себя уверенно.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-sm text-white/55">Длительность</div>
          <div className="mt-2 text-xl font-semibold">1 час</div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-sm text-white/55">Готовые фото</div>
          <div className="mt-2 text-xl font-semibold">25 в обработке</div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-sm text-white/55">Дополнительно</div>
          <div className="mt-2 text-xl font-semibold">Все исходники</div>
        </div>
      </div>

      <div className="mt-8 text-sm text-white/60">
        Обычно готовность фото: <span className="text-white/80">до 7 дней</span>.
        Если нужно быстрее — напиши, обсудим.
      </div>
    </div>
  </div>
</section>

    </main>
  )
}
