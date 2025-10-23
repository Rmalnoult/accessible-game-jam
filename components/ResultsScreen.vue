<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 md:py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Results Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 md:p-10 text-center mb-8">
          <!-- Celebration Icon -->
          <div class="mb-6">
            <div class="text-6xl md:text-8xl" role="img" aria-label="Trophy">
              {{ scorePercentage >= 90 ? '🏆' : scorePercentage >= 70 ? '⭐' : '👍' }}
            </div>
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Game Complete!
          </h1>

          <!-- Score Display -->
          <div class="mb-6">
            <div class="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {{ score }}/{{ maxScore }}
            </div>
            <p class="text-gray-600 dark:text-gray-400">points</p>
          </div>

          <!-- Performance Message -->
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <p class="text-lg md:text-xl text-gray-800 dark:text-gray-200">
              {{ performanceMessage }}
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              @click="emit('play-again')"
              size="lg"
              class="w-full md:w-auto px-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Play Again
            </Button>
            <Button
              @click="emit('go-home')"
              variant="outline"
              size="lg"
              class="w-full md:w-auto px-8"
            >
              Return to Home
            </Button>
          </div>
        </div>

        <!-- Issues Recap -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Accessibility Issues Recap
          </h2>

          <div class="space-y-4">
            <div
              v-for="(issue, index) in gameIssues"
              :key="issue.id"
              class="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg p-4"
            >
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0">
                  <div
                    class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"
                    aria-hidden="true"
                  >
                    {{ index + 1 }}
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                    {{ issue.description }}
                  </h3>
                  <p class="text-sm text-gray-700 dark:text-gray-300">
                    {{ issue.explanation }}
                  </p>
                </div>
                <div
                  v-if="isIssueFixed(issue.id)"
                  class="flex-shrink-0"
                >
                  <div
                    class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                    aria-label="Fixed"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
              About These Standards
            </h3>
            <p class="text-sm text-gray-900 dark:text-gray-100 mb-3">
              These issues are based on the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA,
              which are part of the European Accessibility Act requirements effective from 2025.
              Common issues include missing alt text, low color contrast, missing form labels,
              non-descriptive link text, and improper interactive elements – all of which can prevent
              people with disabilities from using websites effectively.
            </p>
            <p class="text-sm text-gray-900 dark:text-gray-100">
              Want to learn more about web accessibility best practices?
              <a
                href="https://webforallguide.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 dark:text-blue-400 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Visit WebForAllGuide.com
              </a>
              for comprehensive accessibility guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui'

interface Props {
  finalScore?: number
}

const props = withDefaults(defineProps<Props>(), {
  finalScore: 0
})

const emit = defineEmits<{
  'play-again': []
  'go-home': []
}>()

const { gameIssues, maxScore, isIssueFixed } = useGameData()
const score = computed(() => props.finalScore)

const scorePercentage = computed(() => {
  return (score.value / maxScore.value) * 100
})

const performanceMessage = computed(() => {
  const percentage = scorePercentage.value

  if (percentage === 100) {
    return 'Perfect score! You\'re an accessibility champion. You caught all the issues and understand how to make the web accessible to everyone.'
  } else if (percentage >= 80) {
    return 'Excellent work! You found most of the accessibility issues. You have a strong understanding of web accessibility principles.'
  } else if (percentage >= 60) {
    return 'Good job! You identified several issues, but there\'s room for improvement. Review the recap below to learn more.'
  } else if (percentage >= 40) {
    return 'You\'re on the right track! You found some issues, but many were missed. Practice makes perfect – give it another try!'
  } else {
    return 'Keep learning! Accessibility takes practice. Review the issues below and try again to improve your score.'
  }
})
</script>
