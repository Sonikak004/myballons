import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://myballoonsmyprops.com/sitemap.xml',
  }
}
