// East Dariyapur Super League 2025 - JavaScript functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing website...');
    
    // Initialize all functionality
    initNavigation();
    initRegistration();
    initScrollspy();
    initSmoothScrolling();
    initScrollAnimations();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    console.log('Website initialization complete');
});

// Navigation functionality
function initNavigation() {
    console.log('Initializing navigation...');
    
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Nav toggle clicked');
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Handle nav link clicks for smooth scrolling
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            console.log(`Nav link ${index} clicked: ${href}`);
            
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                console.log(`Scrolling to section: ${targetId}`);
                
                // Close mobile menu first
                if (navToggle && navMenu) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
                
                // Scroll to section
                const success = scrollToSection(targetId);
                if (success) {
                    updateActiveNavLink(this);
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navToggle && navMenu && 
            !navToggle.contains(e.target) && 
            !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    console.log(`Navigation initialized with ${navLinks.length} links`);
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Registration functionality
function initRegistration() {
    console.log('Initializing registration...');
    
    const registerBtn = document.getElementById('register-btn');
    const heroCta = document.querySelector('.hero-cta');
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Register button clicked');
            showRegistrationModal();
        });
        console.log('Register button event listener added');
    }
    
    if (heroCta) {
        heroCta.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hero CTA clicked');
            const success = scrollToSection('registration');
            console.log(`Scroll to registration: ${success}`);
        });
        console.log('Hero CTA event listener added');
    }
}

// Show registration modal
function showRegistrationModal() {
    console.log('Showing registration modal...');
    
    // Remove existing modal if present
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal styles first
    addModalStyles();
    
    const modal = createRegistrationModal();
    document.body.appendChild(modal);
    
    // Show modal with animation
    requestAnimationFrame(() => {
        modal.classList.add('show');
        console.log('Modal shown');
    });
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Create registration modal
function createRegistrationModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Team Registration</h3>
                <button class="modal-close" type="button">&times;</button>
            </div>
            <div class="modal-body">
                <div class="registration-info">
                    <h4>🏏 East Dariyapur Super League 2025</h4>
                    <p><strong>Registration Process:</strong></p>
                    <p>To register your team, please contact our organizers directly with the following information:</p>
                    
                    <div class="required-info">
                        <h5>Required Team Details:</h5>
                        <ul>
                            <li>Team Name</li>
                            <li>Captain Name & Contact</li>
                            <li>List of 15 Players with Names</li>
                            <li>Entry Fee Payment Details</li>
                        </ul>
                    </div>
                    
                    <div class="tournament-details">
                        <h5>Tournament Information:</h5>
                        <p><strong>Entry Fee:</strong> ₹10,000 per team</p>
                        <p><strong>Format:</strong> 20 Over Hard Tennis Ball Cricket</p>
                        <p><strong>Winner Prize:</strong> Brand New Motorcycle</p>
                        <p><strong>Runner-up Prize:</strong> ₹30,000 Cash</p>
                    </div>
                </div>
                
                <div class="contact-organizers">
                    <h4>Contact Tournament Organizers:</h4>
                    <div class="organizer-contact">
                        <div class="organizer-item">
                            <strong>Taukir Khan (Secretary)</strong>
                            <a href="tel:+918809916125" class="contact-btn">📞 Call +91 88099 16125</a>
                        </div>
                        <div class="organizer-item">
                            <strong>Mohsin Khan (Secretary)</strong>
                            <a href="tel:+919135304737" class="contact-btn">📞 Call +91 91353 04737</a>
                        </div>
                        <div class="organizer-item">
                            <strong>Pintu Khan (Secretary)</strong>
                            <a href="tel:+916200618570" class="contact-btn">📞 Call +91 62006 18570</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn--primary modal-close-btn" type="button">Got it!</button>
                <button class="btn btn--outline contact-btn-modal" type="button">View All Contacts</button>
            </div>
        </div>
    `;
    
    // Add event listeners to modal buttons
    setTimeout(() => {
        const closeBtn = modal.querySelector('.modal-close');
        const closeBtnFooter = modal.querySelector('.modal-close-btn');
        const contactBtn = modal.querySelector('.contact-btn-modal');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Close button clicked');
                closeModal();
            });
        }
        
        if (closeBtnFooter) {
            closeBtnFooter.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Footer close button clicked');
                closeModal();
            });
        }
        
        if (contactBtn) {
            contactBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Contact button clicked');
                closeModal();
                setTimeout(() => {
                    scrollToSection('contact');
                }, 300);
            });
        }
        
        // Close modal when clicking overlay
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                console.log('Overlay clicked');
                closeModal();
            }
        });
    }, 100);
    
    return modal;
}

// Add modal styles
function addModalStyles() {
    if (document.querySelector('#modal-styles')) {
        return; // Already added
    }
    
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            padding: 16px;
            overflow-y: auto;
        }
        
        .modal-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-content {
            background: #ffffff;
            border-radius: 12px;
            max-width: 600px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            transform: scale(0.8);
            transition: transform 0.3s ease;
            margin: auto;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        
        .modal-overlay.show .modal-content {
            transform: scale(1);
        }
        
        .modal-header {
            padding: 20px;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f8f9fa;
            border-radius: 12px 12px 0 0;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #1B263B;
            font-size: 18px;
            font-weight: 600;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.2s ease;
        }
        
        .modal-close:hover {
            background: rgba(0,0,0,0.1);
        }
        
        .modal-body {
            padding: 24px;
            max-height: 60vh;
            overflow-y: auto;
        }
        
        .modal-body h4 {
            color: #1B263B;
            margin-bottom: 16px;
            font-size: 16px;
            font-weight: 600;
        }
        
        .modal-body h5 {
            color: #1B263B;
            margin-bottom: 8px;
            margin-top: 16px;
            font-weight: 600;
        }
        
        .modal-body p {
            margin-bottom: 12px;
            line-height: 1.6;
            color: #333;
        }
        
        .modal-body ul {
            margin-bottom: 16px;
            padding-left: 20px;
        }
        
        .modal-body li {
            margin-bottom: 4px;
            color: #333;
        }
        
        .registration-info {
            background: #fff5e6;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid #ffe0b3;
        }
        
        .required-info, .tournament-details {
            background: #ffffff;
            padding: 16px;
            border-radius: 8px;
            margin-top: 12px;
            border-left: 4px solid #43BCCD;
            border: 1px solid #e6f7ff;
        }
        
        .contact-organizers {
            background: #e8f5e8;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #c3e6c3;
        }
        
        .organizer-contact {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        
        .organizer-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
            text-align: center;
            background: white;
            padding: 16px;
            border-radius: 8px;
        }
        
        .contact-btn {
            background: #F26419 !important;
            color: white !important;
            padding: 12px 20px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            transition: background-color 0.2s ease;
            display: inline-block;
            border: none;
            cursor: pointer;
        }
        
        .contact-btn:hover {
            background: #e55a15 !important;
            color: white !important;
        }
        
        .modal-footer {
            padding: 20px;
            border-top: 1px solid #e0e0e0;
            display: flex;
            gap: 12px;
            justify-content: center;
            background: #f8f9fa;
            border-radius: 0 0 12px 12px;
        }
        
        .btn {
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
        }
        
        .btn--primary {
            background: #F26419;
            color: white;
        }
        
        .btn--primary:hover {
            background: #e55a15;
        }
        
        .btn--outline {
            background: transparent;
            border: 2px solid #1B263B;
            color: #1B263B;
        }
        
        .btn--outline:hover {
            background: #1B263B;
            color: white;
        }
        
        @media (max-width: 480px) {
            .modal-overlay {
                padding: 8px;
            }
            
            .modal-content {
                max-height: calc(100vh - 16px);
            }
            
            .modal-footer {
                flex-direction: column;
            }
            
            .organizer-contact {
                gap: 20px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Close modal function
function closeModal() {
    console.log('Closing modal...');
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore body scroll
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
                console.log('Modal removed');
            }
        }, 300);
    }
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
        console.error(`Section with id '${sectionId}' not found`);
        return false;
    }
    
    const headerOffset = 70; // Account for fixed navbar
    const elementPosition = targetSection.offsetTop;
    const offsetPosition = Math.max(0, elementPosition - headerOffset);

    console.log(`Scrolling to position: ${offsetPosition}`);
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    return true;
}

// Initialize smooth scrolling for all internal links
function initSmoothScrolling() {
    console.log('Initializing smooth scrolling...');
    
    const links = document.querySelectorAll('a[href^="#"]');
    console.log(`Found ${links.length} internal links`);
    
    links.forEach((link, index) => {
        // Skip if already has event listener
        if (link.hasAttribute('data-scroll-initialized')) {
            return;
        }
        
        link.setAttribute('data-scroll-initialized', 'true');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            console.log(`Internal link ${index} clicked: ${href}`);
            
            if (href && href.length > 1) {
                const targetId = href.substring(1);
                scrollToSection(targetId);
            }
        });
    });
}

// Scrollspy functionality
function initScrollspy() {
    console.log('Initializing scrollspy...');
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log(`Found ${sections.length} sections and ${navLinks.length} nav links`);

    function handleScroll() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100; // Offset for navbar

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update active navigation link
        navLinks.forEach(link => link.classList.remove('active'));
        if (currentSection) {
            const activeNavLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
            if (activeNavLink) {
                activeNavLink.classList.add('active');
            }
        }
    }

    // Throttle scroll event for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
    
    // Initial call
    setTimeout(handleScroll, 100);
}

// Add animation on scroll for cards
function initScrollAnimations() {
    console.log('Initializing scroll animations...');
    
    // Check if IntersectionObserver is supported
    if (!window.IntersectionObserver) {
        console.log('IntersectionObserver not supported');
        return;
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.card');
    console.log(`Animating ${cards.length} cards`);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Function to update Google Form URL (for easy integration)
function updateRegistrationLink(googleFormUrl) {
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn && googleFormUrl) {
        registerBtn.onclick = function() {
            window.open(googleFormUrl, '_blank');
        };
        registerBtn.innerHTML = 'Register Team via Google Form';
    }
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.closeModal = closeModal;
window.updateRegistrationLink = updateRegistrationLink;

console.log('JavaScript file loaded successfully');