<template>
  <div class="relative">
    <!-- Code Inspector Button (Always visible) -->
    <div class="sticky top-20 z-20 mb-4">
      <Card class="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-300 dark:border-blue-700">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div class="text-sm font-semibold text-gray-900 dark:text-white">Need help finding accessibility issues?</div>
              <div class="text-xs text-gray-600 dark:text-gray-400">Inspect the HTML source code to identify problems</div>
            </div>
          </div>
          <Button
            @click="showCodeViewer = true"
            variant="default"
            size="lg"
            class="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            View Page Code
          </Button>
        </div>
      </Card>
    </div>

    <!-- Mock Landing Page -->
    <div class="mock-page bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <!-- Navigation -->
      <nav class="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
        <div class="flex items-center justify-between">
          <div class="text-white text-2xl font-bold">TechCorp</div>
          <div class="hidden md:flex gap-6">
            <a href="#" class="text-white hover:text-gray-200">Home</a>
            <a href="#" class="text-white hover:text-gray-200">Features</a>
            <a href="#" class="text-white hover:text-gray-200">Pricing</a>
            <a href="#" class="text-white hover:text-gray-200">About</a>
            <a href="#" class="text-white hover:text-gray-200">Contact</a>
          </div>
        </div>
      </nav>

      <!-- Hero Section with ISSUE 1: Missing Alt Text -->
      <section class="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div class="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          <div class="flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Transform Your Business with AI
            </h1>
            <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Leverage cutting-edge artificial intelligence to automate workflows, enhance productivity, and drive innovation.
            </p>
            <div class="flex gap-4">
              <button class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-8 py-3 rounded-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div>
            <button
              id="hero-img"
              @click="handleIssueClick('missing-alt')"
              :disabled="isFixed('missing-alt')"
              :class="[
                'w-full relative group transition-all rounded-lg overflow-hidden',
                isFixed('missing-alt') ? 'cursor-default' : 'cursor-pointer'
              ]"
              :aria-label="isFixed('missing-alt') ? 'AI Dashboard interface - alt text added' : 'Click to fix accessibility issue'"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt=""
                class="w-full h-full object-cover"
              />
              <div
                v-if="isFixed('missing-alt')"
                class="absolute top-2 right-2 bg-green-500 text-white rounded-full p-2"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <!-- Stats Section with ISSUE 2: Low Contrast Text -->
      <section class="bg-purple-600 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 text-center text-white">
          <button
            @click="handleIssueClick('low-contrast')"
            :disabled="isFixed('low-contrast')"
            :class="[
              'relative rounded-lg p-4 transition-all',
              isFixed('low-contrast') ? 'cursor-default' : 'cursor-pointer'
            ]"
          >
            <div class="text-4xl font-bold mb-2">10K+</div>
            <div :class="[isFixed('low-contrast') ? 'text-purple-200' : 'text-purple-400']">Happy Customers</div>
            <div
              v-if="isFixed('low-contrast')"
              class="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </button>
          <button
            @click="handleIssueClick('low-contrast')"
            :disabled="isFixed('low-contrast')"
            :class="[
              'relative rounded-lg p-4 transition-all',
              isFixed('low-contrast') ? 'cursor-default' : 'cursor-pointer'
            ]"
          >
            <div class="text-4xl font-bold mb-2">99.9%</div>
            <div :class="[isFixed('low-contrast') ? 'text-purple-200' : 'text-purple-400']">Uptime</div>
            <div
              v-if="isFixed('low-contrast')"
              class="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </button>
          <button
            @click="handleIssueClick('low-contrast')"
            :disabled="isFixed('low-contrast')"
            :class="[
              'relative rounded-lg p-4 transition-all',
              isFixed('low-contrast') ? 'cursor-default' : 'cursor-pointer'
            ]"
          >
            <div class="text-4xl font-bold mb-2">24/7</div>
            <div :class="[isFixed('low-contrast') ? 'text-purple-200' : 'text-purple-400']">Support</div>
            <div
              v-if="isFixed('low-contrast')"
              class="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </button>
          <div>
            <div class="text-4xl font-bold mb-2">150+</div>
            <div class="text-purple-200">Countries</div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Powerful Features
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Lightning Fast</h3>
            <p class="text-gray-600 dark:text-gray-400">Process millions of data points in seconds with our optimized algorithms.</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Secure & Private</h3>
            <p class="text-gray-600 dark:text-gray-400">Enterprise-grade security with end-to-end encryption for all your data.</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Real-time Analytics</h3>
            <p class="text-gray-600 dark:text-gray-400">Monitor performance with live dashboards and detailed insights.</p>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="bg-gray-50 dark:bg-gray-800 py-16 px-8">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Customers Say
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              "This platform has revolutionized how we handle data. The AI capabilities are truly impressive and have saved us countless hours."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full"></div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">CTO, DataCorp</div>
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              "Outstanding support team and incredibly powerful features. We've seen a 300% increase in productivity since switching."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Michael Chen</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">CEO, TechStart</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section with ISSUE 4: Vague Link Text -->
      <section class="py-16 px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Join thousands of companies already using our platform. To learn about our features and pricing,
          <button
            id="vague-link"
            @click="handleIssueClick('vague-link')"
            :disabled="isFixed('vague-link')"
            :class="[
              'text-blue-600 dark:text-blue-400 underline relative inline-flex items-center gap-1',
              isFixed('vague-link') ? 'cursor-default' : 'cursor-pointer hover:text-blue-800 dark:hover:text-blue-300'
            ]"
          >
            <span v-if="!isFixed('vague-link')">click here</span>
            <span v-else>view our complete product documentation</span>
            <span
              v-if="isFixed('vague-link')"
              class="inline-block bg-green-500 text-white rounded-full p-0.5"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </button>
        </p>
        <button class="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors">
          Start Free Trial
        </button>
      </section>

      <!-- Newsletter Section with ISSUE 3 & 5 -->
      <section class="bg-gradient-to-r from-purple-600 to-blue-600 py-16 px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p class="text-purple-100 mb-8">
            Get the latest insights, tips, and product updates delivered to your inbox.
          </p>

          <div class="bg-white dark:bg-gray-900 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-4">
              <!-- ISSUE 3: Missing Label -->
              <div class="flex-1 relative">
                <button
                  @click="handleIssueClick('missing-label')"
                  :disabled="isFixed('missing-label')"
                  :class="[
                    'w-full text-left',
                    isFixed('missing-label') ? '' : 'cursor-pointer'
                  ]"
                >
                  <label
                    v-if="isFixed('missing-label')"
                    for="email-input"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-left"
                  >
                    Email address:
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    placeholder="Enter your email"
                    :class="[
                      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white',
                      isFixed('missing-label') ? 'border-gray-300 dark:border-gray-600' : 'border-gray-300 dark:border-gray-600'
                    ]"
                    @click.stop="!isFixed('missing-label') && handleIssueClick('missing-label')"
                    readonly
                  />
                  <div
                    v-if="isFixed('missing-label')"
                    class="absolute top-0 right-0 bg-green-500 text-white rounded-full p-1"
                    aria-hidden="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <!-- ISSUE 5: Non-semantic Button -->
              <div class="relative">
                <button
                  v-if="!isFixed('non-semantic-button')"
                  id="submit-btn"
                  @click="handleIssueClick('non-semantic-button')"
                  class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer transition-all w-full md:w-auto"
                >
                  Subscribe
                </button>
                <button
                  v-else
                  type="button"
                  class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all w-full md:w-auto focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 relative"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                  <span
                    class="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1"
                    aria-hidden="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-gray-400 py-12 px-8">
        <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 class="text-white font-semibold mb-4">Product</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Features</a></li>
              <li><a href="#" class="hover:text-white">Pricing</a></li>
              <li><a href="#" class="hover:text-white">Security</a></li>
              <li><a href="#" class="hover:text-white">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Company</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">About</a></li>
              <li><a href="#" class="hover:text-white">Blog</a></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
              <li><a href="#" class="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Documentation</a></li>
              <li><a href="#" class="hover:text-white">Help Center</a></li>
              <li><a href="#" class="hover:text-white">Community</a></li>
              <li><a href="#" class="hover:text-white">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Privacy</a></li>
              <li><a href="#" class="hover:text-white">Terms</a></li>
              <li><a href="#" class="hover:text-white">Cookies</a></li>
              <li><a href="#" class="hover:text-white">Licenses</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2024 TechCorp. All rights reserved. Built with accessibility in mind.</p>
        </div>
      </footer>
    </div>

    <!-- Code Viewer Modal -->
    <Dialog v-model:open="showCodeViewer">
      <DialogContent class="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Page Source Code</DialogTitle>
          <DialogDescription>
            Inspect the HTML to find accessibility issues
          </DialogDescription>
        </DialogHeader>

        <div class="space-y-4">
          <div v-for="(snippet, key) in codeSnippets" :key="key" class="border rounded-lg p-4">
            <div class="flex items-center justify-between mb-2">
              <Badge>{{ key.toUpperCase() }}</Badge>
              <Badge variant="outline">HTML</Badge>
            </div>
            <pre class="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto"><code>{{ snippet }}</code></pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { Card, Badge, Button, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '~/components/ui'

const emit = defineEmits<{
  'issue-click': [issueId: string]
}>()

interface Props {
  fixedIssues: Set<string>
}

const props = defineProps<Props>()

const showCodeViewer = ref(false)

const codeSnippets: Record<string, string> = {
  'navigation': `<nav class="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
  <div class="flex items-center justify-between">
    <div class="text-white text-2xl font-bold">TechCorp</div>
    <div class="hidden md:flex gap-6">
      <a href="#" class="text-white hover:text-gray-200">Home</a>
      <a href="#" class="text-white hover:text-gray-200">Features</a>
      <a href="#" class="text-white hover:text-gray-200">Pricing</a>
      <a href="#" class="text-white hover:text-gray-200">About</a>
      <a href="#" class="text-white hover:text-gray-200">Contact</a>
    </div>
  </div>
</nav>`,
  'hero-section': `<section class="relative">
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h1 class="text-4xl font-bold">Transform Your Business with AI</h1>
      <p class="text-xl">Leverage cutting-edge artificial intelligence...</p>
      <button class="bg-purple-600 text-white">Get Started</button>
      <button class="border-2 border-purple-600">Watch Demo</button>
    </div>
    <div>
      <img
        src="dashboard.jpg"
        alt=""
      />
    </div>
  </div>
</section>`,
  'stats-section': `<section class="bg-purple-600">
  <div class="grid grid-cols-4 gap-6 text-white">
    <div>
      <div class="text-4xl font-bold">10K+</div>
      <div style="color: #c084fc">Happy Customers</div>
    </div>
    <div>
      <div class="text-4xl font-bold">99.9%</div>
      <div style="color: #c084fc">Uptime</div>
    </div>
    <div>
      <div class="text-4xl font-bold">24/7</div>
      <div style="color: #c084fc">Support</div>
    </div>
    <div>
      <div class="text-4xl font-bold">150+</div>
      <div class="text-purple-200">Countries</div>
    </div>
  </div>
</section>`,
  'features-section': `<section class="py-16">
  <h2 class="text-3xl font-bold text-center">Powerful Features</h2>
  <div class="grid md:grid-cols-3 gap-8">
    <div class="text-center">
      <div class="w-16 h-16 bg-blue-100 rounded-full">
        <svg class="h-8 w-8 text-blue-600">...</svg>
      </div>
      <h3 class="text-xl font-semibold">Lightning Fast</h3>
      <p class="text-gray-600">Process millions of data points...</p>
    </div>
    <!-- More features... -->
  </div>
</section>`,
  'cta-section': `<section class="py-16 text-center">
  <h2 class="text-3xl font-bold">Ready to Get Started?</h2>
  <p class="text-xl">
    Join thousands of companies already using our platform.
    To learn about our features and pricing,
    <a href="/docs">click here</a>
  </p>
  <button class="bg-purple-600 text-white">Start Free Trial</button>
</section>`,
  'newsletter-form': `<section class="bg-gradient-to-r from-purple-600 to-blue-600">
  <h2 class="text-3xl font-bold text-white">Stay Updated</h2>
  <p class="text-purple-100">Get the latest insights...</p>
  <div class="bg-white rounded-lg">
    <div class="flex gap-4">
      <input
        type="email"
        placeholder="Enter your email"
      />
      <div onclick="submit()">
        Subscribe
      </div>
    </div>
  </div>
</section>`,
  'footer': `<footer class="bg-gray-900 text-gray-400 py-12">
  <div class="grid md:grid-cols-4 gap-8">
    <div>
      <h3 class="text-white font-semibold">Product</h3>
      <ul>
        <li><a href="#" class="hover:text-white">Features</a></li>
        <li><a href="#" class="hover:text-white">Pricing</a></li>
        <li><a href="#" class="hover:text-white">Security</a></li>
      </ul>
    </div>
    <!-- More footer columns... -->
  </div>
  <div class="border-t border-gray-800 mt-12 pt-8">
    <p>© 2024 TechCorp. All rights reserved.</p>
  </div>
</footer>`
}

function handleIssueClick(issueId: string) {
  if (!isFixed(issueId)) {
    emit('issue-click', issueId)
  }
}

function isFixed(issueId: string) {
  return props.fixedIssues.has(issueId)
}
</script>

<style scoped>
.mock-page {
  max-width: 100%;
}
</style>
