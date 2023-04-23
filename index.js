//PGrahics object
let pg;
//field of view
let fov;
//Camera Z position
let cameraZ;

function setup() {
  //Create the canvas
  createCanvas(800, 800);

  //Create the PGraphics object. This is what you will be drawing on, see all "pg." before every P5js function calls
  pg = createGraphics(width / 4, height / 4, WEBGL);
  fov = PI / 3;
  cameraZ = -100;
}

function draw() {
  pg.background(0);
  pg.camera(0, 0, cameraZ, 0, 0, 0, 0, 1, 0);
  pg.noFill();
  pg.stroke(255, 0, 0);
  pg.strokeWeight(pg.width / (width/2));

  pg.push();
  pg.rotateZ(PI / 4);
  pg.rotateX(frameCount * 0.01);
  pg.box(50);
  pg.pop();
  noSmooth();

  image(pg, 0, 0, width, height);
}
