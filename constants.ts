import { TarotCard, Mood } from './types';

export const MAJOR_ARCANA: TarotCard[] = [
  { id: 0, name: "The Fool", image: "https://picsum.photos/seed/tarot0/300/500", keywords: ["New Beginnings", "Innocence", "Adventure"] },
  { id: 1, name: "The Magician", image: "https://picsum.photos/seed/tarot1/300/500", keywords: ["Manifestation", "Power", "Action"] },
  { id: 2, name: "The High Priestess", image: "https://picsum.photos/seed/tarot2/300/500", keywords: ["Intuition", "Mystery", "Subconscious"] },
  { id: 3, name: "The Empress", image: "https://picsum.photos/seed/tarot3/300/500", keywords: ["Fertility", "Nature", "Abundance"] },
  { id: 4, name: "The Emperor", image: "https://picsum.photos/seed/tarot4/300/500", keywords: ["Authority", "Structure", "Control"] },
  { id: 5, name: "The Hierophant", image: "https://picsum.photos/seed/tarot5/300/500", keywords: ["Tradition", "Conformity", "Spirituality"] },
  { id: 6, name: "The Lovers", image: "https://picsum.photos/seed/tarot6/300/500", keywords: ["Love", "Harmony", "Choices"] },
  { id: 7, name: "The Chariot", image: "https://picsum.photos/seed/tarot7/300/500", keywords: ["Willpower", "Determination", "Victory"] },
  { id: 8, name: "Strength", image: "https://picsum.photos/seed/tarot8/300/500", keywords: ["Courage", "Compassion", "Influence"] },
  { id: 9, name: "The Hermit", image: "https://picsum.photos/seed/tarot9/300/500", keywords: ["Introspection", "Solitude", "Guidance"] },
  { id: 10, name: "Wheel of Fortune", image: "https://picsum.photos/seed/tarot10/300/500", keywords: ["Change", "Cycles", "Fate"] },
  { id: 11, name: "Justice", image: "https://picsum.photos/seed/tarot11/300/500", keywords: ["Fairness", "Truth", "Law"] },
  { id: 12, name: "The Hanged Man", image: "https://picsum.photos/seed/tarot12/300/500", keywords: ["Surrender", "Perspective", "Sacrifice"] },
  { id: 13, name: "Death", image: "https://picsum.photos/seed/tarot13/300/500", keywords: ["Endings", "Transformation", "Transition"] },
  { id: 14, name: "Temperance", image: "https://picsum.photos/seed/tarot14/300/500", keywords: ["Balance", "Moderation", "Patience"] },
  { id: 15, name: "The Devil", image: "https://picsum.photos/seed/tarot15/300/500", keywords: ["Addiction", "Materialism", "Playfulness"] },
  { id: 16, name: "The Tower", image: "https://picsum.photos/seed/tarot16/300/500", keywords: ["Upheaval", "Disaster", "Awakening"] },
  { id: 17, name: "The Star", image: "https://picsum.photos/seed/tarot17/300/500", keywords: ["Hope", "Faith", "Rejuvenation"] },
  { id: 18, name: "The Moon", image: "https://picsum.photos/seed/tarot18/300/500", keywords: ["Illusion", "Fear", "Anxiety"] },
  { id: 19, name: "The Sun", image: "https://picsum.photos/seed/tarot19/300/500", keywords: ["Positivity", "Success", "Vitality"] },
  { id: 20, name: "Judgement", image: "https://picsum.photos/seed/tarot20/300/500", keywords: ["Rebirth", "Absolution", "Reflection"] },
  { id: 21, name: "The World", image: "https://picsum.photos/seed/tarot21/300/500", keywords: ["Completion", "Integration", "Travel"] },
];

export const MOODS: { type: Mood; emoji: string; label: string }[] = [
  { type: 'excited', emoji: '🤩', label: 'Excited' },
  { type: 'happy', emoji: '🙂', label: 'Happy' },
  { type: 'neutral', emoji: '😐', label: 'Neutral' },
  { type: 'sad', emoji: '😔', label: 'Sad' },
  { type: 'crying', emoji: '😭', label: 'Overwhelmed' },
];
