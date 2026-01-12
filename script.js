
// Portfolio Context for the AI
const PORTFOLIO_CONTEXT = `
You are Md Arif Hasnat's virtual assistant for his portfolio website. Here's information about Arif:

PERSONAL INFO:
- Name: Md Arif Hasnat
- Role: Frontend Developer & Computer Science Student
- Education: B.Tech in Computer Science and Engineering at Techno Institute of Engineering and Management (Pre-final year)
- Location: Kolkata, India
- Email: mdarifhasnat06@gmail.com
- Interests: Machine Learning, Data Science, and Artificial Intelligence

SKILLS & TECHNOLOGIES:
- HTML: Semantic markup and modern web standards
- CSS: Advanced styling, animations, and responsive design
- JavaScript: ES6+, DOM manipulation, and modern JS features
- C: System programming and low-level development
- Python: Backend development and data processing
- Java: Object-oriented programming and enterprise applications
- Git: Version control and collaborative development
- GitHub: Code hosting and project collaboration

PROJECTS:
1. Hostel Sync - A high-performance, enterprise-grade management portal designed to bridge the gap between students and hostel administration. Built with an obsession for speed, modern aesthetics, and real-time synchronization. Technologies: React, Next.js, Node.js, Supabase. Live: https://synchostel.vercel.app/, Repo: https://github.com/Md-Arif-hasnat99/hostelsync
2. Real Time Weather App - A dynamic weather application providing real-time weather updates and forecasts using JavaScript, HTML, and CSS. Repository: https://github.com/Md-Arif-hasnat99/Weather-app
3. Snake Game - Classic snake game implementation with score tracking and game mechanics built with Python and Pygame. Repository: https://github.com/Md-Arif-hasnat99/Snake-game

ABOUT ARIF:
Md Arif Hasnat is a frontend web developer driven by curiosity and creativity, currently charting his course toward becoming a full-fledged MERN stack developer. He's pursuing his B.Tech in Computer Science and Engineering at Techno Institute of Engineering and Management, where he's in his pre-final year and constantly exploring new dimensions of technology.

PERSONALITY:
Arif is passionate about clean code and user experience. He creates beautiful, responsive web applications with modern technologies and is always eager to learn and explore new technical challenges.

Please respond as Arif's assistant, providing helpful information about his current skills, experience, and projects. Keep responses concise but informative. Be friendly and professional.
`;

let chatHistory = [];

// Theme Toggle Functionality
function updateThemeIcon(isDarkMode) {
    const themeIcon = document.getElementById('theme-icon');
    const themeToggle = document.getElementById('theme-toggle');
    if (themeIcon && themeToggle) {
        themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    const isDarkMode = savedTheme === 'true';
    if (isDarkMode) document.body.classList.add('dark-mode');
    updateThemeIcon(isDarkMode);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    updateThemeIcon(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}

// Mobile Menu
function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    document.getElementById('theme-toggle')?.addEventListener('click', toggleDarkMode);
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu?.classList.toggle('active');
        document.body.style.overflow = navMenu?.classList.contains('active') ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Chat Functionality
    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');

    chatIcon?.addEventListener('click', () => {
        chatWindow?.classList.add('active');
        chatInput?.focus();
    });

    chatClose?.addEventListener('click', () => {
        chatWindow?.classList.remove('active');
    });

    chatSend?.addEventListener('click', sendMessage);
    chatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Animations & Hero
    initHeroAnimations();
    setTimeout(initSkillsAnimation, 500);
});

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage('user', message);
    chatInput.value = '';
    showTypingIndicator();
    getAIResponse(message);
}

function addMessage(type, content) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.innerHTML = `<p>${content}</p>`;
    chatMessages?.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
    chatMessages?.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    document.getElementById('typing-indicator')?.remove();
}

async function getAIResponse(userMessage) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: userMessage,
                history: chatHistory,
                context: PORTFOLIO_CONTEXT
            })
        });

        const data = await response.json();
        hideTypingIndicator();

        if (data.text) {
            addMessage('bot', data.text);
            chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
            chatHistory.push({ role: 'model', parts: [{ text: data.text }] });
        } else {
            throw new Error('No response text');
        }
    } catch (error) {
        console.error('Chat Error:', error);
        hideTypingIndicator();
        addMessage('bot', getFallbackResponse(userMessage));
    }
}

function getFallbackResponse(message) {
    const responses = {
        'skills': 'Arif is proficient in HTML, CSS, JavaScript, C, Python, Java, Git, and GitHub.',
        'projects': 'Arif built Hostel Sync (Next.js), a Weather App, and a Snake Game.',
        'education': 'Arif is pursuing B.Tech in CSE at Techno Institute of Engineering and Management.',
        'default': 'I\'m currently in fallback mode. I can tell you about Arif\'s skills, projects, or education!'
    };
    const lower = message.toLowerCase();
    if (lower.includes('skill')) return responses.skills;
    if (lower.includes('project')) return responses.projects;
    if (lower.includes('education')) return responses.education;
    return responses.default;
}

// --- Animation Functions (Static Version) ---
function initHeroAnimations() {
    const nameElement = document.querySelector('.name-letters');
    if (nameElement) {
        const text = nameElement.textContent;
        nameElement.innerHTML = '';
        text.split('').forEach((l, i) => {
            const s = document.createElement('span');
            s.className = 'letter';
            s.textContent = l === ' ' ? '\u00A0' : l;
            s.style.animationDelay = `${0.5 + i * 0.1}s`;
            nameElement.appendChild(s);
        });
    }
    
    // Add floating elements manually
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.className = 'floating-shape';
        div.style.cssText = `position:absolute; width:40px; height:40px; background:#6366f1; opacity:0.1; left:${Math.random()*100}%; top:${Math.random()*100}%; border-radius:50%; animation: floatRandom ${5+Math.random()*5}s infinite;`;
        hero?.appendChild(div);
    }
}

function initSkillsAnimation() {
    const cards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(c => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(30px)';
        c.style.transition = '0.6s ease';
        observer.observe(c);
    });
}
