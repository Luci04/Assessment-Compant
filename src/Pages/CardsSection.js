import React from "react";
import Card from "react-bootstrap/Card";

function JokeCard({ joke }) {
  return (
    <Card style={{ width: "18rem", margin: "10px", display: "flex" }}>
      <Card.Body>
        <Card.Title>Joke Category - {joke.category}</Card.Title>
        <Card.Title>ID - {joke.id}</Card.Title>
        <Card.Text>{joke.joke}</Card.Text>
      </Card.Body>
    </Card>
  );
}

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
