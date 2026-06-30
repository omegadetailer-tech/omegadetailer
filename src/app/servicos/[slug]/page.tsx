import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'

const servicos: Record<string, {
  nome: string
  desc: string
  metaDesc: string
  icone: string
  beneficios: string[]
  processo: string[]
  faq: { q: string, r: string }[]
}> = {
  'polimento-vitrificacao': {
    nome: 'Polimento e Vitrificação',
    desc: 'Corrija imperfeições na pintura e proteja seu veículo com vitrificação profissional. Resultados visíveis e duradouros.',
    metaDesc: 'Polimento e vitrificação automotiva profissional em Itaquera, São Paulo. Remoção de riscos, oxidação e proteção duradoura da pintura. Agende pelo WhatsApp.',
    icone: '✨',
    beneficios: ['Remoção de riscos superficiais e médios', 'Eliminação de oxidação e manchas de tinta', 'Proteção contra raios UV', 'Brilho intenso e duradouro por até 2 anos', 'Facilita a limpeza no dia a dia'],
    processo: ['Lavagem técnica e descontaminação da pintura', 'Inspeção detalhada com luz especial', 'Correção de pintura com máquina politriz', 'Aplicação da vitrificação em camadas', 'Cura e inspeção final'],
    faq: [
      { q: 'Quanto tempo dura a vitrificação?', r: 'Com manutenção adequada, a vitrificação dura entre 1 e 2 anos. Após esse período, recomendamos uma nova aplicação para manter a proteção.' },
      { q: 'O polimento estraga a pintura?', r: 'Não quando feito por profissional. O polimento remove apenas a camada superficial de clear que contém os defeitos. A quantidade removida é mínima.' },
      { q: 'Carro com pintura reformada pode fazer vitrificação?', r: 'Pode, mas é necessário avaliar a qualidade da pintura. Realizamos uma inspeção gratuita antes de qualquer serviço.' },
    ],
  },
  'higienizacao-interna': {
    nome: 'Higienização Interna',
    desc: 'Limpeza profunda do interior do seu veículo com produtos premium. Remoção de odores, manchas e bactérias.',
    metaDesc: 'Higienização interna automotiva profissional em Itaquera SP. Remoção de odores, manchas em estofados e limpeza profunda. Agende pelo WhatsApp (11) 97422-8653.',
    icone: '🧹',
    beneficios: ['Remoção de odores persistentes (cigarro, mofo, animais)', 'Limpeza profunda de estofados e tapetes', 'Higienização de painel, portas e teto', 'Eliminação de ácaros e bactérias', 'Ambiente interno fresco e saudável'],
    processo: ['Aspiração completa de todos os compartimentos', 'Aplicação de produto extrator em estofados', 'Limpeza manual de todas as superfícies', 'Tratamento de manchas específicas', 'Aromatização profissional'],
    faq: [
      { q: 'Quanto tempo leva a higienização?', r: 'Em média 3 a 5 horas dependendo do tamanho e estado do veículo. O carro fica pronto no mesmo dia.' },
      { q: 'Remove cheiro de cigarro?', r: 'Sim. Nossa higienização remove o odor de cigarro com eficácia. Para casos mais graves, combinamos com o serviço de oxi-sanitização com ozônio.' },
      { q: 'Funciona para motoristas de aplicativo?', r: 'Totalmente. Temos pacotes especiais mensais para motoristas de app que precisam manter o veículo sempre higienizado.' },
    ],
  },
  'cristalizacao-parabrisa': {
    nome: 'Cristalização de Para-brisa',
    desc: 'Tratamento hidrofóbico profissional que melhora a visibilidade em dias de chuva e protege o vidro.',
    metaDesc: 'Cristalização de para-brisa em Itaquera São Paulo. Tratamento hidrofóbico profissional para melhor visibilidade na chuva. Agende na Ômega Detailer.',
    icone: '💧',
    beneficios: ['Água escorre facilmente mesmo sem limpador', 'Melhor visibilidade em dias de chuva', 'Proteção contra sujeira e poluição', 'Facilita a remoção de insetos e resinas', 'Duração de 6 a 12 meses'],
    processo: ['Limpeza e descontaminação do vidro', 'Polimento do para-brisa para remover riscos', 'Aplicação do produto hidrofóbico', 'Cura e teste com água'],
    faq: [
      { q: 'Pode ser feito em todos os vidros?', r: 'Sim, aplicamos em todos os vidros do veículo, não só no para-brisa.' },
      { q: 'Quanto tempo dura?', r: 'Entre 6 e 12 meses com cuidados adequados. Evitar lavagens com produtos abrasivos prolonga o efeito.' },
    ],
  },
  'enceramento-tecnico': {
    nome: 'Enceramento Técnico',
    desc: 'Proteção e brilho intenso da pintura com ceras de alta performance. Ideal para manutenção regular.',
    metaDesc: 'Enceramento técnico automotivo em Itaquera São Paulo. Proteção da pintura e brilho intenso com ceras premium. Ômega Detailer - agende pelo WhatsApp.',
    icone: '🏆',
    beneficios: ['Brilho profundo e uniforme', 'Proteção contra chuva ácida e UV', 'Repele água e sujeira', 'Aplicação manual e à máquina', 'Resultado imediato'],
    processo: ['Lavagem técnica completa', 'Descontaminação da pintura', 'Aplicação de cera por seções', 'Remoção e polimento final'],
    faq: [
      { q: 'Qual a diferença entre encerar e vitrificar?', r: 'A cera oferece proteção temporária (2-3 meses) e é mais acessível. A vitrificação é mais durável (1-2 anos) e cria uma camada rígida de proteção. Recomendamos encerar para manutenção entre vitrificações.' },
    ],
  },
  'oxi-sanitizacao': {
    nome: 'Oxi-Sanitização',
    desc: 'Elimine bactérias, vírus, fungos e odores com tratamento de ozônio. Ambiente interno 100% higienizado.',
    metaDesc: 'Oxi-sanitização automotiva com ozônio em Itaquera SP. Eliminação de bactérias, vírus e odores do interior do veículo. Agende na Ômega Detailer.',
    icone: '🦠',
    beneficios: ['Eliminação de 99,9% de bactérias e vírus', 'Remoção definitiva de odores fortes', 'Tratamento de mofo e fungos', 'Processo ecológico sem produtos químicos', 'Seguro para todos os materiais do interior'],
    processo: ['Vedação do veículo', 'Introdução de ozônio por 30-60 minutos', 'Período de atuação e dissipação', 'Inspeção e liberação do veículo'],
    faq: [
      { q: 'O ozônio é seguro?', r: 'O processo é realizado sem pessoas no interior do veículo. Após a dissipação do ozônio (2-3 horas), o veículo está completamente seguro para uso.' },
      { q: 'Remove cheiro de cigarro definitivamente?', r: 'Sim. O ozônio é um dos métodos mais eficazes para remoção definitiva de odores de cigarro, inclusive dos que impregnaram nos estofados.' },
    ],
  },
  'revitalizacao-farois': {
    nome: 'Revitalização de Faróis',
    desc: 'Recupere a claridade e segurança dos seus faróis amarelados, opacos ou com riscos.',
    metaDesc: 'Revitalização de faróis em Itaquera São Paulo. Recupere faróis amarelados e opacos com resultado profissional. Ômega Detailer - agende pelo WhatsApp.',
    icone: '💡',
    beneficios: ['Remoção do amarelado e opacidade', 'Melhora significativa na iluminação', 'Resultado comparável a faróis novos', 'Acabamento selado para durabilidade', 'Valoriza o visual e segurança do veículo'],
    processo: ['Mascaramento da área ao redor dos faróis', 'Lixamento progressivo (800 a 3000)', 'Polimento com compostos abrasivos', 'Selagem UV para proteção duradoura'],
    faq: [
      { q: 'Qual o resultado esperado?', r: 'Faróis com oxidação leve a moderada ficam como novos. Casos graves de trinca interna podem exigir substituição das lentes.' },
      { q: 'Quanto tempo dura?', r: 'Com a selagem UV aplicada, o resultado dura entre 1 e 2 anos dependendo da exposição ao sol.' },
    ],
  },
}

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return Object.keys(servicos).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = servicos[params.slug]
  if (!s) return {}
  return {
    title: `${s.nome} em Itaquera SP`,
    description: s.metaDesc,
    alternates: { canonical: `https://omegadetailer.com.br/servicos/${params.slug}` },
    openGraph: {
      title: `${s.nome} | Ômega Detailer Itaquera`,
      description: s.metaDesc,
    },
  }
}

export default function ServicoPage({ params }: Props) {
  const s = servicos[params.slug]
  if (!s) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.nome,
    description: s.desc,
    provider: {
      '@type': 'AutoRepair',
      name: 'Ômega Detailer',
      url: 'https://omegadetailer.com.br',
      telephone: '+55-11-97422-8653',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Augusto Carlos Bauman, 591',
        addressLocality: 'Itaquera',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    areaServed: { '@type': 'City', name: 'São Paulo' },
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="pt-16">
        {/* HERO DO SERVIÇO */}
        <section className="bg-gradient-to-b from-red-950/40 to-black py-24 px-4 text-center">
          <div className="text-6xl mb-6">{s.icone}</div>
          <span className="section-tag">Serviço especializado · Itaquera, São Paulo</span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6">{s.nome.toUpperCase()}</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-10">{s.desc}</p>
          <a href={`https://wa.me/5511974228653?text=Olá!%20Quero%20agendar%20${encodeURIComponent(s.nome)}%20na%20Ômega%20Detailer.`}
            target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
            Agendar este serviço
          </a>
        </section>

        {/* BENEFÍCIOS */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-black text-white mb-6">BENEFÍCIOS</h2>
              <ul className="space-y-3">
                {s.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/70">
                    <span className="text-red-500 font-bold flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-black text-white mb-6">COMO FAZEMOS</h2>
              <ol className="space-y-4">
                {s.processo.map((p, i) => (
                  <li key={p} className="flex items-start gap-4 text-white/70">
                    <span className="text-red-500 font-bold font-display text-xl flex-shrink-0 w-7">{String(i + 1).padStart(2, '0')}</span>
                    {p}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {s.faq.length > 0 && (
          <section className="py-20 px-4 bg-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-black text-white mb-10 text-center">DÚVIDAS SOBRE {s.nome.toUpperCase()}</h2>
              <div className="space-y-3">
                {s.faq.map(({ q, r }) => (
                  <details key={q} className="card cursor-pointer">
                    <summary className="font-semibold text-white text-sm flex justify-between items-center gap-4 list-none">
                      {q}
                      <span className="text-red-500 flex-shrink-0 text-lg">+</span>
                    </summary>
                    <p className="text-white/60 text-sm mt-4 leading-relaxed">{r}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 px-4 bg-red-600 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">AGENDE {s.nome.toUpperCase()}</h2>
          <p className="text-white/80 mb-8">Atendemos em Itaquera, Zona Leste de São Paulo. Resposta em minutos.</p>
          <a href={`https://wa.me/5511974228653?text=Olá!%20Quero%20agendar%20${encodeURIComponent(s.nome)}.`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-black text-xl px-10 py-5 rounded-xl hover:bg-white/90 transition-all">
            Falar no WhatsApp
          </a>
        </section>

        <div className="bg-black py-6 px-4 text-center">
          <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors">← Voltar para o início</Link>
        </div>
      </main>
    </>
  )
}
