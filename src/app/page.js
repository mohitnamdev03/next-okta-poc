"use client"

import Image from "next/image";
import {useSession, signIn, signOut} from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const {data:session} = useSession();
  return (
    <div className="">
      <h1>Hey</h1>
      //conditionally rendering the Signin/Signout buttons based on session
      {session ? (
        <>
        <p>User is {session.user?.email || session.user?.name}</p>
        <button onClick={() => signOut()} className="cursor-pointer border-2 p-1 m-1"> SignOut</button>
        <div className="">
          <Link href="/dashboard" className="cursor-pointer border-2 p-1 m-1 mt-4">Dashboard</Link>
        </div>
        </>
      ):(
        <>
        <p>User is not signed up</p>
        <button onClick={() => signIn("okta")} className="cursor-pointer border-2 p-1 m-1"> SignIn</button>
        </>
      )}
    </div>
  );
}
