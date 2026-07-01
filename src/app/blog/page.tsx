import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Blog | Dicas de Estética Automotiva',
  description: 'Dicas sobre cuidados com seu veículo. Blog da Ômega Detailer em Itaquera, SP.',
  alternates: { canonical: 'https://omegadetailer.com.br/blog' },
}

const lista = [
  { slug: 'quanto-tempo-lavar-carro', titulo: 'Quanto Tempo Leva para Lavar o Carro?', resumo: 'A resposta depende do nível de limpeza desejado e do estado do veículo.', categoria: 'Dicas' },
  { slug: 'vitrificacao-vs-enceramento', titulo: 'Vitrificação ou Enceramento? Qual Escolher?', resumo: 'Entenda as diferenças e quando vale a pena investir em cada proteção.', categoria: 'Comparativo' },
  { slug: 'higienizacao-motorista-app', titulo: 'Por que Motoristas de App Devem Higienizar o Carro Todo Mês', resumo: 'Passageiros avaliam a limpeza. Veja como a higienização aumenta sua nota no app.', categoria: 'Para Motoristas' },
  { slug: 'como-tirar-risco-carro', titulo: 'Como Tirar Risco do Carro? Polimento é a Solução', resumo: 'Veja quando o polimento resolve e quando não resolve.', categoria: 'Serviços' },
  { slug: 'cuidados-pintura-carro-novo', titulo: 'Cuidados Essenciais com a Pintura de um Carro Novo', resumo: 'Os primeiros 6 meses são cruciais para proteger a pintura original.', categoria: 'Dicas' },
  { slug: 'ozonio-carro-funciona', titulo: 'Ozonização no Carro: o que é e como Funciona?', resumo: 'O ozônio elimina bactérias, vírus e odores. Entenda o processo.', categoria: 'Serviços' },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main style={{paddingTop:'4rem'}}>
        <section style={{background:'#000',padding:'5rem 1rem',textAlign:'center'}}>
          <span className="section-tag">Conhecimento gratuito</span>
          <h1 className="section-title">BLOG</h1>
        </section>
        <section style={{padding:'4rem 1rem'}}>
          <div style={{maxWidth:'56rem',margin:'0 auto',display:'flex',flexDirection:'column',gap:'1.5rem'}}>
            {lista.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="card" style={{textDecoration:'none'}}>
                <span style={{fontSize:'0.75rem',fontWeight:700,color:'#ef4444',textTransform:'uppercase'}}>{a.categoria}</span>
                <h2 style={{fontSize:'1.5rem',fontWeight:900,color:'#fff',margin:'0.5rem 0'}}>{a.titulo}</h2>
                <p style={{color:'rgba(255,255,255,0.6)',fontSize:'0.9rem'}}>{a.resumo}</p>
                <span style={{color:'#ef4444',fontWeight:700,fontSize:'0.875rem',marginTop:'0.5rem',display:'block'}}>Ler artigo →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}