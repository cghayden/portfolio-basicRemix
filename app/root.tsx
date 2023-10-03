import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import styles from './tailwind.css'

import Header from './components/Header'
import Footer from './components/Footer'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const meta: MetaFunction = () => {
  return [
    { title: 'Corey Hayden | Web Developer' },
    {
      property: 'og:title',
      content: 'Corey Hayden | Web Developer',
    },
    {
      name: 'description',
      content:
        'Corey Hayden is a web developer with full stack experience able to maintain a website for your small business or work on larger web applications.  Based out of Foxboro, Massachusetts',
    },
    {
      name: 'og:description',
      content:
        'Corey Hayden: web developer with full stack experience with the skills to develop and maintain a website for your small business or larger web applications.  Based out of Foxboro, Massachusetts',
    },
  ]
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body
        className=' 
       text-gray-800 bg-gray-50 font-redHat'
        style={{ backgroundColor: 'whitesmoke' }}
      >
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
// bg-gradient-to-br from-green-950 from-60% to-yellow-50
