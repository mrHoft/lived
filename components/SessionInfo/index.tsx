import { useSession, signIn, signOut, getCsrfToken } from 'next-auth/react'
import { useRouter } from 'next/router'
import AuthForm from 'components/AuthForm'

export default function SessionInfo() {
  const router = useRouter()
  const { data: user, data: session, status } = useSession()
  console.log(status, session, user)

  if (!session) {
    return <AuthForm />
  }

  return (
    <>
      <p>
        Signed in as <strong>{session.user?.email}</strong>
      </p>
      <p>{JSON.stringify(user, null, 2)}</p>
      <button onClick={() => signOut()}>Sign out</button>
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
