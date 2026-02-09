// ========================================
// GSAP INITIALIZATION
// ========================================
gsap.registerPlugin(ScrollTrigger);

console.log("main loaded");

// ========================================
// THEME SYSTEM
// ========================================
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Get saved theme or default to system
const savedTheme = localStorage.getItem("theme") || "system";
html.setAttribute("data-theme", savedTheme);

// Theme toggle handler
themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  let newTheme;

  if (currentTheme === "light") {
    newTheme = "dark";
  } else if (currentTheme === "dark") {
    newTheme = "system";
  } else {
    newTheme = "light";
  }

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// ========================================
// CUSTOM CURSOR
// ========================================
const cursor = document.getElementById("custom-cursor");
const follower = document.getElementById("cursor-follower");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener("mousemove", (e) => {
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
const magneticElements = document.querySelectorAll(
  "[data-magnetic], a, button",
);

magneticElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    follower.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    follower.classList.remove("hover");
  });
});

// ========================================
// SCROLL PROGRESS
// ========================================
const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// ========================================
// NAVIGATION ENTRANCE
// ========================================
window.addEventListener("load", () => {
  gsap.to("#nav", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "expo.out",
    delay: 0.2,
  });
});

// ========================================
// HERO ANIMATIONS
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  // Set initial states
  gsap.set(".hero-badge", { opacity: 0, scale: 0.9 });
  gsap.set(".hero-title-line", { opacity: 0, y: 40 });
  gsap.set(".hero-description", { opacity: 0, y: 20 });
  gsap.set(".hero-cta", { opacity: 0, y: 20 });
  gsap.set(".hero-editor", { opacity: 0, y: 40 });
  gsap.set(".hero-tech-card", { opacity: 0, y: 40 });
  gsap.set(".hero-project-card", { opacity: 0, y: 40 });
  gsap.set(".hero-scroll", { opacity: 0 });
});

window.addEventListener("load", () => {
  const tl = gsap.timeline();

  tl.to(".hero-badge", {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "back.out(1.7)",
  })
    .to(
      ".hero-title-line",
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.15,
      },
      "-=0.5",
    )
    .to(
      ".hero-description",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.8",
    )
    .to(
      ".hero-cta",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.8",
    )
    .to(
      ".hero-editor",
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
      },
      "-=1",
    )
    .to(
      ".hero-tech-card",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.8",
    )
    .to(
      ".hero-project-card",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
      },
      "-=0.8",
    )
    .to(
      ".hero-scroll",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5",
    );
});

// ========================================
// DYNAMIC PORTFOLIO RENDERING
// ========================================
function renderPortfolioItems() {
  const portfolioGrid = document.querySelector(".portfolio-grid");
  if (!portfolioGrid || !portfolioData) return;

  portfolioGrid.innerHTML = "";

  portfolioData.projects.slice(0, 6).forEach((project) => {
    const article = document.createElement("article");
    // Added 'group' class for hover effects
    article.className = `portfolio-item group ${project.gridClass || ""}`;
    article.setAttribute("data-magnetic", "");

    const techPillsHTML = project.technologies
      .map((tech) => `<span class="tech-pill">${tech}</span>`)
      .join("");

    // Build links HTML
    const linksHTML = `
      <div class="portfolio-item-links">
        <a href="project-detail.html?id=${project.id}" class="portfolio-link">
          <span>View Project</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
        ${
          project.links.github
            ? `
          <a href="${project.links.github}" class="portfolio-link" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        `
            : ""
        }
      </div>
    `;

    // Updated Image Container with Tailwind classes and Click handler
    article.innerHTML = `
        <div class="portfolio-item-image portfolio-image-container group" 
            onclick="scrollFullPageImage(this)">
          
          <!-- Image wrapper -->
          <div class="portfolio-image-wrapper w-full h-full relative overflow-hidden">
            <img src="${project.image}" alt="${project.imageAlt}" class="portfolio-screenshot w-full h-auto">
          </div>
          
          <!-- Expand icon - position it better -->
          <div class="expand-icon absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-black rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20" style="pointer-events: none;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m7 15 5 5 5-5"/>
                  <path d="m7 9 5-5 5 5"/>
              </svg>
          </div>
          
          <!-- Click to scroll label - simpler positioning -->
          <div class="click-to-scroll-label absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 whitespace-nowrap">
            Click to scroll
          </div>
        </div>

        <div class="portfolio-item-content">
          <div class="portfolio-item-meta">
            <span class="portfolio-item-category">${project.category}</span>
            <span class="portfolio-item-year">${project.year}</span>
          </div>
          <h3 class="portfolio-item-title">${project.title}</h3>
          <p class="portfolio-item-description">${project.description}</p>
          <div class="portfolio-item-tech">${techPillsHTML}</div>
          <div class="portfolio-item-links"></div>
          ${linksHTML}
        </div>
    `;

    portfolioGrid.appendChild(article);
  });

  initializeMagneticEffects();
}

// Portfolio Full-Page Screenshot Scrolling
function scrollFullPageImage(imageContainer) {
  console.log("Portfolio image clicked!");

  const img = imageContainer.querySelector(".portfolio-screenshot");

  if (!img) {
    console.log("Image not found");
    return;
  }

  // Get current scroll state
  let isScrolled = imageContainer.dataset.scrolled === "true";
  console.log("Current scroll state:", isScrolled);

  if (!isScrolled) {
    // Remove any existing transforms and transitions first
    img.style.cssText = "";

    // Force reflow
    img.offsetHeight;

    // Apply new transform with explicit styles - scroll to bottom of image
    img.style.setProperty("transform", "translateY(-85%)", "important");
    img.style.setProperty(
      "transition",
      "transform 4s ease-in-out",
      "important",
    );
    img.style.setProperty("position", "relative", "important");

    imageContainer.dataset.scrolled = "true";
    console.log("Applied transform: translateY(-85%)");
    console.log("Current transform:", img.style.transform);

    // Auto-reset after 8 seconds (4s animation + 4s viewing time)
    setTimeout(() => {
      img.style.setProperty("transform", "translateY(0%)", "important");
      imageContainer.dataset.scrolled = "false";
      console.log("Auto-reset to top");
    }, 8000);
  } else {
    // Reset to top
    img.style.setProperty("transform", "translateY(0%)", "important");
    imageContainer.dataset.scrolled = "false";
    console.log("Manual reset to top");
  }
}

// ========================================
// PORTFOLIO GRID ANIMATIONS
// ========================================
function initializePortfolioAnimations() {
  gsap.set(".portfolio-grid", { opacity: 0 });
  gsap.set(".portfolio-item", { opacity: 0, y: 40 });

  window.addEventListener("load", () => {
    requestAnimationFrame(() => {
      const portfolioGrid = document.querySelector(".portfolio-grid");
      if (portfolioGrid) {
        const rect = portfolioGrid.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;

        if (isVisible) {
          gsap.set(portfolioGrid, { opacity: 1 });
          gsap.set(".portfolio-item", { opacity: 1, y: 0 });
        } else {
          gsap.to(portfolioGrid, {
            opacity: 1,
            scrollTrigger: {
              trigger: portfolioGrid,
              start: "top 80%",
            },
          });

          document
            .querySelectorAll(".portfolio-item")
            .forEach((item, index) => {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 80%",
                },
                delay: index * 0.1,
              });
            });
        }
      }

      ScrollTrigger.refresh();
    });
  });
}

// Magnetic effect for portfolio items
function initializeMagneticEffects() {
  const portfolioItems = document.querySelectorAll(
    ".portfolio-item[data-magnetic]",
  );

  portfolioItems.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
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
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    });
  });
}

// Initialize portfolio on page load
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolioItems();
  initializePortfolioAnimations();
});

// ========================================
// Skills Section - Scroll Animations
const skillCards = document.querySelectorAll(".skill-card");
const skillProgressBars = document.querySelectorAll(".skill-progress-bar");

if (skillCards.length > 0) {
  gsap.from(skillCards, {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });
}

// Animate progress bars when they come into view
if (skillProgressBars.length > 0) {
  skillProgressBars.forEach((bar) => {
    const targetWidth = bar.style.width;
    bar.style.width = "0%";

    gsap.to(bar, {
      scrollTrigger: {
        trigger: bar,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      width: targetWidth,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.2,
    });
  });
}

// ========================================
// CONTACT FORM WITH EMAILJS (FIXED)
// ========================================

// Initialize EmailJS (PUBLIC KEY ONLY)
emailjs.init("SqdWOpWA4Se7nzNxU");

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    let isValid = true;

    // ======================
    // FORM VALIDATION
    // ======================

    if (name.trim().length < 2) {
      nameInput.closest(".form-group").classList.add("error");
      isValid = false;
    } else {
      nameInput.closest(".form-group").classList.remove("error");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailInput.closest(".form-group").classList.add("error");
      isValid = false;
    } else {
      emailInput.closest(".form-group").classList.remove("error");
    }

    if (subject.trim().length < 3) {
      subjectInput.closest(".form-group").classList.add("error");
      isValid = false;
    } else {
      subjectInput.closest(".form-group").classList.remove("error");
    }

    if (message.trim().length < 10) {
      messageInput.closest(".form-group").classList.add("error");
      isValid = false;
    } else {
      messageInput.closest(".form-group").classList.remove("error");
    }

    if (!isValid) return;

    // ======================
    // BUTTON STATE
    // ======================
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector("span");
    const originalText = btnText.textContent;

    submitBtn.disabled = true;
    btnText.textContent = "Sending...";

    try {
      // ======================
      // SEND EMAIL (CORRECT)
      // ======================
      await emailjs.send(
        "service_tsqx7fc", // SERVICE ID
        "template_x1snur8", // TEMPLATE ID
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: "okpalachidiebere99@gmail.com",
        },
      );

      // Success UI
      btnText.textContent = "Message Sent!";
      submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";

      contactForm.reset();
    } catch (error) {
      console.error("Failed to send email:", error);

      // Error UI
      btnText.textContent = "Failed to Send";
      submitBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
    }

    // ======================
    // RESET BUTTON
    // ======================
    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.textContent = originalText;
      submitBtn.style.background = "";
    }, 3000);
  });

  // ======================
  // REAL-TIME VALIDATION
  // ======================
  const formInputs = contactForm.querySelectorAll(
    "#name, #email, #subject, #message",
  );

  formInputs.forEach((input) => {
    input.addEventListener("blur", () => {
      const formGroup = input.closest(".form-group");

      if (!input.value.trim()) {
        formGroup.classList.add("error");
      } else if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          formGroup.classList.add("error");
        } else {
          formGroup.classList.remove("error");
        }
      } else {
        formGroup.classList.remove("error");
      }
    });

    input.addEventListener("input", () => {
      input.closest(".form-group").classList.remove("error");
    });
  });
}

// ========================================
// CONTACT SECTION ANIMATIONS
// ========================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  // Contact header animation
  gsap.from(".contact-header", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  });

  // Contact form animation
  gsap.from(".contact-form-wrapper", {
    scrollTrigger: {
      trigger: ".contact-content",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: -40,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out",
  });

  // Contact info cards animation
  gsap.from(".contact-info-card", {
    scrollTrigger: {
      trigger: ".contact-info",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: 40,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.3,
    ease: "power3.out",
  });

  // Contact social animation
  gsap.from(".contact-social", {
    scrollTrigger: {
      trigger: ".contact-social",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.5,
    ease: "power3.out",
  });
}

// ========================================
// COPY TO CLIPBOARD
// ========================================
const copyButtons = document.querySelectorAll(".contact-copy");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const textToCopy = button.getAttribute("data-copy");

    try {
      await navigator.clipboard.writeText(textToCopy);
      button.classList.add("copied");

      setTimeout(() => {
        button.classList.remove("copied");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  });
});

// ========================================
// MULTI TEXT REVEAL ANIMATIONS
// ========================================
const options = {
  strings: ["Content Creator", "Coder", "Web Developer", "Youtuber", "CMS"],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 3000,
  loop: true,
};

const multiTextElement = document.querySelector(".multi-text");
if (multiTextElement) {
  let currentTextIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    const fullText = options.strings[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;

    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else {
      if (isDeleting && currentText === "") {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % options.strings.length;
      }
    }

    setTimeout(type, typeSpeed);
  }
  type();
}

// ========================================
// SECTION REVEAL ANIMATIONS
// ========================================
gsap.utils.toArray(".section-reveal").forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "expo.out",
  });
});

// ========================================
// MOBILE NAVIGATION
// ========================================
const mobileToggle = document.querySelector(".nav-mobile-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
      mobileToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  // Close menu when clicking a nav link
  const navLinksItems = navLinks.querySelectorAll(".nav-link");
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      mobileToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offset = 80; // Nav height
      const targetPosition = target.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ========================================
// FOOTER ANIMATION
// ========================================

// ========================================
// TYPING ANIMATION
// ========================================
// const textArray = ["Coder", "Developer", "Designer", "Creator"];
// let textIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// const typingSpeed = 150;
// const deletingSpeed = 100;
// const pauseTime = 2000;

// function typeText() {
//   const multiTextElement = document.querySelector('.multi-text');

//   if (!multiTextElement) return;

//   const currentText = textArray[textIndex];

//   if (isDeleting) {
//     multiTextElement.textContent = currentText.substring(0, charIndex - 1);
//     charIndex--;
//   } else {
//     multiTextElement.textContent = currentText.substring(0, charIndex + 1);
//     charIndex++;
//   }

//   let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

//   if (!isDeleting && charIndex === currentText.length) {
//     typeSpeed = pauseTime;
//     isDeleting = true;
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     textIndex = (textIndex + 1) % textArray.length;
//   }

//   setTimeout(typeText, typeSpeed);
// }

// // Start typing animation after page loads
// window.addEventListener('load', () => {
//   setTimeout(typeText, 1000);
// });
