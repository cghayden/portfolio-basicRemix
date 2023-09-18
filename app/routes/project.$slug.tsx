import { type LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { client } from '~/sanity/client'
import { PortableText } from '@portabletext/react'
import { projectZ } from '~/types/project'

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
    <div className=' bg-lime-100 p-4 rounded-lg text-green-950 w-4/5'>
      <h1>{project.name}</h1>
      <PortableText value={project.description} />
    </div>
  )
}
