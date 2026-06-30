import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import { artigos } from '../page'

const conteudos: Record<string, { corpo: string, servRelacionado?: { nome: string, slug: string } }> = {
  'quanto-tempo-lavar-carro': {
    corpo: `Uma das perguntas mais frequentes que recebemos na Ômega Detailer é: quanto tempo leva para lavar o carro corretamente?

A resposta honesta é: depende. Mas vamos detalhar cada cenário.

**Lavagem simples (30 a 60 minutos)**
A lavagem básica cobre a remoção de sujeira superficial, aspiração rápida e limpeza de vidros. Ideal para manutenção semanal de veículos que não estão muito sujos.

**Lavagem técnica detalhada (2 a 3 horas)**
Aqui incluímos descontaminação da pintura, limpeza de rodas e pneus, limpeza de soleiras e uma aspiração mais completa. É o padrão mínimo que recomendamos antes de qualquer tratamento de pintura.

**Higienização completa (3 a 5 horas)**
Com extração de estofados, limpeza de painel, portas, teto e tratamento de manchas específicas. Para motoristas de app ou famílias com crianças e pets, recomendamos mensalmente.

**Polimento + vitrificação (6 a 8 horas)**
O serviço mais completo envolve correção de pintura e aplicação de vitrificação. O resultado dura até 2 anos e exige um dia inteiro de trabalho cuidadoso.

Se você está em Itaquera ou na Zona Leste de São Paulo, podemos fazer uma avaliação gratuita e indicar qual serviço faz mais sentido para o seu caso.`,
    servRelacionado: { nome: 'Higienização Interna', slug: 'higienizacao-interna' },
  },
  'vitrificacao-vs-enceramento': {
    corpo: `Vitrificação ou enceramento? Essa é uma dúvida muito comum e a resposta depende do seu orçamento, frequência de uso e quanto tempo você quer ficar sem reprocessar.

**Enceramento técnico**
O enceramento usa ceras naturais ou sintéticas para criar uma camada protetora sobre a pintura. O processo é mais acessível e pode ser feito em 2 a 3 horas.

- Duração: 2 a 3 meses
- Ideal para: manutenção regular e veículos mais antigos
- Custo: mais acessível

**Vitrificação**
A vitrificação usa compostos de sílica (SiO2) que criam uma camada rígida e transparente sobre a pintura. A proteção é muito superior e dura muito mais.

- Duração: 1 a 2 anos
- Ideal para: carros novos ou recém-polidos
- Custo: mais elevado, mas menor manutenção

**Nossa recomendação**
Para veículos novos ou recém-polidos, invista na vitrificação. Para manutenção entre vitrificações ou para carros mais antigos, o enceramento técnico é o custo-benefício ideal.

Na Ômega Detailer, avaliamos a condição da sua pintura gratuitamente antes de recomendar qualquer serviço.`,
    servRelacionado: { nome: 'Polimento e Vitrificação', slug: 'polimento-vitrificacao' },
  },
  'higienizacao-motorista-app': {
    corpo: `Se você é motorista de aplicativo em São Paulo, sabe que a avaliação dos passageiros é tudo. E um dos fatores que mais impacta a nota é a limpeza do veículo.

**Por que higienizar mensalmente?**

Passageiros entram e saem do seu carro dezenas de vezes por dia. Trazem cheiros de comida, suor, perfume, barro. Crianças derramam líquidos. Pets deixam pelos.

Sem uma higienização profunda periódica, o interior do carro acumula:
- Odores que se fixam no tecido dos bancos
- Manchas em estofados
- Ácaros e bactérias nos tapetes
- Sujeira acumulada em frisos e saídas de ar

**O impacto direto na sua renda**

Passageiros que encontram um carro limpo e sem cheiro tendem a dar nota 5. Passageiros que sentem um odor desagradável dão nota 4 ou menos. Com o sistema de médias dos apps, poucas notas baixas já comprometem seu acesso a viagens de maior valor.

**Nossa solução para motoristas**

Oferecemos pacote mensal de higienização com preço diferenciado para motoristas de app. O serviço inclui extração de estofados, limpeza de painel e portas, aromatização e aspiração completa.

Entre em contato pelo WhatsApp e monte seu plano mensal.`,
    servRelacionado: { nome: 'Higienização Interna', slug: 'higienizacao-interna' },
  },
  'como-tirar-risco-carro': {
    corpo: `Riscos no carro são frustrantes, mas na maioria dos casos têm solução. O polimento técnico é a ferramenta certa — quando o risco não penetrou o metal.

**Como identificar o tipo de risco**

Passe a ponta do dedo sobre o risco. Se você não sentir nada (o dedo desliza suavemente), o risco está apenas no verniz (clear coat). Esses casos respondem bem ao polimento.

Se sentir um sulco perceptível, o risco foi mais fundo e pode ter atingido a tinta ou até o metal. Nesses casos, o polimento melhora mas não resolve completamente.

**O que o polimento faz**

O polimento remove uma camada finíssima do verniz ao redor do risco, nivelando a superfície. Quando feito corretamente por um profissional com máquina politriz adequada, o resultado é impressionante.

**O que o polimento não faz**

Riscos profundos que atingem a tinta branca (primer) ou o metal precisam de retoque de pintura. Nesses casos, o polimento pode melhorar a aparência mas o risco ainda será visível de perto.

**Cuidados após o polimento**

Após o polimento, recomendamos a aplicação de vitrificação ou pelo menos enceramento para proteger a área tratada e o restante da pintura.

Na Ômega Detailer, fazemos uma avaliação gratuita antes de qualquer serviço. Assim você sabe exatamente o que esperar do resultado.`,
    servRelacionado: { nome: 'Polimento e Vitrificação', slug: 'polimento-vitrificacao' },
  },
  'cuidados-pintura-carro-novo': {
    corpo: `Comprou um carro novo? Os primeiros 6 meses são decisivos para a saúde da pintura. Veja o que fazer — e o que evitar.

**Nos primeiros 30 dias**

A pintura de fábrica precisa de um período de cura. Nesse período, evite:
- Ceras e produtos abrasivos
- Lavagem em lava-rápido com escova giratória
- Exposição prolongada ao sol sem proteção

**O que fazer logo nos primeiros meses**

A melhor decisão que você pode tomar para um carro novo é vitrificar a pintura. A vitrificação cria uma camada de proteção sobre o verniz de fábrica, blindando a pintura contra:
- Chuva ácida
- Raios UV
- Sujeira e poluição
- Riscos superficiais do dia a dia

**Lavagem correta**

Use sempre a técnica dos dois baldes: um para água limpa com shampoo automotivo e outro para enxaguar o pano ou luva de lavagem. Nunca use esponja de cozinha ou pano seco na pintura.

**Garagem e proteção solar**

Se possível, guarde o carro em local coberto. A exposição diária ao sol é um dos principais fatores de degradação da pintura a longo prazo.

Trazendo seu carro novo até nós, fazemos uma avaliação completa e recomendamos o melhor pacote de proteção para o seu caso.`,
    servRelacionado: { nome: 'Polimento e Vitrificação', slug: 'polimento-vitrificacao' },
  },
  'ozonio-carro-funciona': {
    corpo: `A ozonização — ou oxi-sanitização — é um dos tratamentos mais eficazes para eliminar odores e microrganismos do interior do veículo. Mas como funciona na prática?

**O que é o ozônio?**

O ozônio (O3) é uma forma de oxigênio com três átomos. É produzido artificialmente por um gerador e, quando liberado em um ambiente fechado, reage com moléculas orgânicas — bactérias, fungos, vírus e compostos que causam odores.

**Como é feito o processo**

1. O veículo é fechado com todas as janelas vedadas
2. O gerador de ozônio é posicionado no interior
3. O gás é liberado por 30 a 60 minutos
4. O veículo permanece fechado por mais 2 horas para o gás agir e depois dissipar
5. Após a dissipação, o veículo está livre de odores e microrganismos

**Para que tipos de problema funciona?**

- Cheiro de cigarro (mesmo antigo e impregnado)
- Odor de mofo por infiltração ou ar-condicionado
- Cheiro de animal de estimação
- Odor após enchentes ou molhamento do interior
- Ambientes com suspeita de vírus ou bactérias

**É seguro?**

O processo é realizado sem pessoas no interior. O ozônio é um gás irritante para vias respiratórias em concentrações altas. Após o tratamento e a dissipação completa, o veículo é 100% seguro para uso.

Combinamos a oxi-sanitização com nossa higienização interna para resultados máximos.`,
    servRelacionado: { nome: 'Oxi-Sanitização', slug: 'oxi-sanitizacao' },
  },
}

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artigo = artigos.find((a) => a.slug === params.slug)
  if (!artigo) return {}
  return {
    title: `${artigo.titulo}`,
    description: artigo.resumo,
    alternates: { canonical: `https://omegadetailer.com.br/blog/${params.slug}` },
    openGraph: { title: artigo.titulo, description: artigo.resumo },
  }
}

export default function ArtigoPage({ params }: Props) {
  const artigo = artigos.find((a) => a.slug === params.slug)
  const conteudo = conteudos[params.slug]
  if (!artigo || !conteudo) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artigo.titulo,
    description: artigo.resumo,
    author: { '@type': 'Person', name: 'Junior', jobTitle: 'Fundador da Ômega Detailer' },
    publisher: { '@type': 'Organization', name: 'Ômega Detailer', url: 'https://omegadetailer.com.br' },
    datePublished: artigo.data,
    url: `https://omegadetailer.com.br/blog/${params.slug}`,
  }

  const paragrafos = conteudo.corpo.split('\n\n').filter(Boolean)

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="pt-16">
        <section className="bg-gradient-to-b from-black to-gray-950 py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3 mb-6">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">{artigo.categoria}</span>
              <span className="text-xs text-white/30">·</span>
              <span className="text-xs text-white/40">{artigo.tempoLeitura} de leitura</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-6">{artigo.titulo.toUpperCase()}</h1>
            <p className="text-white/60 text-lg leading-relaxed">{artigo.resumo}</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              {paragrafos.map((p, i) => {
                if (p.startsWith('**') && p.endsWith('**')) {
                  return <h2 key={i} className="font-display text-2xl font-black text-white mt-10 mb-4">{p.replace(/\*\*/g, '')}</h2>
                }
                if (p.startsWith('- ')) {
                  const items = p.split('\n').filter(l => l.startsWith('- '))
                  return (
                    <ul key={i} className="space-y-2 mb-6">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-white/70">
                          <span className="text-red-500 flex-shrink-0">✓</span>
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  )
                }
                const formatted = p.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
                return <p key={i} className="text-white/70 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: formatted }} />
              })}
            </article>

            {conteudo.servRelacionado && (
              <div className="mt-12 p-6 bg-red-950/30 border border-red-500/30 rounded-2xl">
                <p className="text-white/60 text-sm mb-2">Serviço relacionado</p>
                <Link href={`/servicos/${conteudo.servRelacionado.slug}`}
                  className="font-display text-2xl font-black text-white hover:text-red-400 transition-colors">
                  {conteudo.servRelacionado.nome} →
                </Link>
              </div>
            )}

            <div className="mt-12 p-8 bg-red-600 rounded-2xl text-center">
              <h3 className="font-display text-3xl font-black text-white mb-3">FICOU COM DÚVIDA?</h3>
              <p className="text-white/80 mb-6">Fale diretamente com o Junior pelo WhatsApp. Resposta em minutos.</p>
              <a href="https://wa.me/5511974228653" target="_blank" rel="noopener noreferrer"
                className="inline-flex bg-white text-red-600 font-black px-8 py-4 rounded-xl hover:bg-white/90 transition-all">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <div className="bg-black py-6 px-4 text-center border-t border-white/10">
          <Link href="/blog" className="text-white/40 hover:text-white text-sm transition-colors">← Voltar para o blog</Link>
        </div>
      </main>
    </>
  )
}
