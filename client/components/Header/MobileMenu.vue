<template>
  <DisclosurePanel class="sm:hidden">
    <div class="border-t border-gray-200 pt-4 pb-3">
      <div class="flex items-center px-4">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" src="/avatar.png" alt="" />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium text-gray-800">Tom Cook</div>
          <div class="text-sm font-medium text-gray-500">tom@example.com</div>
        </div>
        <button
          type="button"
          class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="sr-only">View notifications</span>
          <HeaderLangMenu />
        </button>
      </div>
      <div class="mt-3 space-y-1">
        <DisclosureButton
          as="a"
          href="#"
          class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >Your Profile</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >Sign out</DisclosureButton
        >
      </div>
    </div>
  </DisclosurePanel>
</template>
<script setup lang="ts">
  import { DisclosureButton, DisclosurePanel } from '@headlessui/vue';
  import { LanguageIcon } from '@heroicons/vue/24/outline';
</script>
