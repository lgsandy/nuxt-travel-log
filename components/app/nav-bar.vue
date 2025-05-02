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
        <a class="btn btn-accent">Sign in with Github
          <Icon name="tabler:brand-github" size="20" />
        </a>
      </div>
    </div>
  </div>
</template>
