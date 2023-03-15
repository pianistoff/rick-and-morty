import { type FC } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import type CharacterType from "../CharacterType";
import { Context } from "../ContextProvider";
import arrowBack from "../images/arrow-back.png";

const Character: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { characters } = useContext(Context) as { characters: CharacterType[] };
  const character = characters.find(
    (character) => character.id === Number(id),
  ) as CharacterType;

  return (
    <>
      <button className="button">
        <img
          src={arrowBack}
          alt="Arrow pointins towards the back"
          className="button-arrow"
        />
        <p className="button-text">GO BACK</p>
      </button>
      <img src={character.image} alt="character" className="image" />
      <h1 className="name">{character.name}</h1>
      <div className="info-box">
        <h2 className="info-main-header">Informations</h2>
        <div className="info-subbox">
          <h3 className="info-subheader">Gender</h3>
          <p className="info-paragraph">
            {character.gender !== "" ? character.gender : "Unknown"}
          </p>
        </div>
        <div className="info-subbox">
          <h3 className="info-subheader">Status</h3>
          <p className="info-paragraph">
            {character.status !== "" ? character.status : "Unknown"}
          </p>
        </div>
        <div className="info-subbox">
          <h3 className="info-subheader">Specie</h3>
          <p className="info-paragraph">
            {character.species !== "" ? character.species : "Unknown"}
          </p>
        </div>
        <div className="info-subbox">
          <h3 className="info-subheader">Origin</h3>
          <p className="info-paragraph">
            {character.origin.name !== "" ? character.origin.name : "Unknown"}
          </p>
        </div>
        <div className="info-subbox">
          <h3 className="info-subheader">Type</h3>
          <p className="info-paragraph">
            {character.type !== "" ? character.type : "Unknown"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Character;
