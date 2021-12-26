import * as React from "react";
import {
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import "./SandpackWrapper.css";
import { CustomEditor } from "./CustomEditor";
import { wrapperCode } from "../code";
import "@codesandbox/sandpack-react/dist/index.css";

export function SandpackWrapper() {
  return (
    <SandpackProvider
      customSetup={{
        entry: "/wrapper.js",
        dependencies: { p5: "latest" },
        files: {
          "/wrapper.js": {
            code: wrapperCode,
            hidden: true,
          },
          "/index.js": {
            code: "",
            active: true,
          },
        },
      }}
    >
      <SandpackThemeProvider>
        <div className="sandpack-wrapper">
          <CustomEditor />
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </div>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
}
