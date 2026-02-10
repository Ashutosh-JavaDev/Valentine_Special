
import { Chapter } from './types';

export const CHAPTERS: Chapter[] = [
  {
    category: "The First Sparks",
    quote: "It was always you.",
    layout: 'masonry',
    images: Array.from({ length: 15 }).map((_, i) => ({
      id: i + 1,
      url: `https://picsum.photos/seed/love${i + 1}/800/${i % 2 === 0 ? 1000 : 800}`,
      caption: ["Where it all began...", "First coffee date", "That specific look", "Under the stars", "A shared laugh", "Silent moments", "The first touch", "A promise made", "Magic in the air", "Two souls meet"][i],
      vibe: 'romantic'
    }))
  },
  {
    category: "Sweetest Adventures",
    quote: "Every path leads back to you.",
    layout: 'carousel',
    images: Array.from({ length: 10 }).map((_, i) => ({
      id: i + 11,
      url: `https://picsum.photos/seed/travel${i + 1}/800/600`,
      caption: ["Our first trip ✈️", "Lost in the city", "Sunset vibes", "Road trip anthems", "Mountain peaks", "Beach days", "New horizons", "Unexpected turns", "Capturing time", "Forever wandering"][i],
      vibe: 'adventure'
    }))
  },
  {
    category: "Our Little World",
    quote: "Home is wherever I am with you.",
    layout: 'stack',
    images: Array.from({ length: 9 }).map((_, i) => ({
      id: i + 21,
      url: `https://picsum.photos/seed/pookie${i + 1}/800/800`,
      caption: ["Just us being us.", "Goofy faces", "Late night snacks", "Cozy movie nights", "Pookie time", "The best kind of lazy", "Internal jokes", "Morning rituals", "Heart-to-hearts", "Pure joy"][i],
      vibe: 'pookie'
    }))
  }
];
