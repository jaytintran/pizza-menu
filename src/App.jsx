import React from "react";
import pizzaData from "./data.js";

// header
function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza Restaurant</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
      >
        {pizzaData.map((pizza, id) => {
          return <PizzaCard className="menu" key={pizza.name} pizza={pizza} />;
        })}
      </div>
    </main>
  );
}

function PizzaCard({ pizza }) {
  const { name, price, photoName, ingredients, soldOut } = pizza;

  return (
    <div className="pizza">
      {/* Make the image responsive and all same size */}
      <figure
        style={{
          display: "block",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={photoName}
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover", // Ensures the image is not stretched and fills the container
          }}
        />
      </figure>

      <div>
        <h3>{name}</h3>
        <h3>{ingredients}</h3>
        <span>Price: ${price}</span>
        <p>Sold Out: {soldOut ? "Yes" : "No"}</p>
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
  } else {
    greeting = "Good Evening";
  }

  return (
    <footer className="footer">
      <p>
        It's {new Date().getHours()} o'clock. {greeting}
        {isOpen ? ", We're open" : ", We're closed"}
      </p>
    </footer>
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
