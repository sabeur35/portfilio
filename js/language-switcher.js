// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get current language from URL or default to French
  const currentPath = window.location.pathname;
  const isEnglish = currentPath.includes('/en/');
  
  // Add language switcher to the header
  const nav = document.querySelector('.nav-links');
  const languageSwitcher = document.createElement('li');
  languageSwitcher.className = 'language-switcher';
  
  // Create language toggle button
  const languageToggle = document.createElement('a');
  languageToggle.href = '#';
  languageToggle.className = 'language-toggle';
  
  // Set text based on current language
  languageToggle.textContent = isEnglish ? 'FR' : 'EN';
  
  // Add click event to switch language
  languageToggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Determine target URL based on current language
    let targetUrl;
    if (isEnglish) {
      // If we're in English version, go to French version
      targetUrl = currentPath.replace('/en/', '/');
    } else {
      // If we're in French version, go to English version
      // Handle both root path and specific path cases
      if (currentPath.endsWith('/')) {
        targetUrl = currentPath + 'en/';
      } else {
        const pathParts = currentPath.split('/');
        pathParts.pop(); // Remove the filename (index.html)
        targetUrl = pathParts.join('/') + '/en/';
      }
    }
    
    // Navigate to the target URL
    window.location.href = targetUrl;
  });
  
  // Add the toggle button to the language switcher
  languageSwitcher.appendChild(languageToggle);
  
  // Add the language switcher to the navigation
  nav.appendChild(languageSwitcher);
});
