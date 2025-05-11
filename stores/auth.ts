import { createAuthClient } from "better-auth/vue";
import { defineStore } from "pinia";

const authClient = createAuthClient();
export const authStore = defineStore("auth", () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession> | null>>(null);
  async function init() {
    const data = await authClient.useSession(useFetch);
    session.value = data;
  }
  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);
  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }
  async function logOut() {
    await authClient.signOut();
    navigateTo("/");
  }
  return { init, loading, signIn, user, logOut };
});
