# Modern Portfolio with Gemini AI Chat

A responsive portfolio website with an intelligent chat assistant powered by Google's Gemini AI.

## Features

- 🌟 Modern, responsive design
- 🌙 Dark/Light theme toggle
- 🤖 AI-powered chat assistant using Gemini API
- 📱 Mobile-friendly interface
- ✨ Smooth animations and transitions
- 💬 Interactive chat bubble with "Ask anything about me" functionality

## Setup Instructions

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Configure the API Key

1. Open `config.js` in your project
2. Replace `'YOUR_API_KEY_HERE'` with your actual Gemini API key:

```javascript
const GEMINI_CONFIG = {
    API_KEY: 'your-actual-api-key-here', // Replace this line
    // ... rest of config
};
```

### 3. Run the Portfolio

#### Option 1: Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option 2: Local HTTP Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

**Important:** The portfolio must be served over HTTP/HTTPS due to ES6 module requirements. Opening the HTML file directly in a browser won't work.

## Chat Features

### With Gemini AI (when API key is configured):
- ✅ Intelligent responses about your skills and experience
- ✅ Natural conversation flow
- ✅ Context-aware answers
- ✅ Professional and helpful tone

### Without API Key (fallback mode):
- ✅ Basic predefined responses
- ✅ Still functional for common questions
- ✅ Portfolio information available

## Customization

### Update Portfolio Information

Edit the `PORTFOLIO_CONTEXT` in `config.js` to customize:
- Personal information
- Skills and technologies
- Projects and experience
- Contact details

### Modify Chat Personality

Adjust the context prompt in `config.js` to change how the AI assistant responds:
- Tone and personality
- Response style
- Areas of expertise focus

### Styling

- Colors and themes: `styles.css`
- Layout and structure: `index.html`
- Behavior and interactions: `script.js`

## API Usage and Costs

- Gemini API has a generous free tier
- Check current pricing at [Google AI Pricing](https://ai.google.dev/pricing)
- The chat is configured with reasonable limits to control usage

## Security Notes

- Never commit your API key to version control
- Consider using environment variables for production
- The current setup is suitable for personal portfolios and demos

## Browser Support

- Chrome, Firefox, Safari, Edge (modern versions)
- Requires ES6 module support
- Must be served over HTTP/HTTPS

## Troubleshooting

### Chat not working?
1. Check browser console for errors
2. Verify API key is correct in `config.js`
3. Ensure you're accessing via HTTP/HTTPS (not file://)

### API errors?
1. Check your API key is valid
2. Verify you haven't exceeded rate limits
3. Check network connectivity

### Styling issues?
1. Hard refresh the page (Ctrl+F5)
2. Check if all CSS files are loading
3. Verify file paths are correct

## License

This project is open source and available under the [MIT License](LICENSE).
