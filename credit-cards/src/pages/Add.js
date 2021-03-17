import React, { useState } from "react";
// Components
import Form from "../components/Form";
import Card from "../components/Card";

const Add = ({getCards}) => {
  const [name, setName] = useState("User Name");
  const [cardNumber1, setCardNumber1] = useState(1111);
  const [cardNumber2, setCardNumber2] = useState(2222);
  const [cardNumber3, setCardNumber3] = useState(3333);
  const [cardNumber4, setCardNumber4] = useState(4444);
  const [expiry, setExpiry] = useState("02/22");

  // Add Card to Local Storage
  const addCardToLS = (event) => {
    event.preventDefault();
    const cards = getCards();
    const card = {
      name,
      cardNumber: `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`,
      expiry
    };
    cards.push(card);

    localStorage.setItem('cards', JSON.stringify(cards));
  };

  

  return (
    <div>
      <h1>Add Card</h1>
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

export default Add;
