import React from "react";
import { useState, useEffect } from "react";
import { Button } from "antd";
import Coffee from "./Coffee";

const Board = () => {
  const [coffees, setCoffess] = useState([1,2,3])
  console.log(coffees)
  return (
    <div className="board-wrapper">
      <div className="board-add-icon">
        <Button type="primary">Add</Button>
      </div>
        {
            coffees.map((coffee)=>(
            <Coffee key={coffee} />
        ))}
    </div>
  );
};

export default Board;
