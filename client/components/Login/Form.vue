<template>
  <form action="#" method="POST" class="space-y-6">
    <UtilsInput
      label
      name="email"
      :placeholder="`${$t('exemple')}@mail.com`"
      required
      type="email"
      v-model="email"
    />
    <UtilsInput
      label
      name="mot-de-passe"
      type="password"
      required
      placeholder="**********"
      v-model="password"
    />

    <div>
      <UtilsButtonsPrimary
        name="se-connecter"
        block
        @click.stop.prevent="handleClick"
      />
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
<script setup lang="ts">
  const email = ref<string>('');
  const password = ref<string>('');

  function handleClick() {
    console.log('clicked : ', email.value, password.value);
  }
</script>
