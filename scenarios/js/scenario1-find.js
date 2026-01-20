// Scenario 1 Find: Identify the misleading element - Answer is "A" (Y-axis)
const correctAnswer = "A";
const scenarioId = "scenario1-find";

document.querySelectorAll('rect[data-option]').forEach(function(option) {
  option.addEventListener('click', function() {
    const selected = this.getAttribute('data-option');
    const isCorrect = selected === correctAnswer;
    // Record the answer
    ScoreTracker.recordAnswer(scenarioId, isCorrect);
    
    // Disable all options and remove hover effects
    document.querySelectorAll('rect[data-option]').forEach(function(opt) {
      opt.style.pointerEvents = 'none';
      opt.setAttribute('onmouseenter', '');
      opt.setAttribute('onmouseleave', '');
    });
    
    // Reset all visual boxes to default
    ['A', 'B', 'C', 'D'].forEach(function(letter) {
      var el = document.getElementById('visual-' + letter);
      if (el) {
        el.setAttribute('fill', 'rgba(6,182,212,0.1)');
        el.setAttribute('stroke', '#06b6d4');
      }
    });
    
    // Show feedback
    document.getElementById('feedback').classList.remove('hidden');
    var feedbackBox = document.getElementById('feedback-box');
    var feedbackText = document.getElementById('feedback-text');
    
    // Always highlight correct answer in green
    document.getElementById('visual-A').setAttribute('fill', '#166534');
    document.getElementById('visual-A').setAttribute('stroke', '#22c55e');
    
    if (isCorrect) {
      feedbackBox.className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      feedbackText.textContent = "Correct! The Y-axis starts at 95% instead of 0%. This makes a tiny 2-3% difference between brands look like Chevy is dramatically more reliable. If the axis started at 0%, all bars would look nearly identical.";
    } else {
      // Highlight wrong answer in red
      document.getElementById('visual-' + selected).setAttribute('fill', '#7f1d1d');
      document.getElementById('visual-' + selected).setAttribute('stroke', '#ef4444');
      feedbackBox.className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      feedbackText.textContent = "Not quite! The problem is the Y-axis (A). It starts at 95% instead of 0%, making small differences look huge. The actual data shows all trucks are within 2-3% of each other in reliability.";
    }
    
    document.getElementById('continue').classList.remove('hidden');
  });
});