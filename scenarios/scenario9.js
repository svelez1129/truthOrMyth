const correctAnswer = "false";

document.querySelectorAll('button[data-answer]').forEach(function(button) {
  button.addEventListener('click', function() {
    const selected = this.getAttribute('data-answer');
    const isCorrect = selected === correctAnswer;
    
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
    
    if (isCorrect) {
      this.classList.add('border-green-500', 'bg-green-900');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-green-900 border border-green-500';
      feedbackText.textContent = 'Correct! This is FALSE. While the two lines DO correlate (r=0.985), that doesn\'t mean one CAUSES the other! The name Sarah has nothing to do with learning Spanish. This is a classic example of "correlation does not equal causation" - two unrelated things can follow the same trend by pure coincidence.';
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      feedbackBox.className = 'p-6 rounded-lg mb-4 bg-red-900 border border-red-500';
      
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('opacity-50');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      if (selected === "true") {
        feedbackText.textContent = 'Not quite! Yes, the lines correlate - but does the name "Sarah" really make people want to learn Spanish? Of course not! The claim that one CAUSES the other is FALSE. Correlation does not equal causation.';
      } else if (selected === "misleading") {
        feedbackText.textContent = 'Close! The chart itself is accurate - the correlation is real. But the CLAIM that one causes the other is completely FALSE. There\'s no logical connection between baby names and language learning. This is "correlation ≠ causation."';
      }
    }
    
    document.getElementById('continue').classList.remove('hidden');
  });
});