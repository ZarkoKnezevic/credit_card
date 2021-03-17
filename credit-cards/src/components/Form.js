import React from "react";

import "../styles/form.css";

const Form = ({name, setName, cardNumber1, setCardNumber1, cardNumber2, setCardNumber2, cardNumber3, setCardNumber3, cardNumber4, setCardNumber4, expiry, setExpiry, addCardToLS}) => {
  return (
    <form className="form">
      <p>Name</p>
      <input className="name" name="name" placeholder={name} onChange={event => setName(event.target.value)}/>
      <p>Card Number</p>
      <div className="form__section">
        <input name="number" maxLength="4" placeholder={cardNumber1} onChange={event => setCardNumber1(event.target.value)}/>
        <input name="number" maxLength="4" placeholder={cardNumber2} onChange={event => setCardNumber2(event.target.value)}/>
        <input name="number" maxLength="4" placeholder={cardNumber3} onChange={event => setCardNumber3(event.target.value)}/>
        <input name="number" maxLength="4" placeholder={cardNumber4} onChange={event => setCardNumber4(event.target.value)}/>
      </div>
      <p>Expires on</p>
      <input name="expiry" placeholder={expiry} onChange={event => setExpiry(event.target.value)}/>
      <input className="form__submit" type="submit" onClick={addCardToLS}/>
    </form>
  );
};

export default Form;
