'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-2xl font-black text-white">
            ÔMEGA <span className="text-red-500">DETAILER</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
          <Link href="/#servicos" className="hover:text-white transition-colors">Serviços</Link>
          <Link href="/#resultados" className="hover:text-white transition-colors">Resultados</Link>
          <Link href="/#depoimentos" className="hover:text-white transition-colors">Depoimentos</Link>
          <Link href="/#pacotes" className="hover:text-white transition-colors">Pacotes</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/#localizacao" className="hover:text-white transition-colors">Localização</Link>
        </nav>

        <a
          href="https://wa.me/5511974228653?text=Olá!%20Quero%20agendar%20um%20serviço."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm4.4 12c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-1.3-.6-2.1-1.1-3-2.5-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4 0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.2 1.7 2.5 4 3.5 1.5.6 2 .7 2.7.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3z"/>
          </svg>
          Agendar WhatsApp
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <Link href="/#servicos" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Serviços</Link>
          <Link href="/#resultados" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Resultados</Link>
          <Link href="/#depoimentos" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Depoimentos</Link>
          <Link href="/#pacotes" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Pacotes</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">Blog</Link>
          <a href="https://wa.me/5511974228653" target="_blank" rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold px-5 py-3 rounded-lg text-center">
            Agendar WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
