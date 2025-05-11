<script setup lang="ts">
const authSto = authStore();
await authSto.init();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
