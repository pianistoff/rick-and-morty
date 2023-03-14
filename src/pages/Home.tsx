import { type FC, useState, useContext, useEffect } from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { Context } from "../ContextProvider";
import logo from "../images/logo.svg";

const Home: FC = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const { characters, fetchInitialCharacters, fetchFilteredCharacters } =
    useContext(Context);

  useEffect(() => {
    if (filterQuery === "") {
      fetchInitialCharacters().catch(console.error);
    } else {
      fetchFilteredCharacters(filterQuery);
    }
  }, [filterQuery, fetchFilteredCharacters, fetchInitialCharacters]);

  const cards =
    characters !== "no matches" ? (
      characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
            id={character.id}
          />
        );
      })
    ) : (
      <p className="no-matches">No matches</p>
    );

  return (
    <>
      <img
        src={logo}
        alt="The logo that says `Rick and Morty`"
        className="logo"
      />
      <SearchBar setSearchQuery={setFilterQuery} />
      <div className="cards">{cards}</div>
    </>
  );
};

export default Home;
