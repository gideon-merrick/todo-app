"use client";

import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { emailLoginAction } from "@/features/auth/email-login-action";
import { Form } from "@/shared/form";
import { GithubLoginButton } from "../github-login-button";

export function LoginForm() {
  return (
    <div>
      <Form action={emailLoginAction} className="flex flex-col gap-2">
        <Form.Error />
        <Form.Field
          icon={<Mail className="h-4 w-4" />}
          legend="Email"
          name="email"
          placeholder="james@mail.com"
          required
          type="email"
        />
        <Form.Field
          icon={<Lock className="h-4 w-4" />}
          legend="Password"
          name="password"
          placeholder="••••••••"
          required
          type="password"
        />
        <Form.Submit className="mt-2">Login</Form.Submit>
      </Form>

      <div className="divider text-base-content/40 text-xs">OR</div>
      <GithubLoginButton />
      <Link className="btn btn-link btn-block" href="/auth/register">
        First time here? Create an account
      </Link>
    </div>
  );
}
