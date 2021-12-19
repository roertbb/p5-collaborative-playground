import * as React from "react";
import {
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { CustomEditor } from "./CustomEditor";

const initCode = `import p5 from 'p5';

let x = 0;

function setup() {
  // console.log("setup()");
  createCanvas(300, 300);
}

function draw() {
  // console.log("draw()", x);
  background(220);
  rect(x, 20, 25, 25);
  x++;
}

window.setup = setup 
window.draw = draw
`;

function App() {
  return (
    <div>
      <SandpackProvider
        customSetup={{
          entry: "/index.js",
          dependencies: { p5: "latest" },
          files: {
            "/index.js": {
              code: initCode,
              active: true,
            },
          },
        }}
      >
        <SandpackThemeProvider>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
            }}
          >
            <CustomEditor />
            <SandpackPreview />
          </div>
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
}

export default App;
