
# Next.js + Okta Integration

This POC project demonstrates production grade authentication flow using Okta on Next.js. This Project implements Server Side Authentication using OIDC standards.

## Process Flow
User clicks Login -> Redirected to Okta Authentication Page -> User enter Creds -> Okta Validates the user -> Okta Sends a Auth Token back to Next.js

**1. Okta Configutation**
- Created a Web Application in the Okta Admin Console
- Added the Redirect URL - http://localhost:3000/api/auth/callback/okta
- Generated a Client ID and Client Secret 

**2. Project Initialization**
- Initialized a Next.js 16 Project
- Installed next-auth on the project 
- Configured the .env file with the required secrets
`OKTA_CLIENTID, OKTA_CLIENTSECRET, OKTA_ISSUER, NEXTAUTH_URL, NEXTAUTH_SECRET`

**3. Core Auth Logic**
- Created auth/[...nextauth].js
- Here I Configured the OktaProvider with issuer and secrets.
- Also Implemented callbacks for jwt and session to manually capture the access token and store it into user's session

**4. Other files and components**
- Created providers.jsx to wrap the app in SessionProvider, it allows client component to access the auth state.
- On the app/page.js we are having simple Home page where it conditionally renders the Signin/Signout buttons based on current state.
- Created dashboard/page.js using Server Components to validate user signin or not, if not it redirects user to Signin Page

**5. Other files and components**
- Created providers.jsx to wrap the app in SessionProvider, it allows client component to access the auth state.


## My Learnings
- Application Configuration at Okta Admin dashboard
- I learned how to enforce 2FA, we need to go to authentication policies, we can modify the rule and assign policy to app, so no need to make changes in code, just on the dashboard
- Then, I also explored how to add a 3rd Party Identity Provider, I tested it by adding Github Authentication by going to Identity provider on dashboard and Adding Github Secrets
- And while adding Github Signin option, I stuck in problem like why the Github button wasn't rendering then I realized that I need to change the rule to add that. Later on updating rule it worked and I can see github sign in button also.
- Learned about how Okta provies full suite for IAM platform and how it uses Redirect Model, and how it differs from traditional JWT Authentication and Clerk Authentication