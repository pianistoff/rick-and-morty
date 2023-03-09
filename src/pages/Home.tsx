import { type FC } from "react";

import SearchBar from "../components/SearchBar";
import logo from "../images/logo.svg";

const Home: FC = () => {
  return (
    <>
      <img
        src={logo}
        alt="The logo that says `Rick and Morty`"
        className="logo"
      />
      <SearchBar />
    </>
  );
};

export default Home;
