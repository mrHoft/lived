export const isServer = !(typeof window !== 'undefined' && window.document)

export const useDomainByUrl = () => {
  if (!isServer) {
    const domain: string = window.location.host.replace(/\..+/, '')
    return domain || '/'
  }
  return '/'
}
