/* =============================================================
   LEGACY GUILD — Footer
   Design: Neon Abyss | Minimal footer with neon accents
   ============================================================= */
import { Shield, Youtube, Instagram, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
];

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Membros", href: "#members" },
  { label: "Conquistas", href: "#achievements" },
  { label: "Regras", href: "#rules" },
  { label: "Recrutamento", href: "#recruit" },
];

export default function Footer() {
  const handleSocialClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    toast.info(`${label} em breve!`, { description: "Nossas redes sociais estão sendo configuradas." });
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ background: "oklch(0.04 0.02 240)" }}
    >
      {/* Top neon line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(0.72 0.26 220 / 0.8), transparent)",
          boxShadow: "0 0 15px oklch(0.72 0.26 220 / 0.5)"
        }}
      />

      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield
                size={24}
                className="text-[oklch(0.72_0.26_220)]"
                style={{ filter: "drop-shadow(0 0 8px oklch(0.72 0.26 220 / 0.7))" }}
              />
              <span
                className="font-['Orbitron'] font-black text-xl tracking-widest text-[oklch(0.78_0.28_210)]"
                style={{ textShadow: "0 0 10px oklch(0.72 0.26 220 / 0.5)" }}
              >
                LEGACY
              </span>
            </div>
            <p className="font-['Exo_2'] text-sm text-[oklch(0.55_0.05_220)] leading-relaxed mb-5">
              Guilda de elite no Free Fire. Dominamos o campo de batalha com estratégia, habilidade e lealdade desde 2026.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => handleSocialClick(e, social.label)}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center border border-[oklch(0.72_0.26_220/0.3)] text-[oklch(0.55_0.08_220)] hover:text-[oklch(0.78_0.28_210)] hover:border-[oklch(0.72_0.26_220/0.7)] hover:bg-[oklch(0.72_0.26_220/0.08)] transition-all duration-200 rounded-sm"
                  style={{ boxShadow: "0 0 0 0 transparent" }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-['Exo_2'] text-sm text-[oklch(0.55_0.05_220)] hover:text-[oklch(0.78_0.28_210)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[oklch(0.72_0.26_220/0)] group-hover:bg-[oklch(0.72_0.26_220)] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase mb-5">
              Contato
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.50_0.05_220)] uppercase tracking-wider mb-0.5">Discord</p>
                <p className="font-['Exo_2'] text-sm text-[oklch(0.70_0.05_220)]">legacy.guild</p>
              </div>
              <div>
                <p className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.50_0.05_220)] uppercase tracking-wider mb-0.5">Recrutamento</p>
                <a
                  href="#recruit"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#recruit"); }}
                  className="font-['Exo_2'] text-sm text-[oklch(0.72_0.26_220)] hover:text-[oklch(0.92_0.10_210)] transition-colors duration-200"
                >
                  Formulário Online →
                </a>
              </div>
              <div>
                <p className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.50_0.05_220)] uppercase tracking-wider mb-0.5">Status</p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full bg-[oklch(0.72_0.26_220)]"
                    style={{ boxShadow: "0 0 6px oklch(0.72 0.26 220 / 0.8)" }}
                  />
                  <span className="font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)]">Recrutando</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 border-t border-[oklch(0.72_0.26_220/0.15)] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.40_0.04_220)] tracking-wider">
            © 2026 LEGACY GUILD — FREE FIRE. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.35_0.04_220)] tracking-wider">
            DESENVOLVIDO POR NVT
          </p>
        </div>
      </div>
    </footer>
  );
}
