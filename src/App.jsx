import React from "react";
import pizzaData from "./data.js";

// header
function Header() {
  return (
    <div>
      <h1>Fast Pizza Restaurant</h1>
      <p>What's up?</p>
      <h2>Pizza Menu</h2>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <div className="menu">
        {pizzaData.map((pizza, id) => {
          return <PizzaCard key={pizza.name} pizza={pizza} />;
        })}
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  let greeting;
  const openHours = 10;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  isOpen ? alert("We're open") : alert("We're closed");

  return (
    <footer>
      {new Date().getHours()} {greeting}{" "}
      {isOpen ? "We're open" : "We're closed"}
    </footer>
  );
}

function PizzaCard({ pizza }) {
  return (
    <div>
      <img src={pizza.photoName} />
      <h2>{pizza.name}</h2>
      <h3>{pizza.ingredients}</h3>
      <p>Price: ${pizza.price}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
