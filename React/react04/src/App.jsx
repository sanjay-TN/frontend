import { useState } from "react";
import Hello from "./components/hello";
import Hi from "./components/hi";

function App() {
  return (
    <div className="App">
      <Hello name="sanjay" msg="welcome" />
      <Hi name="sam" msg="hey.." emoji="👋" />
    </div>
  );
}

export default App;
