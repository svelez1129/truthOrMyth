// Scenario 2 - Ice Cream Sales vs Drowning Deaths (Correlation ≠ Causation)
const correctAnswer = "false";
const scenarioId = "scenario2";
const nextPage = "scenario2-real.html";

document.querySelectorAll('button[data-answer]').forEach(function(button) {
  button.addEventListener('click', function() {
    const selected = this.getAttribute('data-answer');
    const isCorrect = selected === correctAnswer;
    
    // Record the answer (includes selected answer)
    ScoreTracker.recordAnswer(scenarioId, isCorrect, selected);
    
    // Change all labels to white and disable buttons
    document.querySelectorAll('button[data-answer]').forEach(function(btn) {
      btn.disabled = true;
      btn.classList.remove('hover:border-cyan-400', 'hover:bg-slate-700');
      btn.classList.add('disabled');
      btn.querySelector('.answer-label').classList.remove('text-green-400', 'text-red-400', 'text-amber-400');
      btn.querySelector('.answer-label').classList.add('text-white');
    });
    
    // Highlight clicked button
    this.classList.remove('disabled');
    this.classList.add('selected');
    
    // Show feedback
    document.getElementById('feedback').classList.remove('hidden');
    var feedbackBox = document.getElementById('feedback-box');
    var feedbackText = document.getElementById('feedback-text');
    
    // Get continue link
    var continueLink = document.querySelector('#continue a');
    continueLink.href = nextPage;
    
    if (isCorrect) {
      this.classList.add('border-green-500', 'bg-green-900', 'correct-answer');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-green-900 border border-green-500';
      feedbackText.textContent = "Correct! This is FALSE. While the correlation between ice cream sales and drowning deaths is real, ice cream doesn't CAUSE drowning. Both are caused by a hidden third variable: hot weather. When it's hot, people buy more ice cream AND swim more often. This is the classic 'correlation does not equal causation' fallacy.";
    } else {
      this.classList.add('border-red-500', 'bg-red-900', 'wrong-answer');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
      
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('disabled');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      if (selected === "true") {
        feedbackText.textContent = "Not quite! The correlation is real, but ice cream doesn't CAUSE drowning. Both are caused by hot weather - when it's hot, people buy more ice cream AND swim more. This is the classic 'correlation does not equal causation' fallacy.";
      } else if (selected === "misleading") {
        feedbackText.textContent = "Close, but this is actually FALSE. The claim suggests causation ('linked to') when there's only correlation. Both ice cream sales and drowning increase in summer due to hot weather - a hidden third variable. Ice cream doesn't cause drowning!";
      }
    }
    
    document.getElementById('continue').classList.remove('hidden');
  });
});

// On page load, check if already answered and restore state
var previousAnswer = ScoreTracker.getAnswer(scenarioId);
if (previousAnswer) {
  var selected = previousAnswer.selected;
  var isCorrect = previousAnswer.correct;
  
  // Disable all buttons and reset styles
  document.querySelectorAll('button[data-answer]').forEach(function(btn) {
    btn.disabled = true;
    btn.classList.remove('hover:border-cyan-400', 'hover:bg-slate-700');
    btn.classList.add('disabled');
    btn.querySelector('.answer-label').classList.remove('text-green-400', 'text-red-400', 'text-amber-400');
    btn.querySelector('.answer-label').classList.add('text-white');
  });
  
  // Highlight the previously selected button
  var selectedBtn = document.querySelector('button[data-answer="' + selected + '"]');
  if (selectedBtn) {
    selectedBtn.classList.remove('disabled');
    selectedBtn.classList.add('selected');
    if (isCorrect) {
      selectedBtn.classList.add('border-green-500', 'bg-green-900');
    } else {
      selectedBtn.classList.add('border-red-500', 'bg-red-900');
      // Also highlight correct answer
      var correctBtn = document.querySelector('button[data-answer="' + correctAnswer + '"]');
      correctBtn.classList.remove('disabled');
      correctBtn.classList.add('border-green-500', 'bg-green-900', 'correct-answer');
    }
  }
  
  // Show feedback
  document.getElementById('feedback').classList.remove('hidden');
  var feedbackBox = document.getElementById('feedback-box');
  var feedbackText = document.getElementById('feedback-text');
  
  if (isCorrect) {
    feedbackBox.className = 'p-6 rounded-lg mb-4 bg-green-900 border border-green-500';
    feedbackText.textContent = "Correct! This is FALSE. While the correlation between ice cream sales and drowning deaths is real, ice cream doesn't CAUSE drowning. Both are caused by a hidden third variable: hot weather. When it's hot, people buy more ice cream AND swim more often. This is the classic 'correlation does not equal causation' fallacy.";
  } else {
    feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
    if (selected === "true") {
      feedbackText.textContent = "Not quite! The correlation is real, but ice cream doesn't CAUSE drowning. Both are caused by hot weather - when it's hot, people buy more ice cream AND swim more. This is the classic 'correlation does not equal causation' fallacy.";
    } else if (selected === "misleading") {
      feedbackText.textContent = "Close, but this is actually FALSE. The claim suggests causation ('linked to') when there's only correlation. Both ice cream sales and drowning increase in summer due to hot weather - a hidden third variable. Ice cream doesn't cause drowning!";
    }
  }
  
  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}

