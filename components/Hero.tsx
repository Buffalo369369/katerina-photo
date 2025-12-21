"use client"

import { motion } from "framer-motion"

const SOCIALS = {
  instagram: "https://instagram.com/katyga_photo",
  telegram: "https://t.me/katygaa",
  whatsapp: "https://wa.me/4915158872050", // 
}

export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-14">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/50"
        >
          {/* ghost background */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0.08, scale: 1.02 }}
            animate={{ opacity: [0.06, 0.14, 0.06], scale: [1.02, 1.0, 1.02] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/me.jpg"
              alt=""
              className="w-[120%] max-w-none select-none opacity-[0.18] blur-sm"
            />
          </motion.div>

          <div className="relative p-8 md:p-12 grid gap-10 md:grid-cols-2 items-center">
            {/* TEXT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-sm text-white/70">
                📍 Вупперталь, Германия
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
                Kateryna Korniiash
              </h1>

              <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl">
                Индивидуальные фотосессии, love story и контент для соцсетей.
                Помогаю чувствовать себя уверенно в кадре — спокойно, без
                напряжения, с аккуратной ретушью и живым светом.
              </p>

              {/* buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
  <a
    href="#portfolio"
    className="rounded-2xl bg-white text-black px-6 py-3 font-medium transition duration-300 hover:scale-[1.03] hover:bg-white/90"
  >
    Портфолио
  </a>

  <a
    href="https://wa.me/4915158872050?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8E."
    target="_blank"
    rel="noreferrer"
    className="rounded-2xl border border-white/15 bg-white/[0.02] px-6 py-3 transition duration-300 hover:scale-[1.03] hover:bg-white/10"
  >
    Записаться
  </a>

  <a
    href="#details"
    className="rounded-2xl border border-white/15 bg-white/[0.02] px-6 py-3 transition duration-300 hover:scale-[1.03] hover:bg-white/10"
  >
    Детали фотосессии
  </a>
</div>


              {/* socials */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:bg-white/10 hover:scale-[1.05]"
                >
                  📷 Instagram
                </a>

                <a
                  href={SOCIALS.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:bg-white/10 hover:scale-[1.05]"
                >
                  💬 Telegram
                </a>

                <a
                  href={SOCIALS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:bg-white/10 hover:scale-[1.05]"
                >
                  ✅ WhatsApp
                </a>
              </div>
            </div>

            {/* MAIN PHOTO */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-black/30">
                <img
                  src="/me.jpg"
                  alt="Екатерина Корнияш"
                  className="h-[480px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
