
var canvas;
var size;
var brush;
var color;
var alpha;

function setup() {
  canvas = createCanvas(width, height);
}

function draw() {
  noStroke();
  fill(0, 0, 0, 100); //color + alpha
  // ellipse(mouseX,mouseY,10); //brush1
  ellipse(mouseX, mouseY, 10, 20); //brush2 + size
  // rect(mouseX,mouseY,10); //brush3
  // rect(mouseX,mouseY,10,20); //brush4
}
