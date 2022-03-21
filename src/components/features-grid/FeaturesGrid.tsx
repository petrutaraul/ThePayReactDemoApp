import React from "react";
import { IFeature } from "../../interfaces/IFeature";
import { FeatureCard } from "../feature-card/Feature-card";
import "./features-grid.scss";

interface FeaturesGridProps {
  // Set grid gap
  gap?: number;

  // Set template columns
  templateColumns?: number;

  // List of items to render
  items: IFeature[];
}

export const FeaturesGrid = ({
  gap = 10,
  templateColumns = 3,
  items,
}: FeaturesGridProps) => {
  const style = {
    gridTemplateColumns: `repeat(${templateColumns}, 300px)`,
    gap: `${gap}%`,
  };

  return (
    <ul className="storybook-features-grid" style={style}>
      {items.map((item: IFeature, key: number) => {
        return <FeatureCard title={item.title} image={item.image} key={key} />;
      })}
    </ul>
  );
};
