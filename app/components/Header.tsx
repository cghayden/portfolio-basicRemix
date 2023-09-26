import { Link } from '@remix-run/react'

export default function Header() {
  return (
    <nav className='md:flex mb-4 items-center pt-4 md:p-4 '>
      <Link to='/'>
        <h1 className='text-4xl text-center'>Corey Hayden</h1>
      </Link>
      <ul className='flex justify-around ml-auto py-4 md:py-0'>
        {/* <Link to='/projects'>
          <li className='md:px-8'>Projects</li>
        </Link> */}
        <Link to='/about'>
          <li className='md:px-8'>About Me</li>
        </Link>
        {/* <Link to='/projects'>
          <li className='md:px-8'>Projects</li>
        </Link> */}
        <Link to='/contact'>
          <li className='md:px-8'>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}
