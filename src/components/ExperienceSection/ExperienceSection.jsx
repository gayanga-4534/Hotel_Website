// import React from 'react';
// import './ExperienceSection.css'; // Import your CSS file for styling
// import habarana from '../../assets/habarana.jpg'
// import Dhonveli_Maldives from '../../assets/Dhonveli_Maldives.jpg'
// const images = [
//   habarana,
//   Dhonveli_Maldives,
//   habarana,
//   Dhonveli_Maldives,
//   Dhonveli_Maldives,
//   habarana,
// ];

// function ImageAlbum() {

//   return (
//     <div className="image-album">
//       {images.map((image, index) => (
//         <div key={index} className="image-item">
//           <img src={image} alt={`Image ${index + 1}`} />

//   <div className='image-text'>opgtj</div>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImageAlbum;

import React from "react";
import "./ExperienceSection.css"; // Import your CSS file for styling
import habarana from "../../assets/habarana.jpg";
import Dhonveli_Maldives from "../../assets/Dhonveli_Maldives.jpg";
const images = [
  habarana,
  Dhonveli_Maldives,
  habarana,
  Dhonveli_Maldives,
  Dhonveli_Maldives,
  habarana,
];

function ImageAlbum() {
  return (
  <div>

<div className="ExperienceSection-title">Time for an autumn escape</div>
<p className="ExperienceSection-desc">Fall into a relaxing stay with one of our exclusive offers.</p>
    <div className="image-album">
      <div className="image-item">
        <img src={habarana} alt="" />
        <div className="image-text">Advance Purchase Discount – save up to 17%</div>
      </div>

      <div className="image-item">
        <img src={Dhonveli_Maldives} alt="" />
        <div className="image-text">Multiply Your Points</div>
      </div>

      <div className="image-item">
        <img src={habarana} alt="" />
        <div className="image-text">Free Bonus Points at new hotels</div>
      </div>

      <div className="image-item">
        <img src={Dhonveli_Maldives} alt="" />
        <div className="image-text">Park & Stay</div>
      </div>

      <div className="image-item">
        <img src={habarana} alt="" />
        <div className="image-text">Experience the Stay</div>
      </div>

      <div className="image-item">
        <img src={Dhonveli_Maldives} alt="" />
        <div className="image-text">Breakfast Included Package</div>
      </div>
    </div>

    </div>
  );
}

export default ImageAlbum;
