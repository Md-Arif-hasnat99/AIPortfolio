
const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history, context } = req.body;
  const apiKey = process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key not configured on server' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Reconstruct the chat with the system context
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: context }]
        },
        {
          role: "model",
          parts: [{ text: "I understand. I'm Md Arif Hasnat's virtual assistant and I'm ready to help." }]
        },
        ...history
      ]
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ error: 'Failed to communicate with AI' });
  }
};
