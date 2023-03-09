import { type FC } from "react";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import useFetchCharacters from "../hooks/useFetchCharacters";
import logo from "../images/logo.svg";

const Home: FC = () => {
  const characters = useFetchCharacters();

  const cards = characters.map((card) => (
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
      <SearchBar />
      <div className="cards">{cards}</div>
    </>
  );
};

export default Home;
