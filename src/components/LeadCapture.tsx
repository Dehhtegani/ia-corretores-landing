import React, { useState } from 'react'
import { Mail, Send, Check } from 'lucide-react'

export default function LeadCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    // Simular envio de API
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail('')
    }, 1200)
  }

  return (
    <section className="py-24 bg-zinc-950/40 relative border-t border-zinc-900" id="leads">
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        
        <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          
          {!submitted ? (
            <>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest bg-violet-950/40 border border-violet-800/30 px-3 py-1 rounded-full inline-block">
                  Amostra Grátis
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Receba 10 prompts gratuitos agora
                </h3>
                <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
                  Quer testar antes de comprar? Cadastre seu e-mail abaixo e receba imediatamente 10 prompts de alta conversão para começar a captar leads hoje.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto pt-2">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail corporativo" 
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 rounded-2xl pl-12 pr-6 py-4 text-sm md:text-base text-white placeholder-zinc-500 transition-all outline-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 font-bold py-4 rounded-2xl text-base transition-all duration-200 cursor-pointer"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Receber os Prompts Grátis</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-zinc-600 text-xs font-medium">
                Nós respeitamos sua privacidade. Zero spam. Cancelamento a qualquer momento.
              </p>
            </>
          ) : (
            <div className="py-6 space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">E-mail cadastrado com sucesso!</h4>
                <p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto">
                  Parabéns! Enviamos o arquivo PDF contendo os 10 prompts exclusivos diretamente para o seu e-mail. Verifique sua caixa de entrada e aba de promoções nos próximos 2 minutos.
                </p>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-violet-400 hover:text-violet-300 underline pt-2 focus:outline-none"
              >
                Cadastrar outro e-mail
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
