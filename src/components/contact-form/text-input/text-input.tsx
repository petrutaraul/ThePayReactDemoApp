import React from "react";
import "./text-input.scss";

function TextInput({
  handler,
  touched,
  hasError,
  meta,
}: {
  handler: any;
  touched: boolean;
  hasError: any;
  meta: any;
}) {
  return (
    <div className="app-text-input" data-testid="text-input">
      <input placeholder={`Enter ${meta.label}`} {...handler()} />
      <span>
        {touched && hasError("required") && `${meta.label} is required!`}
      </span>
    </div>
  );
}

export default TextInput;
