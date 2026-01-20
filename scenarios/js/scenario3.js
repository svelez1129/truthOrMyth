// Scenario 3 - Population Growth (UN Data) - Answer is TRUE
const correctAnswer = "true";
const scenarioId = "scenario3";
const nextPage = "scenario3-real.html";

document.querySelectorAll('button[data-answer]').forEach(function(button) {
  button.addEventListener('click', function() {
    const selected = this.getAttribute('data-answer');
    const isCorrect = selected === correctAnswer;
    
    // Record the answer
    ScoreTracker.recordAnswer(scenarioId, isCorrect);
    
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
      feedbackText.textContent = "Correct! This is TRUE. The chart accurately shows population growth from 1950 to 2023 using official UN data. The Y-axis starts at zero, the source is clearly cited (UN World Population Prospects), and the data correctly shows India recently surpassing China as the world's most populous country.";
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
      
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('opacity-50');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      if (selected === "false") {
        feedbackText.textContent = "Actually, this is TRUE! The data comes from the UN World Population Prospects - a highly reputable source. The chart follows good visualization practices: Y-axis starts at zero, source is cited, and the trends accurately reflect real population data.";
      } else if (selected === "misleading") {
        feedbackText.textContent = "Good instinct to be skeptical, but this chart is actually honest! The Y-axis starts at zero, the UN is a reliable source, and the data accurately shows population trends. Not all charts are misleading - this one is TRUE.";
      }
    }
    
    document.getElementById('continue').classList.remove('hidden');
  });
});