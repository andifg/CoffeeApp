import React from "react";
import { useState, useEffect } from "react";
import Coffee from "./Coffee/Coffee";
import AddModal from "./Modal";

const Board = () => {
  const [coffees, setCoffess] = useState(["Aribica"]);

  const addCoffee = (newCoffee) => {
    setCoffess((prevState) => [...prevState, newCoffee]);
    console.log(coffees);
  };

  const deleteCoffee = (removeCoffee) => {

    console.log(removeCoffee)

    setCoffess((prevState)=> {
      const newState = prevState.filter(oldcoffee => oldcoffee != removeCoffee)
      console.log(newState)
      return newState
    })

  }

  return (
    <div className="board-wrapper">
      <div className="board-add-icon">
        <AddModal addCoffee={addCoffee} />
      </div>
      {coffees.map((coffee) => (
        <Coffee key={coffee} coffee={coffee} deleteCoffee={deleteCoffee} />
      ))}
    </div>
  );
};

export default Board;
