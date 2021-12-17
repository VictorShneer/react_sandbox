import React from "react";

export default function Child({ step, setCounter }) {
  const inc = () => {
    setCounter((x) => x * step);
  };
  const dec = () => {
    setCounter((x) => Math.sqrt(x));
  };

  return (
    <div>
      <button onClick={inc}>*{step}</button>
      <button onClick={dec}>sqrt</button>
    </div>
  );
}
