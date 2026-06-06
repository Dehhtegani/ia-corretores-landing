import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, Clock, Landmark, MessagesSquare } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!itemsRef.current) return

    gsap.fromTo(itemsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: itemsRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      }
    )
  }, { scope: containerRef })

  const statsData = [
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      value: "+240%",
      label: "Captação de leads qualificados"
    },
    {
      icon: <Clock className="w-5 h-5 text-violet-400" />,
      value: "-15h",
      label: "Gastas em copys e posts/semana"
    },
    {
      icon: <Landmark className="w-5 h-5 text-indigo-400" />,
      value: "R$ 0",
      label: "Com agências ou designers"
    },
    {
      icon: <MessagesSquare className="w-5 h-5 text-amber-400" />,
      value: "100%",
      label: "Atendimento no WhatsApp guiado"
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="py-12 bg-zinc-950 relative border-y border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={itemsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center p-6 text-center space-y-2 rounded-2xl bg-zinc-900/30 border border-zinc-800/40"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-zinc-500 font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
