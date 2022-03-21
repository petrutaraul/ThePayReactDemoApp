import React, { useEffect, useState } from "react";
import "./form.scss";
import { send } from "emailjs-com";
import { serviceID, templateID, userID } from "./variables/variables";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";
import ContactField from "./field/field";

function ContactForm() {
  const [mailFailed, setMailFailed] = useState(false);
  const [invalidForm, setInvalidForm] = useState(false);
  const [invalidBtn, setInvalidBtn] = useState(true);
  const [validMail, setValidMail] = useState(true);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    your_email: "",
  });

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });

    validateMail(e);
  };

  const validateMail = (e: any) => {
    const mail = e.target.value;
    if (
      mail.match(
        /* eslint-disable no-useless-escape */
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setValidMail(true);
    } else {
      setValidMail(false);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(serviceID, templateID, toSend, userID)
      .then((response) => {
        setToSend({ from_name: "", message: "", your_email: "" });
        setInvalidForm(false);
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setMailFailed(true);
      });
  };

  const onBlur = () => {
    if (
      toSend.from_name === "" &&
      toSend.message === "" &&
      toSend.your_email === ""
    ) {
      setInvalidForm(true);
    }
  };

  useEffect(() => {
    if (
      toSend.from_name !== "" &&
      toSend.message !== "" &&
      toSend.your_email !== ""
    ) {
      setInvalidBtn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleChange]);

  const { t } = useTranslation();

  return (
    <form
      onSubmit={onSubmit}
      className="app-contactform"
      onBlur={() => onBlur()}
    >
      <ContactField
        name="from_name"
        placeholder={t("form.name")}
        value={toSend.from_name}
        onChange={handleChange}
      />
      <ContactField
        name="message"
        placeholder={t("form.message")}
        value={toSend.message}
        onChange={handleChange}
      />
      <ContactField
        name="your_email"
        placeholder={t("form.email")}
        value={toSend.your_email}
        onChange={handleChange}
        validEmail={validMail}
      />
      <Button label="Submit" type="submit" primary disabled={invalidBtn} />

      {(invalidForm || mailFailed) && (
        <span
          className="app-contactform__failed"
          data-testid="form-fail-message"
        >
          {invalidForm ? "Please complete all fields" : "Mail failed!"}
        </span>
      )}
    </form>
  );
}

export default ContactForm;
