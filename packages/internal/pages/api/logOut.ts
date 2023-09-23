import { signOut } from 'next-auth/react'

const logOut = async () => await signOut({ redirect: false })

export default logOut
