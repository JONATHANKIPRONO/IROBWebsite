/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "./Components/About";
//import Header from "./Components/Header";//
//import Home from "./Components/Home";//
//import Portfolio from "./Components/Portfolio"//

ReactDOM.render(<About/>, document.getElementById('root'));*/


import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));