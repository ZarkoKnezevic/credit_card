import React from "react";
import { Link } from "react-router-dom";
// Components
import Card from "../components/Card";
import AddCard from "../components/AddCard";

const Cards = ({ cards }) => {
  return (
    <div>
      <h1>My Cards</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          cardNumber={card.cardNumber}
          expiry={card.expiry}
          id={index}
          link
        />
      ))}
      <Link to="/cards/add">
        <AddCard />
      </Link>
    </div>
  );
};

export default Cards;
