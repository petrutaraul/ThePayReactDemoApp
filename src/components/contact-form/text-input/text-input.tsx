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
  const getElementsAfterUnderscore = (text: string) => {
    return text.substring(text.indexOf(" ") + 1);
  };

  return (
    <div className="app-text-input" data-testid="text-input">
      <input
        placeholder={`Enter ${meta.label}`}
        {...handler()}
        data-testid={`${getElementsAfterUnderscore(meta.label)}-input`}
      />
      <span data-testid={`${getElementsAfterUnderscore(meta.label)}-error`}>
        {touched && hasError("required") && `${meta.label} is required!`}
      </span>
    </div>
  );
}

export default TextInput;
