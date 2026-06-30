import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://omegadetailer.com.br'),
  title: {
    default: 'Ômega Detailer | Estética Automotiva em Itaquera, São Paulo',
    template: '%s | Ômega Detailer',
  },
  description: 'Especialistas em polimento, vitrificação, higienização e proteção de pintura em Itaquera, Zona Leste de São Paulo. Agende pelo WhatsApp.',
  keywords: ['estética automotiva Itaquera', 'polimento automotivo São Paulo', 'vitrificação carro Zona Leste', 'higienização interna carro SP', 'detailing Itaquera'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://omegadetailer.com.br',
    siteName: 'Ômega Detailer',
    title: 'Ômega Detailer | Estética Automotiva em Itaquera, São Paulo',
    description: 'Especialistas em polimento, vitrificação e proteção de pintura em Itaquera, Zona Leste de São Paulo.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ômega Detailer Estética Automotiva' }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://omegadetailer.com.br' },
  robots: { index: true, follow: true },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Ômega Detailer',
  description: 'Estética automotiva profissional em Itaquera, São Paulo. Polimento, vitrificação, higienização e proteção de pintura.',
  url: 'https://omegadetailer.com.br',
  telephone: '+55-11-97422-8653',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Augusto Carlos Bauman, 591',
    addressLocality: 'Itaquera',
    addressRegion: 'SP',
    postalCode: '08210-000',
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -23.5505, longitude: -46.4653 },
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-14:00'],
  priceRange: 'R$R$',
  image: 'https://omegadetailer.com.br/og-image.jpg',
  sameAs: [
    'https://www.instagram.com/omega.detailer.pro',
    'https://www.tiktok.com/@omega.detailer',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511974228653?text=Olá!%20Vim%20pelo%20site%20e%20quero%20agendar%20um%20serviço."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm4.4 12c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-1.3-.6-2.1-1.1-3-2.5-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4 0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.2 1.7 2.5 4 3.5 1.5.6 2 .7 2.7.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3z"/>
      </svg>
    </a>
  )
}
