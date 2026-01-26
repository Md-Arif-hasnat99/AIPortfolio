import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  try {
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message required" });
    }

    console.log("Received chat request");

    if (!process.env.GEMINI_API_KEY) {
      console.error("Error: GEMINI_API_KEY is missing in environment variables.");
      return res.status(500).json({ error: "Server configuration error: API Key missing" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // Using gemini-flash-latest which matches the user's API tier
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
You are a chatbot assistant embedded in a personal portfolio.

Use these details in responses:
Name: Md Arif Hasnat
Role: Fullstack Developer (Student)
Skills: HTML, CSS, JavaScript, React, Node.js, Git, GitHub
Projects: Portfolio website, HostelSync

Respond clearly and professionally. If you don’t know, ask for clarification.

User: ${message}
`;

    console.log("Sending request to Gemini API...");
    const result = await model.generateContent(prompt);
    const reply = result.response.text();
    console.log("Received response from Gemini");

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
}
