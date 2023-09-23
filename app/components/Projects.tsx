import type { Project } from '~/types/project'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h2 className='text-center text-3xl mb-6'>Projects</h2>
      <div className='grid'>
        <ul className='flex flex-col sm:flex-row mx-auto gap-8 items-center flex-wrap justify-center'>
          {projects?.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </ul>
      </div>
    </div>
  )
}
