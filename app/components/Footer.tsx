import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <div className='mx-auto w-full flex flex-col pt-4 pb-6 px-4 mt-4'>
      <div className='flex justify-between w-full max-w-2xl mx-auto items-center'>
        <div>Corey Hayden</div>
        {/* <a href='mailto:cghayden@gmail.com'>cghayden@gmail.com</a> */}
        <SocialLinks
          linkedInHandle={'corey-hayden'}
          githubHandle={'cghayden'}
          email={'cghayden@gmail.com'}
        />{' '}
      </div>
    </div>
  )
}
