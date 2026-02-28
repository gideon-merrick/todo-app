"use client";

import { LoginForm } from "@/widgets/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <div className="card-body gap-4">
          <div className="mb-2 text-center">
            <h1 className="font-bold text-2xl">Welcome back</h1>
            <p className="mt-1 text-base-content/60 text-sm">Sign in to your account</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
