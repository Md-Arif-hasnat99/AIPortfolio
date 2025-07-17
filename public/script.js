// Import Gemini AI
import { GoogleGenerativeAI } from "@google/generative-ai";

// Import Firebase Analytics
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ-wrghBpxrNkThr8Z3nwRWxW6HwYewOA",
    authDomain: "ai-portfolio-98f5d.firebaseapp.com",
    projectId: "ai-portfolio-98f5d",
    storageBucket: "ai-portfolio-98f5d.firebasestorage.app",
    messagingSenderId: "381624548511",
    appId: "1:381624548511:web:224262645d73049aa836aa",
    measurementId: "G-0ES4Z065NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('Firebase Analytics initialized successfully!');

// Initialize Gemini AI
let genAI = null;
let model = null;
let chat = null;

// Initialize Gemini AI when API key is available
function initializeGemini() {
    if (GEMINI_CONFIG.API_KEY && GEMINI_CONFIG.API_KEY !== 'AIzaSyDStmN50t3UN_xOS54GzSw-ufwb1wb3qFM') {
        try {
            genAI = new GoogleGenerativeAI(GEMINI_CONFIG.API_KEY);
            model = genAI.getGenerativeModel({ 
                model: GEMINI_CONFIG.MODEL_NAME,
                generationConfig: GEMINI_CONFIG.GENERATION_CONFIG,
                safetySettings: GEMINI_CONFIG.SAFETY_SETTINGS
            });
            
            // Start chat with context
            chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: PORTFOLIO_CONTEXT }]
                    },
                    {
                        role: "model",
                        parts: [{ text: "I understand. I'm Md Arif Hasnat's virtual assistant and I'm ready to help visitors learn about his skills, experience, and projects. How can I assist you today?" }]
                    }
                ]
            });
            
            console.log('Gemini AI initialized successfully!');
            return true;
        } catch (error) {
            console.error('Failed to initialize Gemini AI:', error);
            return false;
        }
    }
    return false;
}

// Theme Toggle Functionality
function initializeTheme() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
            themeToggle.title = 'Switch to Light Mode';
        }
    }
}

function toggleDarkMode() {
    const themeIcon = document.getElementById('theme-icon');
    const themeToggle = document.getElementById('theme-toggle');
    
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Update icon and title
    if (themeIcon) {
        themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        themeToggle.title = isDarkMode ? 'Switch to Light Mode' : 'Toggle Dark Mode';
    }
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
}

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    const themeToggle = document.getElementById('theme-toggle');
    const aiStatus = document.getElementById('ai-status');

    // Initialize theme
    initializeTheme();
    
    // Add event listener for theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Initialize Gemini AI
    const geminiInitialized = initializeGemini();
    if (!geminiInitialized) {
        console.log('Gemini AI not initialized - using fallback responses');
        if (aiStatus) {
            aiStatus.textContent = '💬 Basic Chat';
            aiStatus.classList.add('basic');
        }
    } else {
        if (aiStatus) {
            aiStatus.textContent = '🤖 AI Powered';
            aiStatus.classList.remove('basic');
        }
    }

    // Mobile Navigation Toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent scrolling when mobile menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Smooth scroll to section (if it's an anchor link)
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            // Reset mobile menu on desktop view
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100; // Offset for navbar height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    window.addEventListener('load', updateActiveNavLink);

    // Chat Bubble Functionality
    if (chatIcon && chatWindow && chatClose && chatInput && chatSend && chatMessages) {
        console.log('All chat elements found, setting up chat...');
        
        chatIcon.addEventListener('click', () => {
            console.log('Chat icon clicked!');
            chatWindow.classList.add('active');
            chatInput.focus();
        });

        chatClose.addEventListener('click', () => {
            console.log('Chat close clicked!');
            chatWindow.classList.remove('active');
        });

        // Chat Input Handling
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    } else {
        console.error('Chat elements not found:', {
            chatIcon: !!chatIcon,
            chatWindow: !!chatWindow,
            chatClose: !!chatClose,
            chatInput: !!chatInput,
            chatSend: !!chatSend,
            chatMessages: !!chatMessages
        });
    }
});

// Smooth scrolling for navigation links
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
    });
});

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    const message = chatInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage('user', message);
    chatInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Get AI response
    getAIResponse(message);
}

function addMessage(type, content) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.innerHTML = `<p>${content}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    typingDiv.id = 'typing-indicator';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

async function getAIResponse(userMessage) {
    try {
        // Check if Gemini AI is available
        if (chat && typeof chat.sendMessage === 'function') {
            const result = await chat.sendMessage(userMessage);
            const response = result.response;
            const text = response.text();
            
            setTimeout(() => {
                hideTypingIndicator();
                addMessage('bot', text);
            }, 1000 + Math.random() * 1000);
            
        } else {
            // Fallback response when AI is not available
            const fallbackResponse = getFallbackResponse(userMessage);
            setTimeout(() => {
                hideTypingIndicator();
                addMessage('bot', fallbackResponse);
            }, 1000 + Math.random() * 1000);
        }
        
    } catch (error) {
        console.error('Error getting AI response:', error);
        setTimeout(() => {
            hideTypingIndicator();
            addMessage('bot', "I'm sorry, I'm having trouble connecting right now. Please try again later.");
        }, 1000);
    }
}

function getFallbackResponse(message) {
    const responses = {
        'skills': 'Arif is proficient in HTML, CSS, JavaScript, C, Python, Java, Git, and GitHub. He focuses on creating responsive web applications.',
        'projects': 'Arif has worked on a Real Time Weather App using JavaScript, HTML, and CSS, and a Snake Game built with Python and Pygame.',
        'experience': 'Arif is a frontend developer and Computer Science student at Techno Institute of Engineering and Management, passionate about MERN stack development.',
        'education': 'Arif is pursuing B.Tech in Computer Science and Engineering at Techno Institute of Engineering and Management.',
        'contact': 'You can reach Arif at mdarifhasnat06@gmail.com or find him on GitHub and LinkedIn.',
        'about': 'Arif is a frontend web developer driven by curiosity and creativity, interested in Machine Learning, Data Science, and AI.',
        'default': 'Thanks for your question! I can tell you about Arif\'s skills, projects, education, or experience. What would you like to know?'
    };
    
    const lowerMessage = message.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    return responses.default;
}

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showErrorMessage('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showErrorMessage('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('.contact-submit');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                showSuccessMessage();
            }, 2000);
        });
    }
});

function showErrorMessage(message) {
    // Remove existing error messages
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const contactForm = document.querySelector('.contact-form');
    contactForm.insertBefore(errorDiv, contactForm.firstChild);
    
    // Remove error message after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function showSuccessMessage() {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background: #d1fae5;
            color: #065f46;
            border: 1px solid #a7f3d0;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            text-align: center;
            animation: slideIn 0.3s ease;
        ">
            <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
            Message sent successfully! I'll get back to you soon.
        </div>
    `;
    
    const contactForm = document.querySelector('.contact-form');
    contactForm.parentNode.insertBefore(successDiv, contactForm);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Skills Animation on Scroll
function initSkillsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Initialize skills animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Delay to ensure all styles are loaded
    setTimeout(initSkillsAnimation, 500);
    
    // Initialize hero animations
    initHeroAnimations();
});

// Hero Landing Page Animations
function initHeroAnimations() {
    // Split name into individual letters for animation
    animateNameLetters();
    
    // Add floating elements
    createFloatingElements();
    
    // Add typing effect to subtitle
    initTypingEffect();
    
    // Add staggered fade-in for elements
    initStaggeredAnimations();
    
    // Add mouse movement parallax effect
    initParallaxEffect();
}

function animateNameLetters() {
    const nameElement = document.querySelector('.name-letters');
    if (nameElement) {
        // Keep the name as one line, just add animation class
        nameElement.style.opacity = '0';
        nameElement.style.transform = 'translateY(30px) scale(0.9)';
        nameElement.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        nameElement.style.animationDelay = '1.2s';
        
        // Animate the entire name as one unit
        setTimeout(() => {
            nameElement.style.opacity = '1';
            nameElement.style.transform = 'translateY(0) scale(1)';
        }, 1200);
    }
}

function createFloatingElements() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Create floating geometric shapes
    const shapes = ['circle', 'triangle', 'square', 'hexagon'];
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < 8; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.className = `floating-shape floating-${shapes[i % shapes.length]}`;
        floatingElement.style.cssText = `
            position: absolute;
            width: ${Math.random() * 60 + 20}px;
            height: ${Math.random() * 60 + 20}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            opacity: 0.1;
            border-radius: ${shapes[i % shapes.length] === 'circle' ? '50%' : shapes[i % shapes.length] === 'hexagon' ? '20%' : '10%'};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatRandom ${5 + Math.random() * 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            pointer-events: none;
            z-index: 1;
        `;
        heroSection.appendChild(floatingElement);
    }
}

function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = 'A Frontend Developer & Creative Problem Solver';
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetween = 2000;
    
    let i = 0;
    let isErasing = false;
    
    function typeEffect() {
        if (!isErasing && i <= text.length) {
            subtitle.textContent = text.slice(0, i);
            i++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isErasing && i >= 0) {
            subtitle.textContent = text.slice(0, i);
            i--;
            setTimeout(typeEffect, erasingSpeed);
        } else if (!isErasing && i > text.length) {
            setTimeout(() => {
                isErasing = true;
                typeEffect();
            }, delayBetween);
        } else if (isErasing && i < 0) {
            setTimeout(() => {
                isErasing = false;
                typeEffect();
            }, 500);
        }
    }
    
    // Start typing effect after initial animations
    setTimeout(typeEffect, 3000);
}

function initStaggeredAnimations() {
    const elements = [
        { selector: '.hero-title', delay: 0 },
        { selector: '.hero-subtitle', delay: 200 },
        { selector: '.hero-description', delay: 400 },
        { selector: '.hero-buttons', delay: 600 },
        { selector: '.profile-picture', delay: 800 }
    ];
    
    elements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}

function initParallaxEffect() {
    const heroContent = document.querySelector('.hero-content');
    const profilePicture = document.querySelector('.profile-picture');
    
    if (!heroContent || !profilePicture) return;
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Subtle parallax movement
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        heroContent.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
        profilePicture.style.transform = `translate(${-moveX}px, ${-moveY}px) scale(1.05)`;
    });
}

// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = contactForm?.querySelector('.contact-submit');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            if (submitBtn && btnText && btnLoading) {
                submitBtn.disabled = true;
                btnText.style.display = 'none';
                btnLoading.style.display = 'inline-flex';
            }
            
            try {
                const formData = new FormData(contactForm);
                
                // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage('Oops! There was an error sending your message. Please try again or contact me directly.', 'error');
            } finally {
                // Reset button state
                if (submitBtn && btnText && btnLoading) {
                    submitBtn.disabled = false;
                    btnText.style.display = 'inline';
                    btnLoading.style.display = 'none';
                }
            }
        });
    }
    
    function showFormMessage(message, type) {
        if (formStatus) {
            formStatus.textContent = message;
            formStatus.className = `form-status ${type}`;
            formStatus.style.display = 'block';
            
            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        }
    }
});
