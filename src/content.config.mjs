// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const scenarios = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/scenarios' }),
  schema: z.object({
    title: z.string(),
    theme: z.string(),
    description: z.string(),
  }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { scenarios }
