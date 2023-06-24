import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'nq4bqv7r',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-06-23',
})
