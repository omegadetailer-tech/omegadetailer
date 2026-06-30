import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Ômega Detailer | Estética Automotiva em Itaquera, São Paulo',
  description: 'Especialistas em polimento, vitrificação, higienização e proteção de pintura em Itaquera, Zona Leste de São Paulo. Agende pelo WhatsApp: (11) 97422-8653.',
  alternates: { canonical: 'https://omegadetailer.com.br' },
}

const servicos = [
  { slug: 'polimento-vitrificacao', nome: 'Polimento e Vitrificação', desc: 'Remoção de riscos, oxidação e imperfeições. Proteção duradoura com vitrificação de última geração.', icone: '✨' },
  { slug: 'higienizacao-interna', nome: 'Higienização Interna', desc: 'Limpeza profunda de estofados, tapetes, painéis e remoção de odores com produtos premium.', icone: '🧹' },
  { slug: 'cristalizacao-parabrisa', nome: 'Cristalização de Para-brisa', desc: 'Melhore a visibilidade em dias de chuva com tratamento hidrofóbico profissional.', icone: '💧' },
  { slug: 'enceramento-tecnico', nome: 'Enceramento Técnico', desc: 'Proteção da pintura com ceras de alta performance. Brilho intenso e duradouro.', icone: '🏆' },
  { slug: 'oxi-sanitizacao', nome: 'Oxi-Sanitização', desc: 'Eliminação de bactérias, vírus e odores com ozônio. Ambiente interno 100% higienizado.', icone: '🦠' },
  { slug: 'revitalizacao-farois', nome: 'Revitalização de Faróis', desc: 'Recupere a claridade e segurança dos seus faróis amarelados ou opacos.', icone: '💡' },
]

const depoimentos = [
  { nome: 'Carlos M.', texto: 'Levei meu Corolla que estava cheio de riscos. Ficou como zero quilômetro. Recomendo demais!', nota: 5 },
  { nome: 'Patrícia R.', texto: 'Higienização interna impecável. Tirou aquele cheiro de cigarro que eu não conseguia remover de jeito nenhum.', nota: 5 },
  { nome: 'Rodrigo S.', texto: 'Motorista de app aqui. Faço a higienização todo mês. Melhor custo-benefício da Zona Leste.', nota: 5 },
  { nome: 'Fernanda L.', texto: 'Profissionalismo do começo ao fim. O Junior explica tudo que vai fazer antes de começar. Nota 10!', nota: 5 },
]

const pacotes = [
  {
    nome: 'Básico',
    desc: 'Ideal para manutenção regular',
    items: ['Lavagem técnica detalhada', 'Aspiração interna', 'Limpeza de vidros', 'Pretinho nos pneus'],
    cor: 'border-white/20',
  },
  {
    nome: 'Intermediário',
    desc: 'O mais escolhido',
    items: ['Tudo do Básico', 'Enceramento técnico', 'Limpeza de motor', 'Cristalização de para-brisa', 'Hidratação de borrachas'],
    cor: 'border-red-500',
    destaque: true,
  },
  {
    nome: 'Premium',
    desc: 'Proteção máxima',
    items: ['Tudo do Intermediário', 'Polimento técnico completo', 'Vitrificação da pintura', 'Higienização interna', 'Revitalização de faróis'],
    cor: 'border-white/20',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-[url('/hero-car.webp')] bg-cover bg-center opacity-30" />
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <span className="section-tag">Estética Automotiva · Itaquera, São Paulo</span>
            <h1 className="font-display text-6xl md:text-8xl font-black text-white leading-none mb-6">
              SEU CARRO<br />
              <span className="text-red-500">MERECE</span><br />
              O MELHOR
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Polimento técnico, vitrificação, higienização profissional e proteção de pintura com produtos premium em Itaquera, Zona Leste de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5511974228653?text=Olá!%20Quero%20agendar%20um%20serviço%20na%20Ômega%20Detailer." target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
                Agendar pelo WhatsApp
              </a>
              <a href="#servicos" className="btn-ghost text-lg">Ver serviços</a>
            </div>
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="bg-red-600 py-12">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'Veículos atendidos' },
              { num: '5★', label: 'Avaliação média' },
              { num: '3+', label: 'Anos de experiência' },
              { num: '100%', label: 'Satisfação garantida' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-display text-5xl font-black text-white">{num}</div>
                <div className="text-white/80 text-sm mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-tag">O que fazemos</span>
              <h2 className="section-title">NOSSOS SERVIÇOS</h2>
              <p className="text-white/60 max-w-2xl mx-auto">Cada serviço é executado com técnica profissional, produtos de linha premium e atenção aos detalhes que a maioria ignora.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicos.map((s) => (
                <Link key={s.slug} href={`/servicos/${s.slug}`} className="card group hover:scale-[1.02] transition-all">
                  <div className="text-4xl mb-4">{s.icone}</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{s.nome}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-red-500 text-sm font-semibold flex items-center gap-1">
                    Ver detalhes →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* QUEM SOMOS */}
        <section className="py-24 px-4 bg-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white/10 rounded-2xl aspect-square flex items-center justify-center text-8xl">
              👨‍🔧
            </div>
            <div>
              <span className="section-tag">Quem somos</span>
              <h2 className="section-title">CONHEÇA O JUNIOR</h2>
              <p className="text-white/70 text-sm uppercase tracking-widest font-semibold mb-6 text-red-400">Fundador da Ômega Detailer</p>
              <p className="text-white/70 leading-relaxed mb-6">
                Com mais de 3 anos dedicados à estética automotiva em Itaquera, cuido de cada veículo como se fosse o meu. Polimento técnico, higienização profissional e proteção de pintura com produtos de linha premium e atenção aos detalhes que a maioria ignora.
              </p>
              <a href="https://wa.me/5511974228653?text=Olá%20Junior!%20Quero%20agendar%20um%20serviço." target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar com o Junior
              </a>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-tag">O que dizem</span>
              <h2 className="section-title">DEPOIMENTOS</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {depoimentos.map((d) => (
                <div key={d.nome} className="card">
                  <div className="flex gap-1 mb-4">
                    {'★'.repeat(d.nota).split('').map((s, i) => (
                      <span key={i} className="text-yellow-400">{s}</span>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">"{d.texto}"</p>
                  <p className="text-red-400 font-semibold text-sm">— {d.nome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PACOTES */}
        <section id="pacotes" className="py-24 px-4 bg-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-tag">Investimento</span>
              <h2 className="section-title">PACOTES DE SERVIÇOS</h2>
              <p className="text-white/60">Escolha o pacote ideal para o seu veículo. Solicite um orçamento personalizado.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pacotes.map((p) => (
                <div key={p.nome} className={`relative border-2 ${p.cor} rounded-2xl p-8 ${p.destaque ? 'bg-red-950/30' : 'bg-white/5'}`}>
                  {p.destaque && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MAIS ESCOLHIDO
                    </div>
                  )}
                  <h3 className="font-display text-3xl font-black text-white mb-1">{p.nome}</h3>
                  <p className="text-white/50 text-sm mb-6">{p.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-red-500 flex-shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/5511974228653?text=Olá!%20Tenho%20interesse%20no%20pacote." target="_blank" rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-lg font-bold text-sm transition-all ${p.destaque ? 'bg-red-600 hover:bg-red-700 text-white' : 'border border-white/30 hover:border-white/60 text-white'}`}>
                    Solicitar orçamento
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-tag">Dúvidas</span>
              <h2 className="section-title">PERGUNTAS FREQUENTES</h2>
            </div>
            <div className="space-y-3">
              {[
                { q: 'Quanto tempo leva o serviço de polimento?', r: 'O polimento técnico completo leva de 4 a 8 horas dependendo do estado da pintura e do tamanho do veículo. Agendamos em horários que não comprometam sua rotina.' },
                { q: 'Vocês atendem motoristas de aplicativo?', r: 'Sim! Temos pacotes especiais para motoristas de app que precisam manter o veículo sempre impecável. O preço é diferenciado para contratos mensais.' },
                { q: 'A vitrificação risca o carro?', r: 'Não. A vitrificação cria uma camada protetora sobre a pintura que dificulta riscos superficiais e facilita a limpeza. É uma das melhores proteções disponíveis.' },
                { q: 'Onde vocês estão localizados?', r: 'Estamos na Rua Augusto Carlos Bauman, 591, Itaquera, Zona Leste de São Paulo. Atendemos de segunda a sexta das 8h às 18h e sábados das 8h às 14h.' },
                { q: 'Como agendar?', r: 'O agendamento é feito pelo WhatsApp (11) 97422-8653. Respondemos em minutos durante o horário comercial.' },
              ].map(({ q, r }) => (
                <details key={q} className="card cursor-pointer group">
                  <summary className="font-semibold text-white text-sm md:text-base flex justify-between items-center gap-4 list-none">
                    {q}
                    <span className="text-red-500 flex-shrink-0 text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-white/60 text-sm mt-4 leading-relaxed">{r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="py-24 px-4 bg-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Onde estamos</span>
              <h2 className="section-title">LOCALIZAÇÃO</h2>
              <div className="space-y-4 text-white/70">
                <p>📍 Rua Augusto Carlos Bauman, 591<br />Itaquera, Zona Leste — São Paulo/SP</p>
                <p>📱 (11) 97422-8653</p>
                <p>🕐 Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 14h</p>
              </div>
              <a href="https://wa.me/5511974228653" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
                Falar no WhatsApp
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-white/10 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.!2d-46.4653!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMjcnNTUuMSJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Localização Ômega Detailer Itaquera"
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 px-4 bg-red-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6">
              SEU CARRO PRONTO<br />PARA IMPRESSIONAR
            </h2>
            <p className="text-white/80 mb-10 text-lg">Agende agora e receba um diagnóstico gratuito da pintura do seu veículo.</p>
            <a href="https://wa.me/5511974228653?text=Olá!%20Quero%20agendar%20e%20receber%20o%20diagnóstico%20gratuito." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-red-600 font-black text-xl px-10 py-5 rounded-xl hover:bg-white/90 transition-all hover:-translate-y-1">
              Agendar pelo WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black border-t border-white/10 py-12 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-2xl font-black text-white">ÔMEGA <span className="text-red-500">DETAILER</span></span>
            <div className="flex gap-6 text-sm text-white/50">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              {servicos.map(s => (
                <Link key={s.slug} href={`/servicos/${s.slug}`} className="hover:text-white transition-colors hidden md:inline">{s.nome}</Link>
              ))}
            </div>
            <p className="text-white/30 text-xs">© 2025 Ômega Detailer · Itaquera, São Paulo</p>
          </div>
        </footer>
      </main>
    </>
  )
}
