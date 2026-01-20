const correctAnswer = "misleading";
const scenarioId = "scenario8";

document.querySelectorAll('button[data-answer]').forEach(function (button) {
  button.addEventListener('click', function () {
    const selected = this.getAttribute('data-answer');

    // Change all labels to white and disable buttons
    document.querySelectorAll('button[data-answer]').forEach(function (btn) {
      btn.disabled = true;
      btn.classList.remove('hover:border-cyan-400', 'hover:bg-slate-700');
      btn.classList.add('opacity-50');
      btn.querySelector('.answer-label').classList.remove('text-green-400', 'text-red-400', 'text-amber-400');
      btn.querySelector('.answer-label').classList.add('text-white');
    });

    const isCorrect = selected === correctAnswer;
    // Record the answer
    ScoreTracker.recordAnswer(scenarioId, isCorrect);

    if (isCorrect) {
      // Correct answer logic
      this.classList.remove('opacity-50');
      this.classList.add('border-green-500', 'bg-green-900');

      // No inline feedback here - continue to find page for details

    } else {
      // Wrong answer logic
      this.classList.remove('opacity-50');
      this.classList.add('border-red-500', 'bg-red-900');

      // Highlight the correct answer (misleading)
      var correctBtn = document.querySelector('button[data-answer="' + correctAnswer + '"]');
      correctBtn.classList.remove('opacity-50');
      correctBtn.classList.add('border-green-500', 'bg-green-900');

      // Create and show inline feedback
      var feedbackDiv = document.createElement('div');
      feedbackDiv.className = 'mt-6 p-4 rounded-lg bg-red-900 border border-red-500';

      if (selected === "true") {
        feedbackDiv.textContent = 'Not quite! Look at the data more carefully - Ireland went from 64th place to 14th place. Is that really a "collapse"? The chart is MISLEADING in how it presents this change.';
      } else if (selected === "false") {
        feedbackDiv.textContent = 'You\'re on the right track that something is wrong, but the data itself is accurate. The chart is MISLEADING in how it visually presents Ireland\'s improvement as a decline.';
      }
      document.getElementById('answers').after(feedbackDiv);
    }

    // Show continue button
    document.getElementById('continue').classList.remove('hidden');
  });
});