import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!gridRef.current) return

    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, { scope: containerRef })

  const testimonials = [
    {
      stars: 5,
      text: "Em apenas 2 dias após ler o ebook, já estava configurando as ferramentas para criar anúncios automáticos de imóveis de luxo. Os resultados foram imediatos, nunca captei leads tão qualificados por um custo tão baixo!",
      author: "Carlos M.",
      role: "Corretor de Imóveis • CRECI-SP",
      avatarBg: "from-violet-500 to-indigo-500",
      initials: "CM"
    },
    {
      stars: 5,
      text: "Eu achava que inteligência artificial era apenas para programadores ou muito complexa de usar. O ebook é incrivelmente prático, direto ao ponto e cheio de exemplos de prompts prontos. Valeu cada centavo investido.",
      author: "Juliana R.",
      role: "Corretora Autônoma • CRECI-RJ",
      avatarBg: "from-emerald-400 to-teal-500",
      initials: "JR"
    },
    {
      stars: 5,
      text: "Comprei o ebook e distribuí as estratégias de prospecção com IA para toda a minha equipe de corretores. Resultado: alcançamos 40% mais leads e otimizamos 60% do tempo gasto em redação em 30 dias.",
      author: "Eduardo S.",
      role: "Diretor • Imobiliária Nova Casa",
      avatarBg: "from-amber-400 to-orange-500",
      initials: "ES"
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-zinc-900/10 relative overflow-hidden"
      id="depoimentos"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Resultados de quem <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">já está aplicando</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Veja o depoimento de profissionais do mercado imobiliário que transformaram sua rotina e fecharam novos negócios nas últimas semanas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-3xl text-left flex flex-col justify-between relative group hover:border-zinc-700/60 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-zinc-800/40 pointer-events-none group-hover:text-violet-500/10 transition-colors duration-300" />
              
              <div className="space-y-6 relative z-10">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 flex items-center gap-4 border-t border-zinc-800/80 pt-6 relative z-10">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center font-bold text-zinc-950 text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{t.author}</h4>
                  <p className="text-zinc-500 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
