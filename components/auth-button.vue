<script lang="ts" setup>
import { authStore } from "@/stores/auth";

const authClient = authStore();
</script>

<template>
  <div v-if="!authClient.loading && authClient.user" class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn m-1"
    >
      <div v-if="authClient.user.image" class="avatar avatar-offline">
        <div class="w-8 rounded-full">
          <img :src="authClient.user.image">
        </div>
      </div>
      {{ authClient.user.name }}
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
      <li @click="authClient.logOut">
        <a>Logout</a>
      </li>
    </ul>
  </div>
  <button
    v-else
    class="btn btn-accent"
    :disabled="authClient.loading"
    @click="authClient.signIn"
  >
    Sign in with Github

    <span v-if="authClient.loading" class="loading loading-spinner" />
    <Icon
      v-else
      name="tabler:brand-github"
      size="20"
    />
  </button>
</template>
