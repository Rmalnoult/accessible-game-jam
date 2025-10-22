<template>
  <DialogRoot v-bind="forwarded">
    <slot />
  </DialogRoot>
</template>

<script setup lang="ts">
import { DialogRoot, type DialogRootProps, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<{
  'update:open': [value: boolean]
}>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
