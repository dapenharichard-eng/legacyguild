/* =============================================================
   LEGACY GUILD — ContactSection
   Design: Neon Abyss | Social media & contact links
   ============================================================= */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Send, Instagram, Lock } from "lucide-react";

const contacts = [
  {
    icon: Send,
    title: "Discord",
    desc: "Junte-se ao nosso servidor",
    link: "https://discord.gg/kfmUjZwdSg",
    color: "oklch(0.65 0.20 270)",
    badge: "ATIVO",
    enabled: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Fale conosco diretamente",
    link: "https://wa.me/5521971568439",
    color: "oklch(0.72 0.18 140)",
    badge: "ATIVO",
    enabled: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "Acompanhe nossas atualizações",
    link: "#",
    color: "oklch(0.65 0.20 310)",
    badge: "EM BREVE",
    enabled: false,
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

export default function ContactSection() {
  return (
    <section
      id="contact"
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
              Conecte-se
            </span>
            <div className="h-px flex-1 max-w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
          </div>
          <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white mb-4">
            Junte-se à{" "}
            <span
              className="text-[oklch(0.78_0.28_210)]"
              style={{ textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.5)" }}
            >
              Legacy
            </span>
          </h2>
          <p className="font-['Exo_2'] text-base text-[oklch(0.65_0.05_220)] max-w-2xl mx-auto">
            Escolha o canal que preferir para entrar em contato conosco. Estamos sempre prontos para receber novos guerreiros.
          </p>
        </AnimatedSection>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, i) => (
            <AnimatedSection key={i} delay={0.08 * i}>
              <motion.a
                href={contact.enabled ? contact.link : "#"}
                target={contact.enabled ? "_blank" : undefined}
                rel={contact.enabled ? "noopener noreferrer" : undefined}
                onClick={(e) => !contact.enabled && e.preventDefault()}
                whileHover={contact.enabled ? { y: -4 } : {}}
                className={`block glass-card neon-border rounded-sm p-6 group transition-all duration-300 relative overflow-hidden ${
                  !contact.enabled ? "opacity-60 cursor-not-allowed" : "hover:bg-[oklch(0.72_0.26_220/0.06)]"
                }`}
              >
                {/* Top accent line */}
                <div
                  className="h-0.5 w-full absolute top-0 left-0"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${contact.color}, transparent)`,
                    boxShadow: `0 0 8px ${contact.color}`,
                    opacity: contact.enabled ? 1 : 0.4
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4 border rounded-sm transition-all duration-300"
                    style={{
                      borderColor: `${contact.color}50`,
                      background: `${contact.color}10`,
                      boxShadow: `0 0 12px ${contact.color}20`
                    }}
                  >
                    {contact.enabled ? (
                      <contact.icon size={20} style={{ color: contact.color }} />
                    ) : (
                      <Lock size={20} style={{ color: contact.color }} />
                    )}
                  </div>

                  {/* Badge */}
                  <div
                    className="absolute top-3 right-3 font-['Share_Tech_Mono'] text-[10px] px-2 py-0.5 rounded-sm"
                    style={{
                      color: contact.color,
                      border: `1px solid ${contact.color}60`,
                      background: `${contact.color}15`
                    }}
                  >
                    {contact.badge}
                  </div>

                  {/* Content */}
                  <h3 className="font-['Orbitron'] font-bold text-lg text-white mb-1 tracking-wide">
                    {contact.title}
                  </h3>
                  <p className="font-['Exo_2'] text-sm text-[oklch(0.60_0.05_220)] mb-4">
                    {contact.desc}
                  </p>

                  {/* CTA Button */}
                  <div
                    className={`inline-block font-['Share_Tech_Mono'] text-xs px-3 py-1.5 border rounded-sm transition-all duration-300 ${
                      contact.enabled
                        ? "group-hover:bg-[oklch(0.72_0.26_220/0.15)]"
                        : ""
                    }`}
                    style={{
                      color: contact.color,
                      borderColor: `${contact.color}60`,
                      background: `${contact.color}10`,
                      opacity: contact.enabled ? 1 : 0.6
                    }}
                  >
                    {contact.enabled ? "CONECTAR" : "EM BREVE"}
                  </div>
                </div>
              </motion.a>
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
