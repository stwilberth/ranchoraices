import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ images }) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((src) => ({ src }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div 
            key={i} 
            className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <img 
              src={src} 
              alt={`Imagen de la galería ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              loading="lazy" 
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}
