import NextAuth, { type DefaultSession } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { signIn as getUserFromDb } from './app/utils/functions'

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: any
      phone: any
      accessToken: any
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession['user']
  }
}

declare module 'next-auth' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id: string
    accessToken: string
    phone: string
  }
}

type User = {
  id: string
  phone: string
  email: string
  name: string
  image: string
  accessToken: string
}

let loginUser: User | null = null

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      name: 'Credentials',
      credentials: {
        phone: { label: 'Phone', type: 'text' },
        pin: { label: 'Pin', type: 'password' }
      },
      authorize: async (credentials) => {
        const loginData = {
          phone: credentials?.phone,
          pin: credentials?.pin
        }

        // logic to verify if the user exists
        loginUser = await getUserFromDb(loginData)

        if (!loginUser) {
          throw new Error('Invalid Credentials')
        }

        // return user object with their profile data
        return loginUser
      }
    })
  ],
  basePath: '/api/auth',
  secret: process.env.SECRET,

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id
        token.accessToken = loginUser?.accessToken
        token.phone = loginUser?.phone
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      session.user.accessToken = token.accessToken
      session.user.phone = token.phone
      return session
    }
  }
})
