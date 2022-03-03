import React from "react";

function AppTwo() {
  const arr = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"];

  return (
    <>
      {arr.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </>
  );
}

export default AppTwo;
