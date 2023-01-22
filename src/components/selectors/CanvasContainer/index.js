import { useNode } from "@craftjs/core";

import { CanvasContainerSettings } from "./CanvasContainerSettings";

export const CanvasContainer = (props) => {
  const { connectors: { connect } } = useNode();

  props = {
    ...defaultProps,
    ...props,
  };
  const { background, color, shadow, radius, children, margin, justifyContent, flexDirection, alignItems, minHeight } = props;

  return (
    <table
      ref={connect}
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow:
          shadow === 0
            ? "none"
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        borderRadius: `${radius}px`,
        width: "600px",
      }}
    >
      <div style={{ padding: `20px 20px 20px 20px`, alignItems, justifyContent }}>
        {children}
      </div>
    </table>
  );
};

const defaultProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fillSpace: "no",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: "100%",
  minHeight: "300px"
};

CanvasContainer.craft = {
  displayName: "Frame Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: CanvasContainerSettings,
  },
};
