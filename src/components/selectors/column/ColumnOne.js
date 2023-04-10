import { Resizable } from "re-resizable";
import { useNode } from "@craftjs/core";
import ColumnNoContent from "./ColumnNoContent";

export const ColumnOne = (props) => {
  const { children, BackgroundPicture, Background, PaddingStyle = [], BorderStyle = "", Margin } = props;
  const { BorderType, color, radius } = BorderStyle;
  const { connectors: { connect } } = useNode((node) => ({ selected: node.events.selected }));

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
          color || ""
        )})`,
        background: `${Background ? `rgba(${Object.values(Background)})` : ""}`,
        margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              textAlign: "center",
              width: "100%",
              padding: `${PaddingStyle?.Top}px ${PaddingStyle?.Right}px ${PaddingStyle?.Bottom}px ${PaddingStyle?.Left}px`,
            }}
          >
            <Resizable>{children ? children : <ColumnNoContent />}</Resizable>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

