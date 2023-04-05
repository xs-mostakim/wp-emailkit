import React, { useEffect } from "react";
import { useNode } from "@craftjs/core";
import { ColumnSettings } from "./ColumnSettings";
import { Resizable } from "re-resizable";
import ColumnNoContent from "./ColumnNoContent";

export const Column = (props) => {
  const { children, columnContainer: ColumnContainer, background: Background, color, Padding, Margin, picture, BorderType, radius } = props;
  const BorderStyle = { BorderType, radius, color };

  const { connectors: { connect, drag } } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <>
      {ColumnContainer ? (
        <ColumnContainer
          children={children}
          BackgroundPicture={picture}
          Background={Background}
          BorderStyle={BorderStyle}
          PaddingStyle={Padding}
          Margin={Margin}
        />
      ) : (
        <table
          ref={connect}
          style={{
            width: "100%",
            margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
          }}
        >
          <tr>
            <td
              style={{
                width: "100%",
                textAlign: "center",
                padding: `${Padding?.Top}px ${Padding?.Right}px ${Padding?.Bottom}px ${Padding?.Left}px`,
                background: `${Background ? `rgba(${Object.values(Background)})` : ""}`,
                backgroundImage: `url(${picture || ""})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                border: `${radius}px ${BorderType || ""} rgba(${Object.values(
                  color
                )})`,
              }}
            >
              <Resizable>{children ? children : <ColumnNoContent />}</Resizable>
            </td>
          </tr>
        </table>
      )}
    </>
  );
};

// DEFUALT PROPS FOR THIS COMPONENTS
const defaultProps = {
  background: { r: 255, g: 255, b: 255, a: 1 },
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  color: { r: 0, g: 0, b: 0, a: 0 },
  radius: 0,
};

Column.craft = {
  displayName: "Column",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ColumnSettings,
  },
};
