// Scenario 1 Find: Identify the misleading element - Answer is "A" (Y-axis)
const correctAnswer = "A";
const scenarioId = "scenario1-find";

document.querySelectorAll('rect[data-option]').forEach(function(option) {
  option.addEventListener('click', function() {
    const selected = this.getAttribute('data-option');
    const isCorrect = selected === correctAnswer;
    
    // Record the answer (includes selected answer)
    ScoreTracker.recordAnswer(scenarioId, isCorrect, selected);
    
    // Add disabled class to chart container
    document.getElementById('chart-container').classList.add('find-disabled');

    // Disable all options and remove hover effects
    document.querySelectorAll('rect[data-option]').forEach(function(opt) {
      opt.style.pointerEvents = 'none';
      opt.setAttribute('onmouseenter', '');
      opt.setAttribute('onmouseleave', '');
    });

    // Remove all visual boxes styling
    ['A', 'B', 'C', 'D'].forEach(function(letter) {
      var el = document.getElementById('visual-' + letter);
      if (el) {
        el.setAttribute('fill', 'transparent');
        el.setAttribute('stroke', 'transparent');
        el.classList.remove('find-option-visual');
      }
    });

    // Show feedback
    document.getElementById('feedback').classList.remove('hidden');
    var feedbackBox = document.getElementById('feedback-box');
    var feedbackText = document.getElementById('feedback-text');

    // Highlight correct answer in green with animation
    var correctEl = document.getElementById('visual-A');
    correctEl.setAttribute('stroke', '#22c55e');
    correctEl.setAttribute('stroke-width', '3');
    correctEl.setAttribute('fill', 'rgba(34, 197, 94, 0.1)');
    correctEl.classList.add('find-option-correct');

    if (isCorrect) {
      feedbackBox.className = 'find-feedback find-feedback-correct p-5 rounded-lg';
      feedbackText.innerHTML = "<strong class='text-green-400'>Correct!</strong> The Y-axis starts at 95% instead of 0%. This makes a tiny 2-3% difference between brands look like Chevy is dramatically more reliable. If the axis started at 0%, all bars would look nearly identical.";
    } else {
      // Highlight wrong answer in red with animation
      var wrongEl = document.getElementById('visual-' + selected);
      wrongEl.setAttribute('stroke', '#ef4444');
      wrongEl.setAttribute('stroke-width', '3');
      wrongEl.setAttribute('fill', 'rgba(239, 68, 68, 0.1)');
      wrongEl.classList.add('find-option-wrong');
      feedbackBox.className = 'find-feedback find-feedback-wrong p-5 rounded-lg';
      feedbackText.innerHTML = "<strong class='text-red-400'>Not quite!</strong> The problem is the Y-axis (A). It starts at 95% instead of 0%, making small differences look huge. The actual data shows all trucks are within 2-3% of each other in reliability.";
    }
    
    document.getElementById('continue').classList.remove('hidden');
  });
});

// On page load, check if already answered and restore state
var previousAnswer = ScoreTracker.getAnswer(scenarioId);
if (previousAnswer) {
  var selected = previousAnswer.selected;
  var isCorrect = previousAnswer.correct;
  
  // Add disabled class to chart container
  document.getElementById('chart-container').classList.add('find-disabled');

  // Disable all options and remove hover effects
  document.querySelectorAll('rect[data-option]').forEach(function(opt) {
    opt.style.pointerEvents = 'none';
    opt.setAttribute('onmouseenter', '');
    opt.setAttribute('onmouseleave', '');
  });

  // Remove all visual boxes styling
  ['A', 'B', 'C', 'D'].forEach(function(letter) {
    var el = document.getElementById('visual-' + letter);
    if (el) {
      el.setAttribute('fill', 'transparent');
      el.setAttribute('stroke', 'transparent');
      el.classList.remove('find-option-visual');
    }
  });

  // Highlight correct answer in green
  var correctEl = document.getElementById('visual-A');
  correctEl.setAttribute('stroke', '#22c55e');
  correctEl.setAttribute('stroke-width', '3');
  correctEl.setAttribute('fill', 'rgba(34, 197, 94, 0.1)');

  // If wrong, also highlight the wrong answer in red
  if (!isCorrect) {
    var wrongEl = document.getElementById('visual-' + selected);
    wrongEl.setAttribute('stroke', '#ef4444');
    wrongEl.setAttribute('stroke-width', '3');
    wrongEl.setAttribute('fill', 'rgba(239, 68, 68, 0.1)');
  }

  // Show feedback
  document.getElementById('feedback').classList.remove('hidden');
  var feedbackBox = document.getElementById('feedback-box');
  var feedbackText = document.getElementById('feedback-text');

  if (isCorrect) {
    feedbackBox.className = 'find-feedback find-feedback-correct p-5 rounded-lg';
    feedbackText.innerHTML = "<strong class='text-green-400'>Correct!</strong> The Y-axis starts at 95% instead of 0%. This makes a tiny 2-3% difference between brands look like Chevy is dramatically more reliable. If the axis started at 0%, all bars would look nearly identical.";
  } else {
    feedbackBox.className = 'find-feedback find-feedback-wrong p-5 rounded-lg';
    feedbackText.innerHTML = "<strong class='text-red-400'>Not quite!</strong> The problem is the Y-axis (A). It starts at 95% instead of 0%, making small differences look huge. The actual data shows all trucks are within 2-3% of each other in reliability.";
  }
  
  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}