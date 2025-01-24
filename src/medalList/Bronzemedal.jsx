import React, { useState } from "react";

const Counter = () => {
  const BronezeInput = {
    textAlign: "rept",
    padding: "5px",
    border: "1px solid",
  };

  const BronzeText = { textAlign: "center", fontWeight: "bold" };

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p type="text" style={BronzeText}>
        동메달
      </p>
      <input style={BronezeInput} type="text" value={count} readOnly />
      <button style={{ float: "right" }} onClick={decrement}>
        -
      </button>
      <button style={{ float: "right" }} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
