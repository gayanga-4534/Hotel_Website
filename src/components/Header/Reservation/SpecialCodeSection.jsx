import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SpecialCodeSection.css";

const SpecialCodeSelection = () => {
  const [specialCodeSelection, setSpecialCodeSelection] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="special-container">
      <div className="tag-profile-icon">
        <FontAwesomeIcon icon={faTag} />
      </div>
      <button
        className="specialCode-button"
        onClick={() => setSpecialCodeSelection(!specialCodeSelection)}
      >
        Special Code
      </button>
      {specialCodeSelection && (
        <>
          <div className="specialCode-modal">
            <button
              className="cross-icon-button"
              onClick={() => setSpecialCodeSelection(!specialCodeSelection)}
            >
              <FontAwesomeIcon icon={faTimes} className="cross-icon" />
            </button>

            <h6> Corporate / Special Rate (Optional)</h6>

            <div className="dropdown-container">
              <select
                id="custom-dropdown"
                className="dropdown-select"
                value={selectedOption}
                onChange={handleDropdownChange}
              >
                <option value="">Select Code Type</option>
                <option value="option1">Corporate</option>
                <option value="option2">Corporate</option>
                <option value="option3">Corporate</option>
              </select>
            </div>

            <input
              type="text"
              id="custom-input"
              className="input-field"
              placeholder="Enter Code"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SpecialCodeSelection;
