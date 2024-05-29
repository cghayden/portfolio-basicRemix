import { type LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { client } from '~/sanity/client'
import { PortableText } from '@portabletext/react'
import { projectZ } from '~/types/project'
import { components } from '~/components/PortableText/components'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const projectSlug = params.slug
  const projectQuery = `*[slug.current == "${projectSlug}" && !(_id in path("drafts.**"))][0]`

  const project = await client
    .fetch(projectQuery)
    .then((res) => (res ? projectZ.parse(res) : null))

  if (!project) {
    throw new Response('Not found', { status: 404 })
  }

  return project
}

export default function ProjectRoute() {
  const project = useLoaderData<typeof loader>()
  return (
    <div className=' bg-gray-200 shadow-lg p-6 rounded-lg text-green-950 md:w-4/5  mx-auto max-w-[850px]'>
      <h1 className='text-2xl font-bold text-center'>{project.name}</h1>
      <ul className='w-[350px] md:w-full mx-auto flex flex-col md:flex-row justify-around py-4'>
        {project.links.map((link) => {
          console.log('link', link)
          return (
            <li key={link.url} className='text-blue-900 my-2'>
              <Link
                className='text-blue-900'
                to={link.url}
                target='_blank'
                rel='noreferrer noopener'
              >
                {link.description}
              </Link>
            </li>
          )
        })}
      </ul>
      <div>
        <PortableText value={project.description} components={components} />
      </div>
    </div>
  )
}
