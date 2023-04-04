import React, { useEffect, useRef } from "react";
import { useEditor } from "@craftjs/core";
import cx from "classnames";
import { Header } from "./Header";
import { TopTabPanel } from "../../selectors/TabPannel/TopTabPanel";

export const Viewport = ({ children }) => {
  const htmlref = useRef(null);

  const { enabled, connectors } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));


  return (
    <div className="viewport">
      <div
        className={cx(["flex h-full overflow-hidden flex-row w-full fixed"])}
      >
        <TopTabPanel />
        <div className="page-container flex flex-1 h-full flex-col">
          <Header htmlExport={htmlref} />

          <div
            style={{
              display: "flex",
              justifyContent: enabled ? "flex-start" : "center",
              gap: "0 10px",
            }}
            className={cx([
              "craftjs-renderer   h-full w-full transition  overflow-auto",
              {
                "bg-renderer-gray": enabled,
              },
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <div style={{ marginTop: "32px", marginLeft: enabled ? "220px" : "" }}>
              <table
                style={{ fontFamily: "monospace", position: "static", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}
                ref={htmlref}
              >
                {children}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
