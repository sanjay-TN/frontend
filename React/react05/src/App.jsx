import { useState } from "react";

import Hello from "./components/Hello";
import Car from "./components/Car";

function App() {
  const arr = [1, 2, 3];
  const car = {
    name: "bmw",
    model: "2022",
    color: "black",
  };
  return (
    <div className="App">
      <Hello msg="welcome" name="sam" arr={arr} />
      <Car car={car} />
    </div>
  );
}

export default App;
