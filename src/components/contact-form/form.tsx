import React, { useState } from "react";
import "./form.scss";
import { send } from "emailjs-com";
import { serviceID, templateID, userID } from "./variables/variables";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";
import TextInput from "./text-input/text-input";

function ContactForm() {
  const [mailFailed, setMailFailed] = useState(false);

  const loginForm = FormBuilder.group({
    from_name: ["", Validators.required],
    message: ["", Validators.required],
    your_email: ["", [Validators.required, Validators.email]],
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    send(serviceID, templateID, loginForm.value, userID)
      .then((response) => {
        loginForm.reset();
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setMailFailed(true);
      });
  };

  return (
    <div className="app-contactform">
      <FieldGroup
        control={loginForm}
        render={({ invalid }) => (
          <form onSubmit={onSubmit}>
            <h1>
              Send us an email <br /> to get a demo
            </h1>
            <FieldControl
              name="from_name"
              render={TextInput}
              meta={{ label: "From name" }}
            />

            <FieldControl
              name="message"
              render={TextInput}
              meta={{ label: "Your message" }}
            />

            <FieldControl
              name="your_email"
              render={TextInput}
              meta={{ label: "Your email" }}
            />
            <button type="submit" disabled={invalid}>
              Submit
            </button>
          </form>
        )}
      />
      {mailFailed && (
        <span className="app-contactform__failed">Mail failed!</span>
      )}
    </div>
  );
}

export default ContactForm;
