import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BodySvg from "../../../public/icons/myIcon/BodySvg";
import BlockSvg from "../../../public/icons/myIcon/BlockSvg";
import styles from "./TabPannel.module.css";
import { Toolbox } from "../../editor/Viewport/Toolbox";
import { Element, useEditor } from "@craftjs/core";
import Tooltip from "@mui/material/Tooltip";

// ====== IMPORT FOR COLUMN ========
import { ColumnOne } from "../column/ColumnOne";
import { ColumnTwo } from "../column/ColumnTwo";
import { ColumnThree } from "../column/ColumnFour";
import { ColumnFour } from "../column/ColumnFour";
import { ColumnFive } from "../column/ColumnFive";
import { ColumnSix } from "../column/ColumnSix";

// =========== COLUMN =============
const intialColumn = [
  {
    id: 1, column: ColumnOne, img: " /image/ColumnOne.jpg",
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

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <>
      {value === index && (
        <div style={{ padding: "12px" }}>
          <span>{children}</span>
        </div>
      )}
    </>
  );
}

export default function VerticalTabs() {
  // ========= FOR CREATING NEW INSTANCE ========
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // Tab components
  const tabArray = [
    { _id: "2j5kjb", tabName: "Content", img: <BlockSvg /> },
    { _id: "28df4kjb", tabName: "Blocks", img: <BodySvg /> },
  ];

  const [value, setValue] = useState("");
  const [isHide, setHide] = useState(false);
  const [number, setNumber] = useState(0);

  // handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (isHide === false) {
      setHide(!isHide);
    }
  };
  // handle sidebar functionality
  const handleSidebar = () => {
    setNumber(null);
    setHide(!isHide);
    setTimeout(() => {
      setValue("");
    }, 500);
  };

  return (
    <div
      style={{
        display: enabled ? "block" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={false}
          onChange={handleChange}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            backgroundColor: "#E0E0E0",
            zIndex: "2",
          }}
        >
          {tabArray.map((item, index) => (
            <Tab
              onClick={() => setNumber(index)}
              key={item._id}
              style={{
                padding: "12px 16px",
                background: `${number === index ? "white" : ""}`,
              }}
              label={
                <div className={`${styles.tabList}`}>
                  {item.img}
                  <p>{item.tabName}</p>
                </div>
              }
            />
          ))}
        </Tabs>
        <div
          className={`${styles.tabContainer}`}
          style={{
            width: "200px",
            backgroundColor: "#fff",
            position: "relative",
            left: isHide ? "0px" : "-320px",
            zIndex: "1",
          }}
        >
          <TabPanel value={value} index={0}>
            <Toolbox />
          </TabPanel>
          <TabPanel value={value} index={1}>
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
                      background={{ r: 128, g: 128, b: 128, a: 0.5 }}
                      color={{ r: 0, g: 0, b: 0, a: 1 }}
                      height="200px"
                      width="300px"
                    ></Element>
                  )
                }
              >
                <img
                  src={item.img}
                  style={{
                    width: "100%",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                  className="blockColumn"
                />
              </div>
            ))}
          </TabPanel>
          <Tooltip title="Hide" placement="right">
            <button
              onClick={handleSidebar}
              className={`${styles.customBtn}`}
            ></button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
