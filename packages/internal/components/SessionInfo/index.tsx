import { useSession, signOut, getCsrfToken } from 'next-auth/react'
import { useState } from 'react'
import AuthForm from 'components/AuthForm'

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
      <button onClick={async () => await signOut()}>Sign out</button>
    </>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
