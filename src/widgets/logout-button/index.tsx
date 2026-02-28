"use client";

import { useTransition } from "react";
import { logoutFunction } from "@/features/auth/logout-function";

export function LogoutButton() {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await logoutFunction();
    });
  }

  return (
    <button className="btn btn-primary" disabled={pending} onClick={handleClick} type="button">
      {pending ? <span className="loading loading-spinner" /> : "Log out"}
    </button>
  );
}
