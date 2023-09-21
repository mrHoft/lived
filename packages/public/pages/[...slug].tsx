import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Error from './_error'

export default function SlugPage() {
  const router = useRouter()

  if (router.query.slug && router.query.slug.length <= 2) {
    return (
      <Layout>
        <p>
          Категория: <strong>{router.query.slug[0]}</strong>, страница: <strong>{router.query.slug[1]}</strong>
        </p>
      </Layout>
    )
  }

  return <Error statusCode={404} />
}
