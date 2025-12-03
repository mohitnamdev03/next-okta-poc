

import { getServerSession } from "next-auth";
import Nextauth from "../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default async function Dashboard(){
    const session = await getServerSession(Nextauth);
    
    // Checks the user signin or not, if not redirects to Signin page
    if(!session){
        const callbackUrl = "/dashboard";
        redirect(`/api/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }

    return (
        <div>
            <h1>Welcome to dashboard</h1>
            <p>{JSON.stringify(session, null, 2)}</p> 

            
        </div>
    )
}
