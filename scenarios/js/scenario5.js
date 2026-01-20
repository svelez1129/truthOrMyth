// Scenario 5 - Literacy vs Illiteracy (UNESCO Data) - Answer is TRUE
const correctAnswer = "true";
const scenarioId = "scenario5";
const nextPage = "scenario6.html";

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
      feedbackText.textContent = "Correct! This is TRUE. The chart shows literacy (teal) growing from about 12% in 1820 to 87% today, while illiteracy (salmon) shrank from 88% to just 13%. The rates have essentially flipped over 200 years. This is honest data visualization with a proper Y-axis (0-100%), clear labels, and a reputable source (UNESCO).";
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
      
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('opacity-50');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      if (selected === "false") {
        feedbackText.textContent = "Not quite! This is actually TRUE. The UNESCO data clearly shows literacy rising from ~12% to ~87% over 200 years, meaning literacy and illiteracy rates have essentially reversed. The chart uses proper visualization practices.";
      } else if (selected === "misleading") {
        feedbackText.textContent = "Good skepticism, but this chart is actually TRUE! It uses a proper 0-100% Y-axis, cites UNESCO as a source, and accurately shows how global literacy has dramatically increased over 200 years. Not all charts are misleading!";
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
    feedbackText.textContent = "Correct! This is TRUE. The chart shows literacy (teal) growing from about 12% in 1820 to 87% today, while illiteracy (salmon) shrank from 88% to just 13%. The rates have essentially flipped over 200 years. This is honest data visualization with a proper Y-axis (0-100%), clear labels, and a reputable source (UNESCO).";
  } else {
    feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
    if (selected === "false") {
      feedbackText.textContent = "Not quite! This is actually TRUE. The UNESCO data clearly shows literacy rising from ~12% to ~87% over 200 years, meaning literacy and illiteracy rates have essentially reversed. The chart uses proper visualization practices.";
    } else if (selected === "misleading") {
      feedbackText.textContent = "Good skepticism, but this chart is actually TRUE! It uses a proper 0-100% Y-axis, cites UNESCO as a source, and accurately shows how global literacy has dramatically increased over 200 years. Not all charts are misleading!";
    }
  }
  
  // Show continue button
  document.getElementById('continue').classList.remove('hidden');
}