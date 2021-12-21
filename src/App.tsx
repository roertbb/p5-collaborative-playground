import * as React from "react";
import {
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { CustomEditor } from "./components/CustomEditor";
import { initCode, wrapperCode } from "./code";
import "./App.css";

function App() {
  return (
    <div>
      <SandpackProvider
        customSetup={{
          entry: "/wrapper.js",
          dependencies: { p5: "latest" },
          files: {
            "/index.js": {
              code: initCode,
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
    </div>
  );
}

export default App;
