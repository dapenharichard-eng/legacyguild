/* =============================================================
   LEGACY GUILD — AboutSection
   Design: Neon Abyss | Asymmetric layout with team image
   ============================================================= */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Flame, Globe } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433714442/7DNuLCzRKqgBWvigKzgXZT/legacy-about-7SVm2eJHEj6vroWCU4mPrV.webp";

const pillars = [
  {
    icon: Target,
    title: "Estratégia",
    desc: "Cada batalha é planejada. Cada movimento é calculado. Vitória não é sorte — é preparação.",
  },
  {
    icon: Users,
    title: "União",
    desc: "Somos uma família. Nos apoiamos dentro e fora do campo de batalha.",
  },
  {
    icon: Flame,
    title: "Intensidade",
    desc: "Jogamos com paixão e determinação. Nunca desistimos, nunca recuamos.",
  },
  {
    icon: Globe,
    title: "Legado",
    desc: "Construímos uma história que será lembrada. Nosso nome ecoa em cada servidor.",
  },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, oklch(0.04 0.02 240) 0%, oklch(0.07 0.025 240) 50%, oklch(0.04 0.02 240) 100%)"
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663433714442/7DNuLCzRKqgBWvigKzgXZT/legacy-bg-pattern-ViKsMGaUYQas9gDPdYqYUB.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.04_0.02_240)] via-transparent to-[oklch(0.04_0.02_240)]" />

      <div className="relative z-10 container">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 max-w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
            <span className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase">
              Quem Somos
            </span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white">
            Sobre a{" "}
            <span
              className="text-[oklch(0.78_0.28_210)]"
              style={{ textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.5)" }}
            >
              Legacy
            </span>
          </h2>
        </AnimatedSection>

        {/* Main Content — Asymmetric */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-sm opacity-60"
                style={{
                  background: "linear-gradient(135deg, oklch(0.72 0.26 220 / 0.3), transparent, oklch(0.60 0.22 240 / 0.2))",
                  filter: "blur(20px)",
                }}
              />
              <div className="relative neon-border rounded-sm overflow-hidden">
                <img
                  src={ABOUT_IMG}
                  alt="Equipe Legacy"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.04_0.02_240/0.6)] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="inline-block px-3 py-1 font-['Share_Tech_Mono'] text-xs text-[oklch(0.72_0.26_220)] border border-[oklch(0.72_0.26_220/0.5)] bg-[oklch(0.04_0.02_240/0.8)]"
                    style={{ boxShadow: "0 0 10px oklch(0.72 0.26 220 / 0.3)" }}
                  >
                    LEGACY SQUAD — ELITE TIER
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <p className="font-['Exo_2'] text-lg text-[oklch(0.80_0.04_220)] leading-relaxed">
                A <strong className="text-[oklch(0.78_0.28_210)]">Legacy</strong> nasceu da vontade de reunir os melhores jogadores de Free Fire em uma única guilda de elite. Fundada com o propósito de dominar o campo de batalha, nos tornamos referência de excelência e companheirismo.
              </p>
              <p className="font-['Exo_2'] text-base text-[oklch(0.65_0.05_220)] leading-relaxed">
                Mais do que conquistas, cultivamos uma comunidade forte onde cada membro cresce junto. Aqui, a evolução é constante e a vitória é coletiva. Nosso legado é construído batalha a batalha, com dedicação e espírito de equipe.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="text-center">
                  <div
                    className="font-['Orbitron'] font-black text-3xl text-[oklch(0.78_0.28_210)]"
                    style={{ textShadow: "0 0 15px oklch(0.72 0.26 220 / 0.5)" }}
                  >
                    2021
                  </div>
                  <div className="font-['Exo_2'] text-xs text-[oklch(0.55_0.06_220)] uppercase tracking-wider">Fundação</div>
                </div>
                <div className="w-px bg-[oklch(0.72_0.26_220/0.3)]" />
                <div className="text-center">
                  <div
                    className="font-['Orbitron'] font-black text-3xl text-[oklch(0.78_0.28_210)]"
                    style={{ textShadow: "0 0 15px oklch(0.72 0.26 220 / 0.5)" }}
                  >
                    TOP 5
                  </div>
                  <div className="font-['Exo_2'] text-xs text-[oklch(0.55_0.06_220)] uppercase tracking-wider">Ranking</div>
                </div>
                <div className="w-px bg-[oklch(0.72_0.26_220/0.3)]" />
                <div className="text-center">
                  <div
                    className="font-['Orbitron'] font-black text-3xl text-[oklch(0.78_0.28_210)]"
                    style={{ textShadow: "0 0 15px oklch(0.72 0.26 220 / 0.5)" }}
                  >
                    98%
                  </div>
                  <div className="font-['Exo_2'] text-xs text-[oklch(0.55_0.06_220)] uppercase tracking-wider">Retenção</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="glass-card neon-border p-6 h-full group hover:bg-[oklch(0.72_0.26_220/0.06)] transition-all duration-300 rounded-sm">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4 border border-[oklch(0.72_0.26_220/0.4)] group-hover:border-[oklch(0.72_0.26_220/0.8)] transition-colors duration-300"
                  style={{ boxShadow: "0 0 10px oklch(0.72 0.26 220 / 0.2)" }}
                >
                  <pillar.icon size={18} className="text-[oklch(0.72_0.26_220)]" />
                </div>
                <h3 className="font-['Orbitron'] font-bold text-sm text-white mb-2 tracking-wider uppercase">
                  {pillar.title}
                </h3>
                <p className="font-['Exo_2'] text-sm text-[oklch(0.60_0.05_220)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
