import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    available: 15,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    available: 10,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    available: 10,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    available: 11,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    available: 15,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    available: 10,
  },
];

function App() {
  const currentTime = new Date().getHours();
  const closeHour = 21;
  return (
    <main className="mainContainer">
      <Header />
      <h2 className="text-style text-decoration text-middle">Our Pizza Menu</h2>
      <br />
      <p className="pizza-header">
        Experience the Heart of Italian Cuisine: Dive into Our Selection of 6
        Irresistzzas Made with Authentic Ingredients and Timeless Recipes
      </p>
      <Menu />
      {currentTime < closeHour && (
        <button className="order-now">Order now</button>
      )}
      {currentTime > closeHour && (
        <button className="order-later" disabled>
          Order later
        </button>
      )}
      <Footer />
    </main>
  );
}

function Pizza(props) {
  if (props.pizzaObject.available < 1) return null;

  return (
    <div className="pizza">
      <img
        className="image-small"
        src={props.pizzaObject.photoName}
        alt={props.pizzaObject.name}
      ></img>
      <div className="pizza-details">
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <br />
        {props.pizzaObject.available < 1 ? (
          <p className="unavailable">Sold Out</p>
        ) : (
          <p>$ {props.pizzaObject.price}.00</p>
        )}
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="pageHeader">Fast React pizza</h1>;
}

function Menu() {
  return (
    <div className="menu">
      <br />
      {/* conditional rendering */}
      {pizzaData.length > 0 &&
        pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} key={pizza.name} />
        ))}
    </div>
  );
}

function Footer() {
  const [currentTime, setTime] = useState(new Date());
  const closeHour = 21;
  useEffect(() => {
    const time = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(time);
  }, []);

  const isOpen = currentTime.getHours() < closeHour;
  return (
    <footer className="footer-style">
      <p>{currentTime.toLocaleTimeString()}</p>

      {isOpen ? <p>Were Open</p> : <p>Were Close</p>}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// this is how to setup development for react.
