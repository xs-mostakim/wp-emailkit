
import { ToolbarSection, ToolbarItem } from "../../editor";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";
import { AlignItems } from "../../editor/Toolbar/Alignment/AlignItems";
import { FileUpload } from "../../editor/Toolbar/FileUpload"
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { AiOutlineAlignRight, AiOutlineAlignLeft, AiOutlineAlignCenter } from "react-icons/ai";

const ImageContainerSettings = ({ handleUploader }) => {
  return (
    <>
      <ToolbarSection title="Background">
        {/* image upload action */}
        <FileUpload title="Background" name="picture" />
      </ToolbarSection>
      <ToolbarSection
        title="Dimensions"
        props={["width", "minHeight"]}
      // summary={({ width, height }) => {
      //   return `${width || 0} x ${height || 0}`;
      // }}
      >
        <ToolbarItem propKey="width" type="text" label="Width" />
        <ToolbarItem propKey="minHeight" type="text" label="Height" />
      </ToolbarSection>
      {/* <ToolbarSection title="Colors" props={["background", "color"]}>
        <ToolbarItem full={true} propKey="background" type="bg" label="Background" />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection> */}
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
        <ToolbarItem propKey="flexDirection" type="radio" label="Flex Direction" full={true}>
          <ToolbarRadio value="row" label="Row" />
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>
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

export default ImageContainerSettings;
