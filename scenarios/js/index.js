// Scenario order - update this array to match your scenario flow
const scenarioOrder = [
  'scenario1',
  'scenario1-find',
  'scenario2',
  'scenario3',
  'scenario4',
  'scenario4-find',
  'scenario5',
  'scenario6',
  'scenario7',
  'scenario7-find',
  'scenario8',
  'scenario8-find',
  'scenario9',
  'scenario10'
];

const STORAGE_KEY = 'truthOrMyth_score';

// Map scenario IDs to their HTML paths
function getScenarioPath(scenarioId) {
  return `scenarios/html/${scenarioId}.html`;
}

// Check for saved progress
function checkProgress() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const answeredScenarios = Object.keys(data);
  
  console.log('Storage data:', data);
  console.log('Answered scenarios:', answeredScenarios);
  console.log('Answered count:', answeredScenarios.length);
  
  if (answeredScenarios.length === 0) {
    // No progress - show only Start Game
    console.log('No progress found');
    return null;
  }
  
  // Find the last answered scenario in order
  let lastAnsweredIndex = -1;
  for (let i = 0; i < scenarioOrder.length; i++) {
    if (data[scenarioOrder[i]]) {
      lastAnsweredIndex = i;
    }
  }
  
  // Determine next scenario (or results page if all done)
  let nextScenario;
  if (lastAnsweredIndex >= scenarioOrder.length - 1) {
    // All scenarios completed - go to results
    nextScenario = 'scenarios/html/results.html';
  } else {
    // Go to next unanswered scenario
    nextScenario = getScenarioPath(scenarioOrder[lastAnsweredIndex + 1]);
  }
  
  return {
    answered: answeredScenarios.length,
    total: scenarioOrder.length,
    nextPath: nextScenario
  };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  const progress = checkProgress();
  
  if (progress) {
    // Show continue section
    const continueSection = document.getElementById('continue-section');
    const continueBtn = document.getElementById('continue-btn');
    const progressText = document.getElementById('progress-text');
    const startBtn = document.getElementById('start-btn');
    
    continueSection.classList.remove('hidden');
    continueBtn.href = progress.nextPath;
    progressText.textContent = `${progress.answered} of ${progress.total} questions answered`;
    
    // Change "Start Game" to "New Game" with different styling
    startBtn.textContent = 'New Game';
    startBtn.classList.remove('bg-cyan-500', 'hover:bg-cyan-400', 'text-slate-900');
    startBtn.classList.add('bg-slate-700', 'hover:bg-slate-600', 'text-white', 'border', 'border-slate-600');
    
    // Add click handler to clear progress for New Game
    startBtn.addEventListener('click', function(e) {
      if (confirm('Start a new game? This will erase your current progress.')) {
        localStorage.removeItem(STORAGE_KEY);
        // Continue to scenario1
      } else {
        e.preventDefault();
      }
    });
  }
});