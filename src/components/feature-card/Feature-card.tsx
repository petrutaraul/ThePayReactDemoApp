import React from "react";
import "./feature-card.scss";

interface FeatureCardProps {
  // Set row on reverse on not
  rowReverse?: boolean;

  // Set backgroundTransparent on/off
  transparentBackground?: boolean;

  // Set card title
  title: string;

  // Set card image
  image: string;

  // Set title font size
  fontSize?: number;
}

export const FeatureCard = ({
  rowReverse = false,
  title,
  image,
  transparentBackground = true,
  fontSize = 24,
}: FeatureCardProps) => {
  const reverseMode = rowReverse ? "storybook-feature-card--reverse" : "";
  const transparentMode = transparentBackground
    ? "storybook-feature-card--transparent"
    : "";

  return (
    <li
      className={["storybook-feature-card", reverseMode, transparentMode].join(
        " "
      )}
    >
      <span style={{ fontSize }}>{title}</span>
      <img src={image} alt={title} />
    </li>
  );
};
