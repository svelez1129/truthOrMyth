// Scenario 6 - US Poverty Line Chart - Answer is FALSE
const correctAnswer = "false";
const scenarioId = "scenario6";
const nextPage = "scenario6-real.html";

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
      feedbackText.textContent = "Correct! This is FALSE. The chart compares apples to oranges - the international poverty line ($3/day) measures extreme global poverty, while the US poverty line ($27.10/day) is designed for a high cost-of-living country. You can't use the international standard to claim only 1% of Americans are poor. The 11% US poverty rate uses the appropriate US standard.";
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
      
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('disabled');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      if (selected === "true") {
        feedbackText.textContent = "Not quite! This is FALSE. While the data is real, the claim misuses it. The international poverty line ($3/day) is meant for developing countries. Using it to claim only 1% of Americans are poor ignores that $3/day is unlivable in the US. The proper US poverty line ($27.10/day) shows 11% poverty.";
      } else if (selected === "misleading") {
        feedbackText.textContent = "Close! But this is actually FALSE, not just misleading. The claim that 'only 1% of Americans live in poverty' is factually wrong because it uses the wrong metric. The international poverty line ($3/day) isn't meant for high cost-of-living countries like the US. The real US poverty rate is 11%.";
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
  
  // Show feedback
  document.getElementById('feedback').classList.remove('hidden');
  var feedbackBox = document.getElementById('feedback-box');
  var feedbackText = document.getElementById('feedback-text');
  
  if (isCorrect) {
    feedbackBox.className = 'p-6 rounded-lg mb-4 bg-green-900 border border-green-500';
    feedbackText.textContent = "Correct! This is FALSE. The chart compares apples to oranges - the international poverty line ($3/day) measures extreme global poverty, while the US poverty line ($27.10/day) is designed for a high cost-of-living country. You can't use the international standard to claim only 1% of Americans are poor. The 11% US poverty rate uses the appropriate US standard.";
  } else {
    feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
    if (selected === "true") {
      feedbackText.textContent = "Not quite! This is FALSE. While the data is real, the claim misuses it. The international poverty line ($3/day) is meant for developing countries. Using it to claim only 1% of Americans are poor ignores that $3/day is unlivable in the US. The proper US poverty line ($27.10/day) shows 11% poverty.";
    } else if (selected === "misleading") {
      feedbackText.textContent = "Close! But this is actually FALSE, not just misleading. The claim that 'only 1% of Americans live in poverty' is factually wrong because it uses the wrong metric. The international poverty line ($3/day) isn't meant for high cost-of-living countries like the US. The real US poverty rate is 11%.";
    }
  }
  
  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}