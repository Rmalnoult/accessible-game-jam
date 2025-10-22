<template>
  <DialogDescription
    :class="cn('text-sm text-muted-foreground', props.class)"
    v-bind="forwarded"
  >
    <slot />
  </DialogDescription>
</template>

<script setup lang="ts">
import { DialogDescription, useForwardProps } from 'radix-vue'
import { type HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface Props {
  class?: HTMLAttributes['class']
  asChild?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>
