
import { ToolbarSection, ToolbarItem } from "../../editor";
import { AlignItems } from "../../editor/Toolbar/Alignment/AlignItems";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";

import { AiOutlineAlignRight, AiOutlineAlignLeft, AiOutlineAlignCenter } from "react-icons/ai";

export const ContainerSettings = () => {
  return (
    <>
      <ToolbarSection
        title="Dimensions"
        props={["width", "height"]}
      // summary={({ width, height }) => {
      //   return `${width || 0} x ${height || 0}`;
      // }}
      >
        <ToolbarItem propKey="width" type="text" label="Width" />
        <ToolbarItem propKey="height" type="text" label="Height" />
      </ToolbarSection>
      <ToolbarSection
        title="Colors"
        props={["background", "color"]}
        summary={({ background, color }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p style={{ color: color && `rgba(${Object.values(color)})` }}
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem full={true} propKey="background" type="bg" label="Background" />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection title="Margin" props={["margin"]}>
        <SpacingItem title="Margin" />
      </ToolbarSection>
      <ToolbarSection title="Padding" props={["padding"]}>
        <SpacingItem title="Padding" />
      </ToolbarSection>
      <ToolbarSection title="Decoration" props={["radius", "shadow"]}>
        <ToolbarItem full={true} propKey="radius" type="slider" label="Radius" />
        <ToolbarItem full={true} propKey="shadow" type="slider" label="Shadow" />
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem propKey="alignItems" type="radio" full={true}>
          <AlignItems
            options={[
              { id: "start", name: "alignItems", value: "flex-start", Icon: <AiOutlineAlignLeft /> },
              { id: "center", name: "alignItems", value: "center", Icon: <AiOutlineAlignCenter /> },
              { id: "end", name: "alignItems", value: "flex-end", Icon: <AiOutlineAlignRight /> },
            ]}
            title={"Align"}
          />
        </ToolbarItem>
        <ToolbarItem propKey="justifyContent" type="radio" full={true}>
          <AlignItems
            options={[
              { id: "just_start", name: "justifyContent", value: "flex-start", Icon: <AiOutlineAlignLeft /> },
              { id: "just_center", name: "justifyContent", value: "center", Icon: <AiOutlineAlignCenter /> },
              { id: "just_end", name: "justifyContent", value: "flex-end", Icon: <AiOutlineAlignRight /> },
            ]}
            title={"Justify"}
          />
        </ToolbarItem>
      </ToolbarSection>
    </>
  );
};
