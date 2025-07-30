// Smooth scroll for nav links
document.querySelectorAll('.nav-center a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Testimonial slider buttons
const slider = document.querySelector('.testimonial-slider');
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

if (slider && slideLeft && slideRight) {
  slideLeft.addEventListener('click', () => {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
  });

  slideRight.addEventListener('click', () => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
  });
}

// Active section highlight in navbar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-center a').forEach(a => a.classList.remove('active'));
      document.querySelector(`.nav-center a[href="#${id}"]`)?.classList.add('active');
    }
  });
});

// Hero layout
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
}
