import { usePathname } from 'next/navigation'

export const useDomainByUrl = () => {
  const path = usePathname()
  if (path) {
    const domain = path.toString().split(/:\./)
    // console.log(path, domain)
    return domain ? domain[0] : '/'
  }
  return path
}
