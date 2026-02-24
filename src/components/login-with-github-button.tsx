"use client";

import { GithubIcon } from "lucide-react";
import { githubLoginAction } from "@/actions/auth/github-login-action";
import { Form } from "./form";

interface Props {
  className?: string;
}

export function LoginWithGithubButton({ className }: Props) {
  return (
    <Form.Root action={githubLoginAction}>
      <Form.Submit className={className}>
        <GithubIcon />
        <span>Login with GitHub</span>
      </Form.Submit>
      <Form.Error />
    </Form.Root>
  );
}
