import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are a helpful AI assistant for Nishanth Kalaimani's portfolio website.
Here is the portfolio data: ${JSON.stringify(PORTFOLIO_DATA)}.
Answer questions about Nishanth's skills, experience, projects, and contact info based on this data.
Be professional, concise, and friendly.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const response = await chat.sendMessage({ message: message });
    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};