function LinkedInSvg({ w = '32', h = '32' }: { w: string; h: string }) {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='30' height='30' rx='17' fill='#0077B5'></rect>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M23.083 24.083H19.5V19.167C19.5 17.85 19.06 16.967 17.607 16.967C16.576 16.967 16.01 17.575 15.706 18.142C15.61 18.312 15.587 18.55 15.587 18.79V24.083H12.003V13.003H15.396V14.55C15.952 13.725 16.896 12.75 18.764 12.75C21.385 12.75 23.083 14.467 23.083 18.142V24.083ZM8.749 11.25C7.507 11.25 6.5 10.243 6.5 9.001C6.5 7.759 7.507 6.752 8.749 6.752C9.991 6.752 10.999 7.759 10.999 9.001C10.999 10.243 9.991 11.25 8.749 11.25ZM6.916 24.083H10.5V13.003H6.916V24.083Z'
        fill='white'
      ></path>
    </svg>
  )
}

export default LinkedInSvg
