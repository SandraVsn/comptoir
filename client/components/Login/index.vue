<template>
  <div class="flex min-h-full">
    <!--  Image page login  -->
    <div class="hidden m-2 lg:flex w-3/6 lg:items-center">
      <img class="pl-24 h-4/5 p-2 object-cover" src="login.png" alt="" />
    </div>
    <!--  Formulaire login  -->
    <div class="flex-grow m-2 flex items-center">
      <div class="mx-auto max-w-sm w-full flex flex-col">
        <!--  Titre de la page  -->
        <h2
          class="my-6 text-3xl font-bold font-title tracking-tight text-primary text-center"
        >
          {{ $t('connexion') }}
        </h2>
        <LoginForm />
        <span class="bg-white px-2 text-center text-sm text-gray-500"
          >{{ $t('vous-n-avez-pas-de-compte') }} ?</span
        >
        <NuxtLink
          to="/inscription"
          class="font-medium text-primary-light mt-3 text-center text-sm underline underline-offset-2 hover:text-primary"
          >{{ $t('creer-un-compte') }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
