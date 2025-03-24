// components/Header.js
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LoginDialog from "./login";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Home of the Mavericks!</h3>{" "}
        <div className="hidden md:flex space-x-4">
          <div className="hidden md:flex space-x-4">
            <LoginDialog /> {/* Display LoginDialog when Login is clicked */}
          </div>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-4 space-y-4">
          <div className="space-x-4">
            <Button
              variant="default"
              className="w-full text-white bg-green-500 hover:bg-green-600 text-sm"
            >
              Sign Up
            </Button>
            <Button
              variant="default"
              className="w-full text-white bg-blue-500 hover:bg-blue-600 text-sm"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header style={headerStyle}>
//       <h1>Vegan Delights</h1>
//       <p>Delicious Plant-based Meals</p>
//     </header>
//   );
// };

// const headerStyle = {
//   backgroundColor: '#56a64b',
//   color: '#fff',
//   textAlign: 'center',
//   padding: '20px 0',
// };

// export default Header;
