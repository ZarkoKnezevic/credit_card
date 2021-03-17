import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
// Components
import Cards from "./pages/Cards";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  const getCards = () => {
    let cards;
    if (localStorage.getItem("cards") === null) {
      cards = [];
    } else {
      cards = JSON.parse(localStorage.getItem("cards"));
    }

    return cards;
  };

  const [cards, setCards] = useState(getCards);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/cards" />
        </Route>
        <Route path="/cards" exact>
          <Cards cards={cards} />
        </Route>
        <Route path="/cards/add" exact>
          <Add cards={cards} getCards={getCards} />
        </Route>
        <Route path="/cards/:id/edit">
          <Edit cards={cards} getCards={getCards} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
