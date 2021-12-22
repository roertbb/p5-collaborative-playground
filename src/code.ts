export const sampleCode = `import p5 from "p5"

const s = sketch => {
  let x = 0;

  sketch.setup = () => {
    sketch.createCanvas(300, 300);
  }

  sketch.draw = () => {
    sketch.background(220);
    sketch.rect(x, 20, 25, 25);
    x++;
  }
};

new p5(s);
`;
