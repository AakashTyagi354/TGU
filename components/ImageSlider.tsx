"use client"
import { useState } from "react";

const ImageSlider = ({ slides }: { slides: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full">
      <div className="absolute top-1/2 transform -translate-y-1/2">
        <div className="absolute left-0 z-10" onClick={goToPrevious}>
          ❰
        </div>
        <div className="absolute right-0 z-10" onClick={goToNext}>
          ❱
        </div>
      </div>
      <div
        className="w-full h-full rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="absolute bottom-4 w-full flex justify-center">
        {slides.map((slide: any, slideIndex: any) => (
          <div
            className="mx-1 cursor-pointer text-3xl"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
