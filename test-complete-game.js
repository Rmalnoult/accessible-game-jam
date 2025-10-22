// Quick script to test game completion
// Run in browser console or via Playwright

async function completeGame() {
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Helper to click button with text
  const clickButton = (text) => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const button = buttons.find(b => b.textContent.includes(text));
    if (button && !button.disabled) {
      button.click();
      return true;
    }
    return false;
  };

  // Helper to click correct answer (Option 1)
  const clickCorrectAnswer = () => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const option1 = buttons.find(b => b.textContent.includes('Option 1'));
    if (option1 && !option1.disabled) {
      option1.click();
      return true;
    }
    return false;
  };

  // Complete remaining issues
  for (let i = 0; i < 3; i++) {
    console.log(`Completing issue ${i + 3}...`);

    // Click Continue if it exists
    await wait(500);
    clickButton('Continue');

    await wait(500);

    // Find and click an issue (we'll just click Continue and move to next)
  }
}

console.log('Use completeGame() to auto-complete');
