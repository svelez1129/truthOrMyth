// Navigation component for Truth or Myth
// Provides progress bar and back button functionality

(function() {
  // Scenario order - must match index.js
  const scenarioOrder = [
    'scenario1',
    'scenario1-find',
    'scenario2',
    'scenario3',
    'scenario4',
    'scenario4-find',
    'scenario5',
    'scenario6',
    'scenario7',
    'scenario7-find',
    'scenario8',
    'scenario8-find',
    'scenario9',
    'scenario10'
  ];

  // Navigation map for back button
  // Maps current page to previous page
  const backNavigation = {
    'scenario1': '../../index.html',
    'scenario1-find': 'scenario1.html',
    'scenario1-real': 'scenario1-find.html',
    'scenario2': 'scenario1-real.html',
    'scenario2-real': 'scenario2.html',
    'scenario3': 'scenario2-real.html',
    'scenario3-real': 'scenario3.html',
    'scenario4': 'scenario3-real.html',
    'scenario4-find': 'scenario4.html',
    'scenario4-real': 'scenario4-find.html',
    'scenario5': 'scenario4-real.html',
    'scenario5-real': 'scenario5.html',
    'scenario6': 'scenario5-real.html',
    'scenario6-real': 'scenario6.html',
    'scenario7': 'scenario6-real.html',
    'scenario7-find': 'scenario7.html',
    'scenario7-real': 'scenario7-find.html',
    'scenario8': 'scenario7-real.html',
    'scenario8-find': 'scenario8.html',
    'scenario8-real': 'scenario8-find.html',
    'scenario9': 'scenario8-real.html',
    'scenario9-real': 'scenario9.html',
    'scenario10': 'scenario9-real.html',
    'scenario10-real': 'scenario10.html',
    'results': 'scenario10-real.html'
  };

  const STORAGE_KEY = 'truthOrMyth_score';

  // Get current page identifier from URL
  function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    return filename;
  }

  // Get number of questions answered from localStorage
  function getAnsweredCount() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return Object.keys(data).length;
  }

  // Render the progress bar
  function renderProgressBar(container) {
    const answered = getAnsweredCount();
    const total = scenarioOrder.length;
    const percentage = Math.round((answered / total) * 100);

    const progressHTML = `
      <div class="flex items-center justify-between text-sm text-slate-400 mb-2">
        <span>${answered} of ${total} answered</span>
        <span>${percentage}%</span>
      </div>
      <div class="bg-slate-700 rounded-full h-2 overflow-hidden">
        <div class="h-full bg-cyan-500 transition-all duration-300" style="width: ${percentage}%"></div>
      </div>
    `;

    container.innerHTML = progressHTML;
  }

  // Render the back button
  function renderBackButton(container) {
    const currentPage = getCurrentPage();
    const backUrl = backNavigation[currentPage];

    if (!backUrl) return;

    const backHTML = `
      <a href="${backUrl}" class="inline-flex items-center text-slate-400 hover:text-cyan-400 transition">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="text-sm">Back</span>
      </a>
    `;

    container.innerHTML = backHTML;
  }

  // Render the full navigation bar
  function renderNavigation() {
    const navBar = document.getElementById('nav-bar');
    if (!navBar) return;

    navBar.innerHTML = `
      <div class="mb-4" id="back-btn-container"></div>
      <div id="progress-bar-container"></div>
    `;

    const backContainer = document.getElementById('back-btn-container');
    const progressContainer = document.getElementById('progress-bar-container');

    renderBackButton(backContainer);
    renderProgressBar(progressContainer);
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavigation);
  } else {
    renderNavigation();
  }

  // Expose for external use if needed
  window.Navigation = {
    renderNavigation: renderNavigation,
    renderProgressBar: renderProgressBar,
    renderBackButton: renderBackButton,
    getAnsweredCount: getAnsweredCount
  };
})();
