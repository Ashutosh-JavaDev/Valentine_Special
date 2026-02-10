
import { Chapter } from './types';

export const CHAPTERS: Chapter[] = [
  {
    category: "The First Sparks",
    quote: "It was always you.",
    layout: 'masonry',
    images: Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      url: `/images/sparks/${i + 1}.jpg`,
      caption: [
        "Where it all began...",
        "Collage date",
        "That specific Meet up",
        "Under the stars",
        "A shared laugh",
        "Silent moments",
        "The First Far Bike Trip",
        "A promise made",
        "Magic in the air",
        "Birthday Collabration",
        "The Boat Ride",
        "First Jyotiling Trip Together"
      ][i],
      vibe: 'romantic'
    }))
  },
  {
    category: "Sweetest Adventures",
    quote: "Every path leads back to you.",
    layout: 'carousel',
    images: Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      url: `/images/adventures/${i + 1}.jpg`,
      caption: ["Christmas Vibes", "Lost in the city", "Sunrise vibes", "Mountain peaks", "Capturing Vibes", "Tribal days", "New horizons", "Unexpected turns", "Road trip anthems", "Forever wandering","The Solo Capture","Birla Mandir Day"][i],
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
