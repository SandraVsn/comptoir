<template>
  <div class="flex min-h-full">
    <!--  Formulaire login  -->
    <div class="flex-grow m-2 flex items-center">
      <div class="mx-auto flex flex-col">
        <!--  Titre de la page  -->
        <h2
          class="my-6 text-3xl font-bold font-title tracking-tight text-primary text-center"
        >
          {{ $t('inscription') }}
        </h2>
        <div class="flex">
          <UtilsInput name="prenom" class="mr-5" v-model="firstName" />
          <UtilsInput name="nom" class="ml-5" v-model="lastName" />
        </div>
        <UtilsInput name="email" class="mt-5" v-model="email" />
        <UtilsInput name="mot-de-passe" class="mt-5" v-model="password" />
        <UtilsInput
          name="confirmer-mot-de-passe"
          class="mt-5"
          v-model="confirmPassword"
        />
        <div class="flex justify-between items-center mt-5">
          <select
            id="country-code"
            name="country-code"
            autocomplete="country-code"
            class="appearance-none rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-1.5"
          >
            <option v-for="(country, index) in countries" , :key="index">
              {{ country }}
            </option>
          </select>
          <UtilsInput
            name="telephone"
            v-model="phoneNumber"
            class="grow ml-2"
          />
        </div>
        <UtilsButtonsSwitch label="whatsapp" @update-value="getWhatsapp" />
        <UtilsButtonsSwitch
          label="mail-promotionel"
          @update-value="getPromotionalEmail"
        />
      </div>
    </div>
    <!--  Image page login  -->
    <div class="hidden m-2 lg:flex w-5/12 pr-24 lg:items-center">
      <img class="h-4/5 p-2 object-cover" src="signin.png" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
  useHead({
    htmlAttrs: {
      class: 'h-full bg-white',
    },
    bodyAttrs: {
      class: 'h-full',
    },
  });

  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const phoneNumber = ref('');
  const countries = ref([33, 47, 52]);
  const whatsapp = ref<boolean>();
  const promotionalEmail = ref<boolean>();

  function getWhatsapp(newVal: boolean) {
    whatsapp.value = newVal;
    console.log(whatsapp.value);
  }

  function getPromotionalEmail(newVal: boolean) {
    promotionalEmail.value = newVal;
    console.log(promotionalEmail.value);
  }
</script>
