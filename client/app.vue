<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    htmlAttrs: {
      class: 'bg-white',
    },
    bodyAttrs: {
      class: 'dark:bg-zinc-900',
    },
  });
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: rotate3d(1, 1, 1, 15deg);
  }
</style>
