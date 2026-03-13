/* =============================================================
   LEGACY GUILD — RecruitSection
   Design: Neon Abyss | Recruitment form with neon styling
   ============================================================= */
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, CheckCircle, User, Hash, Gamepad2, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const requirements = [
  { label: "Nível mínimo", value: "+40" },
  { label: "Ser ativo", value: "Essencial" },
  { label: "Idade mínima", value: "+13 anos" },
  { label: "Call limpa", value: "Obrigatório" },
  { label: "Noção de jogo", value: "Necessária" },
  { label: "WhatsApp", value: "Obrigatório" },
];

export default function RecruitSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    discord: "",
    whatsapp: "",
    level: "",
    rank: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitApplicationMutation = trpc.applications.submit.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.discord || !form.whatsapp || !form.level || !form.rank) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);
    try {
      const levelNum = parseInt(form.level, 10);
      if (isNaN(levelNum) || levelNum < 40) {
        toast.error("Level deve ser no mínimo 40.");
        setIsLoading(false);
        return;
      }

      await submitApplicationMutation.mutateAsync({
        name: form.name,
        discord: form.discord,
        whatsapp: form.whatsapp,
        level: levelNum,
        rank: form.rank,
      });

      setSubmitted(true);
      setForm({ name: "", discord: "", whatsapp: "", level: "", rank: "" });
      toast.success("Candidatura enviada! Entraremos em contato em breve.");
    } catch (error) {
      toast.error("Erro ao enviar candidatura. Tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="recruit"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, oklch(0.04 0.02 240) 0%, oklch(0.07 0.025 240) 50%, oklch(0.04 0.02 240) 100%)"
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, oklch(0.72 0.26 220 / 0.08) 0%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />

      <div className="relative z-10 container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
            <span className="font-['Share_Tech_Mono'] text-xs text-[oklch(0.72_0.26_220)] tracking-widest uppercase">
              Faça Parte
            </span>
            <div className="h-px w-12 bg-[oklch(0.72_0.26_220/0.5)]" />
          </div>
          <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white mb-4 tracking-wider">
            Recrutamento
          </h2>
          <p className="font-['Exo_2'] text-[oklch(0.65_0.05_220)] max-w-2xl mx-auto">
            Junte-se à Legacy e faça parte de uma guilda de elite. Avaliamos seu potencial e comprometimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-['Orbitron'] font-bold text-lg text-white mb-6 tracking-wide">
              Requisitos Mínimos
            </h3>
            <div className="space-y-3 mb-8">
              {requirements.map((req, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 px-4 border-b border-[oklch(0.72_0.26_220/0.15)] group hover:border-[oklch(0.72_0.26_220/0.4)] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[oklch(0.72_0.26_220)]" />
                    <span className="font-['Exo_2'] text-sm text-[oklch(0.70_0.05_220)]">{req.label}</span>
                  </div>
                  <span
                    className="font-['Share_Tech_Mono'] text-sm font-bold text-[oklch(0.78_0.28_210)]"
                    style={{ textShadow: "0 0 8px oklch(0.72 0.26 220 / 0.4)" }}
                  >
                    {req.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="glass-card neon-border rounded-sm p-5">
              <p className="font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)] leading-relaxed">
                <strong className="text-[oklch(0.78_0.28_210)]">Processo seletivo:</strong> Após o envio da candidatura, nossa liderança analisará seu perfil. Candidatos aprovados serão convidados para uma partida de avaliação. O resultado será comunicado em até 72 horas.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="glass-card neon-border rounded-sm p-10 text-center neon-pulse">
                <CheckCircle
                  size={48}
                  className="text-[oklch(0.72_0.26_220)] mx-auto mb-4"
                  style={{ filter: "drop-shadow(0 0 12px oklch(0.72 0.26 220 / 0.6))" }}
                />
                <h3 className="font-['Orbitron'] font-bold text-xl text-white mb-2 tracking-wide">
                  Candidatura Enviada!
                </h3>
                <p className="font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)]">
                  Nossa liderança analisará seu perfil e entrará em contato em breve. Boa sorte, soldado!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card neon-border rounded-sm p-6 space-y-4">
                <h3 className="font-['Orbitron'] font-bold text-base text-white tracking-wide mb-5">
                  Formulário de Candidatura
                </h3>

                {/* Name */}
                <div>
                  <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                    Nick no Jogo *
                  </label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.55_0.08_220)]" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nick no Free Fire"
                      className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] placeholder-[oklch(0.40_0.04_220)] font-['Exo_2'] text-sm py-2.5 pl-9 pr-3 rounded-sm transition-colors duration-200"
                      style={{ boxShadow: "inset 0 0 0 0 transparent" }}
                    />
                  </div>
                </div>

                {/* Discord */}
                <div>
                  <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                    Discord *
                  </label>
                  <div className="relative">
                    <MessageSquare size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.55_0.08_220)]" />
                    <input
                      type="text"
                      name="discord"
                      value={form.discord}
                      onChange={handleChange}
                      placeholder="Seu Discord (ex: User#1234)"
                      className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] placeholder-[oklch(0.40_0.04_220)] font-['Exo_2'] text-sm py-2.5 pl-9 pr-3 rounded-sm transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                    WhatsApp *
                  </label>
                  <div className="relative">
                    <Hash size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.55_0.08_220)]" />
                    <input
                      type="text"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="Ex: +55 11 99999-9999"
                      className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] placeholder-[oklch(0.40_0.04_220)] font-['Exo_2'] text-sm py-2.5 pl-9 pr-3 rounded-sm transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Level + Rank */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                      Level *
                    </label>
                    <div className="relative">
                      <Gamepad2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.55_0.08_220)]" />
                      <input
                        type="number"
                        name="level"
                        value={form.level}
                        onChange={handleChange}
                        placeholder="40+"
                        min="40"
                        className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] placeholder-[oklch(0.40_0.04_220)] font-['Exo_2'] text-sm py-2.5 pl-9 pr-3 rounded-sm transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                      Patente *
                    </label>
                    <select
                      name="rank"
                      value={form.rank}
                      onChange={handleChange}
                      className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] font-['Exo_2'] text-sm py-2.5 px-3 rounded-sm transition-colors duration-200"
                    >
                      <option value="">Selecione...</option>
                      <option value="Bronze">Bronze</option>
                      <option value="Prata">Prata</option>
                      <option value="Ouro">Ouro</option>
                      <option value="Platina">Platina</option>
                      <option value="Diamante">Diamante</option>
                      <option value="Mestre">Mestre</option>
                      <option value="Elite">Elite</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full neon-btn-filled text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {isLoading ? "Enviando..." : "Enviar Candidatura"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
