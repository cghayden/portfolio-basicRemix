import { json, type LoaderArgs, type V2_MetaFunction } from '@remix-run/node'
import { useLoaderData, useRouteError } from '@remix-run/react'
import groq from 'groq'
import { client } from '~/sanity/client'
import { projectsZ } from '~/types/project'
import { ErrorContainer } from '~/components/Error'
import ProjectCard from '~/components/ProjectCard'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Corey Hayden' },
    { name: 'description', content: 'Portfolio' },
  ]
}

export const loader = async ({ request }: LoaderArgs) => {
  const query = groq`*[_type == "project" && !(_id in path("drafts.**"))]`
  const projects = await client
    .fetch(query)
    .then((res) => (res ? projectsZ.parse(res) : null))

  if (!projects) {
    throw new Response('Not found', { status: 404 })
  }

  return json({ projects })
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>()

  return (
    <div>
      <h2 className='text-center text-3xl mb-6'>Projects</h2>
      <div className='grid'>
        <ul className='flex flex-col sm:flex-row mx-auto gap-8 items-center'>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
