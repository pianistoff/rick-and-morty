import React from "react";

interface CardProps {
  name: string;
  species: string;
  image: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ id, name, species, image }) => {
  return (
    <div className="card">
      <img src={image} alt="Charater" className="card-image" />
      <div className="card-text">
        <h2 className="card-name">{name}</h2>
        <p className="card-species">{species}</p>
      </div>
    </div>
  );
};

export default Card;
