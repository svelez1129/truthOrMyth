// Scenario 4 Find - Pie Chart Problem - Answer is "A" (the pie chart itself)
const correctAnswer = "A";
const scenarioId = "scenario4-find";

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
      feedbackText.textContent = 'Correct! Using a pie chart is misleading here. Pie charts are meant to show parts of a whole that add up to 100%, but this data adds up to 271% because respondents could pick three favorites. A bar chart would be more appropriate.';
    } else {
      // Highlight wrong answer in red (stroke only)
      var wrongEl = document.getElementById('visual-' + selected);
      if (wrongEl) {
        wrongEl.setAttribute('stroke', '#ef4444');
        wrongEl.setAttribute('stroke-width', '3');
      }
      
      feedbackBox.className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      feedbackText.textContent = 'Not quite! The problem is the pie chart itself (A). Pie charts should only show parts of a whole that add up to 100%, but this data adds up to 271% because respondents could pick three favorites. A bar chart would be more appropriate.';
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
    feedbackText.textContent = 'Correct! Using a pie chart is misleading here. Pie charts are meant to show parts of a whole that add up to 100%, but this data adds up to 271% because respondents could pick three favorites. A bar chart would be more appropriate.';
  } else {
    feedbackBox.className = 'p-4 rounded-lg bg-red-900 border border-red-500';
    feedbackText.textContent = 'Not quite! The problem is the pie chart itself (A). Pie charts should only show parts of a whole that add up to 100%, but this data adds up to 271% because respondents could pick three favorites. A bar chart would be more appropriate.';
  }
  
  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}
