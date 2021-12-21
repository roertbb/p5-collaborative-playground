import * as React from "react";
import {
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import "./SandpackWrapper.css";
import { CustomEditor } from "./CustomEditor";
import { emptyTemplate, wrapperCode } from "../code";

export function SandpackWrapper() {
  return (
    <SandpackProvider
      customSetup={{
        entry: "/wrapper.js",
        dependencies: { p5: "latest" },
        files: {
          "/index.js": {
            code: emptyTemplate,
            active: true,
          },
          "/wrapper.js": {
            code: wrapperCode,
            hidden: true,
          },
        },
      }}
    >
      <SandpackThemeProvider>
        <div className="sandpack-wrapper">
          <CustomEditor />
          <SandpackPreview />
        </div>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
}
