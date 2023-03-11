import { type FC, useState } from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import useFetchInitialCharacters from "../hooks/useFetchInitialCharacters";
import useFilterCharacters from "../hooks/useFilterCharacters";
import logo from "../images/logo.svg";

const Home: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const characters = useFetchInitialCharacters();
  const filteredCharacters = useFilterCharacters(searchQuery);

  const filteredCards =
    filteredCharacters !== "no matches" ? (
      filteredCharacters.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          species={card.species}
          image={card.image}
        />
      ))
    ) : (
      <p className="no-matches">No matches</p>
    );

  const cards =
    searchQuery !== ""
      ? filteredCards
      : characters.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            species={card.species}
            image={card.image}
          />
        ));

  return (
    <>
      <img
        src={logo}
        alt="The logo that says `Rick and Morty`"
        className="logo"
      />
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="cards">{cards}</div>
    </>
  );
};

export default Home;
