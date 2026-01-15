const correctAnswer = "A";

document.querySelectorAll('[data-option]').forEach(function(option) {
  option.addEventListener('click', function() {
    const selected = this.getAttribute('data-option');
    
    if (selected === correctAnswer) {
      // Correct - show explanation and continue
      document.getElementById('feedback').classList.remove('hidden');
      document.getElementById('feedback-box').className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      document.getElementById('feedback-text').textContent = 'Correct! The Y-axis is oriented wrong for ranking data. For rankings, 1st place is BEST and should be at the TOP of the chart. This chart has higher numbers (worse ranks) at the top, so when Ireland IMPROVED from 64th to 14th, the line goes DOWN - making success look like failure. The Y-axis should be inverted!';
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
        document.getElementById('feedback-text').textContent = 'Not quite. These early data points (64th, 56th, 63rd) are plotted correctly based on the Y-axis scale. The problem is with how the axis itself is oriented. Try again!';
      } else if (selected === "C") {
        document.getElementById('feedback-text').textContent = 'Not quite. The 14th place finish is Ireland\'s BEST result and is plotted correctly. The problem is that being at the BOTTOM of the chart makes it LOOK bad. Think about why that is. Try again!';
      }
    }
  });
});