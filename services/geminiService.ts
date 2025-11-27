import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// NOTE: In a production environment, API calls should go through a backend proxy 
// to hide the API KEY. For this frontend-only demo, we use the env variable directly.
const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

export const getChatResponse = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  
  try {
    // Convert generic history format to Gemini Chat format if needed, 
    // but for simple single-turn or short context, we can just start a chat.
    // Here we will use the chat feature to keep context.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({
        message: message
    });

    return response.text || "Izvinjavam se, trenutno ne mogu obraditi vaš zahtjev. Molimo pokušajte kasnije ili nas kontaktirajte na WhatsApp.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Došlo je do greške u komunikaciji. Molimo vas da nas kontaktirate direktno putem WhatsApp-a.";
  }
};