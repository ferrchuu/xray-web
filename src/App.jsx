import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="fullscreen">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
