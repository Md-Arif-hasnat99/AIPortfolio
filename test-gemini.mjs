import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Read .env manually since dotenv might not be installed
const envPath = path.resolve(process.cwd(), '.env');
let apiKey = '';

try {
  const envFile = fs.readFileSync(envPath, 'utf8');
  const keyLine = envFile.split('\n').find(line => line.trim().startsWith('GEMINI_API_KEY='));
  if (keyLine) {
    apiKey = keyLine.split('=')[1].trim();
    // Remove quotes if present
    apiKey = apiKey.replace(/^["']|["']$/g, '');
  }
} catch (e) {
  console.log("Could not read .env file");
}

if (!apiKey) {
  console.error("❌ Error: GEMINI_API_KEY not found in .env file.");
  process.exit(1);
}

console.log("✅ key found (length: " + apiKey.length + ")");
console.log("🔄 Testing connection to Gemini API...");

async function test() {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Say hello in one word.");
    const response = result.response.text();
    console.log("✅ Success! Gemini replied:", response);
  } catch (err) {
    console.error("❌ Gemini API connection failed:");
    console.error(err.message);
  }
}

test();
