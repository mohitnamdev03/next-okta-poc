

import { getServerSession } from "next-auth";
import Nextauth from "../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default async function Dashboard(){
    const session = await getServerSession(Nextauth);
    
    if(!session){
        const callbackUrl = "/dashboard";
        // Ensure you have the sign-in page set up correctly or use the default
        redirect(`/api/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }

    return (
        <div>
            <h1>Welcome to dashboard</h1>
            <p>{JSON.stringify(session, null, 2)}</p> 

            
        </div>
    )
}
