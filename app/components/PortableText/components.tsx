import type { PortableTextComponents } from '@portabletext/react'
import TypeVideo from './TypeVideo'
import TypeCode from './TypeCode'

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className='mt-2 mb-6 col-auto'>{children}</p>,
    h2: ({ children }) => <h2 className='text-xl font-semibold'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-l'>{children}</h3>,
  },

  list: {
    bullet: ({ children }) => (
      <ul className='list-disc mt-2 mb-6'>{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className='ml-8'>{children}</li>,
  },
  types: {
    code: TypeCode,
    videoLink: TypeVideo,
  },
}
