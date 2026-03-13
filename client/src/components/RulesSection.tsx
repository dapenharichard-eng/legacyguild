/* =============================================================
   LEGACY GUILD — RulesSection
   Design: Neon Abyss | Numbered rules with neon accents
   ============================================================= */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

const rules = [
  {
    number: "01",
    title: "Respeito Acima de Tudo",
    desc: "Trate todos os membros com respeito, dentro e fora do jogo. Toxicidade e desrespeito resultam em expulsão imediata.",
    type: "required",
  },
  {
    number: "02",
    title: "Participação Ativa",
    desc: "Membros devem participar de pelo menos 3 guerras de guilda por semana. Ausências prolongadas sem aviso serão penalizadas.",
    type: "required",
  },
  {
    number: "03",
    title: "Comunicação no Discord",
    desc: "Toda comunicação oficial ocorre no Discord da guilda. Mantenha-se atualizado sobre avisos e estratégias.",
    type: "required",
  },
  {
    number: "04",
    title: "Jogo Limpo",
    desc: "O uso de hacks, cheats ou qualquer trapaça é terminantemente proibido. Jogamos com honra e habilidade.",
    type: "required",
  },
  {
    number: "05",
    title: "Lealdade à Guilda",
    desc: "Não participe de outras guildas simultaneamente. Sua lealdade é um pilar fundamental da Legacy.",
    type: "required",
  },
  {
    number: "06",
    title: "Evolução Constante",
    desc: "Busque sempre melhorar suas habilidades. A Legacy oferece treinos e estratégias para o desenvolvimento de todos.",
    type: "bonus",
  },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function RulesSection() {
  return (
    <section
      id="rules"
      className="relative py-24 overflow-hidden"
      style={{ background: "oklch(0.05 0.02 240)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663433714442/7DNuLCzRKqgBWvigKzgXZT/legacy-bg-pattern-ViKsMGaUYQas9gDPdYqYUB.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.05_0.02_240)] via-transparent to-[oklch(0.05_0.02_240)]" />

      <div className="relative z-10 container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 max-w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
            <span className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase">
              Código de Conduta
            </span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white">
            Regras da{" "}
            <span
              className="text-[oklch(0.78_0.28_210)]"
              style={{ textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.5)" }}
            >
              Guilda
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {rules.map((rule, i) => (
            <AnimatedSection key={i} delay={0.08 * i}>
              <div className="glass-card neon-border rounded-sm p-5 group hover:bg-[oklch(0.72_0.26_220/0.06)] transition-all duration-300 flex gap-4">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div
                    className="font-['Orbitron'] font-black text-3xl leading-none"
                    style={{
                      color: "oklch(0.72 0.26 220 / 0.25)",
                      textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.1)"
                    }}
                  >
                    {rule.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-['Orbitron'] font-bold text-sm text-white tracking-wide">
                      {rule.title}
                    </h3>
                    {rule.type === "required" ? (
                      <CheckCircle size={14} className="text-[oklch(0.72_0.26_220)] flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle size={14} className="text-[oklch(0.85_0.18_60)] flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                  <p className="font-['Exo_2'] text-sm text-[oklch(0.60_0.05_220)] leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-5 border border-[oklch(0.65_0.25_25/0.4)] bg-[oklch(0.65_0.25_25/0.05)] rounded-sm flex gap-4 items-start"
        >
          <AlertTriangle size={20} className="text-[oklch(0.75_0.22_50)] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-['Orbitron'] font-bold text-sm text-[oklch(0.75_0.22_50)] mb-1 tracking-wide">
              AVISO IMPORTANTE
            </p>
            <p className="font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)] leading-relaxed">
              O descumprimento das regras pode resultar em advertência, suspensão temporária ou expulsão definitiva da guilda, dependendo da gravidade da infração. A liderança tem a palavra final em todos os casos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
