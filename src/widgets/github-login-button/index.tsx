"use client";

import { GithubIcon } from "lucide-react";
import { startTransition } from "react";
import { githubLoginFunction } from "@/features/auth/github-login-function";

export function GithubLoginButton() {
  function handleClick() {
    startTransition(async () => {
      await githubLoginFunction();
    });
  }

  return (
    <button className="btn btn-active btn-block" onClick={handleClick} type="button">
      <GithubIcon />
      Login with GitHub
    </button>
  );
}
