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
          <div @focusout="v$.firstName.$touch">
            <UtilsInput
              name="prenom"
              class="mr-5"
              v-model="formData.firstName"
            />
            <div v-if="v$.firstName.$error" class="text-xsm mr-5 text-red-500">
              {{ v$.firstName.required.$message }}
            </div>
          </div>
          <div @focusout="v$.lastName.$touch">
            <UtilsInput name="nom" class="ml-5" v-model="formData.lastName" />
            <div v-if="v$.lastName.$error" class="text-xsm ml-5 text-red-500">
              {{ v$.lastName.required.$message }}
            </div>
          </div>
        </div>
        <div @focusout="v$.email.$touch">
          <UtilsInput name="email" class="mt-5" v-model="formData.email" />
          <div v-if="v$.email.$error" class="text-xsm text-red-500">
            {{ v$.email.email.$message }}
          </div>
        </div>
        <div @focusout="v$.password.$touch">
          <UtilsInput
            name="mot-de-passe"
            class="mt-5"
            type="password"
            v-model="formData.password"
          />
          <div v-if="v$.password.$error" class="text-xsm text-red-500">
            <p v-for="error of v$.$errors">
              <span v-if="error.$propertyPath === 'password'">{{
                error.$message
              }}</span>
            </p>
          </div>
        </div>
        <div @focusout="v$.confirmPassword.$touch">
          <UtilsInput
            name="confirmer-mot-de-passe"
            class="mt-5"
            type="password"
            v-model="formData.confirmPassword"
          />
          <div v-if="v$.confirmPassword.$error" class="text-xsm text-red-500">
            <p v-for="error of v$.$errors">
              <span v-if="error.$propertyPath === 'confirmPassword'">{{
                error.$message
              }}</span>
            </p>
          </div>
        </div>
        <div class="flex mt-5">
          <div>
            <select
              id="country-code"
              name="country-code"
              v-model="formData.country"
              autocomplete="country-code"
              class="appearance-none rounded-md mt-2 border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-1.5"
              @input="v$.country.$touch"
            >
              <option v-for="(country, index) in countries" :key="index">
                {{ country }}
              </option>
            </select>
            <div v-if="v$.country.$error" class="text-xsm text-red-500">
              {{ v$.country.required.$message }}
            </div>
          </div>
          <div class="grow ml-2" @focusout="v$.phoneNumber.$touch">
            <UtilsInput name="telephone" v-model="formData.phoneNumber" />
            <div v-if="v$.phoneNumber.$error" class="text-xsm text-red-500">
              <p v-for="error of v$.$errors">
                <span v-if="error.$propertyPath === 'phoneNumber'">{{
                  error.$message
                }}</span>
              </p>
            </div>
          </div>
        </div>
        <UtilsButtonsSwitch label="whatsapp" @update-value="getWhatsapp" />
        <UtilsButtonsSwitch
          label="mail-promotionel"
          @update-value="getPromotionalEmail"
        />
        <UtilsButtonsPrimary
          name="valider"
          class="mt-5"
          @click.stop.prevent="createAccount"
          type="submit"
        />
        <p v-if="ifFormInvalid" class="text-xsm text-red-500">
          Le formulaire contient des erreurs et / ou des champs non complétés
        </p>
      </div>
    </div>
    <!--  Image page login  -->
    <div class="hidden m-2 lg:flex w-5/12 pr-24 lg:items-center">
      <img class="h-4/5 p-2 object-cover" src="signin.png" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import {
    required,
    integer,
    email,
    sameAs,
    minLength,
    maxLength,
    helpers,
  } from '@vuelidate/validators';

  import { useVuelidate } from '@vuelidate/core';

  useHead({
    htmlAttrs: {
      class: 'h-full bg-white',
    },
    bodyAttrs: {
      class: 'h-full',
    },
  });

  const { t } = useI18n();

  const mustBePassword = (value: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&=])[A-Za-z\d@$!%*?&=]/.test(
      value
    );

  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '+33 (0)',
    phoneNumber: 0,
  });

  const rules = computed(() => {
    return {
      firstName: {
        required: helpers.withMessage(t('prenom-requis'), required),
      },
      lastName: {
        required: helpers.withMessage(t('nom-requis'), required),
      },
      email: {
        required: helpers.withMessage(t('email-requis'), required),
        email: helpers.withMessage(t('email-format-invalide'), email),
      },
      password: {
        required: helpers.withMessage(t('mot-de-passe-requis'), required),
        mustBePassword: helpers.withMessage(
          t('format-mdp-incorrect'),
          mustBePassword
        ),
        minLenght: helpers.withMessage(t('mdp-longueur-mini'), minLength(8)),
        maxLength: helpers.withMessage(t('mdp-longueur-maxi'), maxLength(15)),
      },
      confirmPassword: {
        required: helpers.withMessage(t('confirmation-mdp-requise'), required),
        sameAs: helpers.withMessage(
          t('confirmation-mdp-invalide'),
          sameAs(formData.value.password)
        ),
      },
      country: {
        required: helpers.withMessage(t('code-pays-requis'), required),
      },
      phoneNumber: {
        required: helpers.withMessage(t('telephone-requis'), required),
        integer: helpers.withMessage(t('telephone-invalide-chiffre'), integer),
        minLenght: helpers.withMessage(
          t('telephone-invalide-min'),
          minLength(7)
        ),
        maxLength: helpers.withMessage(
          t('telephone-invalide-max'),
          maxLength(15)
        ),
      },
    };
  });

  const countries = ref(['+33 (0)', '+47 (0)', '+52 (0)']);
  const haveWhatsapp = ref<boolean>();
  const wantPromotionalEmail = ref<boolean>();
  const ifFormInvalid = ref(false);

  const v$ = useVuelidate(rules, formData);

  function getWhatsapp(newVal: boolean) {
    haveWhatsapp.value = newVal;
    console.log(haveWhatsapp.value);
  }

  function getPromotionalEmail(newVal: boolean) {
    wantPromotionalEmail.value = newVal;
    console.log(wantPromotionalEmail.value);
  }

  async function createAccount() {
    const isFormCorrect = await v$.value.$validate();
    if (!isFormCorrect) {
      ifFormInvalid.value = true;
    } else {
      console.log(
        formData.value.firstName,
        formData.value.lastName,
        formData.value.email,
        formData.value.password,
        formData.value.confirmPassword,
        formData.value.phoneNumber,
        formData.value.country,
        haveWhatsapp.value,
        wantPromotionalEmail.value
      );
    }
  }
</script>
