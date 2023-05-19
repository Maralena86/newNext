import Link from 'next/link'

const links = [{
    label: 'Home',
    route: '/'
  },{
    label: 'About',
    route: '/about'
  }
  ,{
    label: 'Users',
    route: '/users'
  }
  ]
  export function Navigation(){
    return(
        <nav>
        <ul className="flex  gap-5 p-5">
          {links.map(({label, route})=>(
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    ) 
  }