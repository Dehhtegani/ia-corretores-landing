import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react'

// Import components
import Hero from './components/Hero'
import Stats from './components/Stats'
import Showcase from './components/Showcase'
import Benefits from './components/Benefits'
import ContentModules from './components/ContentModules'
import Audience from './components/Audience'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Guarantee from './components/Guarantee'
import LeadCapture from './components/LeadCapture'
import Footer from './components/Footer'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1 }
    )
  })

  const navLinks = [
    { label: 'Estatísticas', href: '#leads' }, // direciona para seção leads/stats
    { label: 'Demonstração', href: '#demonstracao' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Conteúdo', href: '#conteudo' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans select-none antialiased">
      
      {/* Header / Navbar */}
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/75 backdrop-blur-md border-b border-zinc-900/80"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center group-hover:border-violet-500/60 transition-colors">
              <Sparkles className="w-5 h-5 text-violet-400" />
            </div>
            <span className="font-extrabold text-white tracking-tight text-base md:text-lg">
              IA PARA <span className="text-violet-400 group-hover:text-violet-300 transition-colors">CORRETORES</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-zinc-400">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#comprar" 
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              Adquirir Ebook
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-850 text-zinc-300 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 border-b border-zinc-900/90 py-6 px-6 space-y-4 absolute top-20 left-0 right-0 z-40 transition-all duration-300">
            <nav className="flex flex-col gap-4 text-base font-semibold text-zinc-400">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-white transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="h-px bg-zinc-900 my-4" />
            <a 
              href="#comprar" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold py-3.5 rounded-xl transition-colors duration-200"
            >
              Quero o Ebook por R$ 29,90
            </a>
          </div>
        )}
      </header>

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Sections */}
        <Hero />
        <Stats />
        <Showcase />
        <Benefits />
        <ContentModules />
        <Audience />
        <Testimonials />
        <Faq />
        <Guarantee />
        <LeadCapture />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}
