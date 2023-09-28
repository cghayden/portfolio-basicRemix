import { z } from 'zod'
import { baseTypedObjectZ } from '~/types/block'
import type { PortableTextTypeComponentProps } from '@portabletext/react'
import { useMemo } from 'react'

export const typedObjectCodeZ = baseTypedObjectZ.extend({
  _type: z.literal('code'),
  code: z.string().optional(),
  language: z.string().optional(),
  highlightedLines: z.array(z.number()).optional(),
})

export type TypedObjectCode = z.infer<typeof typedObjectCodeZ>

export default function TypeCode(
  props: PortableTextTypeComponentProps<TypedObjectCode>
) {
  // Now we still get Zod's strict parsing on this specific TypedObject
  const value = useMemo(
    () => typedObjectCodeZ.parse(props.value),
    [props.value]
  )
  const language = value?.language === 'groq' ? 'json' : value.language

  return value.code ? <div>{value.code}</div> : null
}
