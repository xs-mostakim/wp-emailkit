
import { ToolbarSection, ToolbarItem } from "../../editor";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";
import { FileUpload } from "../../editor/Toolbar/FileUpload"

const ImageComponentSetting = () => {
  return (
    <>
      <ToolbarSection title="Background">
        <FileUpload title="Background" name="image" />
      </ToolbarSection>
      <ToolbarSection title="Dimensions" props={["width", "height"]}
      // summary={({ width, height }) => {
      //   return `${width || 0} x ${height || 0}`;
      // }}
      >
        <ToolbarItem propKey="width" type="text" label="Width" />
        <ToolbarItem propKey="height" type="text" label="Height" />
      </ToolbarSection>

      <ToolbarSection title="Margin" props={["margin"]}>
        <SpacingItem title="Margin" />
      </ToolbarSection>
      <ToolbarSection title="Decoration" props={["shadow"]}>
        <ToolbarItem full={true} propKey="shadow" type="slider" label="Shadow" />
      </ToolbarSection>
    </>
  );
};

export default ImageComponentSetting;
