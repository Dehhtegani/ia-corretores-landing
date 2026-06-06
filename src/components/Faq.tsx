import { useState, useRef } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="border-b border-zinc-800 py-4 first:pt-0 last:border-0 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-4 focus:outline-none group"
      >
        <span className="text-base md:text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-violet-400' : ''
          }`} 
        />
      </button>
      
      <div 
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px'
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed pb-4 pr-6">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function Faq() {
  const faqs = [
    {
      question: "É realmente para iniciantes em tecnologia?",
      answer: "Sim! O ebook foi planejado exatamente para quem nunca utilizou inteligência artificial ou ferramentas automatizadas. Começamos do absoluto zero, ensinando desde a criação de contas gratuitas até a cópia e colagem de prompts prontos."
    },
    {
      question: "Serei obrigado a pagar por ferramentas de IA?",
      answer: "Absolutamente não. Ensinamos como tirar o máximo de proveito das versões totalmente gratuitas do ChatGPT, Claude, Gemini e outras ferramentas adicionais de prospecção e edição. Você escolhe se e quando quer assinar uma ferramenta paga."
    },
    {
      question: "Em quanto tempo consigo ver os primeiros resultados?",
      answer: "A maioria dos corretores de imóveis que aplica o primeiro capítulo já consegue gerar copys de anúncios e qualificar listas na primeira hora de estudo. Se você seguir o passo a passo, verá aumento na captação de leads em até 7 dias."
    },
    {
      question: "Como funciona a entrega do ebook?",
      answer: "O envio é 100% digital e imediato. Logo após a confirmação do pagamento pela Hotmart, você receberá um e-mail com as credenciais de acesso para baixar o material e ler onde e quando quiser, em qualquer dispositivo."
    },
    {
      question: "Tenho direito a atualizações do material?",
      answer: "Sim. A tecnologia avança rapidamente, por isso atualizamos o ebook periodicamente com novos prompts e ferramentas. Ao adquirir hoje, você terá acesso vitalício e receberá todas as atualizações futuras sem pagar nada a mais."
    }
  ]

  return (
    <section className="py-24 bg-zinc-950/20 relative" id="faq">
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 items-center justify-center mb-2">
            <HelpCircle className="w-6 h-6 text-violet-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Perguntas <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Esclareça suas principais dúvidas sobre o conteúdo, formato de entrega e suporte do material.
          </p>
        </div>

        {/* Faq List */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl text-left shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
          <div className="space-y-2">
            {faqs.map((f, idx) => (
              <FaqItem key={idx} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
