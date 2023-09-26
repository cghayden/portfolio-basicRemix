import type { LinksFunction } from '@remix-run/node'
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
