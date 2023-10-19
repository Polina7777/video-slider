import React from 'react';
import Slider from 'react-slick';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider2.css'; // Создайте свой CSS-файл для стилизации

const Carousel = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);

    const handleVideoChange = (newIndex) => {
      setActiveVideoIndex(newIndex);
    };
  
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
      <div className={`carousel-item ${activeVideoIndex === 0 ? 'active' : ''}`}>
          {/* Активное видео */}
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE"></iframe>
        </div>
        <div className={`carousel-item ${activeVideoIndex === 1 ? 'active' : ''}`}>
          {/* Второе видео */}
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE"></iframe>
        </div>
        <div className={`carousel-item ${activeVideoIndex === 2 ? 'active' : ''}`}>
          {/* Третье видео */}
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE"></iframe>
        </div>
        <div className={`carousel-item ${activeVideoIndex === 3 ? 'active' : ''}`}>
          {/* Третье видео */}
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE"></iframe>
        </div>
        <div className={`carousel-item ${activeVideoIndex === 4 ? 'active' : ''}`}>
          {/* Третье видео */}
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE"></iframe>
        </div>
        <div className={`carousel-item ${activeVideoIndex === 5 ? 'active' : ''}`}>
          {/* Третье видео */}
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE"></iframe>
        </div>
        <div className={`carousel-item ${activeVideoIndex === 6 ? 'active' : ''}`}>
          {/* Третье видео */}
          <iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE"></iframe>
        </div>
        {/* Добавьте другие видео элементы по аналогии */}
      </Slider>
    </div>
  );
};

export default Carousel;
