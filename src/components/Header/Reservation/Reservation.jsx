import React from 'react'
import './Reservation.css'
import DateRangePicker from './DatePicker'
import AccommodationSelection from './AccommodationSelection'
import './Reservation.css'
import SpecialCodeSelection from './SpecialCodeSection'
const Reservation = () => {
  return (
    <div>
   
          <div className="slider-Date">
            <DateRangePicker/>
            <AccommodationSelection/>
            <SpecialCodeSelection/>
            <button
       className="reservation-button"
     
      >
       search
      </button>
          </div>
    </div>
  )
}

export default Reservation
