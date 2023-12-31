import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Layout from 'components/layout'
import { useRouter } from 'next/router'
import logOut from 'app/api/logOut'

export default function SessionInfo() {
  const router = useRouter()
  const { data: user, data: session, status } = useSession()
  console.log(status, session, user)

  useEffect(() => {
    if (status !== 'loading' && !session) {
      router.replace('/')
    }
  }, [session])

  return (
    <Layout>
      {status === 'loading' ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h3>Привет, {session?.user?.name}</h3>
          <button onClick={logOut}>Log out</button>
        </>
      )}
    </Layout>
  )
}
