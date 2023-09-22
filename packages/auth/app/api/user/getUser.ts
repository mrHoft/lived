type TUser = {
  id: string
  name: string
  email: string
  role: string
}

export async function getUser(): Promise<TUser> {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: '1',
        name: 'John Doe',
        email: 'john@email.com',
        role: 'admin',
      })
    }, 1)
  })
}
