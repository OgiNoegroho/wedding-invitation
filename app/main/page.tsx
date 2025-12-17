"use client";

import Hero from "./sections/Hero";
import Ayat from "./sections/Ayat";
import Quote from "./sections/Quote";
import Bridengroom from "./sections/Bridengroom";
import WeddingEvent from "./sections/WeddingEvent";
import LocationMap from "./sections/LocationMap";
import LoveStory from "./sections/LoveStory";
import Attendance from "./sections/Attendance";
import WeddingGifts from "./sections/WeddingGifts";
import Footer from "./sections/FooterSection";
import BackgroundMusic from "./sections/BackgroundMusic";
export default function WeddingInvitation() {
  return (
    <div className="bg-[#fdfcf9] text-[#3a3a3a] font-montserrat">
      <BackgroundMusic /> 
      <Hero  />
      <Ayat />
      <Quote />
      <Bridengroom />
      <WeddingEvent />
      <LocationMap />
      <LoveStory />
      <Attendance />
      <WeddingGifts />
      <Footer />
    </div>
  );
}
