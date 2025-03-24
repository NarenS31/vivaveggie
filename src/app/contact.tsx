import React from "react";

const Contact: React.FC = () => {
  return (
    <section style={contactStyle}>
      <h2>Contact Us</h2>
      <p>Email: info@vegandelights.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Vegan St, Plant City</p>
    </section>
  );
};

const contactStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#f7f7f7",
  textAlign: "center",
};

export default Contact;
