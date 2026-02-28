import { auth } from "@/lib/auth";
import { handle } from "@/lib/handle";

export async function emailRegisterService(name: string, email: string, password: string) {
  const { data, error } = await handle(
    auth.api.signUpEmail({
      body: { name, email, password },
    })
  );
  if (error) throw new Error(error);
  if (!data) throw new Error("Failed to login");
}
