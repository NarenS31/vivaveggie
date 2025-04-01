// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 bg-gradient-to-r from-lime-400 to-green-500">
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} VivaVeggie | Leading the Plant-Based
          Revolution 🌱
        </p>
      </div>
    </footer>
    // <footer className="p-16 text-center bg-gradient-to-r from-lime-400 to-green-500 text-white">

    // </footer>
  );
};

export default Footer;
