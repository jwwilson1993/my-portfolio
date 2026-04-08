import { useState } from "react";
import "./ProjectCarousel.css";

// Props: images = [{ src, alt, caption? }, ...], isDark = matches site theme for control colors
export default function ProjectCarousel({ images, isDark = true }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const lastIndex = images.length - 1;

  const goTo = (index) => {
    if (index < 0) {
      setCurrent(lastIndex);
    } else if (index > lastIndex) {
      setCurrent(0);
    } else {
      setCurrent(index);
    }
  };

  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  const onlyOne = images.length === 1;

  return (
    <div className={`project-carousel ${isDark ? "" : "project-carousel--light"}`}>
      <div className="project-carousel__viewport" aria-roledescription="carousel">
        <div className="project-carousel__slides">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={
                index === current
                  ? "project-carousel__slide project-carousel__slide--active"
                  : "project-carousel__slide"
              }
              aria-hidden={index !== current}
            >
              <img src={image.src} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} />
              {image.caption ? (
                <p className="project-carousel__caption">{image.caption}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="project-carousel__controls">
        <button
          type="button"
          className="project-carousel__arrow project-carousel__arrow--prev"
          onClick={goPrev}
          disabled={onlyOne}
          aria-label="Previous screenshot"
        >
          Previous
        </button>

        <div className="project-carousel__dots" role="tablist" aria-label="Screenshot slides">
          {images.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              role="tab"
              aria-selected={index === current}
              aria-label={`Go to screenshot ${index + 1}`}
              className={
                index === current
                  ? "project-carousel__dot project-carousel__dot--active"
                  : "project-carousel__dot"
              }
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="project-carousel__arrow project-carousel__arrow--next"
          onClick={goNext}
          disabled={onlyOne}
          aria-label="Next screenshot"
        >
          Next
        </button>
      </div>
    </div>
  );
}
