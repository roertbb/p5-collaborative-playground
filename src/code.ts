export const wrapperCode = `
import p5 from "p5"
import fs from "fs"

const content = fs.readFileSync("index.js")

const wrapper = code => \`
var setup, 
draw, 
preload,
mousePressed,
mouseReleased,
mouseClicked,
doubleClicked,
mouseWheel,
mouseMoved,
mouseOver,
mouseOut,
mouseDragged,
keyPressed,
keyTyped,
keyReleased;

\${code}
  
window.setup = setup
window.draw = draw
window.preload = preload
window.mousePressed = mousePressed
window.mouseReleased = mouseReleased
window.mouseClicked = mouseClicked
window.doubleClicked = doubleClicked
window.mouseWheel = mouseWheel
window.mouseMoved = mouseMoved
window.mouseOver = mouseOver
window.mouseOut = mouseOut
window.mouseDragged = mouseDragged
window.keyPressed = keyPressed
window.keyTyped = keyTyped
window.keyReleased = keyReleased
\`

new Function(wrapper(content))()

new p5()
`;

export const exampleCode = `let x = 200;
let y = 200;

function setup() {
  createCanvas(400,400);
  background(0)
};

function draw() {
  background(200,200,10);
  fill(255);
  rect(x, y, 50, 50);
};
`;
