// ScoreTracker for Truth or Myth
defineScoreTracker();

function defineScoreTracker() {
  if (window.ScoreTracker) return; // Prevent redefinition
  const STORAGE_KEY = 'truthOrMyth_score';
  const MAX_SCENARIOS = 14; // Adjust if you have a different number

  window.ScoreTracker = {
    recordAnswer: function(scenarioId, isCorrect) {
      let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      data[scenarioId] = !!isCorrect;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
    getScore: function() {
      let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      let correct = Object.values(data).filter(Boolean).length;
      // maxPossible can be set to MAX_SCENARIOS or Object.keys(data).length if you want only answered
      return {
        correct: correct,
        maxPossible: MAX_SCENARIOS
      };
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
