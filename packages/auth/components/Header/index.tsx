import styles from './.module.css'
import { useDomainByUrl } from 'hooks/useDomain'
import { useEffect, useRef, RefObject } from 'react'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? 'vercel.app'

type TRefAnchors<T> = {
  'auth-lived': RefObject<T>
  'internal-lived': RefObject<T>
  'public-lived': RefObject<T>
}

type TRef = TRefAnchors<HTMLAnchorElement>

export default function Header() {
  const ref: TRef = {
    'auth-lived': useRef(null),
    'internal-lived': useRef(null),
    'public-lived': useRef(null),
  }
  const sub = useDomainByUrl()

  useEffect(() => {
    const anchor = ref[sub as keyof TRef]
    if (anchor && anchor.current) anchor.current.style.color = 'red'
  }, [sub])

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href={`https://auth-lived.${DOMAIN}`} ref={ref['auth-lived']}>
              auth
            </a>
          </li>
          <li>
            <a href={`https://internal-lived.${DOMAIN}`} ref={ref['internal-lived']}>
              internal
            </a>
          </li>
          <li>
            <a href={`https://public-lived.${DOMAIN}`} ref={ref['public-lived']}>
              public
            </a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}
