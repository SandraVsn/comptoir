<template>
  <Disclosure
    as="nav"
    class="bg-white shadow dark:bg-zinc-800"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <HeaderLogo />
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <HeaderLangMenu />
          <HeaderProfileMenu />
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center dark:bg-slate-800 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <HeaderMobileMenu />
  </Disclosure>
</template>

<script setup lang="ts">
  import { Disclosure, DisclosureButton } from '@headlessui/vue';
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
</script>
