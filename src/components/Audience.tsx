import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { User, Building2, Zap, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Audience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!itemsRef.current) return

    gsap.fromTo(itemsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: itemsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, { scope: containerRef })

  const targets = [
    {
      icon: <User className="w-6 h-6 text-violet-400" />,
      title: "Corretores Autônomos",
      desc: "Querem se destacar no mercado local, prospectar mais rápido e não depender apenas de indicações ou plantões de vendas tradicionais."
    },
    {
      icon: <Building2 className="w-6 h-6 text-indigo-400" />,
      title: "Líderes de Imobiliárias",
      desc: "Buscam otimizar a eficiência de suas equipes de vendas e marketing, estabelecendo fluxos modernos baseados em tecnologias inovadoras."
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: "Iniciantes em Tecnologia",
      desc: "Nunca trabalharam com inteligência artificial antes, mas querem um passo a passo prático, direto ao ponto e sem termos técnicos difíceis."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Corretores de Alta Performance",
      desc: "Profissionais experientes que já faturam alto, mas desejam automatizar o trabalho repetitivo para focar exclusivamente no fechamento presencial."
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-zinc-950/20 relative"
      id="para-quem"
    >
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Para quem é <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">este ebook</span>?
          </h2>
          <p className="text-zinc-400 text-lg">
            Não importa o seu nível atual de experiência ou tecnologia. Se você vende imóveis, a IA vai acelerar sua carreira.
          </p>
        </div>

        {/* Audience Grid */}
        <div 
          ref={itemsRef}
          className="grid md:grid-cols-2 gap-6"
        >
          {targets.map((t, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl text-left flex gap-6 items-start hover:border-zinc-700/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                {t.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {t.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
