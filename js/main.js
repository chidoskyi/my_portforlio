// ========================================
// GSAP INITIALIZATION
// ========================================
gsap.registerPlugin(ScrollTrigger);

// ========================================
// THEME SYSTEM
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Get saved theme or default to system
const savedTheme = localStorage.getItem('theme') || 'system';
html.setAttribute('data-theme', savedTheme);

// Theme toggle handler
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  let newTheme;
  
  if (currentTheme === 'light') {
    newTheme = 'dark';
  } else if (currentTheme === 'dark') {
    newTheme = 'system';
  } else {
    newTheme = 'light';
  }
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// ========================================
// CUSTOM CURSOR
// ========================================
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Cursor (fast)
  cursorX += (mouseX - cursorX) * 0.3;
  cursorY += (mouseY - cursorY) * 0.3;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  
  // Follower (slow)
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
  
  requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const magneticElements = document.querySelectorAll('[data-magnetic], a, button');

magneticElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    follower.classList.add('hover');
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    follower.classList.remove('hover');
  });
});

// ========================================
// SCROLL PROGRESS
// ========================================
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// ========================================
// NAVIGATION ENTRANCE
// ========================================
window.addEventListener('load', () => {
  gsap.to('#nav', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'expo.out',
    delay: 0.2
  });
});

// ========================================
// HERO ANIMATIONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Set initial states
  gsap.set('.hero-badge', { opacity: 0, scale: 0.9 });
  gsap.set('.hero-title-line', { opacity: 0, y: 40 });
  gsap.set('.hero-description', { opacity: 0, y: 20 });
  gsap.set('.hero-cta', { opacity: 0, y: 20 });
  gsap.set('.hero-editor', { opacity: 0, y: 40 });
  gsap.set('.hero-tech-card', { opacity: 0, y: 40 });
  gsap.set('.hero-project-card', { opacity: 0, y: 40 });
  gsap.set('.hero-scroll', { opacity: 0 });
});

window.addEventListener('load', () => {
  const tl = gsap.timeline();
  
  tl.to('.hero-badge', {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'back.out(1.7)'
  })
  .to('.hero-title-line', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'expo.out',
    stagger: 0.15
  }, '-=0.5')
  .to('.hero-description', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'expo.out'
  }, '-=0.8')
  .to('.hero-cta', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'expo.out'
  }, '-=0.8')
  .to('.hero-editor', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'expo.out'
  }, '-=1')
  .to('.hero-tech-card', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'expo.out'
  }, '-=0.8')
  .to('.hero-project-card', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'expo.out'
  }, '-=0.8')
  .to('.hero-scroll', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.5');
});

// ========================================
// PORTFOLIO GRID ANIMATIONS
// ========================================
gsap.set('.portfolio-grid', { opacity: 0 });
gsap.set('.portfolio-item', { opacity: 0, y: 40 });

window.addEventListener('load', () => {
  requestAnimationFrame(() => {
    // Portfolio grid visibility check
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
      const rect = portfolioGrid.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        gsap.set(portfolioGrid, { opacity: 1 });
        gsap.set('.portfolio-item', { opacity: 1, y: 0 });
      } else {
        gsap.to(portfolioGrid, {
          opacity: 1,
          scrollTrigger: {
            trigger: portfolioGrid,
            start: 'top 80%'
          }
        });
        
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%'
            },
            delay: index * 0.1
          });
        });
      }
    }
    
    ScrollTrigger.refresh();
  });
});

// Magnetic effect for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item[data-magnetic]');

portfolioItems.forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    
    gsap.to(item, {
      x: deltaX * 10,
      y: deltaY * 10,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  item.addEventListener('mouseleave', () => {
    gsap.to(item, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});

// ========================================
// Skills Section - Scroll Animations
const skillCards = document.querySelectorAll('.skill-card');
const skillProgressBars = document.querySelectorAll('.skill-progress-bar');

if (skillCards.length > 0) {
  gsap.from(skillCards, {
    scrollTrigger: {
      trigger: '.skills',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
  });
}

// Animate progress bars when they come into view
if (skillProgressBars.length > 0) {
  skillProgressBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0%';
    
    gsap.to(bar, {
      scrollTrigger: {
        trigger: bar,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      width: targetWidth,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.2
    });
  });
}

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Validate form
    let isValid = true;
    
    // Name validation
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim().length < 2) {
      nameInput.closest('.form-group').classList.add('error');
      isValid = false;
    } else {
      nameInput.closest('.form-group').classList.remove('error');
    }
    
    // Email validation
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.closest('.form-group').classList.add('error');
      isValid = false;
    } else {
      emailInput.closest('.form-group').classList.remove('error');
    }
    
    // Subject validation
    const subjectInput = document.getElementById('subject');
    if (subjectInput.value.trim().length < 3) {
      subjectInput.closest('.form-group').classList.add('error');
      isValid = false;
    } else {
      subjectInput.closest('.form-group').classList.remove('error');
    }
    
    // Message validation
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim().length < 10) {
      messageInput.closest('.form-group').classList.add('error');
      isValid = false;
    } else {
      messageInput.closest('.form-group').classList.remove('error');
    }
    
    if (!isValid) return;
    
    // Get submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.querySelector('span').textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Sending...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      // Success state
      submitBtn.querySelector('span').textContent = 'Message Sent!';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      
      // Reset form
      contactForm.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalText;
        submitBtn.style.background = '';
      }, 3000);
      
      console.log('Form submitted:', formData);
    }, 1500);
  });
  
  // Real-time validation
  const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('blur', () => {
      const formGroup = input.closest('.form-group');
      
      if (input.value.trim().length === 0) {
        formGroup.classList.add('error');
      } else if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          formGroup.classList.add('error');
        } else {
          formGroup.classList.remove('error');
        }
      } else {
        formGroup.classList.remove('error');
      }
    });
    
    input.addEventListener('input', () => {
      if (input.value.trim().length > 0) {
        input.closest('.form-group').classList.remove('error');
      }
    });
  });
}

// ========================================
// CONTACT SECTION ANIMATIONS
// ========================================
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  // Contact header animation
  gsap.from('.contact-header', {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out'
  });
  
  // Contact form animation
  gsap.from('.contact-form-wrapper', {
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -40,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  });
  
  // Contact info cards animation
  gsap.from('.contact-info-card', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: 40,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.3,
    ease: 'power3.out'
  });
  
  // Contact social animation
  gsap.from('.contact-social', {
    scrollTrigger: {
      trigger: '.contact-social',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.5,
    ease: 'power3.out'
  });
}

// ========================================
// COPY TO CLIPBOARD
// ========================================
const copyButtons = document.querySelectorAll('.contact-copy');

copyButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const textToCopy = button.getAttribute('data-copy');
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      button.classList.add('copied');
      
      setTimeout(() => {
        button.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  });
});

// ========================================
// SECTION REVEAL ANIMATIONS
// ========================================
gsap.utils.toArray('.section-reveal').forEach(section => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 85%'
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: 'expo.out'
  });
});

// ========================================
// MOBILE NAVIGATION
// ========================================
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offset = 80; // Nav height
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// FOOTER ANIMATION
// ========================================