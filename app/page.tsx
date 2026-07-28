export default function Page() {
  // TODO: trocar pelo link real do grupo do Rayo quando o Natan mandar
  const grupoLink = "https://t.me/+PLACEHOLDER";

  return (
    <main className="min-h-screen w-full flex flex-col hero-bg">
      <div className="flex-1 w-full flex flex-col hero-overlay">
        {/* Conteúdo centralizado */}
        <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center px-6 py-12">
          {/* Chip topo */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/15 border border-brand-neon/50 text-brand-neon text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-6">
            Grupo grátis
          </div>

          {/* Headline */}
          <h1
            className="leading-[0.85] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-anton), Anton, Impact, sans-serif" }}
          >
            <span className="block text-5xl sm:text-7xl md:text-8xl text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Cola no grupo do
            </span>
            <span className="block text-7xl sm:text-8xl md:text-9xl text-brand-neon uppercase drop-shadow-[0_2px_20px_rgba(192,255,0,0.55)]">
              Vitor ZZ 🎯
            </span>
          </h1>

          {/* Sub */}
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium max-w-xl leading-snug mb-8">
            Análise <span className="text-brand-neon font-bold">diária</span>,
            bilhete todo dia e comunidade forte que respira futebol.
          </p>

          {/* CTA */}
          <a
            href={grupoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shine pulse-cta group w-full max-w-md inline-flex items-center justify-center gap-2 py-5 px-6 rounded-full bg-brand-neon text-black font-black text-lg sm:text-xl uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition"
          >
            <span>Quero entrar agora</span>
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>

          {/* Micro texto abaixo do CTA */}
          <p className="text-[11px] sm:text-xs text-white/60 mt-4 max-w-md">
            Grupo gratuito, sem cadastro.
          </p>
        </div>

        {/* Rodapé compliance */}
        <footer className="w-full bg-black/90 border-t border-brand-neon/20 px-6 py-6">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start gap-3">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/40 text-white/70 text-[10px] font-black">
              +18
            </div>
            <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed text-center sm:text-left">
              Conteúdo destinado a maiores de 18 anos. Aposta com responsabilidade.
              Apostas são uma forma de entretenimento e envolvem risco. Aposte apenas
              o valor que você está disposto a perder. Resultados passados não
              garantem resultados futuros. Este conteúdo não promete ganhos ou
              retornos. Ministério da Fazenda adverte: aposta não é investimento.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
