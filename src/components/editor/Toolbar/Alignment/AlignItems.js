import { useNode } from "@craftjs/core";
import React, { useState } from "react";

export const AlignItems = ({ options, title }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { actions: { setProp } } = useNode();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setProp((props) => (props[options[0].name] = event.target.value));
  };


  return (
    <>
      <div className="radio-toolbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={TitleStyle}>{title}:</p>
        <div>
          {options.map((item, index) => (
            <span key={index}>
              <input
                type="radio"
                id={item.id}
                name={item.name}
                value={item.value}
                onChange={handleChange}
                checked={selectedValue === item.value}
              />
              <label htmlFor={item.id}>{item.Icon}</label>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

const TitleStyle = {
  display: 'block',
  fontSize: '14px',
  color: 'gray',
  fontWeight: '400'
}