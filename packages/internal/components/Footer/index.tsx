import styles from './.module.css'
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
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/public">public</a>
          </li>
          <li>
            <a href="/public-only">public-only</a>
          </li>
          <li>
            <a href="/internal-only">internal-only</a>
          </li>
          <li>
            <a href={random}>random</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
