
const nav = document.querySelector('nav');

const handleScroll = () => {
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll);

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
let scrollPosition = 0;

if (mobileMenuToggle && mobileMenuOverlay) {
  mobileMenuToggle.setAttribute('aria-label', 'Toggle mobile menu');
  mobileMenuToggle.setAttribute('aria-expanded', 'false');

  mobileMenuToggle.addEventListener('click', () => {
    const isActive = mobileMenuToggle.classList.contains('active');
    console.log('Menu toggle clicked, active:', !isActive);
    if (!isActive) {
      scrollPosition = window.scrollY;
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
      mobileMenuToggle.classList.add('active');
      mobileMenuOverlay.classList.add('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    } else {
      console.log('Starting close transition');
      mobileMenuOverlay.classList.add('closing');
      mobileMenuOverlay.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      setTimeout(() => {
        console.log('Close transition complete');
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
        mobileMenuOverlay.classList.remove('closing');
        window.scrollTo(0, scrollPosition); 
      }, 600); 
    }
  });

  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-overlay a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('Menu link clicked, starting close transition');
      mobileMenuOverlay.classList.add('closing');
      mobileMenuOverlay.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      setTimeout(() => {
        console.log('Close transition complete');
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
        mobileMenuOverlay.classList.remove('closing');
        window.scrollTo(0, scrollPosition);
      }, 600); 
    });
  });
} else {
  console.error('Mobile menu elements not found. Check .mobile-menu-toggle and .mobile-menu-overlay classes.');
}