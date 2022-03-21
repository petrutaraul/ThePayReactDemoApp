import React from "react";
import "./button.scss";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Is button disabled?
   */
  disabled?: boolean;

  /**
   * Type of button
   */
  type?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  disabled = false,
  type = "button",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type={type}
      className={["storybook-button", mode].join(" ")}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
