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

const requirements = [
  { label: "Nível mínimo", value: "50+" },
  { label: "Rank mínimo", value: "Platina" },
  { label: "K/D mínimo", value: "2.0+" },
  { label: "Idade mínima", value: "15 anos" },
  { label: "Discord", value: "Obrigatório" },
  { label: "Atividade", value: "3x/semana" },
];

export default function RecruitSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    id: "",
    rank: "",
    kd: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.id || !form.rank) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    setSubmitted(true);
    toast.success("Candidatura enviada! Entraremos em contato em breve.");
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
          <h2 className="font-['Orbitron'] font-black text-4xl md:text-5xl text-white mb-4">
            Entre para a{" "}
            <span
              className="text-[oklch(0.78_0.28_210)]"
              style={{ textShadow: "0 0 20px oklch(0.72 0.26 220 / 0.5)" }}
            >
              Legacy
            </span>
          </h2>
          <p className="font-['Exo_2'] text-base text-[oklch(0.65_0.05_220)] max-w-xl mx-auto">
            Você tem o que é preciso para fazer parte da elite? Candidate-se agora e mostre seu valor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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

                {/* ID */}
                <div>
                  <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                    ID do Jogador *
                  </label>
                  <div className="relative">
                    <Hash size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.55_0.08_220)]" />
                    <input
                      type="text"
                      name="id"
                      value={form.id}
                      onChange={handleChange}
                      placeholder="Ex: 123456789"
                      className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] placeholder-[oklch(0.40_0.04_220)] font-['Exo_2'] text-sm py-2.5 pl-9 pr-3 rounded-sm transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Rank + KD */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                  <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                    Patente Atual *
                  </label>
                    <div className="relative">
                      <Gamepad2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(0.55_0.08_220)]" />
                      <select
                        name="rank"
                        value={form.rank}
                        onChange={handleChange}
                        className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] font-['Exo_2'] text-sm py-2.5 pl-9 pr-3 rounded-sm transition-colors duration-200 appearance-none"
                      >
                        <option value="" className="bg-[oklch(0.08_0.02_240)]">Selecione</option>
                        <option value="bronze" className="bg-[oklch(0.08_0.02_240)]">Bronze</option>
                        <option value="prata" className="bg-[oklch(0.08_0.02_240)]">Prata</option>
                        <option value="ouro" className="bg-[oklch(0.08_0.02_240)]">Ouro</option>
                        <option value="platina" className="bg-[oklch(0.08_0.02_240)]">Platina</option>
                        <option value="diamante" className="bg-[oklch(0.08_0.02_240)]">Diamante</option>
                        <option value="mestre" className="bg-[oklch(0.08_0.02_240)]">Mestre</option>
                        <option value="elite" className="bg-[oklch(0.08_0.02_240)]">Elite</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                      K/D Ratio
                    </label>
                    <input
                      type="number"
                      name="kd"
                      value={form.kd}
                      onChange={handleChange}
                      placeholder="Ex: 3.5"
                      step="0.1"
                      min="0"
                      className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] placeholder-[oklch(0.40_0.04_220)] font-['Exo_2'] text-sm py-2.5 px-3 rounded-sm transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-['Exo_2'] text-xs text-[oklch(0.60_0.06_220)] uppercase tracking-wider mb-1.5 block">
                    Por que quer entrar na Legacy?
                  </label>
                  <div className="relative">
                    <MessageSquare size={14} className="absolute left-3 top-3 text-[oklch(0.55_0.08_220)]" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Fale sobre você e sua motivação..."
                      rows={3}
                      className="w-full bg-[oklch(0.08_0.02_240)] border border-[oklch(0.72_0.26_220/0.25)] focus:border-[oklch(0.72_0.26_220/0.7)] focus:outline-none text-[oklch(0.85_0.04_220)] placeholder-[oklch(0.40_0.04_220)] font-['Exo_2'] text-sm py-2.5 pl-9 pr-3 rounded-sm transition-colors duration-200 resize-none"
                    />
                  </div>
                </div>

                <button type="submit" className="neon-btn-filled w-full flex items-center justify-center gap-2 mt-2">
                  <Send size={14} />
                  Enviar Candidatura
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
