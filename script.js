// script.js

// Smooth scroll for nav links
document.querySelectorAll('.nav-center a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Testimonial Slider - Auto scroll
const slider = document.querySelector('.testimonial-slider');
let scrollAmount = 0;

function autoScrollTestimonials() {
  if (!slider) return;
  scrollAmount += 1;
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  }
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

setInterval(autoScrollTestimonials, 50);

// Manual slider controls
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

if (slideLeft && slideRight) {
  slideLeft.addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  });

  slideRight.addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// Optional: highlight current nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-center a').forEach(a => a.classList.remove('active'));
      document.querySelector(`.nav-center a[href="#${id}"]`).classList.add('active');
    }
  });
});

// Adjust hero layout to show image on left and text on right
const heroSection = document.querySelector('#hero');
if (heroSection) {
  heroSection.innerHTML = `
    <div class="hero-container">
      <div class="hero-image">
        <img src="assets/jay-black.png" alt="Jay Image">
      </div>
      <div class="hero-content">
        <h1>Jayprakash Prajapati</h1>
        <p>Frontend Developer | Tech Enthusiast | Tutor | Coder</p>
        <a href="assets/resume.pdf" class="btn" download>Download Resume</a>
      </div>
    </div>
  `;
} else {
  console.warn("#hero section not found");
}
