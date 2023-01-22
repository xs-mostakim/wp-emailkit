
import { SocialSetting } from "./SocialSetting";
import { useNode } from "@craftjs/core";

// Rendering value after drop from sidemenu
const initialValues = [
  { id: 1, icon: "https://i.ibb.co/56Wg7v0/icons8-facebook-35.png", text: "Facebook", url: "" },
  { id: 2, icon: "https://i.ibb.co/0V9wCBC/icons8-twitter-35.png", text: "Twitter", url: "" },
];

export const SocialIcon = (props) => {
  const { socialCard } = props;

  const { connectors: { connect } } = useNode((node) => ({
    selected: node.events.selected,
  }));


  const { fontSize, Margin, fontWeight, color, textAlign, flexDirection, alignItems, justifyContent, width } = props;

  // DECIDE WHAT TO RENDER
  const renderCard = socialCard?.length > 0 ? socialCard : initialValues;

  return (
    <table ref={connect} style={{ width: "100%", borderCollapse: "collapse" }}
    >
      {/* Map Icon, Which Was Created From Sidebar  */}
      <tbody>
        <tr
          style={{
            display: "flex",
            flexDirection,
            alignItems: alignItems,
            justifyContent: justifyContent,
            flexWrap: "wrap",
          }}
        >
          {renderCard
            ? renderCard.map((item) => (
              <td className=" m-2" key={item.id}>
                <a href={item.url}>
                  <img
                    src={item.icon}
                    style={{
                      width,
                      margin: `${Margin?.Top}px ${Margin?.Right}px ${Margin?.Bottom}px ${Margin?.Left}px`,
                      color: `rgba(${Object.values(color)})`,
                      fontSize: `${fontSize}px`,
                      fontWeight,
                      textAlign: `${textAlign}`,
                    }}
                  />
                </a>
              </td>
            ))
            : null}
        </tr>
      </tbody>
    </table>
  );
};

SocialIcon.craft = {
  displayName: "Social Image",
  props: {
    fontSize: "15",
    textAlign: "left",
    fontWeight: "500",
    width: "auto",
    color: { r: 92, g: 90, b: 90, a: 1 },
    margin: [0, 10, 0, 10],
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
  related: {
    toolbar: () => {
      return <SocialSetting />;
    },
  },
};
