const suggestions = [
    "react tutorial",
    "react inside amplify",
    "react router vs redux",
    "react performance optimization",
    "react state management",
    "react router dom",
    "react query tutorial",
    "react functional props",
    "react form problems",
    "react loading library"
  ];
  
  const searchInput = document.getElementById('searchInput');
  const suggestionsList = document.getElementById('suggestionsList');
  
  searchInput.addEventListener('input', () => {
    const input = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';
  
    if (input) {
      const filtered = suggestions.filter(item => item.toLowerCase().includes(input));
      filtered.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', () => {
          searchInput.value = suggestion;
          suggestionsList.innerHTML = '';
        });
        suggestionsList.appendChild(li);
      });
    }
  });
  