import Link from 'next/link'

import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
