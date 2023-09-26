import { Link, useLocation } from '@remix-run/react'
import type { Project } from '~/types/project'

export default function ProjectListItem({ project }: { project: Project }) {
  const location = useLocation()
  const projectHref =
    location.pathname === '/projects'
      ? `../project/${project?.slug?.current}/`
      : `project/${project?.slug?.current}`
  return (
    <li key={project._id}>
      <Link to={projectHref}>
        <h3 className='text-xl font-semibold  text-blue-900'>{project.name}</h3>
        <p className='ml-8'>{project.shortSummary}</p>
      </Link>
    </li>
  )
}
