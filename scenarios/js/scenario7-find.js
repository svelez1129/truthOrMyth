// Scenario 7 Find - Y-axis Problem - Answer is "A"
const correctAnswer = "A";
const scenarioId = "scenario7-find";

document.querySelectorAll('[data-option]').forEach(function(option) {
  option.addEventListener('click', function() {
    const selected = this.getAttribute('data-option');
    const isCorrect = selected === correctAnswer;
    
    // Record the answer (includes selected answer)
    ScoreTracker.recordAnswer(scenarioId, isCorrect, selected);
    
    // Disable all options
    document.querySelectorAll('[data-option]').forEach(function(opt) {
      opt.style.pointerEvents = 'none';
    });
    
    // Show feedback
    document.getElementById('feedback').classList.remove('hidden');
    var feedbackBox = document.getElementById('feedback-box');
    var feedbackText = document.getElementById('feedback-text');
    
    // Highlight correct answer in green (stroke only)
    var correctEl = document.getElementById('visual-' + correctAnswer);
    if (correctEl) {
      correctEl.setAttribute('stroke', '#22c55e');
      correctEl.setAttribute('stroke-width', '3');
    }
    
    if (isCorrect) {
      feedbackBox.className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      feedbackText.textContent = 'Correct! The Y-axis starts at 318,000 instead of 0. This makes the increase from ~323,000 to ~333,000 look dramatic, when it\'s actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.';
    } else {
      // Highlight wrong answer in red (stroke only)
      var wrongEl = document.getElementById('visual-' + selected);
      if (wrongEl) {
        wrongEl.setAttribute('stroke', '#ef4444');
        wrongEl.setAttribute('stroke-width', '3');
      }
      
      feedbackBox.className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      feedbackText.textContent = 'Not quite! The problem is the Y-axis (A). It starts at 318,000 instead of 0, making the increase from ~323,000 to ~333,000 look dramatic when it\'s actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.';
    }
    
    // Show continue button
    document.getElementById('continue').classList.remove('hidden');
  });
});

// On page load, check if already answered and restore state
var previousAnswer = ScoreTracker.getAnswer(scenarioId);
if (previousAnswer) {
  var selected = previousAnswer.selected;
  var isCorrect = previousAnswer.correct;
  
  // Disable all options
  document.querySelectorAll('[data-option]').forEach(function(opt) {
    opt.style.pointerEvents = 'none';
  });
  
  // Highlight correct answer in green (stroke only)
  var correctEl = document.getElementById('visual-' + correctAnswer);
  if (correctEl) {
    correctEl.setAttribute('stroke', '#22c55e');
    correctEl.setAttribute('stroke-width', '3');
  }
  
  // If wrong, also highlight the wrong answer in red (stroke only)
  if (!isCorrect) {
    var wrongEl = document.getElementById('visual-' + selected);
    if (wrongEl) {
      wrongEl.setAttribute('stroke', '#ef4444');
      wrongEl.setAttribute('stroke-width', '3');
    }
  }
  
  // Show feedback
  document.getElementById('feedback').classList.remove('hidden');
  var feedbackBox = document.getElementById('feedback-box');
  var feedbackText = document.getElementById('feedback-text');
  
  if (isCorrect) {
    feedbackBox.className = 'p-4 rounded-lg bg-green-900 border border-green-500';
    feedbackText.textContent = 'Correct! The Y-axis starts at 318,000 instead of 0. This makes the increase from ~323,000 to ~333,000 look dramatic, when it\'s actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.';
  } else {
    feedbackBox.className = 'p-4 rounded-lg bg-red-900 border border-red-500';
    feedbackText.textContent = 'Not quite! The problem is the Y-axis (A). It starts at 318,000 instead of 0, making the increase from ~323,000 to ~333,000 look dramatic when it\'s actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.';
  }
  
  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}