import React from "react";

const Shadow = () => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src="/src/assets/1.jpg" alt="Shoes" />
        </figure>
        <div className="card-body flex-col ">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn hover:bg-[#A8DADC] hover:text-[#1D3557] bg-[#1D3557] text-[#F1FAEE]">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shadow;
