export interface GameIssue {
  id: string
  description: string
  elementId: string
  question: string
  options: Array<{
    text: string
    correct: boolean
  }>
  feedback: string
  explanation: string
  points: number
}

export const gameIssues: GameIssue[] = [
  {
    id: 'missing-alt',
    description: 'Missing Alt Text on the hero image',
    elementId: 'hero-img',
    question: 'What should be done to fix this accessibility issue?',
    options: [
      { text: 'Add a descriptive alt attribute to the <img> tag', correct: true },
      { text: 'Nothing, images don\'t require alt text if they look nice', correct: false },
      { text: 'Only provide alt text if the image is a photo of text', correct: false },
    ],
    feedback: 'Correct! Adding an alt attribute provides a text description for screen readers.',
    explanation: 'Solution: Add a descriptive alt attribute so screen readers can announce the image. Images need alternative text so that screen reader users know what the image is. Without alt text, this image was invisible to them.',
    points: 10,
  },
  {
    id: 'low-contrast',
    description: 'Low Contrast on tagline text',
    elementId: 'tagline-text',
    question: 'What\'s the accessibility issue here?',
    options: [
      { text: 'The color contrast is too low, it fails accessibility guidelines', correct: true },
      { text: 'The font size is too large', correct: false },
      { text: 'It\'s using an uncommon font', correct: false },
    ],
    feedback: 'Correct! Low contrast text is a barrier. WCAG requires at least 4.5:1 contrast ratio.',
    explanation: 'Solution: Ensure text color has sufficient contrast (at least 4.5:1 ratio) with its background. Low contrast text prevents users with visual impairments from reading content.',
    points: 10,
  },
  {
    id: 'missing-label',
    description: 'Form input with no label',
    elementId: 'email-input',
    question: 'What\'s the best way to fix this accessibility issue?',
    options: [
      { text: 'Add a visible text label describing the input\'s purpose', correct: true },
      { text: 'It\'s fine as long as a placeholder is there', correct: false },
      { text: 'Make the placeholder text darker', correct: false },
    ],
    feedback: 'Correct! Form fields must have labels so users know what information to input.',
    explanation: 'Solution: Provide a visible text label or aria-label for form fields so users know what to input. Labels are essential for accessibility and usability.',
    points: 10,
  },
  {
    id: 'vague-link',
    description: '"Click here" link text',
    elementId: 'learn-link',
    question: 'What\'s wrong with this element?',
    options: [
      { text: 'The link text isn\'t descriptive of its purpose/destination', correct: true },
      { text: 'The link should be a button instead', correct: false },
      { text: 'Links should never be in paragraphs', correct: false },
    ],
    feedback: 'Correct! Link text should be descriptive. Use meaningful phrases instead of "click here".',
    explanation: 'Solution: Use descriptive link text (e.g., "View pricing details") instead of non-contextual text like "click here". Screen reader users often navigate by links, so each link should make sense out of context.',
    points: 10,
  },
  {
    id: 'non-semantic-button',
    description: 'Button not keyboard accessible',
    elementId: 'submit-btn',
    question: 'What\'s the accessibility problem with this element?',
    options: [
      { text: 'It\'s not built with a proper HTML button, so it can\'t be focused or announced', correct: true },
      { text: 'It\'s too small', correct: false },
      { text: 'No issue, it works when clicked', correct: false },
    ],
    feedback: 'Correct! All interactive controls should be proper HTML elements or have appropriate roles.',
    explanation: 'Solution: Use a <button> element or add tabindex/role to make it keyboard-accessible and give it an ARIA-label if icon-only. Interactive elements must be focusable and operable by keyboard users.',
    points: 10,
  },
]

export function useGameData() {
  const score = ref(0)
  const fixedIssues = ref<Set<string>>(new Set())
  const currentIssue = ref<GameIssue | null>(null)

  const issuesRemaining = computed(() => gameIssues.length - fixedIssues.value.size)
  const allIssuesFixed = computed(() => fixedIssues.value.size === gameIssues.length)
  const maxScore = computed(() => gameIssues.reduce((sum, issue) => sum + issue.points, 0))

  function resetGame() {
    score.value = 0
    fixedIssues.value.clear()
    currentIssue.value = null
  }

  function fixIssue(issueId: string) {
    const issue = gameIssues.find(i => i.id === issueId)
    if (issue && !fixedIssues.value.has(issueId)) {
      fixedIssues.value.add(issueId)
      score.value += issue.points
    }
  }

  function isIssueFixed(issueId: string) {
    return fixedIssues.value.has(issueId)
  }

  return {
    gameIssues,
    score,
    fixedIssues,
    currentIssue,
    issuesRemaining,
    allIssuesFixed,
    maxScore,
    resetGame,
    fixIssue,
    isIssueFixed,
  }
}
