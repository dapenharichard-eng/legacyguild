/* =============================================================
   LEGACY GUILD — HeroSection
   Design: Neon Abyss | Full-screen hero with neon glow effects
   ============================================================= */
import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433714442/7DNuLCzRKqgBWvigKzgXZT/legacy-hero-gvs87HFzRBu3Scz8znzQkn.webp";

const stats = [
  { value: "+20", label: "Membros Ativos" },
  { value: "EM BREVE", label: "Ranking Regional" },
  { value: "Developer", label: "NvT" },
  { value: "Fundada", label: "Em 2026" },
];

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.04_0.02_240/0.92)] via-[oklch(0.06_0.02_240/0.75)] to-[oklch(0.06_0.02_240/0.40)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.04_0.02_240)] via-transparent to-[oklch(0.04_0.02_240/0.3)]" />

      {/* Neon scanline effect */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 3px, oklch(0 0 0 / 0.04) 3px, oklch(0 0 0 / 0.04) 4px)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[oklch(0.72_0.26_220/0.5)] bg-[oklch(0.72_0.26_220/0.08)] rounded-sm"
          >
            <Zap size={12} className="text-[oklch(0.72_0.26_220)]" />
            <span className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase">
              Guilda Elite • Free Fire
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-['Orbitron'] font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-2 tracking-tight"
          >
            <span
              className="block text-white"
              style={{
                textShadow: "0 0 40px oklch(0.72 0.26 220 / 0.4)"
              }}
            >
              LEGACY
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="h-1 w-48 mb-6 origin-left"
            style={{
              background: "linear-gradient(90deg, oklch(0.72 0.26 220), oklch(0.78 0.28 210), transparent)",
              boxShadow: "0 0 12px oklch(0.72 0.26 220 / 0.8)"
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="font-['Exo_2'] text-lg md:text-xl text-[oklch(0.75_0.05_220)] leading-relaxed mb-8 max-w-xl"
          >
            Dominamos o campo de batalha com estratégia, habilidade e lealdade.
            Somos mais do que uma guilda — somos um legado.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector("#recruit")?.scrollIntoView({ behavior: "smooth" })}
              className="neon-btn-filled"
            >
              Junte-se a Nós
            </button>
            <button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="neon-btn"
            >
              Conheça a Guilda
            </button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[oklch(0.72_0.26_220/0.2)] border border-[oklch(0.72_0.26_220/0.2)]"
          style={{ boxShadow: "0 0 30px oklch(0.72 0.26 220 / 0.1)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[oklch(0.06_0.02_240/0.9)] px-6 py-5 text-center group hover:bg-[oklch(0.72_0.26_220/0.08)] transition-colors duration-300"
            >
              <div
                className="font-['Orbitron'] font-black text-2xl md:text-3xl text-[oklch(0.78_0.28_210)] group-hover:text-[oklch(0.92_0.10_210)] transition-colors duration-300"
                style={{ textShadow: "0 0 15px oklch(0.72 0.26 220 / 0.5)" }}
              >
                {stat.value}
              </div>
              <div className="font-['Exo_2'] text-xs text-[oklch(0.55_0.06_220)] uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[oklch(0.55_0.08_220)] hover:text-[oklch(0.72_0.26_220)] transition-colors duration-300 group"
      >
        <span className="font-['Share_Tech_Mono'] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
