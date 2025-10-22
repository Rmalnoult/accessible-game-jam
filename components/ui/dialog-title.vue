<template>
  <DialogTitle
    :class="cn('text-lg font-semibold leading-none tracking-tight', props.class)"
    v-bind="forwarded"
  >
    <slot />
  </DialogTitle>
</template>

<script setup lang="ts">
import { DialogTitle, useForwardProps } from 'radix-vue'
import { type HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  asChild?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>
