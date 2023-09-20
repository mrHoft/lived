import styles from './header.module.css'
import { useDomainByUrl } from 'hooks/useDomain'
import { useRouter } from 'next/router'
import { useState } from 'react'

const DOMAIN = process.env.DOMAIN

export default function Header() {
  const router = useRouter()
  const url = DOMAIN || router.basePath
  const [sub] = useState(useDomainByUrl())
  console.log(sub, sub === 'auth-lived')

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href={`https://auth-lived.${url}`} className={sub === 'auth-lived' ? styles.current : undefined}>
              auth
            </a>
          </li>
          <li>
            <a href={`https://internal-lived.${url}`} className={sub === 'internal-lived' ? styles.current : undefined}>
              internal
            </a>
          </li>
          <li>
            <a href={`https://public-lived.${url}`} className={sub === 'public-lived' ? styles.current : undefined}>
              public
            </a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}
