import React from "react";

const About: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <h2>About Us</h2>
      <p>
        Welcome to Vegan Delights, where we serve the finest plant-based dishes
        made from fresh, organic ingredients. Our mission is to make vegan food
        more accessible and enjoyable for everyone!
      </p>
    </section>
  );
};

const sectionStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#f7f7f7",
  marginBottom: "20px",
  textAlign: "center",
};

export default About;
