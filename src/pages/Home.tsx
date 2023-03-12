import { type FC, useState } from "react";

import FilteredCards from "../components/FilteredCards";
import InitialCards from "../components/InitialCards";
import SearchBar from "../components/SearchBar";
import logo from "../images/logo.svg";

const Home: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <img
        src={logo}
        alt="The logo that says `Rick and Morty`"
        className="logo"
      />
      <SearchBar setSearchQuery={setSearchQuery} />
      {searchQuery !== "" ? (
        <FilteredCards query={searchQuery} />
      ) : (
        <InitialCards />
      )}
    </>
  );
};

export default Home;
