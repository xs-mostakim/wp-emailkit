
import ImageSettings from "./ImageSettings";
import { useNode } from "@craftjs/core";


export const CustomeImage = (props, e) => {
  const { picture } = props;
  let previousImage = "https://i.ibb.co/z628wYs/defualt.jpg";

  const { connectors: { connect } } = useNode((node) => ({
    selected: node.events.selected,
  }));

  props = { ...defaultProps, ...props };
  const { flexDirection, background, alignItems, justifyContent, color, Padding, Margin, shadow, children, width, height, minHeight, backgroundSize } = props;

  return (
    <table
      ref={connect}
      style={{
        borderCollapse: "collapse",
        width,
        minHeight,
        maxHeight: "auto",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        justifyContent,
        flexDirection,
        display: "flex",
        alignItems,
        backgroundImage: `url(${picture ? picture : previousImage})`,
        // background: `${background ? `rgba(${Object.values(background)})` : ""}`,
        color: `rgba(${Object.values(color)})`,
        padding: `${Padding?.Top}px ${Padding?.Right}px ${Padding?.Bottom}px ${Padding?.Left}px`,
        margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
        boxShadow:
          shadow === 0
            ? "none"
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
      }}
    >
      <tr style={{ width: "100%" }}>
        <td
          style={{
            display: "flex",
            flexDirection,
            alignItems,
            padding: `${Padding?.Top}px ${Padding?.Right}px ${Padding?.Bottom}px ${Padding?.Left}px`,
          }}
        >
          {children}
        </td>
      </tr>
    </table>
  );
};

// Default props for this component
const defaultProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fillSpace: "no",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 0, g: 0, b: 0, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: "100%",
  minHeight: "200px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

CustomeImage.craft = {
  displayName: "Image Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: () => {
      return <ImageSettings />;
    },
  },
};
