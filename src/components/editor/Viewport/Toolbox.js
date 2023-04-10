import { Element, useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";

import styled from "styled-components";

import ButtonSvg from "../../../public/icons/toolbox/button.svg";
import TypeSvg from "../../../public/icons/toolbox/text.svg";
import YoutubeSvg from "../../../public/icons/toolbox/video-line.svg";
import SocailSvg from "../../../public/icons/myIcon/SocailSvg";
import ImageSvg from "../../../public/icons/myIcon/ImageSvg";
import DividerSvg from "../../../public/icons/myIcon/DividerSvg";
import ColumnSvg from "../../../public/icons/myIcon/ColumnSvg";
import TimerSvg from "../../../public/icons/myIcon/TimerSvg";
import SqureSvg from "../../../public/icons/myIcon/SqureSvg";
import { Button } from "../../selectors/Button";
import { Container } from "../../selectors/Container";
import { Text } from "../../selectors/Text";
import { VideoBlock } from "../../selectors/videoBlock";
import { SocialIcon } from "../../selectors/Socials";
import { CustomeImage } from "../../selectors/ImageBlock";
import { Divider } from "../../selectors/Divider";
import { CountDownTimer } from "../../selectors/Timer";
import { Column } from "../../selectors/column";
import { ImageComponent } from "../../selectors/ImageComponent";

const ToolboxDiv = styled.div`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : "")}
  ${(props) => (!props.enabled ? `opacity: 0;` : "")}
`;

const Item = styled.a`
  svg {width: 110px;height: 30px;fill: #707070;}
  ${(props) => props.move && `cursor: move;`}
  `;

export const Toolbox = () => {
  const { enabled, connectors: { create } } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      // enabled={enabled && enabled}
      enabled={true}
      className="toolbox transition w-12 h-full  bg-white"
    >
      <div
        style={{ display: "grid", gridTemplateColumns: `repeat( 2, 1fr)` }}
        className="pt-3"
      >
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 128, g: 128, b: 128, a: 0.5 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="200px"
                width="50%"
              ></Element>
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <SqureSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Column}
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="200px"
                width="100%"
              ></Element>
            )
          }
        >
          <Tooltip title="Column" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <ColumnSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <TypeSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <ButtonSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <VideoBlock />)}>
          <Tooltip title="Video" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <YoutubeSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <SocialIcon />)}>
          <Tooltip title=" test social" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <SocailSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={CustomeImage}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="200px"
                width="100%"
                backgroundSize="cover"
              ></Element>
            )
          }
        >
          <Tooltip title="Image div" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <ImageSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <ImageComponent />)}>
          <Tooltip title="Image component" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <ImageSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Divider />)}>
          <Tooltip title="Divider" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <DividerSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <CountDownTimer />)} >
          <Tooltip title="Timer" placement="right">
            <Item
              style={{ border: "1px solid #E0E0E0", borderRadius: "4px", padding: "10px 0px" }}
              className="m-2 pb-2 cursor-pointer block"
              move
            >
              <TimerSvg />
            </Item>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
