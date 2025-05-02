const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
  let index = 0;
  const testimonials = document.querySelectorAll('.testimonial-card');

  function showTestimonial(i) {
    testimonials.forEach((t, idx) => {
      t.classList.remove('active');
      if (idx === i) {
        t.classList.add('active');
      }
    });
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  }

  // Auto-rotate every 4 seconds
  setInterval(() => {
    nextTestimonial();
  }, 4000);

  // Initialize
  showTestimonial(index);
