import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root"))
  .render
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  ();

const root = createRoot(document.getElementById("root"));

// Task2
const myName = "Tima";
const rendName = <h1>{myName}</h1>;
// Task3
const welcome = <p>Ласкаво просимо</p>;
// Task4
const image = React.createElement("img", {
  src: "https://www.vetsulin.com/cats/wp-content/uploads/sites/180/2022/03/lead-cats-homepage-d-scaled.jpg",
  alt: "kot bob",
  width: 500,
});
// Task 5
const favoriteWeb = {
  name: "Youtube",
  url: "https://www.youtube.com/",
};

const renderWeb = <a href={favoriteWeb.url}>{favoriteWeb.name}</a>;
// Task 6
const a = 10
const b = 5

const sum = <p>{a + b}</p>

// Task 7
const arr = ["Червоний", "Синій", "Зелений"];

const arrFor = (
  <ul>
    {arr.map((color) => 
      <li>
        {color}
    </li>
    )}
  </ul>
)
// render
const rootAll = (
  <div>
    {rendName}
    {welcome}
    {image}
    {renderWeb}
    {sum}
    {arrFor}
  </div>
);
root.render(rootAll);