import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate(); // ✅ get navigate function
  // Logic Functions
  const btnclick = () => console.log('button is clicked');
  
  const onExit = () => {
    console.log('Exit triggered');
    alert("Exiting application...");
    navigate('/blank')
  };
 

  return (
    <div className="flex items-center justify-between py-6 px-16 bg-white ">
      {/* Left Section */}
      <h3 className='text-black font-bold px-4'>Good Morning</h3>

      {/* Center Section */}
      <button 
        onClick={btnclick} 
        className='bg-gray-100 px-6 py-2 text-black uppercase rounded-full tracking-wider text-sm hover:bg-gray-200'
      >
        See details
      </button>

      {/* Right Section (Security & Exit) */}
      <nav className="flex items-center bg-slate-800 text-white p-4 rounded-lg gap-6">
        <span className="font-bold text-sm">Security Dashboard</span>
        
        <button 
          onClick={onExit}
          className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors"
        >
          File &gt; Exit
        </button>
      </nav>
      
    </div>
    
  );
};

export default Navbar;