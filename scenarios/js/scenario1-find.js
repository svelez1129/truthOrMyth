const correctAnswer = "A";

document.querySelectorAll('[data-option]').forEach(function(option) {
  option.addEventListener('click', function() {
    const selected = this.getAttribute('data-option');
    
    if (selected === correctAnswer) {
      // Correct - show explanation and continue
      document.getElementById('feedback').classList.remove('hidden');
      document.getElementById('feedback-box').className = 'p-4 rounded-lg bg-green-900 border border-green-500';
      document.getElementById('feedback-text').textContent = 'Correct! The Y-axis starts at 95% instead of 0%. This makes Chevy look almost twice as reliable as Toyota and ten times more reliable than Nissan! In reality, the difference between 98% and 95.5% is tiny - only 2.5 percentage points. If the Y-axis started at 0%, all the bars would look nearly identical.';
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
        document.getElementById('feedback-text').textContent = 'Not quite. The Chevy bar correctly shows 98%. The problem is elsewhere - look at where the scale starts. Try again!';
      } else if (selected === "C") {
        document.getElementById('feedback-text').textContent = 'Not quite. The Ford bar correctly shows about 97%. The problem is elsewhere - look at where the scale starts. Try again!';
      } else if (selected === "D") {
        document.getElementById('feedback-text').textContent = 'Not quite. The Toyota bar correctly shows about 96%. The problem is elsewhere - look at where the scale starts. Try again!';
      }
    }
  });
});