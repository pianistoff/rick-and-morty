import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string;
  species: string;
  image: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ id, name, species, image }) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/character/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt="Charater" className="card-image" />
      <div className="card-text">
        <h2 className="card-name">{name}</h2>
        <p className="card-species">{species}</p>
      </div>
    </div>
  );
};

export default Card;
