type TUser = {
  id: string
  name: string
  email: string
  role: string
}

export async function getUser(email: string, password: string): Promise<TUser | Error> {
  const user = await new Promise<TUser>((resolve, reject) => {
    setTimeout(() => {
      const user: TUser = {
        id: '1',
        name: 'John Doe',
        email: 'john@email.com',
        role: 'admin',
      }
      resolve(user)
    }, 1)
  })

  if (!user || email !== user.email || password !== '1234') {
    return new Error('Invalid credentials')
  }

  return user
}
