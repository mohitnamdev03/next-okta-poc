import NextAuth from "next-auth";
import OktaProvider from "next-auth/providers/okta";

export default NextAuth({
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      issuer: process.env.OKTA_ISSUER,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.expires_at = account.expires_at;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
});
