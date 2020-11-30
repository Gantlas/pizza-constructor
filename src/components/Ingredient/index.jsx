import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionAddIngredient, actionRemoveIngredient } from "../../actions";
import s from "./styles.module.css";

const Ingredient = ({ ingredient }) => {
  const [checked, setCheck] = useState(false);
  const countIngredients = useSelector((state) => state.countIngredients);
  const currentIngredients = useSelector((state) => state.currentIngredients);

  const dispatch = useDispatch();

  const switchCheck = () => {
    setCheck(!checked);
  };

  const addIngredient = (ingredient) => {
    // console.log(currentIngredients);
    if (countIngredients < 5) {
      dispatch(actionAddIngredient(ingredient));
      switchCheck();
    } else {
      alert("5 ingredients max");
    }
  };

  const removeIngredient = (ingredient) => {
    // console.log(currentIngredients);
    dispatch(actionRemoveIngredient(ingredient));
    switchCheck();
  };

  return (
    <div>
      {checked ? (
        <button
          onClick={() => removeIngredient(ingredient)}
          className={`${s.btn} ${s.green}`}
        >
          &#x2714;
        </button>
      ) : (
        <button
          onClick={() => addIngredient(ingredient)}
          className={`${s.btn} ${countIngredients < 5 ? s.red : s.gray}`}
        >
          &#x2716;
        </button>
      )}
      {/* {console.log(currentIngredients)} */}
      <span>{ingredient}</span>
    </div>
  );
};

export { Ingredient };
