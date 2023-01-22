import { useNode, useEditor } from "@craftjs/core";
import React, { useState } from "react";
import ContentEditable from "react-contenteditable";

import { ListSettings } from "./ListSettings";

export const List = ({
  fontSize,
  textAlign,
  fontWeight,
  color,
  shadow,
  text,
  margin,
  listStyleType,
}) => {
  const [textList, setTextList] = useState([]);
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <>
      <ContentEditable
        innerRef={connect}
        html={text} // innerHTML of the editable div
        disabled={!enabled}
        onChange={(e) => {
          setProp((prop) => (prop.text = e.target.value), 500);
        }} // use true to disable editing
        tagName="li" // Use a custom HTML tag (uses a div by default)
        style={{
          width: "100%",
          listStyleType: `${listStyleType}`,
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
          color: `rgba(${Object.values(color)})`,
          fontSize: `${fontSize}rem`,
          textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
          fontWeight,
          textAlign,
        }}
      />
    </>
  );
};

List.craft = {
  displayName: "List",
  props: {
    fontSize: "1",
    textAlign: "center",
    fontWeight: "500",
    color: { r: 92, g: 90, b: 90, a: 1 },
    margin: [0, 0, 0, 0],
    shadow: 0,
    text: "New List Create",
  },
  related: {
    toolbar: ListSettings,
  },
};
