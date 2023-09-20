import Layout from '../components/layout'
import SessionInfo from '../components/SessionInfo'
import { getServerSession } from 'next-auth/next'
import { config } from 'app/api/auth/credentials'
import { getCsrfToken } from 'next-auth/react'

export default function IndexPage() {
  return (
    <Layout>
      <SessionInfo />
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, config)

  if (!session) {
    return { props: { session: null } }
  }

  if (session.user) {
    if (!session.user.image) session.user.image = null
  }

  return {
    props: {
      session,
      csrfToken: await getCsrfToken(context),
    },
  }
}
