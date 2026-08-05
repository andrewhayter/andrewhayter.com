import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Andrew Hayter - Product Engineer',
    short_name: 'Andrew Hayter',
    description: 'Independent product engineer building content systems, data pipelines, and the infrastructure behind them.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F6F4EF',
    theme_color: '#161513',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
