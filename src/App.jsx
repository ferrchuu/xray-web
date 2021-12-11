import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

const App = () => {
  return (
    <div className="fullscreen">
      <Router>
        <Home />
      </Router>
    </div>
  );
};

export default App;
