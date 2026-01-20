const correctAnswer = "A";
const scenarioId = "scenario7-find";


document.querySelectorAll('[data-option]').forEach(function(option) {
  option.addEventListener('click', function() {
    const selected = this.getAttribute('data-option');
    const isCorrect = selected === correctAnswer;
    // Record the answer
    ScoreTracker.recordAnswer(scenarioId, isCorrect);
    
    if (isCorrect) {
      // Correct - show explanation and continue
      document.getElementById('feedback').classList.remove('hidden');
      document.getElementById('feedback-box').className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      document.getElementById('feedback-text').textContent = 'Correct! The Y-axis starts at 318,000 instead of 0. This makes the increase from ~323,000 to ~333,000 look dramatic, when it\'s actually only about a 3% increase. If the Y-axis started at 0, the line would appear almost flat.';
      document.getElementById('continue').classList.remove('hidden');
      
      // Disable all options
      document.querySelectorAll('[data-option]').forEach(function(opt) {
        opt.style.pointerEvents = 'none';
      });
    } else {
      // Wrong - show explanation, allow retry
      document.getElementById('feedback').classList.remove('hidden');
      document.getElementById('feedback-box').className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      
      if (selected === "B") {
        document.getElementById('feedback-text').textContent = 'Not quite. The 2014 data point correctly shows the value of approximately 323,000 robberies. The problem is elsewhere. Try again!';
      } else if (selected === "C") {
        document.getElementById('feedback-text').textContent = 'Not quite. The 2015 data point correctly shows the value of approximately 327,000 robberies. The problem is elsewhere. Try again!';
      } else if (selected === "D") {
        document.getElementById('feedback-text').textContent = 'Not quite. The 2016 data point correctly shows the value of approximately 333,000 robberies. The problem is elsewhere. Try again!';
      }
    }
  });
});