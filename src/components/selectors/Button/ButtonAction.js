import React, { useState } from "react";
import { inputValidation } from "../../../helpers/Validation";

export const ButtonAction = ({ title, value, onChange }) => {
  const [error, setError] = useState("");

  // INPUT FIELD VALUE SAVE DRAFT AFTER VALIDATION
  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (!inputValidation(inputValue)) {
      setError("please write a valid action");
    } else {
      setError("");
      onChange(inputValue);
    }
  };

  return (
    <>
      <div>
        <div style={{ width: "250px" }}>
          <input
            style={{
              padding: "4px 10px", outline: "none", border: " 1px solid gray", fontSize: '12px', width: "94%"
            }}
            type="text"
            placeholder="Enter Link"
            onChange={(e) => handleChange(e)}
          />
          {error && (
            <p style={{ color: "red", fontSize: "12px", maxWidth: "12.5rem" }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
