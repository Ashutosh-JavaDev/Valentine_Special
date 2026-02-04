
import React from 'react';
import { motion } from 'framer-motion';
import { Chapter, ImageItem } from '../types';

interface ChapterSectionProps {
  chapter: Chapter;
  index: number;
}

const ChapterSection: React.FC<ChapterSectionProps> = ({ chapter, index }) => {
  return (
    <section className="py-24 px-4 md:px-12 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[#FB7185] font-inter text-sm uppercase tracking-[0.3em] font-semibold">Chapter {index + 1}</span>
          <h2 className="font-playfair text-4xl md:text-6xl mt-2 text-[#FDE047]">{chapter.category}</h2>
          <p className="font-dancing text-2xl text-rose-300/60 mt-4 italic">"{chapter.quote}"</p>
        </motion.div>

        {chapter.layout === 'masonry' && <MasonryGrid images={chapter.images} />}
        {chapter.layout === 'carousel' && <CarouselLayout images={chapter.images} />}
        {chapter.layout === 'stack' && <StackLayout images={chapter.images} />}
      </div>
    </section>
  );
};

const ImageCard: React.FC<{ image: ImageItem; index: number }> = ({ image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 5) * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden rounded-xl border border-burgundy-900/20 bg-slate-900 aspect-[3/4]"
    >
      <motion.img
        src={image.url}
        alt={image.caption}
        className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md bg-black/20 border-t border-white/10">
        <p className="font-inter text-white text-sm tracking-wide">{image.caption}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FDE047]/20 transition-colors pointer-events-none rounded-xl" />
    </motion.div>
  );
};

const MasonryGrid: React.FC<{ images: ImageItem[] }> = ({ images }) => (
  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
    {images.map((img, idx) => (
      <div key={img.id} className="break-inside-avoid">
        <ImageCard image={img} index={idx} />
      </div>
    ))}
  </div>
);

const CarouselLayout: React.FC<{ images: ImageItem[] }> = ({ images }) => (
  <div className="flex overflow-x-auto gap-6 pb-12 scrollbar-hide snap-x snap-mandatory px-4 -mx-4">
    {images.map((img, idx) => (
      <motion.div
        key={img.id}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex-shrink-0 w-[80vw] md:w-[400px] snap-center"
      >
        <ImageCard image={img} index={idx} />
      </motion.div>
    ))}
  </div>
);

const StackLayout: React.FC<{ images: ImageItem[] }> = ({ images }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {images.map((img, idx) => (
      <motion.div
        key={img.id}
        initial={{ rotate: idx % 2 === 0 ? -3 : 3, y: 0 }}
        whileInView={{ rotate: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
        className="relative shadow-2xl"
      >
        <div className="bg-white p-4 pb-12 shadow-inner border border-slate-200">
           <img src={img.url} className="w-full h-64 object-cover" alt={img.caption} />
           <p className="font-dancing text-slate-800 text-xl mt-4 text-center">{img.caption}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default ChapterSection;
