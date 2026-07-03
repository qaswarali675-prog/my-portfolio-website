// ===== Preloader =====
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// ===== Initialize AOS Animation Library =====
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Active Menu Highlighting =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// ===== Typing Animation =====
const typedTextElement = document.getElementById('typed-text');
const texts = ['Computer Science Student', 'Web Developer', 'AI Enthusiast', 'IoT Developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before new word
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation
setTimeout(typeText, 1000);

// ===== Skills Progress Bar Animation =====
const skillSection = document.querySelector('.skills-section');
const progressBars = document.querySelectorAll('.progress');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
};

// Intersection Observer for skills animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillSection) {
    skillsObserver.observe(skillSection);
}

// ===== Project Filtering =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
            const itemCategories = item.getAttribute('data-category');

            if (filterValue === 'all' || itemCategories.includes(filterValue)) {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(this);

        // Here you would typically send the form data to a server
        // For demonstration, we'll show an alert
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        this.reset();
    });
}

// ===== Back to Top Button =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Navbar Mobile Menu Close on Click =====
const navLinksMobile = document.querySelectorAll('.nav-link');
navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroSection && scrolled < heroSection.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ===== Mouse Move Effect on Hero Section =====
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    heroSection.addEventListener('mousemove', function (e) {
        const shapes = document.querySelectorAll('.floating-shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

// ===== Counter Animation for Stats (if added later) =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===== Reveal Animations on Scroll =====
const revealElements = document.querySelectorAll('.skill-category, .project-card, .service-card, .timeline-item, .exp-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// ===== Dynamic Year in Footer =====
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Qaswar Abbas. All Rights Reserved.`;
}

// ===== Add hover sound effect (optional - requires audio files) =====
// function playHoverSound() {
//     const audio = new Audio('path/to/hover-sound.mp3');
//     audio.volume = 0.1;
//     audio.play().catch(() => {});
// }

// document.querySelectorAll('.btn, .nav-link, .project-card').forEach(element => {
//     element.addEventListener('mouseenter', playHoverSound);
// });

// ===== Console Welcome Message =====
console.log('%c Welcome to Qaswar Abbas Portfolio! ', 'background: linear-gradient(135deg, #00d4ff, #7c3aed); color: white; padding: 10px; font-size: 16px; border-radius: 5px;');
console.log('%c Built with HTML, CSS, JavaScript, Bootstrap 5, and AOS ', 'color: #00d4ff; font-size: 12px;');

// ===== Performance Optimization =====
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event listeners
const debouncedScroll = debounce(() => {
    // Scroll-related operations here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== Lazy Loading Images =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===== Service Worker Registration (for PWA support - optional) =====
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('ServiceWorker registration successful');
//             })
//             .catch(error => {
//                 console.log('ServiceWorker registration failed');
//             });
//     });
// }

// ===== Accessibility Improvements =====
// Add keyboard navigation support
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
});

// ===== Theme Toggle (optional - for light/dark mode switch) =====
// const themeToggle = document.getElementById('themeToggle');
// if (themeToggle) {
//     themeToggle.addEventListener('click', () => {
//         document.body.classList.toggle('light-mode');
//         localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
//     });

//     // Load saved theme
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'light') {
//         document.body.classList.add('light-mode');
//     }
// }

// ===== Make Project Cards Clickable =====
const projectCards = document.querySelectorAll('.project-card');
const projectLinks = {
    'AIoT Smart Home Assistant': 'https://github.com/qaswarabbas/smart-home-assistant',
    'Student Management System': 'https://github.com/qaswarabbas/student-management-system',
    'Portfolio Website': 'https://github.com/qaswarabbas/portfolio-website',
    'Smart Attendance System': 'https://github.com/qaswarabbas/smart-attendance-system',
    'E-Commerce Website': 'https://github.com/qaswarabbas/ecommerce-website'
};

projectCards.forEach(card => {
    card.addEventListener('click', function (e) {
        // Don't trigger if clicking on the overlay links
        if (e.target.closest('.project-links')) {
            return;
        }

        const projectTitle = this.querySelector('h3').textContent;
        const projectUrl = projectLinks[projectTitle];

        if (projectUrl) {
            window.open(projectUrl, '_blank');
        }
    });
});

console.log('Portfolio website loaded successfully!');

// ===== CV Download Function =====
function downloadCV() {
    const element = document.getElementById('cv-template');
    
    // Make the template visible temporarily for PDF generation
    element.style.display = 'block';
    
    const opt = {
        margin: 0,
        filename: 'Qaswar_Abbas_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Generate and download PDF
    html2pdf().set(opt).from(element).save().then(() => {
        // Hide the template again after generation
        element.style.display = 'none';
    }).catch((error) => {
        console.error('PDF generation failed:', error);
        element.style.display = 'none';
        alert('Failed to generate PDF. Please try again.');
    });
}
