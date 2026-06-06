import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Gift } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContentModules() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!gridRef.current) return

    gsap.fromTo(gridRef.current.children,
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, { scope: containerRef })

  const modules = [
    {
      num: "01",
      title: "Prospecção Ativa Automatizada",
      desc: "Como configurar as IAs para pesquisar leads no piloto automático, identificar oportunidades no mercado e criar listas qualificadas sem gastar fortunas.",
    },
    {
      num: "02",
      title: "Fábrica de Conteúdo para Redes",
      desc: "Gere posts, roteiros para vídeos (Reels, TikTok, YouTube), copys para feed e stories personalizados para o seu público imobiliário em minutos.",
    },
    {
      num: "03",
      title: "Análise de Mercado Inteligente",
      desc: "Aprenda a alimentar a IA com dados locais e obter análises instantâneas sobre valorização, tendências e precificação imbatíveis.",
    },
    {
      num: "04",
      title: "Automação de Atendimento & Chatbots",
      desc: "Configure assistentes virtuais baseados em IA que respondem aos leads no WhatsApp de forma natural, colhendo informações e agendando visitas.",
    },
    {
      num: "05",
      title: "Engenharia de Prompt Imobiliária",
      desc: "Aprenda a estrutura exata de um prompt perfeito. Obtenha respostas de altíssima qualidade sem respostas genéricas ou alucinações da IA.",
    },
    {
      num: "06",
      title: "Estratégia de Precificação",
      desc: "Como usar ferramentas analíticas gratuitas combinadas com IA para determinar o valor ideal de venda de um imóvel e convencer proprietários.",
    },
    {
      num: "07",
      title: "Arsenal de Ferramentas do Corretor",
      desc: "Uma curadoria completa das melhores ferramentas gratuitas e pagas de IA do mercado para otimizar imagens, criar descrições e organizar tarefas.",
    },
    {
      num: "08",
      title: "Bônus: 50 Prompts Prontos",
      desc: "Copie e cole prompts testados e aprovados para anúncios, emails de vendas, scripts de telefonemas e contornos de objeções comuns de clientes.",
      isBonus: true,
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-zinc-900/20 relative"
      id="conteudo"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            O que você vai <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">dominar</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Um cronograma prático estruturado do básico ao avançado para você aplicar no mesmo dia e ver resultados imediatos.
          </p>
        </div>

        {/* Modules Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-6"
        >
          {modules.map((m, idx) => (
            <div 
              key={idx}
              className={`p-6 md:p-8 rounded-3xl text-left border relative transition-all duration-300 ${
                m.isBonus 
                  ? 'bg-gradient-to-br from-emerald-950/40 to-zinc-900/60 border-emerald-500/20 shadow-[0_10px_30px_rgba(16,185,129,0.05)] hover:border-emerald-500/40' 
                  : 'bg-zinc-900/40 border-zinc-800/80 hover:border-violet-500/30'
              }`}
            >
              <div className="flex items-start gap-4">
                {m.isBonus ? (
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Gift className="w-6 h-6 text-emerald-400" />
                  </div>
                ) : (
                  <span className="text-xs font-mono font-bold text-violet-400 bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full shrink-0">
                    Capítulo {m.num}
                  </span>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    {m.title}
                    {m.isBonus && (
                      <span className="text-[10px] bg-emerald-500 text-zinc-950 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Bônus
                      </span>
                    )}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
