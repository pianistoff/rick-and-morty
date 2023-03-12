import type { FC } from "react";

import useFetchInitialCharacters from "../hooks/useFetchInitialCharacters";

import Card from "./Card";

const InitialCards: FC = () => {
  const initialCards = useFetchInitialCharacters().map((card) => (
    <Card
      key={card.id}
      name={card.name}
      species={card.species}
      image={card.image}
    />
  ));
  return <div className="cards">{initialCards}</div>;
};

export default InitialCards;
