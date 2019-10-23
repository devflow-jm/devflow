import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import cn from "classnames";
import Navbar from "../src/Components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className={cn("container")}>
        <h1>App</h1>
        <HomePage />
      </div>
    </React.Fragment>
  );
}

export default App;
