import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submited value: ${inputValue}`);
  };

  // {     React Element
  const a = React.createElement("div", { id: "root2" }, "Hello");
  // const a = <div id="root2">Hello</div>
  // }

  // { With child React Element
  const b = React.createElement(
    "div",
    { id: "root3" },
    React.createElement("h2", {}, "My Titile")
  );
  // const b = <div id="root3"><h2>My Titile</h2></div>
  // }

  return (
    <div>
      <h1>{a}</h1>
      {b}

      <h2>Controlled Component Example</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Your Name</label>
        <input
          type="text"
          id="name"
          value={inputValue} // Controlled by State
          onChange={handleChange} // Updates state on Change

        />
        <button type="submit">Submit</button>
        <p>Current Value : {inputValue}</p>
      </form>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
