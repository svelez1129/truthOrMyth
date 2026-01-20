const correctAnswer = "A";
const scenarioId = "scenario4-find";

document.querySelectorAll('[data-option]').forEach(function(option) {
  option.addEventListener('click', function() {
    const selected = this.getAttribute('data-option');
    const isCorrect = selected === correctAnswer;
    // Record the answer
    ScoreTracker.recordAnswer(scenarioId, isCorrect);
    
    if (isCorrect) {
      // Correct - show explanation and continue
      document.getElementById('feedback').style.display = 'block';
      document.getElementById('feedback-box').className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      document.getElementById('feedback-text').textContent = 'Correct! Using a pie chart is misleading here. Pie charts are meant to show parts of a whole that add up to 100%, but this data adds up to 271% because respondents could pick three favorites. A bar chart would be more appropriate.';
      document.getElementById('continue').style.display = 'block';
      
      // Disable all options
      document.querySelectorAll('[data-option]').forEach(function(opt) {
        opt.style.pointerEvents = 'none';
      });
    } else {
      // Wrong - show hint, allow retry
      document.getElementById('feedback').style.display = 'block';
      document.getElementById('feedback-box').className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      document.getElementById('feedback-text').textContent = 'Not quite. That data point is accurate. Think bigger - what if the problem isn\'t with any single slice? Try again!';
    }
  });
});
