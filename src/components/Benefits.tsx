import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bot, TrendingUp, Handshake } from 'lucide-react'

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!cardsRef.current) return

    gsap.fromTo(cardsRef.current.children,
      { opacity: 0, y: 100, rotateX: 10 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, { scope: containerRef })

  const benefitsList = [
    {
      icon: <Bot className="w-8 h-8 text-violet-400" />,
      title: "Leads Qualificados",
      desc: "Prompts altamente refinados para gerar dezenas de leads qualificados diariamente utilizando ChatGPT, Gemini e Claude. Esqueça listas frias.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      title: "Anúncios que Convertem",
      desc: "Crie campanhas irresistíveis no Instagram, Facebook e Google. Escreva copys persuasivas focadas no mercado imobiliário em segundos.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-amber-400" />,
      title: "Fechamento Rápido",
      desc: "Scripts de venda integrados a gatilhos mentais fortes. Conduza conversas no WhatsApp com o auxílio do chatbot de forma humanizada e ágil.",
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-zinc-950/40 relative overflow-hidden"
      id="beneficios"
    >
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Por que este ebook vai <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">mudar seu jogo</span>?
          </h2>
          <p className="text-zinc-400 text-lg">
            O mercado imobiliário mudou. Os corretores que dominam a inteligência artificial estão fechando negócios enquanto outros ainda digitam copys à mão.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefitsList.map((b, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl text-left flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center transition-all duration-300 group-hover:border-violet-500/30">
                  {b.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {b.desc}
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
