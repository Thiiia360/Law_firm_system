// Blackwell & Associates - Main JS

// Navbar: add 'scrolled' class on scroll
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Dark / Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
});

function updateIcon(theme) {
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }
}
// Initialize Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

// Blog live search/filter
const blogSearchInput = document.getElementById('blogSearchInput');
const blogItems = document.querySelectorAll('.blog-item');
const noResultsMsg = document.getElementById('noResultsMsg');

if (blogSearchInput) {
  blogSearchInput.addEventListener('input', () => {
    const query = blogSearchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    blogItems.forEach(item => {
      const title = item.getAttribute('data-title');
      const matches = title.includes(query);
      item.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    noResultsMsg.classList.toggle('d-none', visibleCount > 0);
  });
}