const correctAnswer = "A";

document.querySelectorAll('[data-option]').forEach(function(option) {
  option.addEventListener('click', function() {
    const selected = this.getAttribute('data-option');
    
    if (selected === correctAnswer) {
      // Correct - show explanation and continue
      document.getElementById('feedback').style.display = 'block';
      document.getElementById('feedback-box').className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      document.getElementById('feedback-text').textContent = 'Correct! The Y-axis starts at 95 instead of 0. This makes the difference between 97 and 100 look huge, when it\'s actually only a 3% increase.';
      document.getElementById('continue').style.display = 'block';
      
      // Disable all options
      document.querySelectorAll('[data-option]').forEach(function(opt) {
        opt.style.pointerEvents = 'none';
      });
    } else {
      // Wrong - show explanation, allow retry
      document.getElementById('feedback').style.display = 'block';
      document.getElementById('feedback-box').className = 'p-4 rounded-lg bg-red-900 border border-red-500';
      
      if (selected === "B") {
        document.getElementById('feedback-text').textContent = 'Not quite. The 2023 bar correctly shows the value of 97. The problem is elsewhere. Try again!';
      } else if (selected === "C") {
        document.getElementById('feedback-text').textContent = 'Not quite. The 2024 bar correctly shows the value of 100. The problem is elsewhere. Try again!';
      }
    }
  });
});