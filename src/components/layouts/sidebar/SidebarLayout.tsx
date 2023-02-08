/* import { signOut, useSession } from 'next-auth/react' */
import Link from 'next/link'
import styles from './SidebarLayout.module.css'

export interface ISidebarLayout {}

const SidebarLayout = () => {
  /* const { status } = useSession() */

  return (
    <nav className={styles.nav}>
      {/* {status === 'authenticated' ? (
        <>
          <p>Signed in</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <Link href="api/auth/signin">Sign in</Link>
      )} */}
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}

export default SidebarLayout
