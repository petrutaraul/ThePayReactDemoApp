import React from "react";
import "./App.css";
import "./app.scss";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import SecondSlide from "./components/second-slide/second-slide";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SecondSlide />
    </div>
  );
}

export default App;
