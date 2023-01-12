import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
} from "@material-ui/core";
import { useNode } from "@craftjs/core";

const BorderOption = [
  { id: "1", name: "None", value: "none" },
  { id: "2", name: "Solid", value: "solid" },
  { id: "3", name: "Dotted", value: "dotted" },
  { id: "4", name: "Dashed", value: "dashed" },
]

const BorderDrop = ({ Options, title, propsName }) => {
  const [borderType, setBorderType] = useState("");

  const {
    actions: { setProp },
  } = useNode();

  const handleChange = (event) => {
    setBorderType(event.target.value);
    const newBorder = event.target.value;
    setProp((props) => (props.BorderType = newBorder));
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '199px' }}>
      <p style={TitleStyle}>Type:</p>
      <select value={borderType} onChange={handleChange}
        style={SelectStyle}
        className="focus:ring-blue-500 focus:border-blue-500">
        {BorderOption.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BorderDrop;


const TitleStyle = {
  display: 'block',
  fontSize: '14px',
  color: 'gray',
  fontWeight: '400'
}

const SelectStyle = {
  width: '120px',
  paddingBottom: '0px',
  paddingTop: '0px',
  fontSize: '12px',
  border: '1px solid gray',
  color: 'gray'
}