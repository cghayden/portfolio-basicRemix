import type { Project } from '~/types/project'
// import ProjectListItem from './ProjectListItem'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h2 className='text-center text-2xl font-semibold mb-6'>Projects</h2>
      {/* <div className='grid'> */}
      {/* <div> */}
      {/* <ul className='flex flex-col gap-4 pr-4 md:pr-8 lg:pr-12'>
          {projects.map((project) => (
            <ProjectListItem key={project._id} project={project} />
          ))}
        </ul> */}
      <ul
        className='flex flex-col md:grid mx-auto gap-4 place-items-center place-content-center'
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 400px))',
        }}
      >
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ul>
      {/* </div> */}
    </div>
  )
}
