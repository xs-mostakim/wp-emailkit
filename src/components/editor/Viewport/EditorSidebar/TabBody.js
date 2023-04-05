import { useEditor } from "@craftjs/core";

import { ColumnOne } from "./Columns/ColumnOne";
import { ColumnTwo } from "./Columns/ColumnTwo";
import { ColumnThree } from "./Columns/ColumnThree";
import { ColumnFour } from "./Columns/ColumnFour";
import { ColumnFive } from "./Columns/ColumnFive";
import { ColumnSix } from "./Columns/ColumnSix";

const ColumnItems = [
  { id: 1, column: ColumnOne, img: "https://i.ibb.co/yPqDP3P/Column-One.jpg" },
  { id: 2, column: ColumnTwo, img: "https://i.ibb.co/jvBtxvh/Column-Two.jpg" },
  { id: 3, column: ColumnThree, img: "https://i.ibb.co/D7HW3W4/Column-Three.jpg" },
  { id: 4, column: ColumnFour, img: "https://i.ibb.co/MZGWXRq/Column-Four.jpg" },
  { id: 5, column: ColumnFive, img: "https://i.ibb.co/vdgbX9q/Column-Five.jpg" },
  { id: 6, column: ColumnSix, img: "https://i.ibb.co/K6w6tyr/Column-Six.jpg" },
];

const TabBody = () => {
  const { enabled, connectors: { create } } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const handleColumn = (item) => {

  }


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

export default TabBody;