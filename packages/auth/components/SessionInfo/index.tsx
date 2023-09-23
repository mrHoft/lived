import { useSession } from 'next-auth/react'
import AuthForm from 'components/AuthForm'
import logOut from 'app/api/logOut'

export default function SessionInfo() {
  const { data: user, data: session, status } = useSession()
  // console.log(status, session, user)

  if (status === 'loading') {
    return <h3>Loading...</h3>
  }

  if (!session) {
    return <AuthForm />
  }

  return (
    <>
      <p>
        Signed in: <strong>{session.user?.name}</strong> ({session.user?.email})
      </p>
      {/* <p>{JSON.stringify(user, null, 2)}</p> */}
      <button onClick={logOut}>Sign out</button>
    </>
  )
}
