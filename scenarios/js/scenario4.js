// Scenario 4 - Pie Chart with percentages over 100% - Answer is MISLEADING - NO FEEDBACK
const correctAnswer = "misleading";
const scenarioId = "scenario4";

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
    
    if (isCorrect) {
      this.classList.add('border-green-500', 'bg-green-900');
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('opacity-50');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
    }
    
    // No feedback for scenario4 - just show continue
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
  
  // Show continue button (no feedback)
  document.getElementById('continue').classList.remove('hidden');
}
