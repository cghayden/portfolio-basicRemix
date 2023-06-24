import { z } from 'zod'
import { schemaForType } from './schemaForType'

// import type {TypedObject} from 'sanity'
export declare interface TypedObject {
  [key: string]: unknown
  _type: string
}

// first declare type for content blocks:

// type for sanity block
export const baseTypedObjectZ = z
  .object({
    _type: z.string(),
    _key: z.string(),
  })
  .passthrough()

//This helper function will generate a zod parser for a given type
export const typedObjectZ = schemaForType<TypedObject>()(baseTypedObjectZ)

export const typedObjectBlockZ = baseTypedObjectZ.extend({
  style: z.string().optional(),
})
export type TypedObjectBlock = z.infer<typeof typedObjectBlockZ>
