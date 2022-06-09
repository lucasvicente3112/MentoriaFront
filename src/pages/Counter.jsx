import React, { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  async function soma() {
    setContador((oldValue) => oldValue + 1);
  }
  async function subtrair() {
    setContador((oldValue) => oldValue - 1);
  }
  return (
    <div>
      <button onClick={soma}>+</button>
      <label>{contador}</label>
      <button onClick={subtrair}>-</button>
    </div>
  );
};
