import React from "react";
import "./OffersSection.css";

const OffersSection = () => {
  return (
    <>
    <div className="offers-title">Offers</div>
    <div className="offers-container">
      <div className="offers-card">
        <div className="">
          <img src={ "https://img.freepik.com/free-photo/front-view-smiley-couple-posing-bed-with-blanket-heads_23-2148561009.jpg?size=626&ext=jpg&ga=GA1.1.160184015.1697557248&semt=ais"} alt="" className="offers-image" />
        </div>
        <h4 className="offer-text1">Rooms & Suites</h4>
        <h3 className="offer-text2">Shangri–La Circle Exclusive Member Rate with Breakfast</h3>
        <h4 className="offer-text3">Exclusive Member Rate with Breakfast for Shangri-La Circle member.</h4>
        <h4 className="offer-text4">From LKR 58,462.20 Average Per Night</h4>
        <button className="border-button">View Details</button>
      </div>

      <div className="offers-card">
        <div className="">
          <img
            src={
              "https://img.freepik.com/free-photo/happy-parents-two-kids-are-swimming-pool_1268-23274.jpg?w=900&t=st=1697709229~exp=1697709829~hmac=75f8836a671c2dc4266d95e7292fc275c6033f6c6a0bed89a427bb70160e6e6a"
            }
            alt=""
            className="offers-image"
          />
        </div>
        <h4 className="offer-text1">Rooms & Suites</h4>
        <h3 className="offer-text2">Shangri–La Circle Exclusive Member Rate</h3>
        <h4 className="offer-text3">Exclusive Member Rate for Shangri-La Circle member.</h4>
        <h4 className="offer-text4">From LKR 51,966.40 Average Per Night</h4>
        <button className="border-button">View Details</button>
      </div>

      <div className="offers-card">
        <div className="">
          <img
            src={
              "https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg?size=626&ext=jpg&ga=GA1.1.160184015.1697557248&semt=sph"
            }
            alt=""
            className="offers-image"
          />
        </div>
        <h4 className="offer-text1">Weddings</h4>
        <h3 className="offer-text2">Shangri–La Circle Exclusive Member Rate</h3>
        <h4 className="offer-text3">Begin your journey to matrimony with an intimate event for your loved ones.</h4>
        <h4 className="offer-text4">From LKR 58,462.20 Average Per Night</h4>
        <button className="border-button">View Details</button>
      </div>
    </div>
    </>
  );
};

export default OffersSection;
