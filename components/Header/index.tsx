import styles from './header.module.css'
import { useDomainByUrl } from 'hooks/useDomain'
import { useRouter } from 'next/router'

const DOMAIN = process.env.DOMAIN

export default function Header() {
  const router = useRouter()
  const url = DOMAIN || router.basePath
  const subDomain = useDomainByUrl()
  console.log(subDomain)

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href={`https://auth-lived.${url}`} className={subDomain === 'auth-lived' ? styles.current : undefined}>
              auth
            </a>
          </li>
          <li>
            <a href={`https://internal-lived.${url}`} className={subDomain === 'internal-lived' ? styles.current : undefined}>
              internal
            </a>
          </li>
          <li>
            <a href={`https://public-lived.${url}`} className={subDomain === 'public-lived' ? styles.current : undefined}>
              public
            </a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}
