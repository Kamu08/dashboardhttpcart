import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold">Dashboard</span>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Home</a>
          <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">About</a>
          <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Services</a>
          <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
