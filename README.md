# 🚀 AI-Powered Developer Portfolio

A modern, high-performance portfolio website featuring a **server-side AI Chatbot** powered by Google's Gemini Flash model. Built with vanilla HTML/CSS/JS for maximum speed and Vercel Serverless Functions for secure backend processing.

![Portfolio Status](https://img.shields.io/badge/Status-Live-brightgreen) ![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue) ![AI](https://img.shields.io/badge/AI-Gemini%20Flash-purple)

## ✨ Key Features

- **🤖 Intelligent Chatbot**: A custom-trained AI assistant that answers questions about my skills, projects, and background using **Google Gemini 1.5 Flash**.
- **⚡ High Performance**: optimized assets and zero framework overhead.
- **🎨 Modern UI/UX**: Fully responsive design with glassmorphism, smooth scrolling, and scroll-triggered animations.
- **🌓 Dark/Light Mode**: User preference persistance using LocalStorage.
- **🛡️ Secure Backend**: API keys are hidden on the server side (Vercel Function), protecting them from exposure.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+).
- **Backend**: Node.js (Vercel Serverless Functions).
- **AI Model**: Google Gemini (`gemini-flash-latest`).
- **Deployment**: Vercel.

## 📂 Project Structure

```
/
├── api/
│   └── chat.js         # Serverless function for AI Chat
├── public/
│   ├── index.html      # Main website
│   ├── style.css       # Styles
│   ├── script.js       # Frontend logic
│   ├── images/         # Assets
│   └── cv.pdf          # Resume
├── .env                # Local Environment variables
└── package.json        # Dependencies
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Md-Arif-hasnat99/AIPortfolio.git
cd AIPortfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your Google Gemini API Key:

```env
GEMINI_API_KEY=AIzaSy...your_key_here...
```

### 4. Run Locally

To start the local development server with API support:

```bash
npm run dev:local
```

Visit `http://localhost:3000` in your browser.

## 🌐 Deployment

This project is optimized for **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  **Important**: Add your `GEMINI_API_KEY` in the Vercel Project Settings > Environment Variables.
4.  Deploy!

## 📬 Contact

- **Email**: mdarifhasnat06@gmail.com
- **GitHub**: [Md-Arif-hasnat99](https://github.com/Md-Arif-hasnat99)
- **LinkedIn**: [Md Arif Hasnat](https://www.linkedin.com/in/md-arif-hasnat-57932b229/)

---

_Built with ❤️ by Md Arif Hasnat_
