
import { ToolbarSection, ToolbarItem } from "../../editor";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";
import { FileUpload } from "../../editor/Toolbar/FileUpload"

export const VideoSettings = () => {
  return (
    <>
      <ToolbarSection title="Background">
        <FileUpload title="Background" name="picture" />
      </ToolbarSection>
      <ToolbarSection title="Spacing">
        <ToolbarSection title="Margin" props={["margin"]}>
          <SpacingItem title="Margin" />
        </ToolbarSection>
      </ToolbarSection>
      <ToolbarSection title="Actions">
        <ToolbarItem propKey="action" type="setLink" label="Set Action" />
      </ToolbarSection>
    </>
  );
};
