import { z } from 'zod'

// Not making this nullable as all my queries check for slug
export const slugZ = z.object({
  _type: z.string(),
  current: z.string(),
})
