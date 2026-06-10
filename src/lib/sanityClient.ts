import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'te3mcunp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: 'skDfcxQhES4tBfeSahRSYtdbAeou02EXLI8fusOx6mNKWkEQDv8SI3lDr4vszPReOyV8Ay8QETt4ZxIxGc1M3xVFnzwE5oFknsc1pomhDsAhqj6BgVC7C7h2cF5AuuufrBqvXa2Wtb1uZGcmSsKCg1NPs6Bji6JZIPquUEeBcUKMb6vz0pHC',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
