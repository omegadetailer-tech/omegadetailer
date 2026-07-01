import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://omegadetailer.com.br'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/servicos/polimento-vitrificacao`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicos/higienizacao-interna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicos/cristalizacao-parabrisa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicos/enceramento-tecnico`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicos/oxi-sanitizacao`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/servicos/revitalizacao-farois`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}