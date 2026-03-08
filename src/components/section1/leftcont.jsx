import React from "react";

const Leftcont = () => {
  return (
    // Width increased slightly to w-24 to fit the labels comfortably
    <div className="h-screen bg-white w-30 border-r border-gray-100 flex flex-col items-center py-4 gap-3">
      
      {/* Brand Label */}
      <div className="px-2 py-4 text-[10px] font-black uppercase text-blue-600">MARTIAN Firm</div>

      {/* HOME */}
      <div className="flex flex-col items-center justify-center w-full py-3 hover:bg-gray-100 cursor-pointer group">
        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
        </svg>
        <span className="text-[10px] font-bold mt-1 text-gray-500 uppercase tracking-wide">Home</span>
      </div>

      {/* PORTFOLIO */}
      <div className="flex flex-col items-center justify-center w-full py-3 hover:bg-gray-100 cursor-pointer group">
        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4Z"></path>
        </svg>
        <span className="text-[10px] font-bold mt-1 text-gray-500 uppercase tracking-wide">Roles and Permisions</span>
      </div>

      {/* ANALYTICS */}
      <div className="flex flex-col items-center justify-center w-full py-3 hover:bg-gray-100 cursor-pointer group">
        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z"></path>
        </svg>
        <span className="text-[10px] font-bold mt-1 text-gray-500 uppercase tracking-wide">Market</span>
      </div>

      {/* SECURITY */}
      <div className="flex flex-col items-center justify-center w-full py-3 hover:bg-gray-100 cursor-pointer group">
        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V10H9.00488V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V12H22.0049V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2Z"></path>
        </svg>
        <span className="text-[10px] font-bold mt-1 text-gray-500 uppercase tracking-wide">Risk</span>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 py-3 hover:bg-gray-100 cursor-pointer group">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14V22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM21 17H22V22H14V17H15V16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V17ZM19 17V16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16V17H19Z"></path></svg>
      <span className="text-[10px] font-bold mt-1 text-gray-500 uppercase tracking-wide">Admin Settings</span></div>

    </div>
  );
};

export default Leftcont;