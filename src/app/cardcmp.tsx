// components/Card.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card
      style={cardStyle}
      className="bg-gradient-to-r from-white to-lime-100 text-green-900 p-2 rounded-3xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
    >
      <CardHeader>
        <img src={imageUrl} alt={title} style={imageStyle} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const cardStyle: React.CSSProperties = {
  width: "300px",
  margin: "5px",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  height: "150px",
  objectFit: "cover",
};

export default CardComponent;
