// Import Gemini AI
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
let genAI = null;
let model = null;
let chat = null;

// Initialize Gemini AI when API key is available
function initializeGemini() {
    if (GEMINI_CONFIG.API_KEY && GEMINI_CONFIG.API_KEY !== 'YOUR_API_KEY_HERE') {
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
                        parts: [{ text: "I understand. I'm John Doe's virtual assistant and I'm ready to help visitors learn about his skills, experience, and projects. How can I assist you today?" }]
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

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const aiStatus = document.getElementById('ai-status');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Theme Toggle Functionality
function initializeTheme() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
            themeToggle.title = 'Switch to Light Mode';
        }
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Update icon
    if (isDarkMode) {
        themeIcon.className = 'fas fa-sun';
        themeToggle.title = 'Switch to Light Mode';
    } else {
        themeIcon.className = 'fas fa-moon';
        themeToggle.title = 'Switch to Dark Mode';
    }
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
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

// Chat Bubble Functionality
chatIcon.addEventListener('click', () => {
    chatWindow.classList.add('active');
    chatInput.focus();
});

chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

// Chat Input Handling
chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Simulate typing indicator
    addTypingIndicator();

    // Generate response using Gemini AI or fallback
    if (chat) {
        generateGeminiResponse(message);
    } else {
        // Fallback to local responses if Gemini is not available
        setTimeout(() => {
            removeTypingIndicator();
            const response = generateBotResponse(message);
            addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000);
    }
}

// Generate response using Gemini AI
async function generateGeminiResponse(userMessage) {
    try {
        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const text = response.text();
        
        removeTypingIndicator();
        addMessage(text, 'bot');
    } catch (error) {
        console.error('Gemini API error:', error);
        removeTypingIndicator();
        
        // Fallback to local response on error
        const fallbackResponse = generateBotResponse(userMessage);
        addMessage(fallbackResponse, 'bot');
        
        // Show error message to user
        setTimeout(() => {
            addMessage("I'm having trouble connecting to my AI brain right now, but I can still help with basic questions about John!", 'bot');
        }, 500);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    
    if (sender === 'bot') {
        // Add small profile picture for bot messages
        const profileImg = document.createElement('img');
        profileImg.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face';
        profileImg.alt = 'John';
        profileImg.className = 'message-profile-pic';
        messageDiv.appendChild(profileImg);
    }
    
    const messageText = document.createElement('p');
    messageText.textContent = text;
    messageDiv.appendChild(messageText);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('message', 'bot-message', 'typing-indicator');
    
    // Add profile picture
    const profileImg = document.createElement('img');
    profileImg.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face';
    profileImg.alt = 'John';
    profileImg.className = 'message-profile-pic';
    typingDiv.appendChild(profileImg);
    
    // Add typing animation
    const typingText = document.createElement('div');
    typingText.className = 'typing-animation';
    typingText.innerHTML = '<span></span><span></span><span></span>';
    typingDiv.appendChild(typingText);
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Bot Response Generator
function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Skills and technologies
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
        return "John is skilled in frontend technologies like React, Vue.js, HTML5, CSS3, and JavaScript. For backend, he works with Node.js, Python, Express, and Django. He's also experienced with databases like PostgreSQL and MongoDB, and cloud technologies including AWS, Docker, and Kubernetes.";
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
        return "John has over 5 years of professional experience as a Full Stack Developer and UI/UX Designer. He has completed 50+ projects and worked with 100+ happy clients. His experience spans across web applications, mobile development, and cloud solutions.";
    }
    
    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('work samples')) {
        return "John has worked on various exciting projects including an E-Commerce Platform built with React and Node.js, a collaborative Task Management App with real-time updates using Vue.js and Firebase, and a Data Visualization Dashboard using D3.js and Python. Each project showcases his ability to create scalable, user-friendly solutions.";
    }
    
    // Education or background
    if (message.includes('education') || message.includes('background') || message.includes('study')) {
        return "John has a strong technical background with continuous learning in modern web technologies. He stays updated with the latest industry trends and best practices, contributing to open source projects and participating in the developer community.";
    }
    
    // Contact
    if (message.includes('contact') || message.includes('hire') || message.includes('email') || message.includes('phone')) {
        return "You can reach John at john.doe@example.com or call him at +1 (555) 123-4567. He's based in San Francisco, CA and is always open to discussing new opportunities and exciting projects!";
    }
    
    // Location
    if (message.includes('location') || message.includes('where') || message.includes('based')) {
        return "John is based in San Francisco, California. He's open to both local and remote work opportunities.";
    }
    
    // Availability
    if (message.includes('available') || message.includes('free') || message.includes('busy')) {
        return "John is currently available for new projects and opportunities. Feel free to reach out to discuss your requirements and see how he can help bring your ideas to life!";
    }
    
    // Rates or pricing
    if (message.includes('rate') || message.includes('price') || message.includes('cost') || message.includes('budget')) {
        return "John's rates are competitive and depend on the project scope and requirements. He offers flexible pricing options including hourly rates and project-based pricing. Contact him directly to discuss your specific needs and get a customized quote.";
    }
    
    // Specialization
    if (message.includes('specialize') || message.includes('focus') || message.includes('expertise')) {
        return "John specializes in creating modern, responsive web applications with a focus on user experience and performance. His expertise includes full-stack development, UI/UX design, and implementing scalable solutions using the latest technologies.";
    }
    
    // Tools or software
    if (message.includes('tool') || message.includes('software') || message.includes('framework')) {
        return "John uses a variety of modern tools and frameworks including React, Vue.js, Node.js, Python, Docker, AWS, Git, VS Code, Figma for design, and various testing frameworks. He believes in using the right tool for each specific project requirement.";
    }
    
    // Collaboration or teamwork
    if (message.includes('team') || message.includes('collaborate') || message.includes('work with')) {
        return "John is an excellent team player with strong communication skills. He has experience working in agile environments, collaborating with designers, product managers, and other developers. He values clear communication and believes in collective problem-solving.";
    }
    
    // Learning or growth
    if (message.includes('learn') || message.includes('new') || message.includes('future')) {
        return "John is passionate about continuous learning and staying current with technology trends. He regularly explores new frameworks, contributes to open source projects, and enjoys tackling challenging problems that push his skills further.";
    }
    
    // General greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! I'm John's virtual assistant. I'm here to help you learn more about John's skills, experience, and projects. What would you like to know?";
    }
    
    // Thank you
    if (message.includes('thank') || message.includes('thanks')) {
        return "You're welcome! Is there anything else you'd like to know about John's work or experience?";
    }
    
    // Default response
    const defaultResponses = [
        "That's an interesting question! John has extensive experience in web development and would be happy to discuss this further. You can reach him directly for more detailed information.",
        "I'd recommend reaching out to John directly for more specific details about this. He's always happy to discuss his work and experience in detail!",
        "John has worked on many diverse projects and has experience with various technologies. For more specific information about this topic, feel free to contact him directly.",
        "That's a great question! John would be the best person to give you detailed insights about this. Don't hesitate to get in touch with him!",
        "John has broad experience across different areas of development. For more detailed information about your specific interest, I'd suggest contacting him directly."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat, .contact-item');
    animateElements.forEach(el => observer.observe(el));
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Skills progress animation
function animateSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }, index * 200);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konami.join(',')) {
        // Easter egg activated
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 Easter egg found! You discovered the secret Konami code!');
        }, 2000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
