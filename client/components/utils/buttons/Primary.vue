<template>
  <button
    type="submit"
    class="rounded-md border border-transparent bg-primary-light py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:primary focus:ring-primary focus:ring-offset-2"
    :class="block ? 'w-full' : ''"
  >
    {{ $t(`${name}`) }}
  </button>
</template>
<script setup lang="ts">
  interface Props {
    name: string;
    type?: string;
    block?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    block: false,
  });
</script>
