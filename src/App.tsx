import * as React from "react";
import {
  SandpackPreview,
  SandpackProvider,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { CustomEditor } from "./CustomEditor";

const initCode = `
let x = 0;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);
  rect(x, 20, 25, 25);
  x++;
}
`;

const wrapperCode = `
import p5 from 'p5';

const fs = require('fs')
const path = require('path')
const content = fs.readFileSync("index.js", 'utf8')

const bindings = \`
if (draw) {
  if (window.draw) draw()
  window.draw = draw
}

if (setup) {
  if (window.setup) setup()
  window.setup = setup
}
\`

if (content) { 
  (new Function(content+bindings))() 
}
`;

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
