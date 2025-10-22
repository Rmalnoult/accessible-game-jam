<template>
  <div :class="cn(badgeVariants({ variant }), props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { type BadgeVariantProps, badgeVariants } from '.'
import { cn } from '~/lib/utils'

interface Props {
  variant?: BadgeVariantProps['variant']
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>
