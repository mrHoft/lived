import { useSession } from 'next-auth/react'
import Layout from 'components/layout'
import Link from 'next/link'

export default function SessionInfo() {
  const { data: user, data: session, status } = useSession()
  console.log(status, session, user)

  if (status === 'loading') {
    return (
      <Layout>
        <h3>Loading...</h3>
      </Layout>
    )
  }

  if (!session) {
    return (
      <>
        <p>Ошибка 403</p>
        <p>
          Back to <Link href={'/'}>main</Link> page
        </p>
      </>
    )
  }

  return (
    <Layout>
      <p>Эта страница доступна только авторизованным пользователям</p>
    </Layout>
  )
}
