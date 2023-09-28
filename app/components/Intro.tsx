export default function Intro() {
  return (
    <div className='col-span-2 flex flex-col gap-5 sm:gap-8 sm:flex-row max-w-[700px] items-center m-auto pb-4 md:pb-0'>
      <img
        className='object-cover w-32 h-32 rounded-full '
        src='https://res.cloudinary.com/haydentech/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1695838004/portfolio/83F69C58-BC6D-465D-B557-437264203E64_1_201_a.jpg'
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
