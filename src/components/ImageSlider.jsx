import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({ images, title, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);


  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(nextSlide, interval);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, interval, nextSlide]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "Enter") {
      togglePlayPause();
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-zinc-900 text-white">
        No images to display
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden bg-zinc-900 rounded-lg shadow-lg"
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="region"
      aria-label="Image Slider"
    >
      <div className="relative h-64 md:h-96">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white"
      >
        <h2 className="text-xl font-bold mb-2">{images[currentIndex].title}</h2>
        <p className="text-sm">{images[currentIndex].description}</p>
      </motion.div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        onClick={togglePlayPause}
        className="absolute bottom-20 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default ImageSlider;