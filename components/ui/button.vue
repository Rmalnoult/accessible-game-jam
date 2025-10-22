<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { type HTMLAttributes } from 'vue'
import { type ButtonVariantProps, buttonVariants } from '.'
import { cn } from '~/lib/utils'

interface Props {
  variant?: ButtonVariantProps['variant']
  size?: ButtonVariantProps['size']
  as?: string
  asChild?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
})
</script>
