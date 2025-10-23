<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
    <!-- Home Screen -->
    <div v-if="!gameStarted && !showResults" class="container mx-auto px-4 py-8 md:py-16 flex-1">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Title & Branding -->
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Accessible Game Jam
        </h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          A mini online game where you earn points by fixing accessibility mistakes on a pretend web interface.
          Sharpen your accessibility skills in a fun way!
        </p>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 mb-8">
          <p class="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
            Identify and correct as many accessibility issues as you can on the example webpage to rack up points.
            No sign-up needed – just play!
          </p>

          <p class="text-sm text-gray-700 dark:text-gray-400 mb-6">
            This game is based on the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA,
            which are part of the European Accessibility requirements effective from 2025.
          </p>
        </div>

        <!-- Start Button -->
        <Button
          @click="startGame"
          size="lg"
          class="w-full md:w-auto text-lg px-12 py-6"
        >
          Start Game
        </Button>
      </div>
    </div>

    <!-- Game Screen -->
    <GameScreen
      v-else-if="gameStarted && !showResults"
      @game-complete="handleGameComplete"
    />

    <!-- Results Screen -->
    <ResultsScreen
      v-else-if="showResults"
      :final-score="finalScore"
      @play-again="handlePlayAgain"
      @go-home="handleGoHome"
    />

    <!-- Footer -->
    <footer v-if="!gameStarted && !showResults" class="mt-auto py-6 px-4 border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto max-w-3xl text-center">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 Romain Malnoult</p>
          <span class="hidden sm:inline">•</span>
          <button
            @click="showAbout = true"
            class="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
          >
            About this site
          </button>
        </div>
      </div>
    </footer>

    <!-- About Modal -->
    <AboutModal v-model="showAbout" />
  </div>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui'
import AboutModal from '~/components/AboutModal.vue'

const gameStarted = ref(false)
const showResults = ref(false)
const showAbout = ref(false)
const finalScore = ref(0)

function startGame() {
  gameStarted.value = true
  showResults.value = false
}

function handleGameComplete(score: number) {
  finalScore.value = score
  gameStarted.value = false
  showResults.value = true
}

function handlePlayAgain() {
  gameStarted.value = true
  showResults.value = false
}

function handleGoHome() {
  gameStarted.value = false
  showResults.value = false
}
</script>
