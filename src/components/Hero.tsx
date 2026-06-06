import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Sparkles, ArrowRight, BookOpen, Star, ShieldAlert } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const bookContainerRef = useRef<HTMLDivElement>(null)
  const bookRef = useRef<HTMLDivElement>(null)
  const orbe1Ref = useRef<HTMLDivElement>(null)
  const orbe2Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // 1. Animações de Entrada (On Load)
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    
    tl.fromTo(badgeRef.current, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
    )
    .fromTo(titleRef.current?.childNodes || [], 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, 
      '-=0.5'
    )
    .fromTo(ctaRef.current, 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.6 }, 
      '-=0.4'
    )
    .fromTo(bookContainerRef.current, 
      { opacity: 0, scale: 0.85, rotateY: -30 }, 
      { opacity: 1, scale: 1, rotateY: 0, duration: 1.2 }, 
      '-=0.6'
    )

    // 2. Animação de Flutuação Contínua do Ebook
    gsap.to(bookRef.current, {
      y: -18,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // 3. Movimentação Contínua e Suave dos Orbes de Fundo
    gsap.to(orbe1Ref.current, {
      x: '+=50',
      y: '-=30',
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to(orbe2Ref.current, {
      x: '-=40',
      y: '+=60',
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }, { scope: containerRef })

  // 4. Interação de Rotação 3D com o Mouse (Efeito Holográfico)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bookRef.current) return
    const card = bookRef.current
    const rect = card.getBoundingClientRect()
    
    // Obter posição relativa do cursor no centro do elemento
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Calcular inclinação (máximo 18 graus)
    const rotateX = -(y / (rect.height / 2)) * 18
    const rotateY = (x / (rect.width / 2)) * 18

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto'
    })
  }

  const handleMouseLeave = () => {
    if (!bookRef.current) return
    // Retornar suavemente à inclinação neutra
    gsap.to(bookRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'power3.out',
      overwrite: 'auto'
    })
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Animated Lights (Orbes) */}
      <div 
        ref={orbe1Ref}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" 
      />
      <div 
        ref={orbe2Ref}
        className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm font-semibold text-zinc-300"
          >
            <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
            <span>O Ebook Mais Vendido do Mercado Imobiliário em 2026</span>
          </div>

          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.08]"
          >
            <span className="block text-zinc-400 font-medium text-2xl md:text-3xl mb-2">
              Transforme seu celular em uma
            </span>
            <span>Máquina de Vendas </span>
            <span className="block mt-2 bg-gradient-to-r from-violet-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Com o Ebook de IA para Corretores
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-xl font-normal leading-relaxed">
            Tenha em mãos o guia definitivo com mais de 120 páginas e 50 prompts exclusivos e prontos. Descubra como usar as ferramentas certas de IA para qualificar leads, criar campanhas e fechar negócios no WhatsApp 3x mais rápido.
          </p>

          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4"
          >
            <a 
              href="#comprar" 
              className="group relative flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-lg px-8 py-5 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Comprar Ebook Original R$ 29,90
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center justify-center gap-4 bg-zinc-900/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-800/80">
              <div className="text-left">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Acesso</span>
                <span className="text-sm font-extrabold text-emerald-400 block mt-0.5">VITALÍCIO</span>
              </div>
            </div>
          </div>

          {/* Alert of urgency */}
          <div className="flex items-center gap-3 bg-violet-950/20 border border-violet-850/40 p-4 rounded-2xl max-w-xl">
            <ShieldAlert className="w-5 h-5 text-violet-400 shrink-0" />
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              <strong>Garantia de Atualização:</strong> Este ebook é atualizado constantemente com as novas versões do ChatGPT e ferramentas. Compre uma vez e receba as atualizações gratuitamente para sempre.
            </p>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-zinc-900">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-sm font-semibold text-zinc-300 ml-1">5.0 de Satisfação</span>
            </div>
            <div className="h-4 w-px bg-zinc-800" />
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-zinc-400 font-medium">Formato Digital Interativo (PDF e EPUB)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Ebook 3D Hover Interactive Mockup */}
        <div 
          ref={bookContainerRef}
          className="lg:col-span-5 flex justify-center relative perspective-[1200px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Ebook Graphic Layout */}
          <div 
            ref={bookRef}
            className="relative group w-[280px] md:w-[325px] aspect-[3/4.2] bg-zinc-900 rounded-3xl border border-zinc-800/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_40px_85px_-10px_rgba(139,92,246,0.25)] select-none cursor-pointer transform-style-3d"
          >
            {/* The generated high fidelity ebook image */}
            <img 
              src="/ebook.png" 
              alt="Ebook IA para Corretores" 
              className="w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Glowing Accent Border lines */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-violet-500/20 transition-colors duration-300" />
            
            {/* Glossy sheen overlay reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            
            {/* Holographic light highlight */}
            <div className="absolute -inset-10 bg-gradient-to-r from-violet-500/10 via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Interactive instruction tooltip */}
          <div className="absolute -bottom-10 backdrop-blur-md bg-zinc-950/60 border border-zinc-900 text-[10px] py-1.5 px-3 rounded-full text-zinc-500 font-semibold select-none flex items-center gap-1.5 pointer-events-none animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Passe o mouse para rotacionar em 3D
          </div>

          {/* Massive background glow behind the ebook */}
          <div className="absolute -z-10 bottom-6 right-6 w-[280px] h-[280px] bg-violet-600/15 blur-[100px] rounded-full pointer-events-none animate-pulse" />
        </div>

      </div>
    </section>
  )
}
