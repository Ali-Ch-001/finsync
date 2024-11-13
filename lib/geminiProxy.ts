// lib/geminiProxy.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateContent = async (prompt: string): Promise<string> => {
  const apiKey = "AIzaSyDDF0giYdWHQgMi872JMIPQ6zCYhhKw21M";
  
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to fetch response from Gemini API");
  }
};
