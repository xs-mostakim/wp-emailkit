
import { useEditor } from "@craftjs/core";

// ====== IMPORT FOR COLUMN ========
import { ColumnOne } from "../column/ColumnOne";
import { ColumnTwo } from "../column/ColumnTwo";
import { ColumnThree } from "../column/ColumnThree";
import { ColumnFour } from "../column/ColumnFour";
import { ColumnFive } from "../column/ColumnFive";
import { ColumnSix } from "../column/ColumnSix";

import { Column } from "../column/index"

// import { Column } from "../column"

// =========== COLUMN =============
const ColumnItems = [
  {
    id: 1,
    name: "ColumnOne",
    column: ColumnOne,
    img: " /image/ColumnOne.jpg",
  },
  {
    id: 2,
    name: "Column Two",
    column: ColumnTwo,
    img: "/image/ColumnTwo.jpg",
  },
  {
    id: 3,
    name: "Column Three",
    column: ColumnThree,
    img: "/image/ColumnThree.jpg",
  },
  {
    id: 4,
    name: "Column Four",
    column: ColumnFour,
    img: "/image/ColumnFour.jpg",
  },
  {
    id: 5,
    name: "Column Five",
    column: ColumnFive,
    img: "/image/ColumnFive.jpg",
  },
  {
    id: 6,
    name: "Column Six",
    column: ColumnSix,
    img: "/image/ColumnSix.jpg",
  },
];

export const TabBody = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <>
      {ColumnItems.map((item) => (
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
            style={{ width: "100%", margin: "10px 0px", cursor: "pointer" }}
            className="blockColumn"
          />
        </div>
      ))}
    </>
  );
};
