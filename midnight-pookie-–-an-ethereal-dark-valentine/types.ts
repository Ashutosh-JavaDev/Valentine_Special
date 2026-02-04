
export interface ImageItem {
  id: number;
  url: string;
  caption: string;
  vibe: 'romantic' | 'adventure' | 'pookie';
}

export interface Chapter {
  category: string;
  quote: string;
  images: ImageItem[];
  layout: 'masonry' | 'carousel' | 'stack';
}
