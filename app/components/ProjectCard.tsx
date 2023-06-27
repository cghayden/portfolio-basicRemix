import { Link } from '@remix-run/react'
import type { Project } from '~/types/project'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li
      key={project.name}
      className='w-80 h-64 bg-lime-100 p-3 rounded-lg text-green-950 grid gap-5 grid-rows-projectCard'
    >
      {/* 2rem 1fr 80px */}
      <div>
        <Link to={`projects/${project.name}`}>
          <h2 className='text-2xl'>{project.name}</h2>
        </Link>
      </div>
      <p className='flex-grow grid place-content-center leading-relaxed place-self-start'>
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
