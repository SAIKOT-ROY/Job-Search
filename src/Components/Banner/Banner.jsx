import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[440px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)), url('https://i.ibb.co/9ZmDyHw/radek-grzybowski-e-BRTYyjwp-RY-unsplash.jpg')`,
        }}
      >
        <div className="text-white">
          <p className="text-4xl">Computer Engineering</p>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
