<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-4 md:py-8">
    <div class="container mx-auto px-4">
      <!-- Status Bar -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6 sticky top-4 z-10">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex items-center gap-6">
            <div>
              <span class="text-sm text-gray-600 dark:text-gray-400">Score:</span>
              <span class="ml-2 text-2xl font-bold text-blue-600 dark:text-blue-400">{{ score }}</span>
            </div>
            <div>
              <span class="text-sm text-gray-600 dark:text-gray-400">Issues left:</span>
              <span class="ml-2 text-2xl font-bold text-purple-600 dark:text-purple-400">{{ issuesRemaining }}</span>
            </div>
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            <p>Find and fix {{ gameIssues.length }} accessibility issues</p>
          </div>
        </div>
      </div>

      <!-- How to Play Instructions -->
      <Card v-if="showInstructions" class="mb-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
        <div class="p-6">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">How to Play</h2>
            </div>
            <Button
              @click="showInstructions = false"
              variant="ghost"
              size="sm"
              class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">1</div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Explore</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Look for elements that might have accessibility issues (low contrast, missing labels, etc.)</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Click to Fix</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Tap elements that seem problematic and choose the correct solution from the quiz</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">3</div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Earn Points</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Get 10 points for each correct fix. Find all {{ gameIssues.length }} issues to win!</p>
            </div>
          </div>

          <div class="mt-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
            <p class="text-sm text-blue-900 dark:text-blue-200 flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span><strong>Tip:</strong> Some issues are hard to spot visually. Use the "View Page Code" button below to inspect the HTML and find code-related problems like missing alt text or semantic issues.</span>
            </p>
          </div>
        </div>
      </Card>

      <!-- Instruction Panel -->
      <div
        v-if="!currentIssue && issuesRemaining > 0 && !showInstructions"
        class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6 rounded"
        role="status"
        aria-live="polite"
      >
        <div class="flex items-center justify-between">
          <p class="text-blue-800 dark:text-blue-300">
            Tap on an element that might have an accessibility issue to fix it!
          </p>
          <Button
            @click="showInstructions = true"
            variant="ghost"
            size="sm"
            class="text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40"
          >
            Show Instructions
          </Button>
        </div>
      </div>

      <!-- Mock Interface -->
      <MockInterface
        :fixed-issues="fixedIssues"
        @issue-click="handleIssueClick"
      />

      <!-- Quiz Dialog -->
      <Dialog v-model:open="showQuizDialog">
        <DialogContent class="max-w-2xl">
          <div v-if="currentIssue" class="space-y-6">
            <DialogHeader>
              <DialogTitle>Accessibility Issue Found!</DialogTitle>
              <DialogDescription>
                {{ currentIssue.question }}
              </DialogDescription>
            </DialogHeader>

          <div class="space-y-3">
            <button
              v-for="(option, index) in shuffledOptions"
              :key="index"
              @click="handleAnswer(index)"
              :disabled="answered"
              :class="[
                'w-full text-left p-4 rounded-lg border-2 transition-all',
                'focus:outline-none focus:ring-2 focus:ring-blue-500',
                answered && option.correct
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : answered && !option.correct && selectedWrong === index
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400',
                answered ? 'cursor-default' : 'cursor-pointer'
              ]"
              :aria-label="`Option ${index + 1}: ${option.text}`"
            >
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 mt-1">
                  <div
                    v-if="answered && option.correct"
                    class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div
                    v-else-if="answered && !option.correct && selectedWrong === index"
                    class="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div v-else class="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600" aria-hidden="true"></div>
                </div>
                <span class="flex-1 text-gray-900 dark:text-white">{{ option.text }}</span>
              </div>
            </button>
          </div>

          <!-- Feedback -->
          <div
            v-if="answered"
            :class="[
              'p-4 rounded-lg',
              isCorrect ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            ]"
            role="alert"
            aria-live="polite"
          >
            <p
              :class="[
                'font-semibold mb-2',
                isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'
              ]"
            >
              {{ isCorrect ? 'Correct!' : 'Not quite.' }}
            </p>
            <p :class="isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'">
              {{ currentIssue.feedback }}
            </p>
          </div>

          <!-- Continue Button -->
          <Button
            v-if="answered && isCorrect"
            @click="closeQuiz"
            class="w-full"
            size="lg"
          >
            Continue
          </Button>
          <Button
            v-else-if="answered && !isCorrect"
            @click="resetAnswer"
            variant="outline"
            class="w-full"
            size="lg"
          >
            Try Again
          </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, Card } from '~/components/ui'

const emit = defineEmits<{
  'game-complete': [finalScore: number]
}>()

const {
  gameIssues,
  score,
  fixedIssues,
  currentIssue,
  issuesRemaining,
  allIssuesFixed,
  resetGame,
  fixIssue,
} = useGameData()

const showInstructions = ref(true)
const showQuizDialog = ref(false)
const answered = ref(false)
const isCorrect = ref(false)
const selectedWrong = ref<number | null>(null)
const shuffledOptions = ref<Array<{ text: string; correct: boolean }>>([])

// Shuffle array function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Reset game state when component mounts
onMounted(() => {
  resetGame()
})

// Don't auto-complete - let the user click Continue on the last dialog

function handleIssueClick(issueId: string) {
  const issue = gameIssues.find(i => i.id === issueId)
  if (issue && !fixedIssues.value.has(issueId)) {
    currentIssue.value = issue
    // Shuffle the options when opening the quiz
    shuffledOptions.value = shuffleArray(issue.options)
    showQuizDialog.value = true
    answered.value = false
    isCorrect.value = false
    selectedWrong.value = null
  }
}

function handleAnswer(selectedIndex: number) {
  if (answered.value) return

  const selectedOption = shuffledOptions.value[selectedIndex]
  answered.value = true
  isCorrect.value = selectedOption.correct

  if (selectedOption.correct && currentIssue.value) {
    fixIssue(currentIssue.value.id)
  } else {
    selectedWrong.value = selectedIndex
  }
}

function resetAnswer() {
  answered.value = false
  isCorrect.value = false
  selectedWrong.value = null
}

function closeQuiz() {
  showQuizDialog.value = false
  currentIssue.value = null
  answered.value = false
  isCorrect.value = false
  selectedWrong.value = null

  // Check if game is complete after closing dialog
  if (allIssuesFixed.value) {
    setTimeout(() => {
      emit('game-complete', score.value)
    }, 300)
  }
}
</script>
