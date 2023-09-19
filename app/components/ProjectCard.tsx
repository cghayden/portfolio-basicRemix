import { Link, useLocation } from '@remix-run/react'
import type { Project } from '~/types/project'

export default function ProjectCard({ project }: { project: Project }) {
  const location = useLocation()
  const projectHref =
    location.pathname === '/projects'
      ? `../project/${project?.slug?.current}/`
      : `project/${project?.slug?.current}`
  return (
    <li
      key={project.name}
      className='w-80 h-64 bg-lime-100 p-3 rounded-lg text-green-950 grid gap-5 grid-rows-projectCard'
    >
      <div>
        <Link to={projectHref}>
          <h2 className='text-2xl text-center text-blue-900 font-semibold'>
            {project.name}
          </h2>
        </Link>
      </div>
      <p className='flex-grow grid place-content-center leading-relaxed place-self-start'>
        {project.shortSummary}
      </p>
      <div className='flex justify-around flex-wrap'>
        <Link
          className=' text-sky-500 py-2 px-2 font-bold flex justify-center'
          to={`project/${project.slug.current}`}
        >
          Tell Me More
        </Link>
        <Link
          className=' text-sky-500 py-2 px-2 font-bold flex justify-center'
          to={project.githubUrl}
        >
          View on Github
        </Link>
        {project.liveUrl && (
          <Link
            className=' text-sky-500 py-2 px-2 font-bold flex justify-center'
            to={project.liveUrl}
          >
            View me in Action
          </Link>
        )}
      </div>
    </li>
  )
}
