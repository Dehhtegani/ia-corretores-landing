import { ShieldCheck, Lock, Zap, ArrowRight } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="py-24 relative overflow-hidden" id="comprar">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Main Banner */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-emerald-950/20 border border-zinc-800/80 rounded-3xl p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-8 relative overflow-hidden">
          {/* Subtle glowing success line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-emerald-500 to-transparent" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-left md:items-start">
            <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <ShieldCheck className="w-10 h-10 text-emerald-400" />
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/30 px-3 py-1 rounded-full inline-block">
                Garantia Incondicional
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Risco Zero: Teste por 7 dias inteiros
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Adquira o ebook agora e leia todo o material. Se por qualquer motivo você achar que as estratégias, prompts e automações não servem para você, basta solicitar o reembolso na Hotmart dentro de 7 dias e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>

          <div className="h-px bg-zinc-800/80 my-8" />

          {/* Pricing and Button */}
          <div className="space-y-6 max-w-xl mx-auto">
            <div className="space-y-2">
              <p className="text-zinc-500 text-sm uppercase tracking-widest font-semibold">De R$ 97,00 por apenas</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg md:text-xl font-bold text-zinc-400 align-super">R$</span>
                <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">29,90</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold bg-zinc-800 border border-zinc-700/80 px-2 py-1 rounded-md ml-2 self-center">
                  Pagamento Único
                </span>
              </div>
            </div>

            <a 
              href="https://hotmart.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xl font-extrabold py-6 px-10 rounded-2xl transition-all duration-300 shadow-[0_0_35px_rgba(16,185,129,0.25)] hover:shadow-[0_0_50px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              QUERO TRANSFORMAR MINHA CARREIRA AGORA
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Badges footer */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-medium text-zinc-500">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-zinc-600" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-zinc-600" />
                <span>Acesso Imediato via E-mail</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              <span>Garantia Assegurada Hotmart</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
