<template>
  <div class="flex flex-col h-screen">
    <div>
      <Header />
    </div>
    <div class="flex-grow">
      <slot />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
