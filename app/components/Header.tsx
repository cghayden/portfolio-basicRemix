export default function Header() {
  return (
    <nav className='md:flex mb-4 items-center '>
      <h1 className='text-4xl'>Corey Hayden</h1>
      <ul className='flex justify-around ml-auto py-4 md:py-0'>
        <li className='md:px-8'>Projects</li>
        <li className='md:px-8'>About Me</li>
        <li className='md:px-8'>Etc.</li>
      </ul>
    </nav>
  )
}
