import React from "react";
import { Ingredient } from "../Ingredient";
import s from "./styles.module.css";

const PizzaConstructor = () => {
  const ingredients = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div className={s.wrapper}>
      <h1>Pizza Constructor</h1>
      <p>Make your custom pizza</p>
      {/*View pizza*/}
      <p>Choose the ingredients</p>
      <ul className={s.list}>
        {ingredients.map((ing, i) => (
          <li key={i} className={s.item}>
            {/* {console.log(ing)} */}
            <Ingredient ingredient={ing} />
          </li>
        ))}
      </ul>
      <button>Build pizza</button>
    </div>
  );
};

export { PizzaConstructor };
