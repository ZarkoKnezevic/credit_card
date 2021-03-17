import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Components
import Form from "../components/Form";
import Card from "../components/Card";

const Edit = ({ cards }) => {
  const history = useHistory();
  const url = history.location.pathname;
  let id = Number(url.slice(8, -5));
  const card = cards[id];

  const [name, setName] = useState(card.name);
  const [cardNumber1, setCardNumber1] = useState(card.cardNumber.slice(0,4));
  const [cardNumber2, setCardNumber2] = useState(card.cardNumber.slice(5,9));
  const [cardNumber3, setCardNumber3] = useState(card.cardNumber.slice(10,14));
  const [cardNumber4, setCardNumber4] = useState(card.cardNumber.slice(15,19));
  const [expiry, setExpiry] = useState(card.expiry);

  // Add Card to Local Storage
  const addCardToLS = (event) => {
    event.preventDefault();
    const currentCards = cards.map((card, index) => {
        console.log(id, index);
        if(index === id) {
            card.name = name;
            card.cardNumber = `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`;
            card.expiry = expiry;
        }
        return card;
    });
    console.log(currentCards);

    localStorage.setItem('cards', JSON.stringify(currentCards));
  };

  return (
    <div>
      <h1>Edit Card</h1>
      <Card
        name={name}
        cardNumber={`${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`}
        expiry={expiry}
      />
      <Form
        name={name}
        setName={setName}
        cardNumber1={cardNumber1}
        setCardNumber1={setCardNumber1}
        cardNumber2={cardNumber2}
        setCardNumber2={setCardNumber2}
        cardNumber3={cardNumber3}
        setCardNumber3={setCardNumber3}
        cardNumber4={cardNumber4}
        setCardNumber4={setCardNumber4}
        expiry={expiry}
        setExpiry={setExpiry}
        addCardToLS={addCardToLS}
      />
    </div>
  );
};

export default Edit;
