import React, { useState } from "react";

function AppFour() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    alert(`username:${username}, password:${password}`);
  };

  return (
    <>
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => handleClick()}>Submit</button>
    </>
  );
}

export default AppFour;
