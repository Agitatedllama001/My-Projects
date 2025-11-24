import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ReadingResult } from '../types';

export const getGeminiReading = async (
  question: string,
  mood: string,
  cards: string[]
): Promise<ReadingResult> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      card1: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          explanation: { type: Type.STRING, description: "2-3 sentences interpreting the card for the user's question" }
        },
        required: ["name", "explanation"]
      },
      card2: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          explanation: { type: Type.STRING, description: "2-3 sentences interpreting the card for the user's question" }
        },
        required: ["name", "explanation"]
      },
      card3: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          explanation: { type: Type.STRING, description: "2-3 sentences interpreting the card for the user's question" }
        },
        required: ["name", "explanation"]
      },
      summary: {
        type: Type.STRING,
        description: "A cohesive paragraph summarizing the reading and advice."
      }
    },
    required: ["card1", "card2", "card3", "summary"]
  };

  const prompt = `
    You are an expert mystic Tarot reader.
    The user is asking: "${question}".
    Their current mood is: "${mood}".
    The cards drawn are:
    1. ${cards[0]}
    2. ${cards[1]}
    3. ${cards[2]}

    Provide a mystical, empathetic, and insightful reading.
    Interpret each card individually in the context of the question and the other cards.
    Then provide a final synthesis summary.
  `;

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const responseText = result.text;
    if (!responseText) {
      throw new Error("No response from AI");
    }

    return JSON.parse(responseText) as ReadingResult;
  } catch (error) {
    console.error("Error fetching reading:", error);
    // Fallback if AI fails (mock response to prevent app crash)
    return {
      card1: { name: cards[0], explanation: "The cards are clouded. Trust your intuition on this one." },
      card2: { name: cards[1], explanation: "Mystery surrounds this aspect. Look deeper within." },
      card3: { name: cards[2], explanation: "A time for reflection. The answer lies in silence." },
      summary: "The spirits are quiet at this moment. Please try meditating on your question and shuffling again."
    };
  }
};
