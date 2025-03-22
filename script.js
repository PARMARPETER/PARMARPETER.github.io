// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
const setTheme = (isDarkMode) => {
  if (isDarkMode) {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
};

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const isDarkMode = !body.classList.contains('dark-mode');
  setTheme(isDarkMode);
});

// Check saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  setTheme(true);
} else {
  setTheme(false);
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});