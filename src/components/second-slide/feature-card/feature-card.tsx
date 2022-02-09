import React from "react";

import "./feature-card.scss";
import { IFeature } from "../../../interfaces/IInterface";

function FeatureCard({ title, image }: IFeature) {
  return (
    <li className="app-feature-card">
      <span>{title}</span>
      <img src={image} alt={title} />
    </li>
  );
}

export default FeatureCard;
