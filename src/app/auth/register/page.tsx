"use client";

import { AlertCircle, Loader2, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { emailRegisterAction } from "@/actions/auth/email-register-action";

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(emailRegisterAction, { status: "idle" });

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body gap-4">
          {/* Header */}
          <div className="mb-2 text-center">
            <h1 className="font-bold text-2xl text-base-content">Create an account</h1>
            <p className="mt-1 text-base-content/60 text-sm">Get started for free</p>
          </div>

          {/* Error alert */}
          {state.fieldErrors?.root && (
            <div className="alert alert-error alert-soft" role="alert">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span className="text-sm">{state.fieldErrors.root.join(", ")}</span>
            </div>
          )}
          {state.message && (
            <div className="alert alert-error alert-soft" role="alert">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span className="text-sm">{state.message}</span>
            </div>
          )}

          {/* Form */}
          <form action={formAction} className="flex flex-col gap-4">
            {/* Name */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Full name</legend>
              <label className="input w-full">
                <User className="h-4 w-4 opacity-50" />
                <input autoComplete="name" name="name" placeholder="Jane Doe" required type="text" />
              </label>
            </fieldset>

            {/* Email */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <label className="input w-full">
                <Mail className="h-4 w-4 opacity-50" />
                <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
              </label>
            </fieldset>
            {state.fieldErrors?.email && (
              <div className="alert alert-error alert-soft" role="alert">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span className="text-sm">{state.fieldErrors.email.join(", ")}</span>
              </div>
            )}

            {/* Password */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <label className="input w-full">
                <Lock className="h-4 w-4 opacity-50" />
                <input autoComplete="new-password" name="password" placeholder="••••••••" required type="password" />
              </label>
            </fieldset>
            {state.fieldErrors?.password && (
              <div className="alert alert-error alert-soft" role="alert">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span className="text-sm">{state.fieldErrors.password.join(", ")}</span>
              </div>
            )}

            {/* Submit */}
            <button className="btn btn-primary btn-block mt-2" disabled={isPending} type="submit">
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating account…
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-base-content/40 text-xs">Already have an account?</div>

          {/* Sign in link */}
          <Link className="btn btn-outline btn-block btn-sm" href="/auth/login">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
