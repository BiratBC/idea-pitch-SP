"use client";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center h-20">
          <Link href="/">
            <img
              src="/ideapitch-logo.png"
              alt="logo"
              style={{ height: 80, width: 85 }}
            />
          </Link>

          <div className="flex items-center gap-5">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>
                <button
                  onClick={() => {
                    signOut();
                  }}
                >
                  <span>Logout</span>
                </button>
                <Link href={`user/${session?.user?.name}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <>
                <div className="sign-in-option bg-black-200 max-w-40 p-2 border-solid border-radius rounded-xl flex gap-4">
                  <button
                    onClick={() => {
                      signIn("github");
                    }}
                  >
                    <span>
                      <i
                        className="fa-brands fa-github"
                        style={{ fontSize: 40, color: "white" }}
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      signIn("github");
                    }}
                  >
                    <span>
                      <i
                        className="fa-brands fa-google"
                        style={{ fontSize: 40, color: "white" }}
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
