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
    
    // Add correct styling
    correctEl.setAttribute('fill', 'rgba(34, 197, 94, 0.1)');
    correctEl.classList.add('find-option-correct');

    if (isCorrect) {
      feedbackBox.className = 'find-feedback find-feedback-correct p-5 rounded-lg';
      feedbackText.innerHTML = "<strong class='text-green-400'>Correct!</strong> The Y-axis starts at 318,000 instead of 0. This makes the increase from ~323,000 to ~333,000 look dramatic, when it's actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.";
    } else {
      // Highlight wrong answer in red
      var wrongEl = document.getElementById('visual-' + selected);
      if (wrongEl) {
        wrongEl.setAttribute('stroke', '#ef4444');
        wrongEl.setAttribute('stroke-width', '3');
        wrongEl.setAttribute('fill', 'rgba(239, 68, 68, 0.1)');
        wrongEl.classList.add('find-option-wrong');
      }

      feedbackBox.className = 'find-feedback find-feedback-wrong p-5 rounded-lg';
      feedbackText.innerHTML = "<strong class='text-red-400'>Not quite!</strong> The problem is the Y-axis (A). It starts at 318,000 instead of 0, making the increase from ~323,000 to ~333,000 look dramatic when it's actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.";
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
  
  // Add correct styling
  correctEl.setAttribute('fill', 'rgba(34, 197, 94, 0.1)');

  // If wrong, also highlight the wrong answer in red
  if (!isCorrect) {
    var wrongEl = document.getElementById('visual-' + selected);
    if (wrongEl) {
      wrongEl.setAttribute('stroke', '#ef4444');
      wrongEl.setAttribute('stroke-width', '3');
      wrongEl.setAttribute('fill', 'rgba(239, 68, 68, 0.1)');
    }
  }

  if (isCorrect) {
    feedbackBox.className = 'find-feedback find-feedback-correct p-5 rounded-lg';
    feedbackText.innerHTML = "<strong class='text-green-400'>Correct!</strong> The Y-axis starts at 318,000 instead of 0. This makes the increase from ~323,000 to ~333,000 look dramatic, when it's actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.";
  } else {
    feedbackBox.className = 'find-feedback find-feedback-wrong p-5 rounded-lg';
    feedbackText.innerHTML = "<strong class='text-red-400'>Not quite!</strong> The problem is the Y-axis (A). It starts at 318,000 instead of 0, making the increase from ~323,000 to ~333,000 look dramatic when it's actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.";
  }
  
  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}