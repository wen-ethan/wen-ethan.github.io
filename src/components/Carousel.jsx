import { useState } from 'react'

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const prev = () => setCurrent((current - 1 + total) % total)
  const next = () => setCurrent((current + 1) % total)

  return (
    <div className="project-carousel media-box">
      {slides.map((slide, i) => (
        <div key={i} className={`carousel-slide${i === current ? ' active' : ''}`}>
          {slide.type === 'video' ? (
            <video controls playsInline loop poster={slide.poster}>
              <source src={slide.src} type={slide.mimeType || 'video/mp4'} />
            </video>
          ) : (
            <img src={slide.src} alt={slide.alt || ''} />
          )}
        </div>
      ))}

      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`indicator${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <button className="carousel-prev" onClick={prev}>←</button>
      <button className="carousel-next" onClick={next}>→</button>
    </div>
  )
}
