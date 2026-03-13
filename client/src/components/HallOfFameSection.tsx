/* =============================================================
   LEGACY GUILD — HallOfFameSection
   Design: Neon Abyss | Hall of Fame showcase (Coming Soon)
   ============================================================= */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Lock } from "lucide-react";

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

export default function HallOfFameSection() {
  return (
    <section
      id="hall-of-fame"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.05 0.02 240)" }}
    >
      {/* Decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(0.72 0.26 220 / 0.6), transparent)",
          boxShadow: "0 0 10px oklch(0.72 0.26 220 / 0.4)"
        }}
      />

      <div className="container">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px flex-1 max-w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
            <span className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase">
              Honra & Glória
            </span>
            <div className="h-px flex-1 max-w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
          </div>
          <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white mb-4">
            Hall da{" "}
            <span
              className="text-[oklch(0.78_0.28_210)]"
              style={{ textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.5)" }}
            >
              Fama
            </span>
          </h2>
          <p className="font-['Exo_2'] text-base text-[oklch(0.65_0.05_220)] max-w-2xl mx-auto">
            Reconhecimento aos melhores guerreiros da Legacy. Desempenho, dedicação e excelência em combate.
          </p>
        </AnimatedSection>

        {/* Coming Soon Card */}
        <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative group"
          >
            <div
              className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.26 220 / 0.2), oklch(0.78 0.28 210 / 0.1))",
                boxShadow: "0 0 40px oklch(0.72 0.26 220 / 0.2)"
              }}
            />

            <div className="relative bg-[oklch(0.06_0.02_240/0.8)] backdrop-blur-sm border border-[oklch(0.72_0.26_220/0.3)] rounded-sm p-12 text-center overflow-hidden">
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: "linear-gradient(90deg, transparent, oklch(0.72 0.26 220), transparent)",
                  boxShadow: "0 0 12px oklch(0.72 0.26 220)"
                }}
              />

              {/* Icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center mb-6"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center border-2 rounded-sm"
                  style={{
                    borderColor: "oklch(0.72 0.26 220)",
                    background: "oklch(0.72 0.26 220 / 0.1)",
                    boxShadow: "0 0 20px oklch(0.72 0.26 220 / 0.4)"
                  }}
                >
                  <Lock size={32} className="text-[oklch(0.72_0.26_220)]" />
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="font-['Orbitron'] font-black text-3xl text-white mb-3">
                EM BREVE
              </h3>
              <p className="font-['Exo_2'] text-base text-[oklch(0.65_0.05_220)] mb-6 leading-relaxed">
                Estamos preparando o Hall da Fama para reconhecer os melhores guerreiros da Legacy. Em breve você verá os campeões em destaque com seus feitos épicos!
              </p>

              {/* Features Preview */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Trophy, label: "Top Performers" },
                  { icon: Star, label: "Rankings Mensais" },
                  { icon: Trophy, label: "Conquistas" }
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-10 h-10 flex items-center justify-center border rounded-sm"
                      style={{
                        borderColor: "oklch(0.72 0.26 220 / 0.5)",
                        background: "oklch(0.72 0.26 220 / 0.08)"
                      }}
                    >
                      <feature.icon size={18} className="text-[oklch(0.72_0.26_220)]" />
                    </div>
                    <span className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.55_0.06_220)] uppercase tracking-wider">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-2.5 bg-[oklch(0.72_0.26_220)] text-[oklch(0.05_0.02_240)] font-['Orbitron'] font-bold text-sm rounded-sm hover:bg-[oklch(0.78_0.28_210)] transition-all duration-200 uppercase tracking-wide shadow-lg hover:shadow-xl hover:shadow-[oklch(0.72_0.26_220/0.3)]"
                >
                  Notifique-me
                </button>
                <button
                  onClick={() => document.querySelector("#recruit")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-2.5 border border-[oklch(0.72_0.26_220/0.6)] text-[oklch(0.72_0.26_220)] font-['Orbitron'] font-bold text-sm rounded-sm hover:bg-[oklch(0.72_0.26_220/0.08)] transition-all duration-200 uppercase tracking-wide"
                >
                  Junte-se Agora
                </button>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{
                  background: "linear-gradient(90deg, transparent, oklch(0.72 0.26 220), transparent)",
                  boxShadow: "0 0 12px oklch(0.72 0.26 220)"
                }}
              />
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Info Grid */}
        <AnimatedSection delay={0.2} className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Rankings Mensais",
              desc: "Acompanhe o desempenho dos melhores jogadores a cada mês"
            },
            {
              title: "Conquistas Épicas",
              desc: "Celebre os maiores feitos e momentos memoráveis da guilda"
            },
            {
              title: "Reconhecimento",
              desc: "Ganhe destaque e prêmios exclusivos como top performer"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="p-4 border border-[oklch(0.72_0.26_220/0.2)] rounded-sm bg-[oklch(0.06_0.02_240/0.5)] hover:bg-[oklch(0.72_0.26_220/0.06)] transition-colors duration-300"
            >
              <h4 className="font-['Orbitron'] font-bold text-sm text-[oklch(0.78_0.28_210)] mb-2 uppercase tracking-wide">
                {item.title}
              </h4>
              <p className="font-['Exo_2'] text-xs text-[oklch(0.55_0.06_220)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(0.72 0.26 220 / 0.6), transparent)",
          boxShadow: "0 0 10px oklch(0.72 0.26 220 / 0.4)"
        }}
      />
    </section>
  );
}
