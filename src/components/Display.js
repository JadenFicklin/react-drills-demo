import React, { useState } from "react";

function Display() {
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <>
      <input placeholder="text" onChange={(e) => setInput(e.target.value)} />
      <h1>{input}</h1>
    </>
  );
}

export default Display;
