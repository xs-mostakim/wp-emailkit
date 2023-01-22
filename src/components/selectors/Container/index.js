
import { ContainerSettings } from "./ContainerSettings";
import { Resizer } from "../Resizer";

export const Container = (props) => {
  props = { ...defaultProps, ...props };
  const { flexDirection, alignItems, justifyContent, fillSpace, background, color, shadow, radius, children, Margin, Padding, } = props;

  return (
    <>
      <table style={{ borderCollapse: "collapse", borderSpacing: "0px", width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <Resizer
                propKey={{ width: "width", height: "height" }}
                style={{
                  justifyContent: justifyContent,
                  flexDirection,
                  alignItems: alignItems,
                  background: `rgba(${Object.values(background)})`,
                  color: `rgba(${Object.values(color)})`,
                  padding: `${Padding?.Top}px ${Padding?.Right}px ${Padding?.Bottom}px ${Padding?.Left}px`,
                  margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
                  boxShadow:
                    shadow === 0
                      ? "none"
                      : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                  borderRadius: `${radius}px`,
                  flex: fillSpace === "yes" ? 1 : "unset",
                  display: "flex",
                }}
              >
                {children}
              </Resizer>
            </td>
          </tr>
        </tbody>
      </table>
    </>
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
  height: "auto",
};

Container.craft = {
  displayName: "Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
