<template>
  <Menu as="div" class="relative ml-3">
    <div>
      <MenuButton
        class="flex items-center rounded-full dark:hover:text-gray-300 dark:bg-zinc-800 bg-white p-1 text-gray-400 hover:text-gray-500 hover:outline-none hover:ring-2 hover:ring-indigo-200"
      >
        <span class="sr-only">{{ $t('langue') }}</span>
        <LanguageIcon class="h-5 w-5" aria-hidden="true" />
        <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute dark:bg-zinc-800 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <p class="text-gray-700 dark:text-white m-2 ml-4">{{ $t('langue') }}</p>
        <MenuItem
          class="flex"
          v-slot="{ active }"
          v-for="locale in $i18n.locales"
          :key="locale.code"
          @click="switchLang(locale.code)"
        >
          <a
            href="#"
            :class="[
              active ? 'bg-gray-100 dark:bg-zinc-700' : '',
              'block px-4 py-2 text-sm text-gray-700 dark:text-white',
            ]"
            ><img
              class="w-8 rounded-full mr-2"
              :src="'/flags/' + locale.code + '.png'" />{{ locale.name }}
            <CheckIcon
              v-if="locale.code === $i18n.locale"
              class="w-4 h-4 ml-2 text-green-700"
          /></a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
  import { Menu, MenuItem, MenuItems, MenuButton } from '@headlessui/vue';
  import {
    LanguageIcon,
    ChevronDownIcon,
    CheckIcon,
  } from '@heroicons/vue/24/outline';
  const open = ref<boolean>(false);
  const i18n = useI18n();

  function switchLang(val: string) {
    i18n.setLocale(val);
  }

  //- v-btn.me-3(icon, variant='text')
  //-   v-icon(color="primary") mdi-translate
  //-   v-menu(activator='parent', :close-on-content-click='false')
  //-     v-list
  //-       v-list-subheader {{ $t('langue') }}
  //-       v-list-item(
  //-         v-for='locale in $i18n.locales',
  //-         :key='locale.code',
  //-         @click='switchLang(locale.code)'
  //-       )
  //-         template(v-slot:prepend)
  //-           v-avatar
  //-             v-img(:src='"/flags/" + locale.code + ".png"')
  //-           v-list-item-title {{ locale.name }}
  //-           v-icon.ms-3.me-0(v-if='locale.code === $i18n.locale', color='green') mdi-check
</script>
