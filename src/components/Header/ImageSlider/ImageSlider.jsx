import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; // Import your custom CSS for styling


function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust this for autoplay interval
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
    
          <img
            src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg&ga=GA1.1.160184015.1697557248&semt=sph"
            alt="Image 1"
            className="slider-image" // Apply a class for styling
          />
          <div className="slider-text-title">Shrangi-La Colombo</div>
          <div className="slider-text">
          A personal tropical sanctuary set within the heart of the city
          </div>
          
        
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?size=626&ext=jpg&ga=GA1.1.160184015.1697557248&semt=sph"
            alt="Image 2"
            className="slider-image" // Apply a class for styling
          />
          <div className="slider-text-title">Rooms & Suites</div>
          <div className="slider-text">Tastefully designed with the modern traveler in mind</div>
        </div>

        <div>
          <img
            src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?size=626&ext=jpg&ga=GA1.1.160184015.1697557248&semt=sph"
            alt="Image 3"
            className="slider-image" // Apply a class for styling
          />
          <div className="slider-text-title">Tiki Bar</div>
          <div className="slider-text">Raise your spirits with our infused beverages and island cuisine</div>
        </div>

        <div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/relax-area-hotel_1150-10812.jpg?size=626&ext=jpg&ga=GA1.1.160184015.1697557248&semt=sph"
              alt="Image 4"
              className="slider-image" // Apply a class for styling
            />
            <div className="slider-text-title">Shang Palace</div>
            <div className="slider-text">Celebrate the art of Chinese cuisine in the heart of Colombo</div>
          </div>
        </div>

        <div>
          <div className="slider-image-container">
            <img
              src="https://img.freepik.com/free-photo/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai_188544-7715.jpg?w=740&t=st=1697715761~exp=1697716361~hmac=897bb375f570e06650dda904148acc0d587c1c773a3f6fe278ef0f56e20e9a10"
              alt="Image 5"
              className="slider-image" // Apply a class for styling
            />
            <div className="slider-text-title">Shangri-La Colombo</div>
            <div className="slider-text">A personal tropical sanctuary set within the heart of the city</div>
          </div>
        </div>

        {/* Add more images with their respective URLs */}
      </Slider>
    </div>
  );
}

export default ImageSlider;
