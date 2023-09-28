import LinkedInSvg from './Icons/LinkedIn'

export default function SocialLinks({
  instagramHandle,
  twitterHandle,
  facebookId,
  linkedInHandle,
}: {
  instagramHandle?: string | null
  twitterHandle?: string | null
  facebookId?: string | null
  linkedInHandle?: string | null
}) {
  return (
    <div className='flex justify-center items-center my-1'>
      {/* {instagramHandle && (
        <a
          className='mx-2'
          href={`https://www.instagram.com/${instagramHandle}`}
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Link to instagram'
        >
          <span>
            <InstagramSvg w={'24'} h={'24'} />
          </span>
        </a>
      )} */}
      {linkedInHandle && (
        <a
          className='mx-2'
          href={`https://www.linkedin.com/in/${linkedInHandle}`}
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Link to twitter'
        >
          <span>
            <LinkedInSvg w={'30'} h={'30'} />
          </span>
        </a>
      )}
      {/* {facebookId && (
        <a
          className='mx-2'
          href={`https://facebook.com/${facebookId}`}
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Link to facebook'
        >
          <span>
            <FacebookSvg w={'30'} h={'30'} />
          </span>
        </a>
      )} */}
    </div>
  )
}
