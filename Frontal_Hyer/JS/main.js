// cover script.js

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector('.frst-logo');
  const cover = document.querySelector('.cover');
  const content = document.querySelector('.content');

  // Set the spin animation (already in CSS) to complete after 5 seconds
  // After 5 seconds, hide the cover and show the content
  setTimeout(function () {
    // Roll up and fade out the cover
    cover.classList.add('hidden');

    // Fade in the main content
    setTimeout(function () {
      content.classList.add('visible');
    }, 200); // Delay for content to appear after cover moves
  }, 2500); // 5 seconds to let the logo spin first
});


document.addEventListener('DOMContentLoaded', (event) => {
  // Modal functionality
  const modal = document.getElementById('contact-modal');
  const heroContactBtn = document.getElementById('hero-contact-btn');
  const navContactLink = document.getElementById('nav-contact-link');
  const bufferContactBtn = document.getElementById('buffer-contact-btn'); // Your new button
  const closeModal = document.querySelector('.close-modal');
  const contactForm = document.getElementById('contact-form');

  function openModal() {
    modal.style.display = 'block';
  }

  function closeModalFunc() {
    modal.style.display = 'none';
  }

  // Open modal when any contact button is clicked
  heroContactBtn.addEventListener('click', openModal);

  navContactLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  bufferContactBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default behavior for buttons
    openModal();
  });

  // Close modal functionality
  closeModal.addEventListener('click', closeModalFunc);

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      closeModalFunc();
    }
  });

  // Form submission handling
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    alert('Thank you for your message. We will get back to you soon!');
    contactForm.reset();
    closeModalFunc();
  });

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  const logoText = document.querySelector('.logo-text');
  const logoShort = document.querySelector('.logo-short');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition > headerHeight) {
      header.style.backgroundColor = 'rgba(28, 28, 28, 0.9)';
    } else {
      header.style.backgroundColor = 'transparent';
    }

    const scrollPercentage = Math.min(scrollPosition / (windowHeight * 0.5), 1);
    logoText.style.transform = `translateX(-${scrollPercentage * 100}%)`;
    logoShort.style.opacity = scrollPercentage;
  });
});
