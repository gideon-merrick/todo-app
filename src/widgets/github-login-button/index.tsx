"use client";

import { GithubIcon } from "lucide-react";
import { useTransition } from "react";
import { githubLoginFunction } from "@/features/auth/github-login-function";

export function GithubLoginButton() {
  const [pending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await githubLoginFunction();
    });
  }

  return (
    <button className="btn btn-active btn-block" disabled={pending} onClick={handleClick} type="button">
      {pending ? (
        <span className="loading loading-spinner" />
      ) : (
        <>
          <GithubIcon />
          Login with GitHub
        </>
      )}
    </button>
  );
}
