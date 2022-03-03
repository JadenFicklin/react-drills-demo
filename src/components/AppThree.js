import React, { useState } from "react";

function AppThree() {
  const resetFoods = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"];
  const [foods, setFoods] = useState([
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese",
  ]);

  const filterFoods = (param) => {
    const filteredArray = foods.filter((food) =>
      food.toLowerCase().includes(param)
    );
    setFoods(param === "" ? resetFoods : filteredArray);
  };

  return (
    <>
      <input
        placeholder="text"
        type="text"
        onChange={(e) => filterFoods(e.target.value)}
      />
      {foods.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </>
  );
}

export default AppThree;
