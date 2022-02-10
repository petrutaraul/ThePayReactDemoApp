import React from "react";
import { render, screen, within } from "@testing-library/react";
import ContactForm from "./form";

test("renders header text in form", () => {
  render(<ContactForm />);

  expect(
    screen.getByText(/Send us an email to get a demo/)
  ).toBeInTheDocument();
});

test("should render the form inside component", () => {
  const { getByRole, getByTestId } = render(<ContactForm />);

  const root = getByRole("root");
  const form = getByTestId("contactform");

  expect(root).toContainElement(form);
});

test("should render 3 inputs inside ContactForm form", () => {
  const { getByTestId } = render(<ContactForm />);

  const contactForm = getByTestId("contactform");
  const controlFieldsInForm = within(contactForm).getAllByTestId("text-input");

  expect(controlFieldsInForm.length).toBe(3);
});

test("button should have Submit text inside", () => {
  render(<ContactForm />);

  const button = screen.getByRole("button", { name: /submit/i });

  expect(button).toBeInTheDocument();
});

test("form should not render failed message", () => {
  const { queryByText } = render(<ContactForm />);

  expect(queryByText(/Mail failed!/)).not.toBeInTheDocument();
});
