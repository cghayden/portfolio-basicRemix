import { Link } from '@remix-run/react'
import SocialLinks from './SocialLinks'

export default function Header() {
  return (
    <nav className='md:flex items-center justify-center pt-5 md:p-7 '>
      <div className='flex flex-col gap-2 items-center '>
        {/* <div className='flex flex-col gap-2 items-center md:items-start '> */}
        <Link to='/'>
          <h1 className='text-4xl text-center'>Corey Hayden</h1>
        </Link>
        <div className='flex gap-2 items-center'>
          <a href='mailto:cghayden@gmail.com'>cghayden@gmail.com</a>
          <SocialLinks linkedInHandle={'corey-hayden'} />
        </div>
      </div>
      {/* <ul className='flex justify-around ml-auto py-4 md:py-0'> */}
      {/* <Link to='/projects'>
          <li className='md:px-8'>Projects</li>
        </Link> */}
      {/* <Link to='/about'>
          <li className='md:px-8'>About Me</li>
        </Link> */}
      {/* <Link to='/projects'>
          <li className='md:px-8'>Projects</li>
        </Link> */}
      {/* <Link to='/contact'>
          <li className='md:px-8'>Contact</li>
        </Link> */}
      {/* </ul> */}
    </nav>
  )
}
