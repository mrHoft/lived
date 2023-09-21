import Link from 'next/link'

function Error({ statusCode }: Record<string, number>) {
  return (
    <>
      <p>Ошибка {statusCode ?? 404}</p>
      <p>
        Back to <Link href={'/'}>main</Link> page
      </p>
    </>
  )
}

Error.getInitialProps = ({ res, err }: Record<'res' | 'err', Record<string, number>>) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
