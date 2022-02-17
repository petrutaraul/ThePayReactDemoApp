import React, { useEffect, useState } from "react";

import "./second-slide.scss";
import { getDataFeatures } from "../../service/slide-data-call";
import { IFeature } from "../../interfaces/IInterface";
import FeatureCard from "./feature-card/feature-card";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setGridSystem } from "../../actions";

function SecondSlide() {
  const gridSystem = useSelector((state: RootStateOrAny) => state.gridSystem);
  const dispatch = useDispatch();
  const featureResponse = useSelector(
    (state: RootStateOrAny) => state.featureResponse
  );

  const nextCardPosition =
    gridSystem === 2 ? setGridSystem(3) : setGridSystem(2);

  return (
    <div className="app-secondslide">
      <h1>Our app features</h1>
      <button onClick={() => dispatch(nextCardPosition)}>
        Set Grid to {gridSystem === 2 ? 3 : 2}
      </button>

      <ul
        className={`app-secondslide__list ${gridSystem === 2 && "two-columns"}`}
      >
        {featureResponse.map((feature: IFeature, i: number) => {
          return (
            <FeatureCard title={feature.title} image={feature.image} key={i} />
          );
        })}
      </ul>
    </div>
  );
}

export default SecondSlide;
