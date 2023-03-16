import { type FC } from "react";

import FilteredCards from "../components/FilteredCards";
import InitialCards from "../components/InitialCards";
import SearchBar from "../components/SearchBar";
import useSessionStorageState from "../hooks/useSessionStorageState";
import logo from "../images/logo.svg";

const Home: FC = () => {
  const [filterQuery, setFilterQuery] = useSessionStorageState(
    "",
    "filterQuery",
  );

  return (
    <>
      <img
        src={logo}
        alt="The logo that says `Rick and Morty`"
        className="logo"
      />
      <SearchBar setSearchQuery={setFilterQuery} />
      {filterQuery !== "" ? (
        <FilteredCards query={filterQuery} />
      ) : (
        <InitialCards />
      )}
    </>
  );
};

export default Home;
