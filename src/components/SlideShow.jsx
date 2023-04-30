import React from "react";
import SlideCard from "../Pages/SlideCard";

const SlideShow = () => {
  return (
    <>
      <div className="carousel rounded-md m-2 w-auto mt-0">
        <SlideCard
          title="Only Yesterday"
          img="/src/assets/1.jpg"
          slideId="slide1"
          ref1="#slide4"
          ref2="#slide2"
        />
        <SlideCard
          title="The Tale of the Princess Kaguya"
          img="/src/assets/2.jpg"
          slideId="slide2"
          ref1="#slide1"
          ref2="#slide3"
        />
        <SlideCard
          title="Kiki's Delivery Service"
          img="/src/assets/3.jpg"
          slideId="slide3"
          ref1="#slide2"
          ref2="#slide4"
        />
        <SlideCard
          title="My Neighbor Totoro"
          img="/src/assets/4.jpg"
          slideId="slide4"
          ref1="#slide3"
          ref2="#slide1"
        />
      </div>
    </>
  );
};

export default SlideShow;
