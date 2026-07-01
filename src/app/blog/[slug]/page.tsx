import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'

const artigos = [
  { slug: 'quanto-tempo-lavar-carro', titulo: 'Quanto Tempo Leva para Lavar o Carro?', resumo: 'A resposta depende do nível de limpeza desejado.', categoria: 'Dicas', tempoLeitura: '4 min', data: '2025-06-01' },
  { slug: 'vitrificacao-vs-enceramento', titulo: 'Vitrificação ou Enceramento? Qual Escolher?', resumo: 'Entenda as diferenças e quando vale a pena investir em cada proteção.', categoria: 'Comparativo', tempoLeitura: '6 min', data: '2025-05-20' },
  { slug: 'higienizacao-motorista-app', titulo: 'Por que Motoristas de App Devem Higienizar o Carro Todo Mês', resumo: 'Passageiros avaliam a limpeza. Veja como aumentar sua nota no app.', categoria: 'Para Motoristas', tempoLeitura: '5 min', data: '2025-05-10' },
  { slug: 'como-tirar-risco-carro', titulo: 'Como Tirar Risco do Carro? Polimento é a Solução', resumo: 'Veja quando o polimento resolve e quando não resolve.', categoria: 'Serviços', tempoLeitura: '5 min', data: '2025-04-28' },
  { slug: 'cuidados-pintura-carro-novo', titulo: 'Cuidados Essenciais com a Pintura de um Carro Novo', resumo: 'Os primeiros 6 meses são cruciais para proteger a pintura original.', categoria: 'Dicas', tempoLeitura: '7 min', data: '2025-04-15' },
  { slug: 'ozonio-carro-funciona', titulo: 'Ozonização no Carro: o que é e como Funciona?', resumo: 'O ozônio elimina bactérias, vírus e odores.', categoria: 'Serviços', tempoLeitura: '4 min', data: '2025-04-05' },
]

const conteudos: Record<string, { corpo: string }> = {
  'quanto-tempo-lavar-carro': { corpo: 'Uma das perguntas mais frequentes: quanto tempo leva para lavar o carro corretamente?\n\nA resposta honesta é: depende.\n\n**Lavagem simples (30 a 60 minutos)**\nIdeal para manutenção semanal.\n\n**Lavagem técnica detalhada (2 a 3 horas)**\nInclui descontaminação da pintura e aspiração completa.\n\n**Higienização completa (3 a 5 horas)**\nCom extração de estofados e tratamento de manchas.\n\n**Polimento e vitrificação (6 a 8 horas)**\nO serviço mais completo. O resultado dura até 2 anos.' },
  'vitrificacao-vs-enceramento': { corpo: 'Vitrificação ou enceramento? Depende do seu orçamento.\n\n**Enceramento técnico**\nMais acessível, dura 2 a 3 meses. Ideal para manutenção regular.\n\n**Vitrificação**\nMais durável, 1 a 2 anos. Ideal para carros novos ou recém-polidos.\n\n**Nossa recomendação**\nPara veículos novos, invista na vitrificação. Para manutenção, o enceramento é o custo-benefício ideal.' },
  'higienizacao-motorista-app': { corpo: 'Se você é motorista de aplicativo, a limpeza do veículo impacta sua avaliação.\n\n**Por que higienizar mensalmente?**\nPassageiros trazem odores, manchas e sujeira. Sem higienização, o interior acumula ácaros e bactérias.\n\n**O impacto na sua renda**\nPassageiros que encontram carro limpo dão nota 5. Poucas notas baixas comprometem seu acesso a viagens de maior valor.' },
  'como-tirar-risco-carro': { corpo: 'Riscos no carro têm solução na maioria dos casos.\n\n**Como identificar o tipo de risco**\nPasse o dedo sobre o risco. Se deslizar suavemente, está apenas no verniz e responde bem ao polimento.\n\n**O que o polimento faz**\nRemove uma camada finíssima do verniz ao redor do risco, nivelando a superfície.\n\n**O que o polimento não faz**\nRiscos profundos que atingem a tinta ou o metal precisam de retoque.' },
  'cuidados-pintura-carro-novo': { corpo: 'Os primeiros 6 meses são decisivos para a saúde da pintura.\n\n**Nos primeiros 30 dias**\nEvite ceras abrasivas e lavagem com escova giratória.\n\n**O que fazer logo nos primeiros meses**\nVitrificar a pintura é a melhor decisão. Protege contra chuva ácida, UV e riscos superficiais.' },
  'ozonio-carro-funciona': { corpo: 'A ozonização é um dos tratamentos mais eficazes para eliminar odores.\n\n**O que é o ozônio?**\nO ozônio (O3) reage com bactérias, fungos e compostos que causam odores quando liberado em ambiente fechado.\n\n**É seguro?**\nO processo é feito sem pessoas no interior. Após a dissipação, o veículo é 100% seguro.' },
}

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artigo = artigos.find((a) => a.slug === params.slug)
  if (!artigo) return {}
  return {
    title: artigo.titulo,
    description: artigo.resumo,
    alternates: { canonical: `https://omegadetailer.com.br/blog/${params.slug}` },
  }
}

export default function ArtigoPage({ params }: Props) {
  const artigo = artigos.find((a) => a.slug === params.slug)
  const conteudo = conteudos[params.slug]
  if (!artigo || !conteudo) notFound()

  const paragrafos = conteudo.corpo.split('\n\n').filter(Boolean)

  return (
    <>
      <Header />
      <main style={{paddingTop:'4rem'}}>
        <section style={{background:'#000',padding:'5rem 1rem',textAlign:'center'}}>
          <span className="section-tag">{artigo.categoria}</span>
          <h1 className="section-title">{artigo.titulo.toUpperCase()}</h1>
          <p style={{color:'rgba(255,255,255,0.6)'}}>{artigo.resumo}</p>
        </section>
        <section style={{padding:'4rem 1rem'}}>
          <div style={{maxWidth:'48rem',margin:'0 auto'}}>
            {paragrafos.map((p, i) => {
              if (p.startsWith('**') && p.endsWith('**')) {
                return <h2 key={i} className="section-title" style={{fontSize:'1.5rem',marginTop:'2rem'}}>{p.replace(/\*\*/g, '')}</h2>
              }
              const formatted = p.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff">$1</strong>')
              return <p key={i} style={{color:'rgba(255,255,255,0.7)',lineHeight:1.7,marginBottom:'1.5rem'}} dangerouslySetInnerHTML={{ __html: formatted }} />
            })}
            <div style={{marginTop:'3rem',padding:'2rem',background:'#dc2626',borderRadius:'1rem',textAlign:'center'}}>
              <h3 className="section-title">FICOU COM DÚVIDA?</h3>
              <a href="https://wa.me/5511974228653" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',background:'#fff',color:'#dc2626',fontWeight:900,padding:'1rem 2rem',borderRadius:'0.75rem',textDecoration:'none'}}>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
        <div style={{background:'#000',padding:'1.5rem',textAlign:'center'}}>
          <Link href="/blog" style={{color:'rgba(255,255,255,0.4)',fontSize:'0.875rem',textDecoration:'none'}}>← Voltar para o blog</Link>
        </div>
      </main>
    </>
  )
}