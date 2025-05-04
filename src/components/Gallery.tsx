"use client";
import React, { useState } from 'react';

interface Image {
  src: string;
  alt: string;
}

interface GalleryProps {
  list: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ list }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closePopup = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % list.length);
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + list.length) % list.length);
    }
  };

  return (
    <>
      <main className="flex flex-wrap mx-auto place-content-center gap-8 p-8">
        {list.map((image, index) => (
          <div
            key={index}
            className="image-container overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow ease-in-out duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image w-[35vw] lg:w-[20vw] h-auto cursor-pointer hover:scale-105 hover:opacity-80 transition-transform duration-300"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </main>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="relative flex items-center justify-center">
            <img
              src={list[selectedImageIndex].src}
              alt={list[selectedImageIndex].alt}
              className="md:max-w-8/12 max-w-10/12 max-h-screen rounded-2xl m-12 "
            />
            {/* Pulsante Close */}
            <button
              className="absolute top-0 right-2 text-white bg-black/75 rounded-full md:h-12 h-8 md:w-12 w-8 flex items-center justify-center shadow-md shadow-white/30 hover:bg-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                closePopup();
              }}
              aria-label="Chiudi popup"
            >
              <span className="text-2xl leading-none">✖︎</span>
            </button>

            {/* Pulsante Previous */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/75 rounded-full md:h-12 h-8 md:w-12 w-8 flex items-center justify-center shadow-md shadow-white/30 hover:bg-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Immagine precedente"
            >
              <span className="text-2xl leading-none">◀︎</span>
            </button>

            {/* Pulsante Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/75 rounded-full md:h-12 h-8 md:w-12 w-8 flex items-center justify-center shadow-md shadow-white/30 hover:bg-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
              aria-label="Immagine successiva"
            >
              <span className="text-2xl leading-none">▶︎</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;