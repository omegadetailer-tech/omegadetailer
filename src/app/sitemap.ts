import { MetadataRoute } from 'next'
import { artigos } from './blog/page'

const servicos = [
  'polimento-vitrificacao',
  'higienizacao-interna',
  'cristalizacao-parabrisa',
  'enceramento-tecnico',
  'oxi-sanitizacao',
  'revitalizacao-farois',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://omegadetailer.com.br'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...servicos.map(slug => ({
      url: `${base}/servicos/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...artigos.map(a => ({
      url: `${base}/blog/${a.slug}`,
      lastModified: new Date(a.data),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
