import "./styles.css";
import React from "react";
import Child from "./Child.js";
import CatFact from "./CatFact.js";
import RefHook from "./RefHook";
import ContextHook from "./ContextHook/ContextHook.js";
import Child2 from "./Child2.js";

export default function App() {
  console.log("App render");
  const username = null; //'sweet'
  const todos = ["groceries", "books", "react", "sueapp"];

  const [counter, setCounter] = React.useState(2);
  const inc = () => {
    setCounter(counter ** 2);
  };
  const dec = () => {
    setCounter(Math.sqrt(counter));
  };
  const reset = React.useCallback(() => {
    setCounter(2);
  }, []);
  return (
    <div className="App">
      <h1> Rendering </h1>
      {username ? <h2> hello, {username}! </h2> : <h2>Stranger here </h2>}
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>

      <h1> State Sub-Components and Memorization</h1>
      <p>Counter: {counter}</p>
      <button onClick={inc}>**2</button>
      <button onClick={dec}>sqrt</button>
      <Child step={5} setCounter={setCounter} />
      <Child step={4} setCounter={setCounter} />
      <Child2 reset={reset} />

      <CatFact />
      <RefHook />
      <ContextHook />
    </div>
  );
}
