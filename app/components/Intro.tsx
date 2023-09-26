export default function Intro() {
  return (
    <div className='col-span-2 flex gap-5 sm:gap-10 max-w-[700px] items-center flex-wrap sm:flex-nowrap m-auto pb-4 md:pb-0'>
      <img
        className='object-contain rounded-full w-32 m-auto'
        src='https://res.cloudinary.com/haydentech/image/upload/v1695244152/portfolio/IMG_9382.jpg'
        alt='profile pic'
      />
      <p>
        I'm a developer based in Foxborough, MA. I have a passion for learning
        and problem solving. I taught myself to code while managing a busy
        household with my amazing wife and our two beautiful and active
        daughters.{' '}
      </p>
    </div>
  )
}
