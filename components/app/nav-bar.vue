<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="container mx-auto">
      <div class="navbar-start">
        <NuxtLink to="/" class="btn btn-ghost text-xl">
          Travel logs
        </NuxtLink>
      </div>

      <div class="navbar-end">
        <AppThemeSwitcher />
        <AuthButton />
      </div>
    </div>
  </div>
</template>
