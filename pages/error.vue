<script setup lang="ts">
const route = useRoute();
const error = route.query.error || "An Unknown error occure";
</script>

<template>
  <div class="text-center">
    <P>{{ error }}</P>
  </div>
</template>
