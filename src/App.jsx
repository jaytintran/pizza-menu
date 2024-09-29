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
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic italian food. 6 different flavors to choose from. All from our
        stone oven, all organic, all delicious, and healthy.
      </p>

      {pizzas.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {pizzaData.map((pizza, id) => {
            return (
              <PizzaCard className="menu" key={pizza.name} pizza={pizza} />
            );
          })}
        </div>
      ) : (
        <p>We're still working on our menu, please come back later.</p>
      )}
    </main>
  );
}

function PizzaCard({ pizza }) {
  const { name, price, photoName, ingredients, soldOut } = pizza;

  // if (soldOut) {
  //   return null;
  // }

  return (
    <div className={soldOut ? "pizza sold-out" : "pizza"}>
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
        <span
          style={{ display: "block", fontSize: "1.6rem", fontStyle: "italic" }}
        >
          {ingredients}
        </span>
        <span>Price: ${price}</span>
        <p>{soldOut ? "Sold Out" : pizza.price}</p>
      </div>
    </div>
  );
}

function Order({ greeting, closeHours }) {
  return (
    <div className="order">
      <p>
        {/* It's {new Date().getHours()} o'clock. {greeting} */}
        {greeting}, we're open until {closeHours} o'clock`
      </p>
      <button className="btn">Order Now</button>
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

  // if (!isOpen) {
  //   return (
  //     <p>
  //       {`Sorry, We're closed.<br />We're happy to welcome you between ${openHours} and ${closeHours} o'clock`}
  //     </p>
  //   );
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order greeting={greeting} closeHours={closeHours} />
      ) : (
        <p>
          Come back later between {openHours} and {closeHours}
        </p>
      )}
    </footer>
  );
}

function App() {
  return (
    <div className="layout">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
