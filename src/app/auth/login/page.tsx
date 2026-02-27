"use client";

import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { emailLoginAction } from "@/actions/auth/email-login-action";
import { Form } from "@/components/form";
import { LoginWithGithubButton } from "@/components/login-with-github-button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body gap-4">
          <div className="mb-2 text-center">
            <h1 className="font-bold text-2xl">Welcome back</h1>
            <p className="mt-1 text-base-content/60 text-sm">Sign in to your account</p>
          </div>

          <Form.Root action={emailLoginAction} className="flex flex-col gap-2">
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
          </Form.Root>

          <div className="divider text-base-content/40 text-xs">OR</div>
          <LoginWithGithubButton />
          <Link className="btn btn-link btn-block" href="/auth/register">
            First time here? Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
