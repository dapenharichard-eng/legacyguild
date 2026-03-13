/* =============================================================
   LEGACY GUILD — MembersSection
   Design: Neon Abyss | Leader showcase with rank badges
   ============================================================= */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown } from "lucide-react";

const members = [
  {
    name: "Bravuu7",
    role: "Líder Fundador",
    rank: "Elite",
    kd: "4.8",
    wins: "312",
    avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663433714442/7DNuLCzRKqgBWvigKzgXZT/eu_5ed930f2.png",
    icon: Crown,
    color: "oklch(0.85 0.18 60)",
    badge: "FOUNDER",
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

export default function MembersSection() {
  return (
    <section
      id="members"
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
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 max-w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
            <span className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase">
              Liderança
            </span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white">
            Nossos{" "}
            <span
              className="text-[oklch(0.78_0.28_210)]"
              style={{ textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.5)" }}
            >
              Líderes
            </span>
          </h2>
        </AnimatedSection>

        {/* Members Grid */}
        <div className="flex justify-center">
          {members.map((member, i) => (
            <AnimatedSection key={i} delay={0.08 * i} className="w-full max-w-md">
              <div className="glass-card neon-border rounded-sm overflow-hidden group hover:bg-[oklch(0.72_0.26_220/0.06)] transition-all duration-400 relative">
                {/* Top accent line */}
                <div
                  className="h-0.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${member.color}, transparent)`,
                    boxShadow: `0 0 8px ${member.color}`
                  }}
                />

                <div className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-sm overflow-hidden border-2 transition-all duration-300"
                        style={{
                          borderColor: `${member.color}60`,
                          boxShadow: `0 0 15px ${member.color}30`
                        }}
                      >
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Role icon */}
                      <div
                        className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center rounded-sm"
                        style={{
                          background: `${member.color}20`,
                          border: `1px solid ${member.color}60`
                        }}
                      >
                        <member.icon size={12} style={{ color: member.color }} />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h3 className="font-['Orbitron'] font-bold text-sm text-white truncate">
                          {member.name}
                        </h3>
                        <span
                          className="font-['Share_Tech_Mono'] text-[10px] px-1.5 py-0.5 flex-shrink-0"
                          style={{
                            color: member.color,
                            border: `1px solid ${member.color}50`,
                            background: `${member.color}10`
                          }}
                        >
                          {member.badge}
                        </span>
                      </div>
                      <p className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] mb-2">
                        {member.role} · {member.rank}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-4">
                        <div>
                          <div className="font-['Share_Tech_Mono'] text-sm font-bold" style={{ color: member.color }}>
                            {member.kd}
                          </div>
                          <div className="font-['Exo_2'] text-[10px] text-[oklch(0.50_0.05_220)] uppercase tracking-wider">K/D</div>
                        </div>
                        <div className="w-px bg-[oklch(0.72_0.26_220/0.2)]" />
                        <div>
                          <div className="font-['Share_Tech_Mono'] text-sm font-bold text-[oklch(0.78_0.28_210)]">
                            {member.wins}
                          </div>
                          <div className="font-['Exo_2'] text-[10px] text-[oklch(0.50_0.05_220)] uppercase tracking-wider">Vitórias</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
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
