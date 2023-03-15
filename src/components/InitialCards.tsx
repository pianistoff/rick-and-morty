import type { FC } from "react";

import useFetchInitialCharacters from "../hooks/useFetchInitialCharacters";

import Card from "./Card";

const InitialCards: FC = () => {
  const initialCards = useFetchInitialCharacters()
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .map((card) => (
      <Card
        key={card.id}
        name={card.name}
        species={card.species}
        image={card.image}
        id={card.id}
      />
    ));
  return <div className="cards">{initialCards}</div>;
};

export default InitialCards;
