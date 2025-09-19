import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root'))
  .render
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  ();

const root = createRoot(document.getElementById("root"));
  
// Task2
const myName = "Tima"
const rendName = <h1>{myName}</h1>;
// Task3
const welcome = <p>Ласкаво просимо</p>;
// Task4
// const alt = 
// const photo = <img></img>;