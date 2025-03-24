// components/CardList.tsx
import React from "react";
import CardComponent from "./cardcmp";

const CardList: React.FC = () => {
  const cards = [
    {
      title: "Vegan Burger",
      description: "A delicious plant-based burger with all the toppings.",
      imageUrl: "https://example.com/vegan-burger.jpg", // Replace with actual image URLs
      buttonText: "Order Now",
    },
    {
      title: "Tofu Stir Fry",
      description:
        "A savory stir fry with tofu, vegetables, and a soy-based sauce.",
      imageUrl: "https://example.com/tofu-stir-fry.jpg",
      buttonText: "View Recipe",
    },
    {
      title: "Avocado Toast",
      description:
        "Fresh avocado on whole-grain toast, seasoned to perfection.",
      imageUrl: "https://example.com/avocado-toast.jpg",
      buttonText: "Try It Today",
    },
  ];

  return (
    <div style={cardListStyle}>
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

const cardListStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px",
};

export default CardList;
