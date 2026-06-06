import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bot, Terminal, Send, CheckCircle2, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageAreaRef = useRef<HTMLDivElement>(null)
  const consoleRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Entrada com ScrollTrigger
    gsap.fromTo(imageAreaRef.current,
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }
      }
    )

    gsap.fromTo(consoleRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-zinc-950 relative overflow-hidden"
      id="demonstracao"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full inline-block">
            Aplicação em Tempo Real
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Como funciona na <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">vida real</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Veja como o Ebook capacita você a usar a Inteligência Artificial para captar, criar anúncios e fechar vendas de imóveis de luxo de forma totalmente automática.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Collage of Agent and Smart Mansion */}
          <div 
            ref={imageAreaRef}
            className="lg:col-span-6 relative h-[380px] md:h-[480px] flex items-center justify-center"
          >
            {/* Background Mansion Image */}
            <div className="absolute left-0 top-0 w-[70%] aspect-[4/3] bg-zinc-900 border border-zinc-800/80 rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] z-10 group">
              <img 
                src="/home.png" 
                alt="Mansão de luxo moderna" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>

            {/* Overlapping Agent Image */}
            <div className="absolute right-0 bottom-0 w-[55%] aspect-[3/4.2] bg-zinc-900 border border-zinc-850/80 rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.7)] z-20 group">
              <img 
                src="/agent.png" 
                alt="Corretor de alta performance" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/70 backdrop-blur-md border border-zinc-800/80 p-3 rounded-xl text-left">
                <span className="block text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Qualificação</span>
                <p className="text-[11px] text-zinc-300 font-semibold mt-0.5 leading-tight">
                  Lead captado e pronto para agendamento via chatbot
                </p>
              </div>
            </div>

            {/* Interactive tag */}
            <div className="absolute left-[35%] top-[40%] backdrop-blur-md bg-zinc-950/80 border border-zinc-800 text-[10px] py-1.5 px-3 rounded-full text-zinc-300 font-bold z-30 flex items-center gap-1.5 shadow-lg pointer-events-none">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              IA + CORRETOR = CONTRATO FECHADO
            </div>
          </div>

          {/* Right: Simulated Prompt Console */}
          <div 
            ref={consoleRef}
            className="lg:col-span-6 text-left"
          >
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Console Header */}
              <div className="bg-zinc-950 border-b border-zinc-850 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-violet-400" />
                  <span className="font-mono text-xs font-bold text-zinc-400">terminal_prompt_engineering</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 md:p-8 space-y-6 font-mono text-xs md:text-sm">
                
                {/* Section 1: Command */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Send className="w-3.5 h-3.5" />
                    <span>ENTRADA DE COMANDO (PROMPT DO EBOOK)</span>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-850 p-4 rounded-xl text-violet-300 font-medium leading-relaxed">
                    /gerar_anuncio --imovel "casa inteligente de luxo" --objetivo "atrair investidores" --tom "sofisticado e exclusivo"
                  </div>
                </div>

                {/* Section 2: AI Process */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Bot className="w-3.5 h-3.5" />
                    <span>PROCESSAMENTO IA (0.8s)</span>
                  </div>
                  
                  <div className="bg-zinc-950 border border-zinc-850 p-5 rounded-xl space-y-4 leading-relaxed text-zinc-300">
                    <div>
                      <span className="text-emerald-400 font-bold block mb-1">✍️ Título do Anúncio (Instagram):</span>
                      "Onde o Luxo Encontra o Futuro da Arquitetura."
                    </div>
                    
                    <div>
                      <span className="text-emerald-400 font-bold block mb-1">📝 Copy do Post:</span>
                      "Mais que uma mansão, um investimento inteligente em automação e conforto supremo. Localizada no condomínio mais exclusivo da cidade, esta propriedade combina design atemporal e inteligência residencial por voz. Retorno de investimento projetado..."
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>GERADO COM SUCESSO. PRONTO PARA COPIAR E COLAR.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action buttons footer */}
              <div className="bg-zinc-950/80 border-t border-zinc-850 p-4 flex flex-wrap gap-2 justify-center">
                <button className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-[10px] md:text-xs font-bold text-zinc-400 py-2 px-3 rounded-lg hover:text-white transition-colors duration-200">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  Gerar Anúncio Facebook
                </button>
                <button className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-[10px] md:text-xs font-bold text-zinc-400 py-2 px-3 rounded-lg hover:text-white transition-colors duration-200">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  Gerar Script WhatsApp
                </button>
                <button className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-[10px] md:text-xs font-bold text-zinc-400 py-2 px-3 rounded-lg hover:text-white transition-colors duration-200">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  Criar E-mail de Vendas
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
