// components/Header.js
"use client";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          MRHS TSA Webmaster-Naren Saravanan and Akhil Rao
        </h3>{" "}
        <div className="hidden md:flex space-x-4">
          <div className="hidden md:flex space-x-4">
            <Button
              variant="default"
              className="w-full text-white bg-blue-500 hover:bg-blue-600 text-sm"
            >
              VivaVeggie
            </Button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Button
              variant="default"
              className="w-full text-white bg-blue-500 hover:bg-blue-600 text-sm"
            >
              MRHS TSA page
            </Button>
          </div>
        </div>
      </div>
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
