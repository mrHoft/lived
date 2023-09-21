import Error from './_error'

type TErr = {
  statusCode: number
} & Record<string, unknown>

export default function ErrorPage(err: TErr) {
  return <Error statusCode={404} />
}
