

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo and Brand */}
        <div className="text-center md:text-left space-y-1">
          <span className="font-extrabold text-white tracking-tight text-lg">
            IA PARA <span className="text-violet-400">CORRETORES</span>
          </span>
          <p className="text-xs text-zinc-500 font-medium">
            Elevando o nível das vendas imobiliárias através da Inteligência Artificial.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400 font-medium">
          <a href="#beneficios" className="hover:text-white transition-colors duration-200">Benefícios</a>
          <a href="#conteudo" className="hover:text-white transition-colors duration-200">Conteúdo</a>
          <a href="#para-quem" className="hover:text-white transition-colors duration-200">Para Quem É</a>
          <a href="#depoimentos" className="hover:text-white transition-colors duration-200">Depoimentos</a>
          <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
        </nav>

        {/* Copyright info */}
        <div className="text-center md:text-right text-xs text-zinc-500 font-medium space-y-1">
          <p>© {currentYear} IA para Corretores de Imóveis. Todos os direitos reservados.</p>
          <p className="text-[10px] text-zinc-600 font-normal">
            Este site não faz parte do Facebook, Google ou Hotmart. Os resultados variam de acordo com o trabalho e aplicação individual.
          </p>
        </div>

      </div>
    </footer>
  )
}
