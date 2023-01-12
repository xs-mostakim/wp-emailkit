
import DateAndTimePicker from "./DateAndTimePicker";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";
import { DropdownMenu } from "../../editor/Toolbar/Dropdown/DropdownMenu"
import { TextAlignment } from "../../editor/Toolbar/TextAlignment"
import { AiOutlineAlignRight, AiOutlineAlignLeft, AiOutlineAlignCenter } from "react-icons/ai";

export const TimerSettings = ({ handleTime }) => {
  return (
    <>
      <ToolbarSection title="Time">
        <DateAndTimePicker handleTime={handleTime} />
      </ToolbarSection>
      <ToolbarSection title="Container">
        <ToolbarItem full={true} propKey="width" type="slider" label="Container width" />
      </ToolbarSection>
      <ToolbarSection title="Colors" props={["background", "color"]}>
        <ToolbarItem full={true} propKey="background" type="bg" label="Background" />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection title="Typography" props={["fontSize", "fontWeight", "textAlign"]}>
        <ToolbarItem propKey="textAlign" type="radio" full={true}>
          <TextAlignment
            options={[
              { id: 1, name: "Left", value: "left", icon: <AiOutlineAlignLeft /> },
              { id: 2, name: "Center", value: "center", icon: <AiOutlineAlignCenter /> },
              { id: 3, name: "Right", value: "right", icon: <AiOutlineAlignRight /> },
            ]}
            title={"Align"}
          />
        </ToolbarItem>
        <ToolbarItem propKey="fontWeight" type="radio" full={true}>
          <DropdownMenu
            Options={[
              { id: "1", name: "Default", value: "15px" },
              { id: "2", name: "Small", value: "12px" },
              { id: "3", name: "Medium", value: "18px" },
              { id: "4", name: "Large", value: "22px" },
              { id: "5", name: "XL", value: "25px" },
              { id: "6", name: "XXL", value: "30px" },
            ]}
            title={"Size"}
            propsName={"TextSize"}
          />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection title="Spacing">
        <ToolbarSection title="Margin" props={["margin"]}>
          <SpacingItem title="Margin" />
        </ToolbarSection>
        <ToolbarSection title="Padding" props={["padding"]}>
          <SpacingItem title="Padding" />
        </ToolbarSection>
      </ToolbarSection>
    </>
  );
};
