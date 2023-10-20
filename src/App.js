import "./App.css";
import ImageSlider from "./components/Header/ImageSlider/ImageSlider";
import Navbar from "./components/Header/Navbar/Navbar";
import Reservation from "./components/Header/Reservation/Reservation";
import HotelDestinationSection from "./components/HotelDestinationSection/HotelDestinationSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import OffersSection from "./components/OffersSection/OffersSection";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  return (
    <div className="">
      <Navbar />
      <ImageSlider />
      <Reservation />
      <HotelDestinationSection />
      <ExperienceSection/>
      <OffersSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
