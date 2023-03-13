import type { FC } from "react";

import useFetchFilteredCharacters from "../hooks/useFetchFilteredCharacters";

import Card from "./Card";

interface FilteredCardsProps {
  query: string;
}

const FilteredCards: FC<FilteredCardsProps> = ({ query }) => {
  const filterResults = useFetchFilteredCharacters(query);

  return (
    <div className="cards">
      {filterResults === "no matches" ? (
        <p className="no-matches">No matches</p>
      ) : (
        filterResults
          .slice(0, 8)
          .map((card) => (
            <Card
              key={card.id}
              name={card.name}
              species={card.species}
              image={card.image}
            />
          ))
      )}
    </div>
  );
};

export default FilteredCards;
