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
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
          )
          .slice(0, 8)
          .map((card) => (
            <Card
              key={card.id}
              name={card.name}
              species={card.species}
              image={card.image}
              id={card.id}
            />
          ))
      )}
    </div>
  );
};

export default FilteredCards;
