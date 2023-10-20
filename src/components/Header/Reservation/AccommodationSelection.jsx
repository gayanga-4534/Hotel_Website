import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./AccommodationSelection.css";

function App() {
  const [AccommodationSelection, setAccommodationSelection] = useState(false);
  const [adult, setAdult] = useState(1);
  const [children, setchilder] = useState(0);
  return (
    <div className="accommodation-container">



      <div className="custom-profile-icon">
        <i className="fas fa-user"></i>
      </div>
      <button
        className="accommodation-button"
        onClick={() => setAccommodationSelection(!AccommodationSelection)}
      >
        1 Room, 1 Adult, 0 Children
      </button>
      {AccommodationSelection && (
        <>
           
         <div className="Accommodation-modal">
         <button
              className="cross-icon-button"
              onClick={() => setAccommodationSelection(!AccommodationSelection)}
            >
              <FontAwesomeIcon icon={faTimes} className="cross-icon" />
            </button>
         <div> Max. 8 guests per room</div>
       
          {/* <div className="count-button">
            <h5>Rooms</h5>
            
            <button
              className="count-button-decrease"
              onClick={() => setAdult(adult-1)}
            >
              -
            </button>
            <div>{adult}</div>
            <button
              className=" count-button-increase"
              onClick={() => setAdult(adult+1)}
            >
              +
            </button>
          </div> */}
        </div></>
       
      )}
    </div>
  );
}

export default App;
