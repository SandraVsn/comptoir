<template>
  <div class="flex flex-shrink-0 items-center">
    <button @click="goTo">
      <img
        class="block h-10 w-auto lg:hidden"
        src="/logo-comptoir.png"
        alt="Comtpoir de la laverie"
      />
    </button>
    <button @click="goTo">
      <img
        class="hidden h-10 w-auto lg:block"
        src="/logo-comptoir.png"
        alt="Comptoir de la laverie"
      />
    </button>
  </div>
</template>
<script setup lang="ts">
  function goTo() {
    navigateTo('https://comptoirdelalaverie.com/', {
      external: true,
    });
  }
</script>
