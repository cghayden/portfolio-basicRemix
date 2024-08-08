export default function Intro() {
  return (
    <div className='col-span-2 flex flex-col gap-5 sm:gap-8  max-w-[700px] items-center m-auto pb-4 md:pb-0'>
      <div className='flex flex-col gap-6 items-center'>
        <img
          className='object-cover w-32 h-32 rounded-full '
          src='https://res.cloudinary.com/haydentech/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1695838004/portfolio/83F69C58-BC6D-465D-B557-437264203E64_1_201_a.jpg'
          alt='profile pic'
        />
        {/* <p className='text-lg text-blue-600 font-serif '>
          When you can't find what you need, build it.
        </p> */}
      </div>
      <p>
        I'm a self-taught developer with a passion for learning and problem
        solving. Over many years of managing a busy household with my wife and
        our two active daughters, my strong work ethic and determination have
        enabled me to succeed in building applications that I needed, and which
        have been used in the real world. I love the process of learning, and am
        always striving to extend my knowledge and refine my skills. I work from
        a customer service mindset, and am always seeking to craft solutions
        that will serve users in the best possible way.
      </p>
      <p>
        I am comfortable working across the full stack, including databases and
        shell scripting. I work mostly with JavaScript / TypeScript / NodeJs and
        associated frameworks and libraries but am comfortable working with
        other languages as well.
      </p>
    </div>
  )
}
