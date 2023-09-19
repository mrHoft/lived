import styles from './footer.module.css'
import { useState, useEffect } from 'react'

const getRandomUrl = () =>
  '/' +
  new Array(~~(Math.random() * 7 + 3))
    .fill('')
    .map(() => String.fromCharCode(97 + ~~(Math.random() * 26)))
    .join('')

export default function Footer() {
  const [random, setNew] = useState<string>('')

  useEffect(() => {
    setNew(getRandomUrl())
  }, [])

  return (
    <footer className={styles.footer}>
      <hr />
      <nav>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/profile">profile</a>
          </li>
          <li>
            <a href={random}>random</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
