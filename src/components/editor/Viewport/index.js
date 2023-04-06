import { useRef } from "react";
import { useEditor } from "@craftjs/core";
import cx from "classnames";
import { Header } from "./Header";
import EditorSidebar from "./EditorSidebar";

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
        <EditorSidebar />
        <div className="page-container flex flex-1 h-full flex-col">
          <Header htmlExport={htmlref} />

          <div
            style={{
              display: "flex",
              justifyContent: enabled ? "flex-start" : "center",
              gap: "0 10px"
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
                style={{ fontFamily: "monospace", width: '100%', minHeight: '300px', maxWidth: '600px' }}
                ref={htmlref}
              >
                <tbody> {children}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
