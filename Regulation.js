import React from 'react';
import pic from './pic.jpeg';

const Regulation = () => {
  return (
    <div className="regulation p-2.5 bg-ghostwhite">
      <h4 className="font-medium font-work-sans ml-2">
        Regulation
      </h4>
      <div className="regulation-cards flex gap-5 ml-3.5 mt-5">
        <div className="card bg-[#e9eff1] border border-gray-100 p-5 rounded-lg w-[287px] h-[200px] flex flex-col justify-between">
          <div className="img-container flex items-center gap-10">
            <img
              className="h-[60px] w-[60px]"
              src={pic}
              alt="Regulation"
            />
            <p className="font-medium">ID - 12345</p>
          </div>
          <p className="global font-medium">Global Gap</p>
          <button className="view-btn w-full bg-green-500 text-white py-2 rounded">View</button>
        </div>
        <div className="card bg-[#faebd770] border border-gray-100 p-5 rounded-lg w-[287px] h-[200px] flex flex-col justify-between">
          <div className="img-container flex items-center gap-10">
            <img
              className="h-[60px] w-[60px]"
              src={pic}
              alt="Regulation"
            />
            <p className="font-medium">ID - 12345</p>
          </div>
          <p className="global font-medium">Global Gap</p>
          <button className="view-btn w-full bg-green-500 text-white py-2 rounded">View</button>
        </div>
        <div className="card bg-[#e9eff1] border border-gray-100 p-5 rounded-lg w-[287px] h-[200px] flex flex-col justify-between">
          <div className="img-container flex items-center gap-10">
            <img
              className="h-[60px] w-[60px]"
              src={pic}
              alt="Regulation"
            />
            <p className="font-medium">ID - 12345</p>
          </div>
          <p className="global font-medium">Global Gap</p>
          <button className="view-btn w-full bg-green-500 text-white py-2 rounded">View</button>
        </div>
        <div className="card bg-[#faebd770] border border-gray-100 p-5 rounded-lg w-[287px] h-[200px] flex flex-col justify-between">
          <div className="img-container flex items-center gap-10">
            <img
              className="h-[60px] w-[60px]"
              src={pic}
              alt="Regulation"
            />
            <p className="ID font-medium">ID - 12345</p>
          </div>
          <p className="global font-medium">Global Gap</p>
          <button className="view-btn w-full bg-green-500 text-white py-2 rounded">View</button>
        </div>
      </div>
    </div>
  );
};

export default Regulation;
