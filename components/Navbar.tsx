"use client"
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
    const { data: session } = useSession();

  return (
    <>
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <img src="/ideapitch-logo.png" alt="logo" style={{height : 80, width : 85}} />
          </Link>

          <div className="flex items-center gap-5">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>
                <button onClick={() => {signOut()}}>
                  <span>Logout</span>
                </button>
                <Link href={`user/${session?.user?.name}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <>
              <button onClick={() => {signIn('github')}}>
                <span><i className="fa-brands fa-github" style={{fontSize : 40}}  aria-hidden="true"></i></span>
              </button>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
