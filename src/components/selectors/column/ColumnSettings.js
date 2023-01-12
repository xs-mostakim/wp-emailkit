import React, { useState } from "react";
import { ColumnOne } from "./ColumnOne";
import { ColumnTwo } from "./ColumnTwo";
import { ColumnThree } from "./ColumnThree";
import { ColumnFour } from "./ColumnFour";
import { ColumnFive } from "./ColumnFive";
import { ColumnSix } from "./ColumnSix";
import { Element, useEditor, useNode } from "@craftjs/core";
import { ToolbarSection, ToolbarItem } from "components/editor";
import { imageValidation } from "helpers/Validation";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { toast } from "react-toastify";
// import BorderDrop from "./BorderDrop";
import { SpacingItem } from "../../editor/Toolbar/Spacing/SpacingItem";
import { AlignItems } from "../../editor/Toolbar/Alignment/AlignItems";
import { AiOutlineAlignRight, AiOutlineAlignLeft, AiOutlineAlignCenter } from "react-icons/ai";
import { DropdownMenu } from "../../editor/Toolbar/Dropdown/DropdownMenu"

const intialColumn = [
  {
    id: 1,
    column: ColumnOne,
    img: " /image/ColumnOne.jpg",
  },
  {
    id: 2,
    column: ColumnTwo,
    img: "/image/ColumnTwo.jpg",
  },
  {
    id: 3,
    column: ColumnThree,
    img: "/image/ColumnThree.jpg",
  },
  {
    id: 4,
    column: ColumnFour,
    img: "/image/ColumnFour.jpg",
  },
  {
    id: 5,
    column: ColumnFive,
    img: "/image/ColumnFive.jpg",
  },
  {
    id: 6,
    column: ColumnSix,
    img: "/image/ColumnSix.jpg",
  },
];

export const ColumnSettings = (props) => {
  const { actions: { setProp } } = useNode();

  const { connectors: { create } } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // FOR BACKGROUND IMAGE UPLOAD
  const handleChange = (e) => {
    const image = e.target.files[0];

    if (!imageValidation(image)) {
      toast.error("Only jpg, jpeg, gif, png accepted");
    } else {
      const newImage = URL.createObjectURL(image);
      setProp((props) => (props.picture = newImage));
    }
  };

  // FOR COLUMN HANDLE
  const handleColumn = (item) => {
    setProp((props) => (props.columnContainer = item.column));
    setProp((props) => (props.columnID = item.id));
  };

  return (
    <>
      <ToolbarSection title="Columns">
        <div>
          {intialColumn.map((item) => (
            <div
              onClick={() => handleColumn(item)}
              key={item.id}
              ref={(ref) =>
                create(
                  ref,
                  <Element
                    canvas
                    is={item.column}
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    color={{ r: 0, g: 0, b: 0, a: 0 }}
                    height="200px"
                    width="300px"
                  ></Element>
                )
              }
            >
              <img
                src={item.img}
                style={{ width: "100%", margin: "10px 0px", cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      </ToolbarSection>
      <ToolbarSection title="Column">
        <ToolbarItem full={true} propKey="background" type="bg" label="Background" />
        <ToolbarSection title="Margin" props={["margin"]}>
          <SpacingItem title="Margin" />
        </ToolbarSection>
        <ToolbarSection title="Padding" props={["padding"]}>
          <SpacingItem title="Padding" />
        </ToolbarSection>
        <ToolbarSection title="Border">
          <ToolbarItem full={true} propKey="color" type="color" label="Color" />
          <ToolbarItem full={true} propKey="radius" type="slider" label="Width" />
          <ToolbarItem propKey="fontWeight" type="radio" full={true}>
            <DropdownMenu
              Options={[
                { id: "1", name: "None", value: "none" },
                { id: "2", name: "Solid", value: "solid" },
                { id: "3", name: "Dotted", value: "dotted" },
                { id: "4", name: "Dashed", value: "dashed" },
              ]}
              title={"Type"}
              propsName={"BorderType"}
              CustomeWidth={"200px"}
            />
          </ToolbarItem>
        </ToolbarSection>
      </ToolbarSection>
      <ToolbarSection title="Row">
        <ToolbarItem full={true} propKey="background" type="bg" label="Background" />
        <div style={{ fontSize: "13px", display: "flex", justifyContent: "space-between", width: "100%", marginTop: '15px' }}>
          <h5>Background</h5>

          <input type="file" id="actual-btn" hidden onChange={handleChange} />
          <label
            htmlFor="actual-btn"
            style={{ background: "#4896ED", padding: "5px 10px", color: 'white' }}
          >
            Upload Image
          </label>
        </div>
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem propKey="flexDirection" type="radio" label="Flex Direction" full={true}>
          <ToolbarRadio value="row" label="Row" />
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>
        <ToolbarItem propKey="alignItems" type="radio" full={true}>
          <AlignItems
            options={[
              { id: "align_start", name: "alignItems", value: "flex-start", Icon: <AiOutlineAlignLeft /> },
              { id: "align_center", name: "alignItems", value: "center", Icon: <AiOutlineAlignCenter /> },
              { id: "align_end", name: "alignItems", value: "flex-end", Icon: <AiOutlineAlignRight /> },
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
