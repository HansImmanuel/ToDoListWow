"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="fixed top-8 right-8 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition z-50"
    >
      Log Out
    </button>
  );
}

