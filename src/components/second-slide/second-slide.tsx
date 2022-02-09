import React, { useEffect, useState } from "react";

import "./second-slide.scss";
import { getDataFeatures } from "../../service/slide-data-call";
import { IFeature } from "../../interfaces/IInterface";
import FeatureCard from "./feature-card/feature-card";

function SecondSlide() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    getDataFeatures().then((features: []) => {
      if (features) {
        setFeatures(features);
        console.log(features);
      }
    });
  }, []);

  return (
    <div className="app-secondslide">
      <h1>Our app features</h1>
      <ul className="app-secondslide__list">
        {features.map((feature: IFeature, i) => {
          return (
            <FeatureCard title={feature.title} image={feature.image} key={i} />
          );
        })}
      </ul>
    </div>
  );
}

export default SecondSlide;
