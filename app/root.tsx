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

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Philosopher&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Urbanist:wght@300;400;500;600&family=Ysabeau:wght@1;100;200;300;400;500;600&display=swap');
        </style>
        <Meta />
        <Links />
      </head>
      <body
        className=' 
       text-yellow-100 p-4 font-redHat'
        style={{ backgroundColor: 'darkcyan' }}
      >
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
// bg-gradient-to-br from-green-950 from-60% to-yellow-50
