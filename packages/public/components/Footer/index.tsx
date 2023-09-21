import styles from './.module.css'
import { useState, useEffect } from 'react'

const getRandomUrl = () =>
  '/' +
  new Array(~~(Math.random() * 7 + 3))
    .fill('')
    .map(() => String.fromCharCode(97 + ~~(Math.random() * 26)))
    .join('')

export default function Footer() {
  const [random1, setNew1] = useState<string>('')
  const [random2, setNew2] = useState<string>('')

  useEffect(() => {
    setNew1(getRandomUrl())
    setNew2(getRandomUrl())
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
            <a href={random1}>random</a>
          </li>
          <li>
            <a href={`${random1}${random2}`}>random/random</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
