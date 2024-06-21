document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const totalImages = document.querySelectorAll('.carousel-item').length;
  const carouselInner = document.querySelector('.carousel-inner');

  function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }

  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  }

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  setInterval(showNextImage, 2000); // Change image every 2 seconds
  window.showNextImage = showNextImage;
  window.showPreviousImage = showPreviousImage;

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
  });

  // Set initial theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.add('light-theme');
  }
});
