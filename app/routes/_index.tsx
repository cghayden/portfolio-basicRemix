import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Intro from '~/components/Intro'
import { client } from '~/sanity/client'
import { projectsZ } from '~/types/project'
import groq from 'groq'
import Projects from '~/components/Projects'
import type { LinksFunction } from '@remix-run/node' // or cloudflare/deno

import styles from '~/styles/indexStyles.css'
import Education from '~/components/Education'
// import Skills from '~/components/Skills'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const loader = async ({ request }: LoaderFunctionArgs) => {
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
    <div className='gap-8 md:gap-y-12 flex flex-col pb-12 px-8 max-w-5xl mx-auto'>
      <Intro />
      <Education />
      {/* <Skills /> */}
      <Projects projects={projects} />
    </div>
  )
}
