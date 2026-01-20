// ScoreTracker for Truth or Myth
defineScoreTracker();

function defineScoreTracker() {
  if (window.ScoreTracker) return; // Prevent redefinition
  const STORAGE_KEY = 'truthOrMyth_score';
  const MAX_SCENARIOS = 14; // Adjust if you have a different number

  window.ScoreTracker = {
    recordAnswer: function(scenarioId, isCorrect, selectedAnswer) {
      let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      data[scenarioId] = {
        correct: !!isCorrect,
        selected: selectedAnswer
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
    getScore: function() {
      let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      let correct = Object.values(data).filter(function(v) {
        return v.correct;
      }).length;
      return {
        correct: correct,
        maxPossible: MAX_SCENARIOS
      };
    },
    getAnswer: function(scenarioId) {
      let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return data[scenarioId] || null;
    },
    resetScore: function() {
      localStorage.removeItem(STORAGE_KEY);
    },
    // For debugging
    _getAll: function() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    }
  };
}
