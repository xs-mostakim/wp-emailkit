import React, { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import { BsLink45Deg } from "react-icons/bs";

const spacingOption = [
  { id: "Top", name: 'Top' },
  { id: "Right", name: 'Right' },
  { id: "Bottom", name: 'Bottom' },
  { id: "Left", name: 'Left' },
]

export const SpacingItem = ({ title }) => {
  const [show, setShow] = useState(false)
  const [spacing, setSpacing] = useState({ Top: "0", Right: "0", Bottom: "0", Left: "0" });
  const { actions: { setProp } } = useNode();

  // Activate give space all
  const handleButton = () => { setShow(!show) }

  // For Handle Spacing
  const handleChange = (e) => {
    const { value, name } = e.target
    setSpacing({ ...spacing, [name]: value });

    if (show) {
      setSpacing({ Top: value, Right: value, Bottom: value, Left: value })
    }
  };
  // For show Spacing UI
  useEffect(() => {
    setProp((props) => (props[title] = spacing));
  }, [spacing]);

  return (
    <>
      <div className="spacing_wrapper">
        <ul>


          {show ?
            <li>
              <input min={0} type="number" onChange={(e) => handleChange(e)} />
              <p>{title}</p>
            </li>
            :
            spacingOption.map((item, index) => (
              <li key={index}>
                <input min={0} type="number" name={item.name} id={item.id} onChange={(e) => handleChange(e)} />
                <p>{item.name}</p>
              </li>
            ))
          }


          <li onClick={handleButton} className={show ? "spacing_wrapper_button_active" : "spacing_wrapper_button"}>
            <BsLink45Deg />
          </li>

        </ul>
      </div>
    </>
  );
};


