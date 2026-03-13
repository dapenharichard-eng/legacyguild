/* =============================================================
   LEGACY GUILD — MembersSection
   Design: Neon Abyss | Member cards with rank badges
   ============================================================= */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Star, Shield, Sword } from "lucide-react";

const members = [
  {
    name: "PhantomX",
    role: "Líder",
    rank: "Heroico",
    kd: "4.8",
    wins: "312",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face",
    icon: Crown,
    color: "oklch(0.85 0.18 60)",
    badge: "FOUNDER",
  },
  {
    name: "NightStrike",
    role: "Co-Líder",
    rank: "Heroico",
    kd: "4.2",
    wins: "287",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=face",
    icon: Star,
    color: "oklch(0.78 0.28 210)",
    badge: "CO-LEADER",
  },
  {
    name: "BlazeFire",
    role: "Capitão",
    rank: "Diamante",
    kd: "3.9",
    wins: "241",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=face",
    icon: Shield,
    color: "oklch(0.72 0.26 220)",
    badge: "CAPTAIN",
  },
  {
    name: "VortexKing",
    role: "Capitão",
    rank: "Diamante",
    kd: "3.7",
    wins: "198",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop&crop=face",
    icon: Shield,
    color: "oklch(0.72 0.26 220)",
    badge: "CAPTAIN",
  },
  {
    name: "ShadowBolt",
    role: "Membro Elite",
    rank: "Platina",
    kd: "3.4",
    wins: "176",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    icon: Sword,
    color: "oklch(0.75 0.10 200)",
    badge: "ELITE",
  },
  {
    name: "IronWolf",
    role: "Membro Elite",
    rank: "Platina",
    kd: "3.1",
    wins: "154",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    icon: Sword,
    color: "oklch(0.75 0.10 200)",
    badge: "ELITE",
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
              Nossa Equipe
            </span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white">
            Membros em{" "}
            <span
              className="text-[oklch(0.78_0.28_210)]"
              style={{ textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.5)" }}
            >
              Destaque
            </span>
          </h2>
        </AnimatedSection>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((member, i) => (
            <AnimatedSection key={i} delay={0.08 * i}>
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

        {/* View All */}
        <AnimatedSection className="mt-10 text-center" delay={0.3}>
          <p className="font-['Exo_2'] text-sm text-[oklch(0.55_0.06_220)] mb-4">
            E mais <strong className="text-[oklch(0.72_0.26_220)]">44 membros</strong> fazendo parte da família Legacy
          </p>
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
