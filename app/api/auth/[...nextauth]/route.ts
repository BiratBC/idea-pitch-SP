import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
}
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
export const PUT = NextAuth(authOptions);
export const DELETE = NextAuth(authOptions);
export const PATCH = NextAuth(authOptions);