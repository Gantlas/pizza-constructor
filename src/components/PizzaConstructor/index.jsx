import React, { useState } from "react";
import s from "./styles.module.css";

const PizzaConstructor = () => {
  const [ingredients, setIngredients] = useState([]);
  return (
    <div>
      <h1>Pizza Constructor</h1>
      <p>Make your custom pizza</p>
      {/*View pizza*/}
      <p>Choose the ingredients</p>
      <ul>{/*Ingredients*/}</ul>
      <button>Build pizza</button>
    </div>
  );
};

export { PizzaConstructor };
