import type { PortableTextTypeComponentProps } from '@portabletext/react'
import React from 'react'
import { z } from 'zod'

import { baseTypedObjectZ } from '~/types/block'

export const typedObjectVideoZ = baseTypedObjectZ.extend({
  _type: z.literal('videoLink'),
  url: z.string().url().nullable(),
  description: z.string().nullable(),
})

export type TypedObjectVideo = z.infer<typeof typedObjectVideoZ>

export default function TypeVideo(
  props: PortableTextTypeComponentProps<TypedObjectVideo>
) {
  // Now we still get Zod's strict parsing on this specific TypedObject
  const { url, description } = React.useMemo(
    () => typedObjectVideoZ.parse(props.value),
    [props.value]
  )

  if (!url) {
    return null
  }

  return (
    <div className=' mx-auto mb-5 md:float-left md:mr-8 md:mb-6 w-[225px] h-[400px]'>
      <video
        key={url}
        controls
        // width='320'
        // height='180'
        className='col mx-auto w-full h-full'
      >
        <source src={url} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
