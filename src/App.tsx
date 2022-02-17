import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFeatureResponse } from "./actions";
import "./App.css";
import "./app.scss";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import SecondSlide from "./components/second-slide/second-slide";
import { getDataFeatures } from "./service/slide-data-call";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFeatures().then((features: []) => {
      if (features.length) {
        dispatch(setFeatureResponse(features));
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <SecondSlide />
    </div>
  );
}

export default App;
