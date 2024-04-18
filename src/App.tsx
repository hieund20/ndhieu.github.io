import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Resume from "./resume";
import { RESUME_DATA } from "./data/data";

function App() {
  return (
    <div className="App">
      <Resume data={RESUME_DATA} />
    </div>
  );
}

export default App;
