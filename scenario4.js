const correctAnswer = "misleading";

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
    
    if (isCorrect) {
      this.classList.add('border-green-500', 'bg-green-900');
      // Show continue button without feedback explanation
      document.getElementById('continue').style.display = 'block';
    } else {
      this.classList.add('border-red-500', 'bg-red-900');
      // Also highlight the correct answer
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.remove('opacity-50');
      document.querySelector('button[data-answer="' + correctAnswer + '"]').classList.add('border-green-500', 'bg-green-900');
      
      // Show feedback only for wrong answers
      document.getElementById('feedback').style.display = 'block';
      var feedbackBox = document.getElementById('feedback-box');
      var feedbackText = document.getElementById('feedback-text');
      feedbackBox.className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      
      if (selected === "true") {
        feedbackText.textContent = 'Wrong! The correct answer is MISLEADING. While the percentages shown are accurate, using a pie chart is misleading because pie charts are designed to show parts of a whole that add up to 100%. However, this data represents multiple selections from respondents (they could pick three favorites), so the percentages add up to more than 100%. A bar chart or other visualization would be more appropriate for this type of data.';
      } else if (selected === "false") {
        feedbackText.textContent = 'Wrong! The correct answer is MISLEADING. The data itself is not false - the percentages are accurate. However, using a pie chart is misleading because pie charts are designed to show parts of a whole that add up to 100%. Since this data represents multiple selections from respondents (they could pick three favorites), the percentages add up to more than 100%. A bar chart or other visualization would be more appropriate for this type of data.';
      }
      document.getElementById('continue').style.display = 'block';
    }
  });
});
