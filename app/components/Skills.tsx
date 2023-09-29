export default function Skills() {
  return (
    <div>
      <h2 className='text-xl font-semibold text-center'>Skills</h2>
      <div className='flex justify-center'>
        <div>
          <h3 className='text-l font-semibold pl-4'>Professional</h3>
          <ul className='pl-8'>
            <li>Determination</li>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Persistence</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3 className='text-l font-semibold pl-4'>Technical</h3>
          <ul className='pl-8'>
            <li>
              Javascript{' '}
              <ul className='list-disc pl-8 text-sm'>
                <li>React</li> <li>Node</li> <li>NextJs</li>
                <li>Gatsby</li>
                <li>Remix</li>
              </ul>
            </li>
            <li>HTML</li>
            <li>
              CSS
              <ul className='list-disc pl-8 text-sm'>
                <li>Styled Components</li> <li>Tailwind</li>
              </ul>
            </li>
            <li>Prisma</li>
            <li>MongoDb</li>
            <li>Web Scrapers</li>
            <li>Sanity CMS</li>
            <li>Stripe</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
