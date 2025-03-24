import React from "react";

interface MenuItem {
  name: string;
  description: string;
}

const Menu: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      name: "Vegan Burger",
      description: "A delicious plant-based patty with all the fixings.",
    },
    {
      name: "Tofu Stir Fry",
      description:
        "A savory stir fry with tofu, vegetables, and a soy-based sauce.",
    },
    {
      name: "Avocado Toast",
      description:
        "Fresh avocado on whole-grain toast, seasoned to perfection.",
    },
    {
      name: "Vegan Pancakes",
      description:
        "Fluffy pancakes made with non-dairy milk and served with maple syrup.",
    },
  ];

  return (
    <section style={menuStyle}>
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const menuStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#e8f5e9",
  marginBottom: "20px",
};

export default Menu;
