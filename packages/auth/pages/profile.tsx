import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import Layout from 'components/layout'
import { useRouter } from 'next/router'

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
      <h3>Привет, {session?.user?.name}</h3>
      <button onClick={async () => await signOut()}>Sign out</button>
    </Layout>
  )
}
