import type { Project } from '~/types/project'
import ProjectListItem from './ProjectListItem'

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h2 className='text-center text-xl mb-4'>Projects</h2>
      {/* <div className='grid'> */}
      <div>
        <ul className='flex flex-col gap-4 pr-4 md:pr-8 lg:pr-12'>
          {projects.map((project) => (
            <ProjectListItem key={project._id} project={project} />
          ))}
        </ul>
        {/* <ul className='flex flex-col sm:flex-row mx-auto gap-8 items-center flex-wrap justify-center'>
          {projects?.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </ul> */}
      </div>
    </div>
  )
}
