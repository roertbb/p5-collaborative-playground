import * as React from "react";
import {
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import "./SandpackWrapper.css";
import { CustomEditor } from "./CustomEditor";

export function SandpackWrapper() {
  return (
    <SandpackProvider
      customSetup={{
        entry: "/index.js",
        dependencies: { p5: "latest" },
        files: {
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
