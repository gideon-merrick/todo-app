import { auth } from "@/lib/auth";
import { handle } from "@/lib/handle";

export async function githubLoginService() {
  const { data, error } = await handle(
    auth.api.signInSocial({
      body: {
        provider: "github",
      },
    })
  );
  if (error) throw new Error(error);
  if (!data) throw new Error("Failed to login");
  return data.url;
}
