import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Blog | Dicas de Estética Automotiva',
  description: 'Dicas, tutoriais e informações sobre cuidados com o seu veículo. Polimento, vitrificação, higienização e muito mais. Blog da Ômega Detailer em Itaquera, SP.',
  alternates: { canonical: 'https://omegadetailer.com.br/blog' },
}

export const artigos = [
  {
    slug: 'quanto-tempo-lavar-carro',
    titulo: 'Quanto Tempo Leva para Lavar o Carro Corretamente?',
    resumo: 'Uma pergunta que recebemos com frequência. A resposta depende do nível de limpeza desejado e do estado do veículo.',
    data: '2025-06-01',
    categoria: 'Dicas',
    tempoLeitura: '4 min',
  },
  {
    slug: 'vitrificacao-vs-enceramento',
    titulo: 'Vitrificação ou Enceramento? Qual Escolher para seu Carro?',
    resumo: 'Entenda as diferenças, custos e quando vale a pena investir em cada tipo de proteção para a pintura.',
    data: '2025-05-20',
    categoria: 'Comparativo',
    tempoLeitura: '6 min',
  },
  {
    slug: 'higienizacao-motorista-app',
    titulo: 'Por que Motoristas de App Devem Higienizar o Carro Todo Mês',
    resumo: 'Passageiros avaliam a limpeza do veículo. Veja como a higienização mensal pode aumentar sua nota no app.',
    data: '2025-05-10',
    categoria: 'Para Motoristas',
    tempoLeitura: '5 min',
  },
  {
    slug: 'como-tirar-risco-carro',
    titulo: 'Como Tirar Risco do Carro? Polimento é a Solução',
    resumo: 'Riscos superficiais podem ser removidos com polimento técnico. Veja quando o polimento resolve e quando não resolve.',
    data: '2025-04-28',
    categoria: 'Serviços',
    tempoLeitura: '5 min',
  },
  {
    slug: 'cuidados-pintura-carro-novo',
    titulo: 'Cuidados Essenciais com a Pintura de um Carro Novo',
    resumo: 'Os primeiros 6 meses são cruciais para proteger a pintura original. Veja o que fazer e o que evitar.',
    data: '2025-04-15',
    categoria: 'Dicas',
    tempoLeitura: '7 min',
  },
  {
    slug: 'ozonio-carro-funciona',
    titulo: 'Ozonização no Carro: o que é e como Funciona?',
    resumo: 'O tratamento com ozônio elimina bactérias, vírus e odores. Entenda o processo e seus benefícios.',
    data: '2025-04-05',
    categoria: 'Serviços',
    tempoLeitura: '4 min',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-gradient-to-b from-black to-gray-950 py-20 px-4 text-center">
          <span className="section-tag">Conhecimento gratuito</span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6">BLOG</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Dicas, comparativos e informações sobre cuidados com seu veículo.</p>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid gap-6">
            {artigos.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="card group flex flex-col md:flex-row gap-6 hover:scale-[1.01] transition-all">
                <div className="flex-1">
                  <div className="flex gap-3 mb-3">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">{a.categoria}</span>
                    <span className="text-xs text-white/30">·</span>
                    <span className="text-xs text-white/40">{a.tempoLeitura} de leitura</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{a.titulo}</h2>
                  <p className="text-white/60 text-sm leading-relaxed">{a.resumo}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 font-bold text-sm whitespace-nowrap">Ler artigo →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 bg-red-600 text-center">
          <h2 className="font-display text-4xl font-black text-white mb-4">PRECISA DE UM ORÇAMENTO?</h2>
          <p className="text-white/80 mb-8">Atendemos em Itaquera, Zona Leste de São Paulo.</p>
          <a href="https://wa.me/5511974228653" target="_blank" rel="noopener noreferrer"
            className="inline-flex bg-white text-red-600 font-black text-lg px-10 py-4 rounded-xl hover:bg-white/90 transition-all">
            Falar no WhatsApp
          </a>
        </section>
      </main>
    </>
  )
}
