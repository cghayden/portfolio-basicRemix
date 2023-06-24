import { json, type LoaderArgs, type V2_MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import groq from 'groq'
import { client } from '~/sanity/client'
import { projectsZ } from '~/types/project'

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
  console.log('projects', projects)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Corey Hayden</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <Link to={`projects/${project.name}`}>{project.name}</Link>
            <p>{project.shortSummary}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
