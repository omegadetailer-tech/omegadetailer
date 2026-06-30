import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import { artigos } from '@/lib/artigos'

export const metadata: Metadata = {
  title: 'Blog | Dicas de Estética Automotiva',
  description: 'Dicas, tutoriais e informações sobre cuidados com o seu veículo. Blog da Ômega Detailer em Itaquera, SP.',
  alternates: { canonical: 'https://omegadetailer.com.br/blog' },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section style={{background:'linear-gradient(to bottom, #000, #111)', padding:'5rem 1rem', textAlign:'center'}}>
          <span className="section-tag">Conhecimento gratuito</span>
          <h1 className="section-title">BLOG</h1>
        </section>
        <section style={{padding:'4rem 1rem'}}>
          <div style={{maxWidth:'56rem', margin:'0 auto', display:'flex', flexDirection:'column', gap:'1.5rem'}}>
            {artigos.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="card" style={{textDecoration:'none'}}>
                <div style={{display:'flex', gap:'0.75rem', marginBottom:'0.5rem'}}>
                  <span style={{fontSize:'0.75rem', fontWeight:700, color:'#ef4444', textTransform:'uppercase'}}>{a.categoria}</span>
                  <span style={{color:'rgba(255,255,255,0.3)'}}>·</span>
                  <span style={{fontSize:'0.75rem', color:'rgba(255,255,255,0.4)'}}>{a.tempoLeitura}</span>
                </div>
                <h2 style={{fontFamily:'Barlow Condensed, sans-serif', fontSize:'1.5rem', fontWeight:900, color:'#fff', textTransform:'uppercase', marginBottom:'0.5rem'}}>{a.titulo}</h2>
                <p style={{color:'rgba(255,255,255,0.6)', fontSize:'0.9rem'}}>{a.resumo}</p>
                <span style={{color:'#ef4444', fontWeight:700, fontSize:'0.875rem', marginTop:'0.5rem', display:'block'}}>Ler artigo →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}