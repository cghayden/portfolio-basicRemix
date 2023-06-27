// source for typing Sanity block content:
// https://www.simeongriggs.dev/type-safe-groq-queries-for-sanity-data-with-zod#s-305a44248113
//
// https://github.com/SimeonGriggs/simeonGriggs/blob/main/app/types/article.ts

import { z } from 'zod'
import { typedObjectZ } from './block'
import { slugZ } from './slug'

export const projectZ = z.object({
  _id: z.string(),
  name: z.string(),
  shortSummary: z.string(),
  githubUrl: z.string(),
  liveUrl: z.string().optional(),
  slug: slugZ,
  description: z.array(typedObjectZ),
})

export const projectsZ = z.array(projectZ)

export type Project = z.infer<typeof projectZ>
