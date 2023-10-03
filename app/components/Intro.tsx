export default function Intro() {
  return (
    <div className='col-span-2 flex flex-col gap-5 sm:gap-8  max-w-[700px] items-center m-auto pb-4 md:pb-0'>
      <div className='flex flex-col gap-6 items-center'>
        <img
          className='object-cover w-32 h-32 rounded-full '
          src='https://res.cloudinary.com/haydentech/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1695838004/portfolio/83F69C58-BC6D-465D-B557-437264203E64_1_201_a.jpg'
          alt='profile pic'
        />
        <p className='text-lg text-blue-600 font-serif '>
          When you can't find what you need, build it.
        </p>
      </div>
      <p>
        I'm a self-taught developer based in Foxborough, MA. I have a passion
        for learning, problem solving, and creating simple solutions to help
        people with common everyday problems. I taught myself to code while
        managing a busy household with my amazing wife and our two beautiful and
        active daughters. I am a determined worker with a strong work ethic and
        a drive to achieve the best possible solutions. I love the process of
        learning, and am always striving to fill in gaps in my knowledge and
        refine my skills. I work from a customer service mindset, and am always
        seeking to craft the solutions that will serve users in the best
        possible way. The projects I have worked on were all inspired by
        something I wanted but could not find, which I believe is the essence of
        software development. In the end, I have succeeded in learning software
        development and in creating the tools I desired. Please explore the
        projects listed below for a more detailed discussion of each one.
      </p>
    </div>
  )
}
