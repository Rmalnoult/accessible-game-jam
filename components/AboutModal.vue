<template>
  <Dialog v-model:open="isOpen">
    <DialogContent class="max-w-2xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>About This Site</DialogTitle>
      </DialogHeader>

      <div class="about-content space-y-6">
        <!-- Privacy Section -->
        <section class="about-section">
          <h3 class="section-title">🌱 A Privacy-Respecting Website</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            This site doesn't use cookies. No personal data is collected.
            No trackers. No analytics. No ads.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            Yes, it's possible to create a website without turning your data into a product.
          </p>
        </section>

        <!-- Author Section -->
        <section class="about-section author-section bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 class="section-title">👨‍💻 About the Author</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            This site was created by <strong class="text-blue-600 dark:text-blue-400">Romain Malnoult</strong>, Tech Lead Design System & Accessibility.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Passionate about digital accessibility and convinced that an inclusive web
            is a better web for everyone, I share my knowledge and
            best practices to make the web accessible.
          </p>

          <a
            href="https://www.linkedin.com/in/romainmalnoult/"
            target="_blank"
            rel="noopener noreferrer"
            class="linkedin-link inline-flex items-center gap-2 px-5 py-3 bg-[#0077B5] hover:bg-[#006399] text-white rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Visit Romain Malnoult's LinkedIn profile (opens in new window)"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Find me on LinkedIn
          </a>
        </section>

        <!-- Tech Section -->
        <section class="about-section tech-section pt-6 border-t-2 border-gray-200 dark:border-gray-700">
          <h3 class="section-title">⚡ Technologies</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            This site is built with Nuxt 3 and demonstrates the concrete implementation
            of WCAG standards and accessibility best practices.
          </p>
        </section>
      </div>

      <Button
        @click="isOpen = false"
        class="w-full mt-4"
      >
        Close
      </Button>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent, DialogHeader, DialogTitle, Button } from '~/components/ui'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<style scoped>
.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--tw-prose-headings);
}

@media (prefers-reduced-motion: reduce) {
  .linkedin-link {
    transition: none;
  }

  .linkedin-link:hover {
    transform: none;
  }
}
</style>
