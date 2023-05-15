import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const links = [{
  label: 'Home',
  route: '/'
},{
  label: 'About',
  route: '/about'
}
]

export const metadata = {
  title: 'App with nextjs',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}><nav>
        <ul className="flex  gap-5 p-5">
          {links.map(({label, route})=>(
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
      </body>
    </html>
  )
}
