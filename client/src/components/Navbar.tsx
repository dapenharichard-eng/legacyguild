/* =============================================================
   LEGACY GUILD — Navbar
   Design: Neon Abyss | Sticky top nav with neon accents
   ============================================================= */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Membros", href: "#members" },
  { label: "Conquistas", href: "#achievements" },
  { label: "Regras", href: "#rules" },
  { label: "Recrutamento", href: "#recruit" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.06_0.02_240/0.95)] backdrop-blur-md border-b border-[oklch(0.72_0.26_220/0.3)] shadow-[0_4px_30px_oklch(0.72_0.26_220/0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Shield
                size={28}
                className="text-[oklch(0.72_0.26_220)] drop-shadow-[0_0_8px_oklch(0.72_0.26_220/0.8)] group-hover:drop-shadow-[0_0_16px_oklch(0.72_0.26_220)] transition-all duration-300"
              />
            </div>
            <span
              className="font-['Orbitron'] font-black text-xl tracking-widest text-[oklch(0.78_0.28_210)] group-hover:text-[oklch(0.92_0.10_210)] transition-colors duration-300"
              style={{
                textShadow: "0 0 10px oklch(0.78 0.28 210 / 0.6), 0 0 30px oklch(0.60 0.22 240 / 0.3)"
              }}
            >
              LEGACY
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-['Exo_2'] text-sm font-medium tracking-wider text-[oklch(0.70_0.06_220)] hover:text-[oklch(0.78_0.28_210)] transition-colors duration-200 relative group uppercase"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[oklch(0.72_0.26_220)] group-hover:w-full transition-all duration-300 shadow-[0_0_6px_oklch(0.72_0.26_220)]" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#recruit"
            onClick={(e) => { e.preventDefault(); handleNavClick("#recruit"); }}
            className="hidden md:block neon-btn-filled text-xs"
          >
            Entrar na Guilda
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[oklch(0.72_0.26_220)] hover:text-[oklch(0.92_0.10_210)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[oklch(0.06_0.02_240/0.98)] backdrop-blur-md border-b border-[oklch(0.72_0.26_220/0.3)]"
          >
            <ul className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="block py-3 px-4 font-['Exo_2'] text-sm font-medium tracking-wider text-[oklch(0.70_0.06_220)] hover:text-[oklch(0.78_0.28_210)] hover:bg-[oklch(0.72_0.26_220/0.08)] transition-all duration-200 uppercase border-l-2 border-transparent hover:border-[oklch(0.72_0.26_220)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#recruit"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#recruit"); }}
                  className="block neon-btn-filled text-center text-xs"
                >
                  Entrar na Guilda
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
