import styles from './header.module.css'
import { useDomainByUrl } from 'hooks/useDomain'
import { useRouter } from 'next/router'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

export default function Header() {
  const router = useRouter()
  const url = DOMAIN || router.basePath
  const subDomain = useDomainByUrl()

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href={`http://auth.${url}`} className={subDomain === 'auth' ? styles.current : undefined}>
              auth
            </a>
          </li>
          <li>
            <a href={`http://internal.${url}`} className={subDomain === 'internal' ? styles.current : undefined}>
              internal
            </a>
          </li>
          <li>
            <a href={`http://public.${url}`} className={subDomain === 'public' ? styles.current : undefined}>
              public
            </a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}
