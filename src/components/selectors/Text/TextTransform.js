import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
} from "@material-ui/core";
import { useNode } from "@craftjs/core";

const TextTransform = () => {
  const [textTransform, setTextTransform] = useState("");

  const {
    actions: { setProp },
  } = useNode();

  const handleChange = (event) => {
    setTextTransform(event.target.value);
    const tranformValue = event.target.value;
    setProp((props) => (props.tranformText = tranformValue));
  };
  return (
    <Box style={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={textTransform}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="uppercase">Uppercase</MenuItem>
          <MenuItem value="lowercase">Lowercase</MenuItem>
          <MenuItem value="capitalize">Capitalize</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TextTransform;
