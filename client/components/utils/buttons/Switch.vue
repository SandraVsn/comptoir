<template>
  <SwitchGroup as="div" class="flex items-center mt-5">
    <Switch
      v-model="enabled"
      :class="[
        enabled ? 'bg-primary' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      ]"
    >
      <span
        aria-hidden="true"
        :class="[
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        ]"
      />
    </Switch>
    <SwitchLabel as="span" class="ml-3">
      <span class="text-sm font-medium text-gray-900">{{
        $t(`${label}`)
      }}</span>
    </SwitchLabel>
  </SwitchGroup>
</template>
<script setup lang="ts">
  import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';

  interface Props {
    label: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits(['updateValue']);

  const enabled = ref(false);

  watch(
    enabled,
    () => {
      emit('updateValue', enabled.value);
    },
    { immediate: true }
  );
</script>
