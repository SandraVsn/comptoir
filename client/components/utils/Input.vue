<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="block text-sm font-medium text-gray-700"
      >{{ $t(`${name}`) }}</label
    >
    <div class="mt-1">
      <input
        :id="name"
        v-model="input"
        @input="emitInput"
        :name="name"
        :type="type"
        :placeholder="placeholder ? placeholder : $t(`${name}`)"
        :autocomplete="autocomplete ? name : 'off'"
        :required="required"
        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    name: string;
    type?: string;
    placeholder?: string;
    label?: boolean;
    required?: boolean;
    autocomplete?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    required: false,
    default: false,
    autocomplete: true,
  });

  const emit = defineEmits(['update:modelValue']);

  const input = ref<string>('');

  function emitInput(e: Event) {
    const target = e.target as HTMLButtonElement;
    if (target) {
      emit('update:modelValue', target.value);
    }
  }
</script>
