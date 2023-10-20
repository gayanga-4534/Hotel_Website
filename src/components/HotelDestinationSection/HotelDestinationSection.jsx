// import React from 'react'
// import './HotelDestinationSection.css'
// import maldives from '../../assets/maldives.jpg'
// import { useState } from 'react';
// const HotelDestinationSection = () => {
//     const [selectedOption, setSelectedOption] = useState('');
//     const [maldivesVillage, setMaldivesVillage] = useState("");
//     const handleDropdownChange = (event) => {
//       setSelectedOption(event.target.value);
//     };
//     if (selectedOption === 'option1') {
//         setMaldivesVillage(1);

//     }
//   return (
//     <div>
//     <div className='destination-title'>
//      Our Destination
//     </div>

// {/* Drop Down */}
//     <div>
//       <select value={selectedOption} onChange={handleDropdownChange}>

//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       <p>You selected: {selectedOption}</p>
//       <p>You selected: {maldivesVillage}</p>
//     </div>
//     {/* Drop Down */}

//      <div className=''>
//      <img src={maldives} alt='' className='maldives-image'/>
//      </div>

//      </div>
//   )
// }

// export default HotelDestinationSection

import React, { useState } from "react";
import "./HotelDestinationSection.css";
import Hakuraa_Huraa_Maldives from "../../assets/Hakuraa_Huraa_Maldives.jpg";
import Dhonveli_Maldives from "../../assets/Dhonveli_Maldives.jpg";
import Velifushi_Maldives from "../../assets/Velifushi_Maldives.jpg";
import habarana from "../../assets/habarana.jpg";
const HotelDestinationSection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [maldivesVillage, setMaldivesVillage] = useState(1);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "option1") {
      setMaldivesVillage(1);
    } else if (event.target.value === "option2") {
      setMaldivesVillage(2);
    } else if (event.target.value === "option3") {
      setMaldivesVillage(3);
    } else if (event.target.value === "option4") {
      setMaldivesVillage(4);
    }
  };

  return (
    <div>
      <div className="destination-title">Our Destination</div>

      {/* Drop Down */}
      <div>
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Habarana Village by Cinnamon</option>
          <option value="option2">Cinnamon Velifushi Maldives</option>
          <option value="option3">Cinnamon Hakuraa Huraa Maldives</option>
          <option value="option4">Cinnamon Dhonveli Maldives</option>
        </select>
        {/* <p>You selected: {selectedOption}</p>
        <p>You selected: {maldivesVillage}</p> */}
      </div>
      {/* Drop Down */}
      {maldivesVillage === 1 && (
        <div className="destination-section">
          <div className="destination-card">
            <div className="card-title">Habarana Village by Cinnamon</div>
            <div className="card-desc">
              Experience affordable rustic barefoot type elegance, which is
              designed to reflect the rural environs and simplicity of the local
              village life surrounded by rich biodiversity.
            </div>
            <button className="blue-button">Discover More</button>
          </div>
          <div className="">
            <img src={habarana} alt="" className="maldives-image" />
          </div>
        </div>
      )}

      {maldivesVillage === 2 && (
        <div className="destination-section">
          <div className="destination-card">
            <div className="card-title">Cinnamon Velifushi Maldives</div>
            <div className="card-desc">
              Cinnamon Velifushi Maldives, a one-resort island for sun,
              activity, relaxation and luxury surrounded by exotic marine life
              and a swimmable lagoon.
            </div>
            <button className="blue-button">Discover More</button>
          </div>
          <div className="">
            <img src={Velifushi_Maldives} alt="" className="maldives-image" />
          </div>
        </div>
      )}

      {maldivesVillage === 3 && (
        <div className="destination-section">
          <div className="destination-card">
            <div className="card-title">Cinnamon Hakuraa Huraa Maldives</div>
            <div className="card-desc">
              Cinnamon Hakuraa Huraa Maldives with its white roofed Water
              Bungalows set knee-deep in crystal waters of the lagoon is a
              vision of the stay promised.
            </div>
            <button className="blue-button">Discover More</button>
          </div>
          <div className="">
            <img
              src={Hakuraa_Huraa_Maldives}
              alt=""
              className="maldives-image"
            />
          </div>
        </div>
      )}

      {maldivesVillage === 4 && (
        <div className="destination-section">
          <div className="destination-card">
            <div className="card-title">Cinnamon Dhonveli Maldives</div>
            <div className="card-desc">
              Feel an irrepressible wave of excitement as you have the best
              surfing experience, set to the backdrop of serenity, and pristine
              blue waters.
            </div>
            <button className="blue-button">Discover More</button>
          </div>
          <div className="">
            <img src={Dhonveli_Maldives} alt="" className="maldives-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDestinationSection;
