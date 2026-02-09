// ========================================
// PORTFOLIO PAGE WITH PAGINATION
// ========================================

console.log("portfolio loaded")

// Configuration
const ITEMS_PER_PAGE = 9;
let currentPage = 1;
let currentFilter = 'all';
let filteredProjects = [];

// ========================================
// THEME SYSTEM
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'system';
html.setAttribute('data-theme', savedTheme);

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
  cursorX += (mouseX - cursorX) * 0.3;
  cursorY += (mouseY - cursorY) * 0.3;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
  
  requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll('a, button').forEach(el => {
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
// MOBILE NAVIGATION
// ========================================
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  document.addEventListener('click', (e) => {
    if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
  
  const navLinksItems = navLinks.querySelectorAll('.nav-link');
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ========================================
// FILTER GENERATION
// ========================================
function generateFilters() {
  const filtersContainer = document.getElementById('portfolio-filters');
  
  // Get unique categories
  const categories = [...new Set(portfolioData.projects.map(p => p.category))];
  
  // Add category filter buttons
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'filter-btn';
    button.setAttribute('data-filter', category.toLowerCase().replace(/\s+/g, '-'));
    button.textContent = category;
    filtersContainer.appendChild(button);
  });
  
  // Add event listeners to all filter buttons
  const filterButtons = filtersContainer.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter projects
      const filter = btn.getAttribute('data-filter');
      filterProjects(filter);
    });
  });
}

// ========================================
// FILTER PROJECTS
// ========================================
function filterProjects(filter) {
  currentFilter = filter;
  currentPage = 1; // Reset to first page
  
  if (filter === 'all') {
    filteredProjects = [...portfolioData.projects];
  } else {
    filteredProjects = portfolioData.projects.filter(project => {
      return project.category.toLowerCase().replace(/\s+/g, '-') === filter;
    });
  }
  
  updateStats();
  renderProjects();
  renderPagination();
  
  // Scroll to top of grid
  const grid = document.getElementById('all-portfolio-grid');
  const offset = 100;
  const gridTop = grid.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: gridTop, behavior: 'smooth' });
}

// ========================================
// UPDATE STATS
// ========================================
function updateStats() {
  document.getElementById('current-count').textContent = filteredProjects.length;
  document.getElementById('total-count').textContent = portfolioData.projects.length;
}

// ========================================
// RENDER PROJECTS
// ========================================
function renderProjects() {
  const grid = document.getElementById('all-portfolio-grid');
  
  if (!portfolioData || !portfolioData.projects) {
    grid.innerHTML = '<div class="portfolio-loading">Loading projects...</div>';
    return;
  }
  
  // Calculate pagination
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const projectsToShow = filteredProjects.slice(startIndex, endIndex);
  
  // Clear grid
  grid.innerHTML = '';
  
  // Check if no projects
  if (projectsToShow.length === 0) {
    grid.innerHTML = `
      <div class="portfolio-empty">
        <div class="portfolio-empty-icon">📂</div>
        <p class="portfolio-empty-text">No projects found in this category.</p>
      </div>
    `;
    
    setTimeout(() => {
            grid.style.opacity = '1';
        }, 100);
    return;
}
  
  // Render projects
  projectsToShow.forEach((project, index) => {
    const article = document.createElement('article');
    article.className = `portfolio-item ${project.gridClass || ''}`;
    article.setAttribute('data-magnetic', '');
    article.style.opacity = '0';
    article.style.transform = 'translateY(40px)';
    
    const techPillsHTML = project.technologies.map(tech => 
      `<span class="tech-pill">${tech}</span>`
    ).join('');
    
    const linksHTML = `
      <div class="portfolio-item-links">
        <a href="project-detail.html?id=${project.id}" class="portfolio-link">
          <span>View Project</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
        ${project.links.github ? `
          <a href="${project.links.github}" class="portfolio-link" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        ` : ''}
      </div>
    `;
    
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
        <div class="portfolio-item-tech">
          ${techPillsHTML}
        </div>
        ${linksHTML}
      </div>
    `;
    
    grid.appendChild(article);
    
    // Animate item entrance
    setTimeout(() => {
      if (typeof gsap !== 'undefined') {
        gsap.to(article, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: index * 0.1
        });
      } else {
        article.style.opacity = '1';
        article.style.transform = 'translateY(0)';
      }
    }, 50);
  });
  
  // Re-initialize magnetic effects
  initializeMagneticEffects();
  initializePortfolioAnimations()
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

// ========================================
// MAGNETIC EFFECTS
// ========================================
function initializeMagneticEffects() {
  const portfolioItems = document.querySelectorAll('.portfolio-item[data-magnetic]');

  portfolioItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      if (typeof gsap === 'undefined') return;
      
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
      if (typeof gsap === 'undefined') return;
      
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
}

// ========================================
// RENDER PAGINATION
// ========================================
function renderPagination() {
  const paginationContainer = document.getElementById('pagination');
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  
  // Clear pagination
  paginationContainer.innerHTML = '';
  
  // Don't show pagination if only 1 page or no items
  if (totalPages <= 1) {
    return;
  }
  
  // Previous button
  const prevBtn = document.createElement('button');
  prevBtn.className = 'pagination-btn';
  prevBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  `;
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
  paginationContainer.appendChild(prevBtn);
  
  // Page numbers
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  // First page and ellipsis
  if (startPage > 1) {
    const firstBtn = createPageButton(1);
    paginationContainer.appendChild(firstBtn);
    
    if (startPage > 2) {
      const ellipsis = document.createElement('span');
      ellipsis.className = 'pagination-ellipsis';
      ellipsis.textContent = '...';
      paginationContainer.appendChild(ellipsis);
    }
  }
  
  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = createPageButton(i);
    paginationContainer.appendChild(pageBtn);
  }
  
  // Last page and ellipsis
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement('span');
      ellipsis.className = 'pagination-ellipsis';
      ellipsis.textContent = '...';
      paginationContainer.appendChild(ellipsis);
    }
    
    const lastBtn = createPageButton(totalPages);
    paginationContainer.appendChild(lastBtn);
  }
  
  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'pagination-btn';
  nextBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  `;
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
  paginationContainer.appendChild(nextBtn);
}

// ========================================
// CREATE PAGE BUTTON
// ========================================
function createPageButton(pageNumber) {
  const button = document.createElement('button');
  button.className = 'pagination-btn';
  button.textContent = pageNumber;
  
  if (pageNumber === currentPage) {
    button.classList.add('active');
  }
  
  button.addEventListener('click', () => goToPage(pageNumber));
  
  return button;
}

// ========================================
// GO TO PAGE
// ========================================
function goToPage(pageNumber) {
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  
  if (pageNumber < 1 || pageNumber > totalPages) {
    return;
  }
  
  currentPage = pageNumber;
  renderProjects();
  renderPagination();
  
  // Scroll to top of grid
  const grid = document.getElementById('all-portfolio-grid');
  const offset = 100;
  const gridTop = grid.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: gridTop, behavior: 'smooth' });
}

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize filtered projects with all projects
  filteredProjects = [...portfolioData.projects];
  
  // Generate filters
  generateFilters();
  
  // Initial render
  updateStats();
  renderProjects();
  renderPagination();
});

// ========================================
// NAVIGATION ENTRANCE
// ========================================
window.addEventListener('load', () => {
  if (typeof gsap !== 'undefined') {
    gsap.to('#nav', {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'expo.out',
      delay: 0.2
    });
  }
});