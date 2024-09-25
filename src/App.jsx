import React from "react";
import pizzaData from "./data.js";

// header
function Header() {
  return (
    <div>
      <h1>Pizza</h1>
      <p>What's up?</p>
      <h2>Pizza Menu</h2>
    </div>
  );
}

function Pizza({ pizza }) {
  return (
    <div>
      {/* Pizza Card */}
      <div>
        <img src={pizza.photoName} alt={pizza.name} />
        <h2>{pizza.name}</h2>
        <p>{pizza.ingredients}</p>
        <p>{pizza.price}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Pizza pizza={pizzaData[0]} />;
      <Pizza pizza={pizzaData[1]} />;
      <Pizza pizza={pizzaData[2]} />;
    </>
  );
}

export default App;
