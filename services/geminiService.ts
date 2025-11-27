import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from '../constants';

const systemInstruction = `
You are an AI assistant for Nishanth Kalaimani's personal portfolio website. 
Your goal is to answer questions about Nishanth's professional background, skills, and experience based strictly on the provided context.

Context:
${JSON.stringify(PORTFOLIO_DATA)}

Guidelines:
1. Be professional, concise, and polite.
2. Act as if you are representing Nishanth.
3. If asked about something not in the context, politely state that you don't have that information.
4. Highlight his expertise in Angular and Spring Boot when relevant.
5. Keep answers under 100 words unless detailed explanation is requested.
`;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  try {
    // We are using the 'gemini-2.5-flash' model for quick, responsive chat interactions.
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history, 
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
