import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'
import { useRouter } from 'next/router'

export default function AuthForm() {
  const router = useRouter()
  const [err, setErr] = useState<string>('')
  const [userInfo, setUserInfo] = useState({
    email: 'john@email.com',
    password: '1234',
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    signIn('credentials', { ...userInfo, redirect: false }).then(res => {
      console.log(res)
      if (res && res.ok) {
        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

        router.replace(redirectURL as string)
      } else {
        console.log('Email or Password is invalid')
      }
      if (res && res.error) setErr(res.error)
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input value={userInfo.email} onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })} type="email" placeholder="john@email.com" />
        <br />
        <input value={userInfo.password} onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })} type="password" />
        {err ? <p style={{ color: 'red' }}>{err}</p> : <br />}
        <input type="submit" value="Login" />
      </form>
      <br />
      <button onClick={async () => await signIn()}>Default sign form</button>
    </div>
  )
}
