// Scenario 10 - Answer is TRUE
const correctAnswer = "true";
const scenarioId = "scenario10";
const nextPage = "scenario10-real.html";

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
      btn.classList.add('opacity-50');
      btn.querySelector('.answer-label').classList.remove('text-green-400', 'text-red-400', 'text-amber-400');
      btn.querySelector('.answer-label').classList.add('text-white');
    });
    
    // Highlight clicked button
    this.classList.remove('opacity-50');
    
    // Show feedback
    document.getElementById('feedback').classList.remove('hidden');
    var feedbackBox = document.getElementById('feedback-box');
    var feedbackText = document.getElementById('feedback-text');
    
    // Get continue link
    var continueLink = document.querySelector('#continue a');
    continueLink.href = nextPage;
    
    if (isCorrect) {
      this.classList.add('border-green-500', 'bg-green-900');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-green-900 border border-green-500';
      feedbackText.textContent = 'Correct! This is TRUE. This chart is an example of honest data visualization: the Y-axis starts at zero, the source is the official U.S. Bureau of Labor Statistics, and it includes a baseline comparison (the 5% average for all occupations). Data scientist really is projected to be the fastest-growing data occupation!';
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
      
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('opacity-50');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      if (selected === "false") {
        feedbackText.textContent = 'Actually, this is TRUE! The data comes from the U.S. Bureau of Labor Statistics - an official government source. The chart accurately shows that data scientist jobs are projected to grow 36% from 2021-2031, the fastest among data-related occupations.';
      } else if (selected === "misleading") {
        feedbackText.textContent = 'Good instinct to be skeptical! But this chart is actually honest. Check the signs: Y-axis starts at zero, source is clearly cited (BLS), and it includes a baseline for comparison. This is a TRUE claim backed by accurate data visualization.';
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
    btn.classList.add('opacity-50');
    btn.querySelector('.answer-label').classList.remove('text-green-400', 'text-red-400', 'text-amber-400');
    btn.querySelector('.answer-label').classList.add('text-white');
  });
  
  // Highlight the previously selected button
  var selectedBtn = document.querySelector('button[data-answer="' + selected + '"]');
  if (selectedBtn) {
    selectedBtn.classList.remove('opacity-50');
    if (isCorrect) {
      selectedBtn.classList.add('border-green-500', 'bg-green-900');
    } else {
      selectedBtn.classList.add('border-red-500', 'bg-red-900');
      // Also highlight correct answer
      var correctBtn = document.querySelector('button[data-answer="' + correctAnswer + '"]');
      correctBtn.classList.remove('opacity-50');
      correctBtn.classList.add('border-green-500', 'bg-green-900');
    }
  }
  
  // Show feedback
  document.getElementById('feedback').classList.remove('hidden');
  var feedbackBox = document.getElementById('feedback-box');
  var feedbackText = document.getElementById('feedback-text');
  
  if (isCorrect) {
    feedbackBox.className = 'p-6 rounded-lg mb-4 bg-green-900 border border-green-500';
    feedbackText.textContent = 'Correct! This is TRUE. This chart is an example of honest data visualization: the Y-axis starts at zero, the source is the official U.S. Bureau of Labor Statistics, and it includes a baseline comparison (the 5% average for all occupations). Data scientist really is projected to be the fastest-growing data occupation!';
  } else {
    feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
    if (selected === "false") {
      feedbackText.textContent = 'Actually, this is TRUE! The data comes from the U.S. Bureau of Labor Statistics - an official government source. The chart accurately shows that data scientist jobs are projected to grow 36% from 2021-2031, the fastest among data-related occupations.';
    } else if (selected === "misleading") {
      feedbackText.textContent = 'Good instinct to be skeptical! But this chart is actually honest. Check the signs: Y-axis starts at zero, source is clearly cited (BLS), and it includes a baseline for comparison. This is a TRUE claim backed by accurate data visualization.';
    }
  }
  
  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}