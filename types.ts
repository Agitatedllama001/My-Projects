export interface TarotCard {
  id: number;
  name: string;
  image: string; // URL or placeholder ID
  keywords: string[];
}

export interface ReadingResult {
  card1: {
    name: string;
    explanation: string;
  };
  card2: {
    name: string;
    explanation: string;
  };
  card3: {
    name: string;
    explanation: string;
  };
  summary: string;
}

export type Mood = 'excited' | 'happy' | 'neutral' | 'sad' | 'crying';

export interface UserContext {
  question: string;
  mood: Mood | null;
}
