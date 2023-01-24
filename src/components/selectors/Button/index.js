import { useEditor, useNode } from "@craftjs/core";
import { ButtonSettings } from "./ButtonSettings";
import { Text } from "../Text";

export const Button = (props) => {
  const { action } = props;

  const { connectors: { connect }, actions: { setProp } } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const { text, color, buttonStyle, textComponent, Margin, width, Padding, borderColor,
    justifyContent, textAlign, fontSize, fontWeight, TextAlign, CustomeFontWeight, TextSize,
    TextTransform,
    ...otherProps
  } = props;


  return (
    <table
      ref={connect}
      style={{
        borderCollapse: "collapse",
        margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
        display: 'flex',
        justifyContent: `${TextAlign}`
      }}
    >
      <tbody
        style={{
          border: " 2px solid transparent",
          cursor: "pointer",
          boxShadow: `${buttonStyle == "outline" ? `0px 0px 2px 0px gray` : "transparent"
            }`,
        }}
      >
        <tr>
          <td style={{ width: '100px', textAlign: `${TextAlign}` }}>
            <a
              href={action ? action : "#"}
              style={{ textDecoration: "none", fontSize: `${fontSize}px` }}
            >
              <Text
                {...textComponent}
                text={text}
                color={color}
                TextTransform={TextTransform}
                TextSize={TextSize}
                CustomeFontWeight={CustomeFontWeight}
                TextAlign="center"
                CustomeWidth="inline-block"
                PaddingStyle={`${Padding?.Top}px ${Padding?.Right}px ${Padding?.Bottom}px ${Padding?.Left}px`}
                Background={buttonStyle === "full" ? `rgba(${Object.values(props.background)})` : "transparent"}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    width: "100px",
    justifyContent: "center",
    background: { r: 0, g: 0, b: 0, a: 1 },
    color: { r: 255, g: 192, b: 203, a: 1 },
    buttonStyle: "full",
    text: "Button",
    margin: ["5", "0", "5", "0"],
    padding: ["5", "0", "5", "0"],
    textAlign: "center",
    fontSize: "15",
    fontWeight: "500",
    borderColor: { r: 0, g: 0, b: 0, a: 1 },
    textComponent: {
      ...Text.craft.props,
      textAlign: "center",
    },
  },
  related: {
    toolbar: ButtonSettings,
  },
};
