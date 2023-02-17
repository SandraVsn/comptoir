<template>
  <form action="#" method="POST" class="space-y-6">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">{{
        $t('email')
      }}</label>
      <div class="mt-1">
        <input
          id="email"
          name="email"
          type="email"
          :placeholder="`${$t('exemple')}@mail.com`"
          autocomplete="email"
          required="true"
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        />
      </div>
    </div>

    <div class="space-y-1">
      <label for="password" class="block text-sm font-medium text-gray-700">{{
        $t('mot-de-passe')
      }}</label>
      <div class="mt-1">
        <input
          id="password"
          placeholder="**********"
          name="password"
          type="password"
          autocomplete="current-password"
          required="true"
          class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
        />
      </div>
    </div>
    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md border border-transparent bg-primary-light py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:primary focus:ring-primary focus:ring-offset-2"
      >
        {{ $t('se-connecter') }}
      </button>
    </div>
    <div>
      <div class="relative mt-6">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-white px-2 text-gray-500">{{ $t('ou') }}</span>
        </div>
      </div>
    </div>
  </form>
</template>
