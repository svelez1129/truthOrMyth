// Scenario 1: Chevy Trucks - Answer is "misleading" - NO FEEDBACK
const correctAnswer = "misleading";
const scenarioId = "scenario1";

document.querySelectorAll('button[data-answer]').forEach(function(button) {
  button.addEventListener('click', function() {
    const selected = this.getAttribute('data-answer');
    const isCorrect = selected === correctAnswer;

    // Record the answer (now includes selected answer)
    ScoreTracker.recordAnswer(scenarioId, isCorrect, selected);

    // Disable all buttons and dim non-selected ones
    document.querySelectorAll('button[data-answer]').forEach(function(btn) {
      btn.disabled = true;
      btn.classList.add('disabled');
      btn.querySelector('.answer-label').classList.remove('text-green-400', 'text-red-400', 'text-amber-400');
      btn.querySelector('.answer-label').classList.add('text-white');
    });

    // Highlight clicked button
    this.classList.remove('disabled');
    this.classList.add('selected');

    if (isCorrect) {
      this.classList.add('border-green-500', 'bg-green-900', 'correct-answer');
    } else {
      this.classList.add('border-red-500', 'bg-red-900', 'wrong-answer');
      // Highlight the correct answer
      var correctBtn = document.querySelector('button[data-answer="' + correctAnswer + '"]');
      correctBtn.classList.remove('disabled');
      correctBtn.classList.add('border-green-500', 'bg-green-900', 'correct-answer');
    }

    // No feedback for scenario1 - just show continue
    document.getElementById('continue').classList.remove('hidden');
  });
});

// On page load, check if already answered and restore state
var previousAnswer = ScoreTracker.getAnswer(scenarioId);
if (previousAnswer) {
  var selected = previousAnswer.selected;
  var isCorrect = previousAnswer.correct;

  // Disable all buttons
  document.querySelectorAll('button[data-answer]').forEach(function(btn) {
    btn.disabled = true;
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
      correctBtn.classList.add('border-green-500', 'bg-green-900');
    }
  }

  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}