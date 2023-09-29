import { Link, useLocation } from '@remix-run/react'
import type { Project } from '~/types/project'

export default function ProjectListItem({ project }: { project: Project }) {
  const location = useLocation()
  const projectHref =
    location.pathname === '/projects'
      ? `../project/${project?.slug?.current}/`
      : `project/${project?.slug?.current}`
  console.log('project', project)
  return (
    <li key={project._id} className=''>
      <Link to={projectHref}>
        <h3 className='text-xl font-semibold  text-blue-900'>{project.name}</h3>

        <p className='ml-8 py-4'>{project.shortSummary}</p>
        <ul className='grid grid-cols-4 gap-2 '>
          {project.tech?.map((techItem) => (
            <li key={techItem} className='text-sm italic px-2'>
              {techItem}
            </li>
          ))}
        </ul>
      </Link>
    </li>
  )
}
