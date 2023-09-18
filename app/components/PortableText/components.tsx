import type { PortableTextComponents } from '@portabletext/react'

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className='my-4'>{children}</p>,
  },
}
