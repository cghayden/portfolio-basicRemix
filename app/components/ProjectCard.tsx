import { Link } from '@remix-run/react'
import type { Project } from '~/types/project'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li
      key={project.name}
      className='w-80 bg-lime-100 p-3 rounded-lg text-green-950 flex flex-col'
    >
      <div>
        <Link to={`projects/${project.name}`}>
          <h2 className='text-2xl'>{project.name}</h2>
        </Link>
      </div>
      <p className='flex-grow grid place-content-center'>
        {project.shortSummary}
      </p>
      <div className='flex justify-around flex-wrap'>
        <Link
          className=' text-sky-500 py-2 px-2 font-bold flex justify-center'
          to={project.slug.current}
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
