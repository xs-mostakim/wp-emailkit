
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";
// import { AlignItems } from "../../editor/Toolbar/Alignment/AlignItems";
import { TextAlignment } from "../../editor/Toolbar/TextAlignment"
import { DropdownMenu } from "../../editor/Toolbar/Dropdown/DropdownMenu"
import { AiOutlineAlignRight, AiOutlineAlignLeft, AiOutlineAlignCenter } from "react-icons/ai";

export const ButtonSettings = () => {
  return (
    <>
      <ToolbarSection title="Colors" props={["background", "color"]}>
        <ToolbarItem full={true} propKey="background" type="bg" label="Background" />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection title="Decoration">
        <ToolbarItem propKey="buttonStyle" type="radio" label="Style" full={true}>
          <ToolbarRadio value="full" label="Full" />
          <ToolbarRadio value="outline" label="Outline" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection
        title="Typography"
        props={["fontSize", "fontWeight", "textAlign"]}
      // summary={({ fontSize, fontWeight, textAlign }) => {
      //   return `${fontSize || ""}, ${fontWeight}, ${textAlign}`;
      // }}
      >
        {/* <ToolbarItem
          full={true}
          propKey="fontSize"
          type="slider"
          label="Font Size"
        /> */}
        <ToolbarItem full={true} propKey="fontSize" type="radio">
          <DropdownMenu
            Options={[
              { id: "1", name: "Default", value: "15px" },
              { id: "2", name: "Small", value: "12px" },
              { id: "3", name: "Medium", value: "18px" },
              { id: "4", name: "Large", value: "22px" },
              { id: "5", name: "XL", value: "25px" },
              { id: "6", name: "XXL", value: "30px" },
            ]}
            title={"Font Size"}
            propsName={"TextSize"}
          />
        </ToolbarItem>
        <ToolbarItem propKey="fontWeight" type="radio" full={true}>
          <DropdownMenu
            Options={[
              { id: "1", name: "Regular", value: "400" },
              { id: "2", name: "Medium", value: "500" },
              { id: "3", name: "Bold", value: "700" },
            ]}
            title={"Weight"}
            propsName={"CustomeFontWeight"}
          />
        </ToolbarItem>
        <ToolbarItem propKey="textAlign" type="radio" full={true}>
          <TextAlignment
            options={[
              { id: 1, name: "Left", value: "left", icon: <AiOutlineAlignLeft /> },
              { id: 2, name: "Center", value: "center", icon: <AiOutlineAlignCenter /> },
              { id: 3, name: "Right", value: "right", icon: <AiOutlineAlignRight /> },
            ]}
            title={'Text Align'}
          />
        </ToolbarItem>
        <ToolbarItem propKey="textAlign" type="radio" full={true}>
          <DropdownMenu
            Options={[
              { id: "1", name: "None", value: "none" },
              { id: "2", name: "Uppercase", value: "uppercase" },
              { id: "3", name: "Lowercase", value: "lowercase" },
              { id: "4", name: "Capitalize", value: "capitalize" },
            ]}
            title={"Transform"}
            propsName={"TextTransform"}
          />
        </ToolbarItem>

      </ToolbarSection>
      {/* <ToolbarSection title="Spacing"> */}
      <ToolbarSection title="Spacing" props={["margin", "padding"]}>
        <ToolbarItem propKey="margin" type="radio" label="Margin" full={true}>
          <SpacingItem title="Margin" />
        </ToolbarItem>
        <ToolbarItem propKey="padding" type="radio" label="Padding" full={true}>
          <SpacingItem title="Padding" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection title="Actions">
        <ToolbarItem propKey="action" type="setLink" label="Set Action" />
      </ToolbarSection>
    </>
  );
};
