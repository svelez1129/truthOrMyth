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
      feedbackBox.className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      feedbackText.textContent = 'Correct! This is FALSE. While 11% of Americans live below the US poverty line ($27.10/day), only about 1% live below the international extreme poverty line of $3/day. The chart shows these are two very different thresholds — the dashed red line ($3/day) is far to the left of where most Americans earn.';
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      feedbackBox.className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('opacity-50');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      feedbackText.textContent = 'Not quite! The correct answer is FALSE. The 11% refers to those below the US poverty line ($27.10/day), not the international extreme poverty line ($3/day). Only ~1% of Americans live below $3/day. These are very different standards of poverty.';
    }
    
    document.getElementById('continue').classList.remove('hidden');
  });
});