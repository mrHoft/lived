import { useRouter } from 'next/router'
import Layout from '../components/layout'

export default function SlugPage() {
  const router = useRouter()
  return (
    <Layout>
      <p>
        Категория: <strong>{router.query.slug ?? null}</strong>
      </p>
    </Layout>
  )
}
