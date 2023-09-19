import { type LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { client } from '~/sanity/client'
import { PortableText } from '@portabletext/react'
import { projectZ } from '~/types/project'
import { components } from '~/components/PortableText/components'

export const loader = async ({ params }: LoaderArgs) => {
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
  console.log('project', project)
  return (
    <div className=' bg-lime-100 p-6 rounded-lg text-green-950 md:w-4/5  w-11/12 mx-auto'>
      <h1 className='text-2xl font-bold text-center'>{project.name}</h1>
      <ul className='flex justify-around py-4'>
        {project.links.map((link) => (
          <li key={link.url}>
            <Link className='text-blue-900 ' to={link.url}>
              {link.description}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <PortableText value={project.description} components={components} />
      </div>
    </div>
  )
}
