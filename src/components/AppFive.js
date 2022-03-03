import React, { useState } from "react";

function AppFive(props) {
  const [click, setClick] = useState(false);
  console.log(click);

  return (
    <>
      <button onClick={() => setClick(!click)}>click</button>
      <h1
        style={{
          color: click ? "lightBlue" : "orange",
          marginLeft: click ? "100px" : "0px",
        }}
      >
        Hello world!
      </h1>
    </>
  );
}

export default AppFive;
