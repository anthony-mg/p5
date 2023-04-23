//PGrahics object
let pg;
//field of view
let fov;
//Camera Z position
let cameraZ;

function setup() {
  //Create the canvas
  createCanvas(400, 400);

  //Create the PGraphics object. This is what you will be drawing on, see all "pg." before every P5js function calls
  pg = createGraphics(50, 50, WEBGL);
  fov = PI / 3;
  cameraZ = 50;
}

function draw() {
  background(0);
  //IMPORTANT! Tells P5JS to NOT antialias
  noSmooth();

  //Basic camera setup for 3D, not super important
  pg.camera(0, 0, cameraZ, 0, 0, 0, 0, 1, 0);
  pg.perspective(fov, pg.width / pg.height, 0.001, 1500);
}
