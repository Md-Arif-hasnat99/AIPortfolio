// Portfolio Scripts


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

function parseMarkdown(text) {
    // Basic sanitization
    let html = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Headers (### Text or ## Text) -> Bold Heading
    html = html.replace(/^#{2,3}\s+(.*$)/gim, '<strong>$1</strong>');

    // Bold (**text**)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic (*text*)
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Lists (- item or * item) -> Bullet points with breaks
    // We replace the list marker with a bullet and ensure newlines work
    html = html.replace(/^\s*[-*]\s+(.*)$/gm, '• $1');

    // Code (`code`)
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');

    // Line breaks - Convert remaining newlines to <br>
    html = html.replace(/\n/g, '<br>');

    return html;
}

function addMessage(type, content) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    // Use parseMarkdown for bot messages to render formatting
    // For user messages, we can also use it or just plain text.
    // Let's use it for both for consistency.
    messageDiv.innerHTML = `<p>${parseMarkdown(content)}</p>`;
    
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
                message: userMessage
            })
        });

        const data = await response.json();
        hideTypingIndicator();

        if (data.reply) {
            addMessage('bot', data.reply);
        } else {
            throw new Error(data.error || 'No response text');
        }
    } catch (error) {
        console.error('Chat Error:', error);
        hideTypingIndicator();
        addMessage('bot', "Sorry, I'm having trouble connecting to the AI right now. Please try again later.");
    }
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
