import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Ômega Detailer | Estética Automotiva em Itaquera, São Paulo',
  description: 'Especialistas em polimento, vitrificação e higienização em Itaquera, Zona Leste de São Paulo.',
  alternates: { canonical: 'https://omegadetailer.com.br' },
}

const servicos = [
  { slug: 'polimento-vitrificacao', nome: 'Polimento e Vitrificação', icone: '✨' },
  { slug: 'higienizacao-interna', nome: 'Higienização Interna', icone: '🧹' },
  { slug: 'cristalizacao-parabrisa', nome: 'Cristalização de Para-brisa', icone: '💧' },
  { slug: 'enceramento-tecnico', nome: 'Enceramento Técnico', icone: '🏆' },
  { slug: 'oxi-sanitizacao', nome: 'Oxi-Sanitização', icone: '🦠' },
  { slug: 'revitalizacao-farois', nome: 'Revitalização de Faróis', icone: '💡' },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#000',paddingTop:'4rem',textAlign:'center'}}>
          <div style={{padding:'0 1rem',maxWidth:'64rem',margin:'0 auto'}}>
            <span className="section-tag">Estética Automotiva · Itaquera, São Paulo</span>
            <h1 className="section-title" style={{fontSize:'clamp(3rem,8vw,6rem)',marginBottom:'1.5rem'}}>
              SEU CARRO<br/><span style={{color:'#dc2626'}}>MERECE</span><br/>O MELHOR
            </h1>
            <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.125rem',maxWidth:'36rem',margin:'0 auto 2.5rem',lineHeight:1.7}}>
              Polimento técnico, vitrificação e higienização profissional em Itaquera, Zona Leste de São Paulo.
            </p>
            <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://wa.me/5511974228653" target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar pelo WhatsApp</a>
              <a href="#servicos" className="btn-ghost">Ver serviços</a>
            </div>
          </div>
        </section>

        <section style={{background:'#dc2626',padding:'3rem 1rem'}}>
          <div style={{maxWidth:'64rem',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'2rem',textAlign:'center'}}>
            {[{num:'500+',label:'Veículos atendidos'},{num:'5★',label:'Avaliação média'},{num:'3+',label:'Anos de experiência'},{num:'100%',label:'Satisfação garantida'}].map(({num,label})=>(
              <div key={label}>
                <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'3rem',fontWeight:900,color:'#fff'}}>{num}</div>
                <div style={{color:'rgba(255,255,255,0.8)',fontSize:'0.875rem'}}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" style={{padding:'6rem 1rem'}}>
          <div style={{maxWidth:'80rem',margin:'0 auto'}}>
            <div style={{textAlign:'center',marginBottom:'4rem'}}>
              <span className="section-tag">O que fazemos</span>
              <h2 className="section-title">NOSSOS SERVIÇOS</h2>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5rem'}}>
              {servicos.map((s)=>(
                <Link key={s.slug} href={`/servicos/${s.slug}`} className="card" style={{textDecoration:'none',display:'block'}}>
                  <div style={{fontSize:'2.5rem',marginBottom:'1rem'}}>{s.icone}</div>
                  <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.5rem',fontWeight:700,color:'#fff',textTransform:'uppercase',marginBottom:'0.5rem'}}>{s.nome}</h3>
                  <span style={{color:'#ef4444',fontSize:'0.875rem',fontWeight:700}}>Ver detalhes →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{padding:'6rem 1rem',background:'#dc2626',textAlign:'center'}}>
          <h2 className="section-title">AGENDE AGORA</h2>
          <p style={{color:'rgba(255,255,255,0.8)',marginBottom:'2rem'}}>Diagnóstico gratuito da pintura do seu veículo.</p>
          <a href="https://wa.me/5511974228653" target="_blank" rel="noopener noreferrer"
            style={{display:'inline-flex',background:'#fff',color:'#dc2626',fontWeight:900,fontSize:'1.25rem',padding:'1.25rem 2.5rem',borderRadius:'0.75rem',textDecoration:'none'}}>
            Falar no WhatsApp
          </a>
        </section>

        <footer style={{background:'#000',borderTop:'1px solid rgba(255,255,255,0.1)',padding:'3rem 1rem',textAlign:'center'}}>
          <span style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'1.5rem',fontWeight:900,color:'#fff',textTransform:'uppercase'}}>ÔMEGA <span style={{color:'#dc2626'}}>DETAILER</span></span>
          <p style={{color:'rgba(255,255,255,0.3)',fontSize:'0.75rem',marginTop:'1rem'}}>© 2025 Ômega Detailer · Itaquera, São Paulo</p>
        </footer>
      </main>
    </>
  )
}