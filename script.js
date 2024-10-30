// Hide title on image click and add mouse-follow effect
const heroTitle = document.getElementById('hero-title');
const images = document.querySelectorAll('.hero-image');
const wrappers = document.querySelectorAll('.image-wrapper');

// Add click event to hide title
images.forEach(image => {
  image.addEventListener('click', () => {
    heroTitle.classList.add('hidden');
  });
});

// Add hover effect with mouse-follow and vector transformation on other images
wrappers.forEach(wrapper => {
  wrapper.addEventListener('mouseenter', () => {
    wrapper.classList.add('hovered');
  });

  wrapper.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;
    const { offsetWidth, offsetHeight } = wrapper;
    const moveX = (offsetX - offsetWidth / 2) * 0.03;
    const moveY = (offsetY - offsetHeight / 2) * 0.03;
    wrapper.querySelector('.hero-image').style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.classList.remove('hovered');
    wrapper.querySelector('.hero-image').style.transform = 'translate(0, 0) scale(1)';
  });
});
