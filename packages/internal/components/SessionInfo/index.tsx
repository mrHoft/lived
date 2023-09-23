import { useSession } from 'next-auth/react'
import { useState } from 'react'
import AuthForm from 'components/AuthForm'
import logOut from 'pages/api/logOut'

export default function SessionInfo() {
  const [signing, setSignning] = useState(false)
  const { data: user, data: session, status } = useSession()
  console.log(status, session, user)

  if (status === 'loading') {
    return <h3>Loading...</h3>
  }

  if (!session) {
    return (
      <>
        <h3>Привет!</h3>
        <br />
        {signing ? <AuthForm /> : <button onClick={() => setSignning(true)}>Sign in</button>}
      </>
    )
  }

  return (
    <>
      <h3>
        Привет <strong>{session.user?.name}</strong>!
      </h3>
      <br />
      <button onClick={logOut}>Sign out</button>
    </>
  )
}
