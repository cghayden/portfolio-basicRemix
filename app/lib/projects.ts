export type Project = {
  name: string
  description: string
  github: string
  href: string
}

const projects: Project[] = [
  {
    name: 'hello mathematician',
    description: 'a no nonsense flashcards style math practice',
    github: 'https://github.com/cghayden/hello-mathematician',
    href: 'https://hellomathematician.com',
  },
  {
    name: 'westy coffee',
    description: 'a simple ecommerce website built for a hobby coffee roaster',
    github: '',
    href: 'https://hellomathematician.com',
  },
]

export { projects }
