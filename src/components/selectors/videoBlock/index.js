
import { useNode } from "@craftjs/core";
import { VideoSettings } from "./videoSettings";
import { VscTriangleRight } from "react-icons/vsc";

export const VideoBlock = (props) => {
  const { picture, action } = props;

  const { connectors: { connect } } = useNode((node) => ({
    selected: node.events.selected,
  }));

  let previousImage =
    "https://img.freepik.com/premium-photo/image-planet-outer-space-mixed-media-elements-image-furnished-by-nasa_641298-3434.jpg";

  const { Margin, width, minHeight } = props;

  return (
    <table
      ref={connect}
      style={{
        width: `${width == "100%" ? width : `${width}%`}`,
        minHeight,
        backgroundSize: "cover",
        margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
        backgroundImage: `url(${picture ? picture : previousImage})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderCollapse: "collapse",
        position: "relative",
      }}
    >
      <tbody>
        <tr>
          <td>
            <a href={action ? action : "#"}>
              <div
                style={{
                  color: "white",
                  fontSize: "35px",
                  width: "60px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12%",
                  backgroundColor: " rgba(0, 0, 0, 0.5)",
                }}
              >
                <VscTriangleRight />
              </div>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const defaultProps = {
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  shadow: 0,
  radius: 0,
  width: "100%",
  minHeight: "200px",
  backgroundSize: "cover",
};

VideoBlock.craft = {
  displayName: "Video",
  props: defaultProps,
  related: {
    toolbar: VideoSettings,
  },
};
