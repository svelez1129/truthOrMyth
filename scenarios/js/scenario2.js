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
    document.getElementById('feedback').style.display = 'block';
    var feedbackBox = document.getElementById('feedback-box');
    var feedbackText = document.getElementById('feedback-text');
    
    if (isCorrect) {
      this.classList.add('border-green-500', 'bg-green-900');
      feedbackBox.className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      feedbackText.textContent = 'Correct! This claim is FALSE. Ice cream does not cause drowning. Both ice cream sales and drowning deaths increase in summer because of hot weather. This is called "correlation does not equal causation" - just because two things happen together does not mean one causes the other.';
      document.getElementById('continue').style.display = 'block';
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      feedbackBox.className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      
      // Highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('opacity-50');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      feedbackText.textContent = 'Wrong! The correct answer is FALSE. Ice cream does not cause drowning. Both ice cream sales and drowning deaths increase in summer because of hot weather. This is called "correlation does not equal causation" - just because two things happen together does not mean one causes the other.';
      document.getElementById('continue').style.display = 'block';
    }
  });
});