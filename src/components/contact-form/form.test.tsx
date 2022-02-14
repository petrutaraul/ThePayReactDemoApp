import React from "react";
import { render, screen, within } from "@testing-library/react";
import ContactForm from "./form";
import userEvent from "@testing-library/user-event";

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

test("form should contain inputs", () => {
  render(<ContactForm />);

  const nameInput = screen.getByTestId("name-input") as HTMLInputElement;
  const messageInput = screen.getByTestId("message-input") as HTMLInputElement;
  const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
  userEvent.type(nameInput, "test");
  userEvent.type(messageInput, "test");
  userEvent.type(emailInput, "test@test.com");

  expect(nameInput).toBeInTheDocument();
  expect(nameInput.value).toBe("test");

  expect(messageInput).toBeInTheDocument();
  expect(messageInput.value).toBe("test");

  expect(emailInput).toBeInTheDocument();
  expect(emailInput.value).toBe("test@test.com");
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

test("email field should contain mail characters", () => {
  render(<ContactForm />);

  const inputEl = screen.getByTestId("email-input");
  userEvent.type(inputEl, "test@email.com");

  expect(inputEl).toHaveValue("test@email.com");
});
