
import { Resizable } from "re-resizable";
import { Element, useNode } from "@craftjs/core";
// import { ColumnOne } from "./ColumnOne";
import { Column } from ".";

export const ColumnThree = (props) => {
  const {
    children,
    BackgroundPicture,
    Background,
    PaddingStyle = [],
    BorderStyle = "",
    Margin,
  } = props;
  const { BorderType, color, radius } = BorderStyle;

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <table
      ref={connect}
      style={{
        width: "100%",
        backgroundImage: `url(${BackgroundPicture || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        border: `${radius || 0}px ${BorderType || ""} rgba(${Object.values(
          color || "#000"
        )})`,
        background: `${Background ? `rgba(${Object.values(Background)})` : ""}`,
        margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width: "33.33%",
              textAlign: "center",
              padding: `${PaddingStyle?.Top}px ${PaddingStyle?.Right}px ${PaddingStyle?.Bottom}px ${PaddingStyle?.Left}px`,
            }}
          >
            <Resizable>
              <Element canvas is={Column} id="1">
                {children}
              </Element>
            </Resizable>
          </td>
          <td
            style={{
              width: "33.33%",
              textAlign: "center",
              padding: `${PaddingStyle?.Top}px ${PaddingStyle?.Right}px ${PaddingStyle?.Bottom}px ${PaddingStyle?.Left}px`,
            }}
          >
            <Resizable>
              <Element canvas is={Column} id="2">
                {children}
              </Element>
            </Resizable>
          </td>
          <td
            style={{
              width: "33.33%",
              textAlign: "center",
              padding: `${PaddingStyle?.Top}px ${PaddingStyle?.Right}px ${PaddingStyle?.Bottom}px ${PaddingStyle?.Left}px`,
            }}
          >
            <Resizable>
              <Element canvas is={Column} id="3">
                {children}
              </Element>
            </Resizable>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
