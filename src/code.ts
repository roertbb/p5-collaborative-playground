export const emptyTemplate = `
function setup() {}
function draw() {}
`;

export const initCode = `
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

export const wrapperCode = `
import p5 from 'p5';

const fs = require('fs')
const path = require('path')
const content = fs.readFileSync("index.js", 'utf8')

const bindings = \`
if (setup) {
  if (window.setup) setup()
  window.setup = setup
} else {
  window.setup = () => {}
}

if (draw) {
  if (window.draw) draw()
  window.draw = draw
} else {
  window.draw = () => {}
}
\`

if (content) { 
  (new Function(content+bindings))() 
}
`;
