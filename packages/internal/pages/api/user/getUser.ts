type TUser = {
  id: string
  name: string
  email: string
  role: string
}

export async function getUser(email: string, password: string): Promise<TUser | Error> {
  const user = (await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: '1',
        name: 'John Doe',
        email: 'john@email.com',
        role: 'admin',
      })
    }, 1)
  })) as TUser

  if (!user || email !== user.email || password !== '1234') {
    return new Error('Invalid credentials')
  }

  return user
}
