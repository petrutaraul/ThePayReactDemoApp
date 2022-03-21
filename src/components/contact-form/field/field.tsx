import React from "react";
import "./fields.scss";

function ContactField({
  value,
  placeholder,
  onChange,
  name,
  validEmail,
}: {
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
  name: string;
  validEmail?: boolean;
}) {
  return (
    <div className="app-field">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {!validEmail && name === "your_email" && (
        <span className="app-field--error">Erorr mail</span>
      )}
    </div>
  );
}

export default ContactField;
