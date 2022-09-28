import React from "react";
import JokeCard from "../Components/JokeCard";

function CardsSection({ Jokes }) {
  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {Jokes.map((ele) => (
        <JokeCard joke={ele} key={ele.id} />
      ))}
    </div>
  );
}

export default CardsSection;
