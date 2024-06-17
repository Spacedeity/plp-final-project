document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');

  function checkImages() {
    const triggerBottom = window.innerHeight * 0.8;

    images.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;

      if (imageTop < triggerBottom) {
        image.classList.add('in-view');
      } else {
        image.classList.remove('in-view');
      }
    });
  }

  window.addEventListener('scroll', checkImages);
  checkImages(); // Initial check when the page loads
});