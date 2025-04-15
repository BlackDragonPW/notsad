// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Prevent scrolling when menu is open
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleNoScroll = () => {
    if (navLinks.classList.contains('active')) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  };
  
  hamburger.addEventListener('click', toggleNoScroll);
});
