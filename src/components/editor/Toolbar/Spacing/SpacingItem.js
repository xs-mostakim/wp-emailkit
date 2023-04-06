import { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { Tooltip } from "@material-ui/core";
import { useNode } from "@craftjs/core";

export const SpacingItem = ({ title = '' }) => {
  const { actions: { setProp } } = useNode();
  const [toggle, setToggle] = useState(true);
  const [spacing, setSpacing] = useState({ Top: 0, Right: 0, Bottom: 0, Left: 0, });

  useEffect(() => {
    setProp((props) => (props[title] = spacing));
  }, [spacing]);


  const inputSpacingHandler = (event) => {
    const { name, value } = event.target;
    if (toggle) {
      setSpacing({ Top: value, Right: value, Bottom: value, Left: value, });
    } else {
      setSpacing({ ...spacing, [name]: value, })
    }
  };

  return (
    <div className='space-controller-container'>
      {/* <label className='space-controller-label' htmlFor={`label-${title}`}>{title}</label> */}
      <div className='space-controller-wrapper'>

        {Object.keys(spacing).map((item, index) => {
          return (
            <div key={index} className='space-controller-item'>
              <input value={spacing[item]} name={item} type="number" onChange={inputSpacingHandler} />
              <span>{item}</span>
            </div>
          )
        })}

        <Tooltip title="Link values together" placement="top-start">
          <div
            onClick={() => setToggle((prevState) => !prevState)}
            className={`space-toggle-controller ${toggle ? 'acive-toggle' : ''}`}
          >
            <AiOutlineLink />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
