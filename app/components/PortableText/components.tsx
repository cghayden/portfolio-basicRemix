import type { PortableTextComponents } from '@portabletext/react'
import TypeVideo from './TypeVideo'
import TypeCode from './TypeCode'

// const TypeCode = ({ value, isInline }) => {
//   return <div>{value.code}</div>
// }

export const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className='my-2 col-auto'>{children}</p>,
  },
  types: {
    code: TypeCode,
    videoLink: TypeVideo,
  },
}
