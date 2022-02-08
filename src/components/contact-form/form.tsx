import React, { useState } from "react";
import "./form.scss";
import { send } from "emailjs-com";

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    your_email: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    send(
      "service_xwpx8dr",
      "template_vp7du2h",
      toSend,
      "user_UCvxPFa5A3sDQ3sfczWWo"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({
          from_name: "",
          message: "",
          your_email: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-contactform">
      <form onSubmit={onSubmit}>
        <h1>
          Send us an email <br /> to get a demo
        </h1>
        <input
          type="text"
          name="from_name"
          placeholder="From name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="text"
          name="your_email"
          placeholder="Your email"
          value={toSend.your_email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
