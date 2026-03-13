/* =============================================================
   LEGACY GUILD — AchievementsSection
   Design: Neon Abyss | Trophy showcase with neon glow
   ============================================================= */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Star, Zap, Target } from "lucide-react";

const TROPHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433714442/7DNuLCzRKqgBWvigKzgXZT/legacy-trophy-c5zsL8vSJxKdVhhCPpXyj9.webp";

const achievements = [
  {
    icon: Trophy,
    title: "Campeões Regionais",
    desc: "1º lugar no Torneio Regional Free Fire 2024",
    date: "Dezembro 2024",
    tier: "OURO",
    color: "oklch(0.85 0.18 60)",
  },
  {
    icon: Medal,
    title: "Top 3 Nacional",
    desc: "3º colocados no Campeonato Nacional de Guildas",
    date: "Setembro 2024",
    tier: "PRATA",
    color: "oklch(0.80 0.05 220)",
  },
  {
    icon: Award,
    title: "Melhor Guilda",
    desc: "Prêmio de Melhor Guilda do Servidor — 2023",
    date: "Janeiro 2024",
    tier: "PLATINA",
    color: "oklch(0.75 0.10 200)",
  },
  {
    icon: Star,
    title: "Série Invicta",
    desc: "30 vitórias consecutivas em guerras de guilda",
    date: "Outubro 2023",
    tier: "ELITE",
    color: "oklch(0.72 0.26 220)",
  },
  {
    icon: Zap,
    title: "Massacre Total",
    desc: "Maior número de eliminações em um único torneio",
    date: "Julho 2023",
    tier: "LENDÁRIO",
    color: "oklch(0.78 0.28 210)",
  },
  {
    icon: Target,
    title: "Precisão Máxima",
    desc: "Melhor taxa de acerto coletivo da temporada",
    date: "Maio 2023",
    tier: "ELITE",
    color: "oklch(0.72 0.26 220)",
  },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, oklch(0.04 0.02 240) 0%, oklch(0.08 0.03 240) 50%, oklch(0.04 0.02 240) 100%)"
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.26 220 / 0.06) 0%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />

      <div className="relative z-10 container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1 max-w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
              <span className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase">
                Nosso Histórico
              </span>
            </div>
            <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white mb-6">
              Nossas{" "}
              <span
                className="text-[oklch(0.78_0.28_210)]"
                style={{ textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.5)" }}
              >
                Conquistas
              </span>
            </h2>
            <p className="font-['Exo_2'] text-base text-[oklch(0.65_0.05_220)] leading-relaxed">
              Cada troféu é a prova do nosso comprometimento. Cada título conquistado representa incontáveis horas de treino, estratégia e trabalho em equipe. Este é o legado que construímos juntos.
            </p>
          </AnimatedSection>

          {/* Trophy Image */}
          <AnimatedSection delay={0.3} className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, oklch(0.72 0.26 220 / 0.15) 0%, transparent 70%)",
                  filter: "blur(20px)"
                }}
              />
              <motion.img
                src={TROPHY_IMG}
                alt="Troféu Legacy"
                className="relative z-10 w-full h-full object-contain float-anim"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, i) => (
            <AnimatedSection key={i} delay={0.08 * i}>
              <div className="glass-card neon-border rounded-sm p-5 group hover:bg-[oklch(0.72_0.26_220/0.06)] transition-all duration-300 relative overflow-hidden">
                {/* Tier badge */}
                <div
                  className="absolute top-3 right-3 font-['Share_Tech_Mono'] text-[10px] px-2 py-0.5"
                  style={{
                    color: ach.color,
                    border: `1px solid ${ach.color}50`,
                    background: `${ach.color}10`
                  }}
                >
                  {ach.tier}
                </div>

                <div
                  className="w-10 h-10 flex items-center justify-center mb-4 border transition-all duration-300"
                  style={{
                    borderColor: `${ach.color}50`,
                    background: `${ach.color}10`,
                    boxShadow: `0 0 12px ${ach.color}20`
                  }}
                >
                  <ach.icon size={18} style={{ color: ach.color }} />
                </div>

                <h3 className="font-['Orbitron'] font-bold text-sm text-white mb-1.5 tracking-wide pr-16">
                  {ach.title}
                </h3>
                <p className="font-['Exo_2'] text-xs text-[oklch(0.60_0.05_220)] leading-relaxed mb-3">
                  {ach.desc}
                </p>
                <div className="font-['Share_Tech_Mono'] text-[10px] text-[oklch(0.50_0.05_220)] uppercase tracking-wider">
                  {ach.date}
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${ach.color}, transparent)`,
                    boxShadow: `0 0 8px ${ach.color}`
                  }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
