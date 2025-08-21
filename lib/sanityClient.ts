import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "0l3twlk8",  // from sanity.json
  dataset: 'production',
  apiVersion: '2025-08-20',    // use today’s date
  useCdn: false,                // `false` if you need fresh data
})


