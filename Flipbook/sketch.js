// Group of variables that determine the size and movement of the ship on the x-axis.
var x = 200;
var x1 = 220;
var x2 = 180;
// Group of variables that determine the size and movement of the ship on the y-axis.
var y = 40;
var y1 = 80;
var y2 = 70;
// Variable that determines the direction of the lateral movement of the ships.
var d = 4;
// Variable that determines the direction of the vertical movement of the ships.
var dy = 0;
// Variable that determines the size of the flame.
var tam = 20;
// Variable that determines the speed of asteroids.
var ay = 1;
// Variable that determines the speed of planets.
var py = 1;
// Variable that determines the speed of the "speed lines".
var ry = 1;
//  Variable that separates the "speed lines" between them.
var rx = 10;
// Variable that determines the speed of the final frame or "hyper-speed"
var fy = 10;

function setup() {

  // Función que crea el canvas y determina su tamaño.
  createCanvas(390, 380);
  // Función que determina la velocidad de frames por segundo.
  frameRate(30);
}

function draw() {

  // Function that determines the background color.
  background(0, 13, 26);
  // Function that determines the color of the outline.
  stroke(102, 255, 153);
  // Function that determines the color of the fill.
  fill(255, 102, 0);
  // Set of ellipses that form the planets.
  ellipse(250, py - 50, 50, 50);
  fill(153, 0, 153);
  ellipse(400, py - 300, 200, 200);
  fill(51, 204, 51);
  ellipse(30, py - 30, 150, 150);
  fill(102, 153, 153);
  ellipse(150, py - 400, 100, 100);
  fill(151, 204, 51);
  ellipse(250, py - 600, 150, 150);
  // Function determines that there should be no outline.
  noStroke();
  // Set of boxes that make up the "speed lines".
  fill(255);
  rect(40, ry - 40, 3, 30);
  rect(200 - rx, ry - 40, 3, 30);
  rect(340 + rx, ry - 40, 3, 30);
  rect(150, ry - 50, 3, 30);
  rect(100, ry - 50, 3, 30);
  rect(250 + rx, ry - 100, 3, 30);
  rect(280 - rx, ry - 40, 3, 30);
  rect(40 - rx, ry - 100, 3, 30);
  rect(200, ry - 50, 3, 30);
  rect(340, ry - 40, 3, 30);
  rect(150, ry - 100, 3, 30);
  rect(100 + rx, ry - 50, 3, 30);
  rect(250, ry - 100, 3, 30);
  rect(280, ry - 100, 3, 30);
  rect(40 + rx, ry - 60, 3, 30);
  rect(200, ry - 50, 3, 30);
  rect(340, ry - 40, 3, 30);
  rect(150, ry - 100, 3, 30);
  rect(100, ry - 40, 3, 30);
  rect(250 - rx, ry - 50, 3, 30);
  rect(280 + rx, ry - 50, 3, 30);
  rect(40, ry - 60, 3, 30);
  rect(200 - rx, ry - 70, 3, 30);
  rect(340 + rx, ry - 50, 3, 30);
  rect(150, ry - 60, 3, 30);
  rect(100, ry - 70, 3, 30);
  rect(250 + rx, ry - 90, 3, 30);
  rect(280 - rx, ry - 60, 3, 30);
  rect(40 - rx, ry - 80, 3, 30);
  rect(200, ry - 50, 3, 30);
  rect(340, ry - 60, 3, 30);
  rect(150, ry - 100, 3, 30);
  rect(100 + rx, ry - 70, 3, 30);
  rect(250, ry - 90, 3, 30);
  rect(280, ry - 60, 3, 30);
  rect(40 + rx, ry - 80, 3, 30);
  rect(200, ry - 70, 3, 30);
  rect(340, ry - 50, 3, 30);
  rect(150, ry - 100, 3, 30);
  rect(100, ry - 90, 3, 30);
  rect(250 - rx, ry - 80, 3, 30);
  rect(280 + rx, ry - 60, 3, 30);
  rect(0, fy - 1000, 400, 900);
  // Function that determines the increase in the variable py and "+3".
  py = py + 3;
  // Conditional function that determines the increase in the variables py, ay, ry, f and if the frameCount is greater than 195.
  if (frameCount > 195) {
    py = py + 10;
    ay = ay + 10;
    ry = ry + 22;
    fy = fy + 20;
  }
  // Function that determines the color of the outline.
  stroke(255, 0, 0);
  // Function that determines the color of the fill.
  fill(255, 102, 0)
  // Function that creates the flame of the ship.
  ellipse(x, y2 + 10, tam, tam);
  stroke(255, 204, 0);
  // Function that determines the color of the filling.
  fill(204, 0, 0);
  // Function that creates the exterior of the ship.
  beginShape();
  vertex(x, y - 15);
  vertex(x1 + 10, y1 + 10);
  vertex(x, y2 + 10);
  vertex(x2 - 10, y1 + 10);
  endShape(CLOSE);
  // Function determines that there should be no outline.
  noStroke();
  // Function that determines the color of the filling.
  fill(0, 0, 204);
  // Function that creates the interior of the ship.
  beginShape();
  vertex(x, y);
  vertex(x1, y1);
  vertex(x, y2);
  vertex(x2, y1);
  endShape(CLOSE);
  // Conditional function that determines the increase in the lateral direction of the ship if the frameCount is between 20 and 175.
  if (frameCount < 175 && frameCount > 20) {
    //
    x = x + 1 * d;
    //
    x1 = x1 + 1 * d;
    //
    x2 = x2 + 1 * d;
  }
  // Conditional function that determines the increase in the lateral direction of the ship if the frameCount is between 20 and 175.
  if (x > 300 && frameCount < 175 && frameCount > 20) {
    d = -4;
  }
  // Conditional function that determines the increase in the lateral direction of the ship if the frameCount is between 20 and 175.
  if (x < 100 && frameCount < 175 && frameCount > 20) {
    d = 4;
  }
  // Set of functions that determine the vertical direction of the ship.
  y = y + 1 * dy;
  y1 = y1 + 1 * dy;
  y2 = y2 + 1 * dy;
  // Conditional function that determines the direction and vertical speed of the ship if the variable "y" is less than 300
  if (y < 300) {
    dy = 2;
  }
  //Determine the exception of the previous function.
  else {
    dy = 0;
  }
  // Conditional function that determines the direction and vertical speed of the ship if the frameCount is greater than 200.
  if (frameCount > 200) {
    dy = -15;
  }
  // Conditional function that determines the increase in flame size.
  if (frameCount > 195 && tam < 35) {
    tam = tam + 1;
  }
  // Function that determines the color of the fill.
  fill(102, 51, 0);
  // Set of functions that create asteroid # 1.
  beginShape();
  vertex(160 + 5, 109 + ay - 80);
  vertex(146 + 5, 36 + ay - 80);
  vertex(103 + 5, 12 + ay - 80);
  vertex(69 + 5, 36 + ay - 80);
  vertex(31 + 5, 93 + ay - 80);
  vertex(54 + 5, 110 + ay - 80);
  vertex(109 + 5, 103 + ay - 80);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(155 + 5, 104 + ay - 80);
  vertex(140 + 5, 30 + ay - 80);
  vertex(100 + 5, 20 + ay - 80);
  vertex(40 + 5, 70 + ay - 80);
  vertex(40 + 5, 90 + ay - 80);
  vertex(50 + 5, 100 + ay - 80);
  vertex(103 + 5, 100 + ay - 80);
  endShape(CLOSE);
  // Set of functions that create asteroid # 2.
  fill(102, 51, 0);
  beginShape();
  vertex(345, 109 + ay - 205);
  vertex(386, 56 + ay - 205);
  vertex(323, 12 + ay - 205);
  vertex(289, 36 + ay - 205);
  vertex(251, 93 + ay - 205);
  vertex(274, 110 + ay - 205);
  vertex(329, 103 + ay - 205);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(340, 104 + ay - 205);
  vertex(380, 50 + ay - 205);
  vertex(320, 20 + ay - 205);
  vertex(260, 70 + ay - 205);
  vertex(260, 90 + ay - 205);
  vertex(270, 100 + ay - 205);
  vertex(323, 100 + ay - 205);
  endShape(CLOSE);
  // Set of functions that create asteroid # 3.
  fill(102, 51, 0);
  beginShape();
  vertex(135, 79 + ay - 300);
  vertex(166, 36 + ay - 300);
  vertex(83, 12 + ay - 300);
  vertex(19, 23 + ay - 300);
  vertex(01, 93 + ay - 300);
  vertex(24, 110 + ay - 300);
  vertex(89, 96 + ay - 300);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(130, 74 + ay - 300);
  vertex(160, 30 + ay - 300);
  vertex(80, 20 + ay - 300);
  vertex(20, 30 + ay - 300);
  vertex(10, 90 + ay - 300);
  vertex(20, 100 + ay - 300);
  vertex(83, 90 + ay - 300);
  endShape(CLOSE);
  // Set of functions that create asteroid # 4.
  fill(102, 51, 0);
  beginShape();
  vertex(115, 129 + ay - 500);
  vertex(166, 16 + ay - 500);
  vertex(133, 2 + ay - 500);
  vertex(19, 16 + ay - 500);
  vertex(21, 53 + ay - 500);
  vertex(74, 100 + ay - 500);
  vertex(79, 93 + ay - 500);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(112, 124 + ay - 500);
  vertex(160, 13 + ay - 500);
  vertex(120, 10 + ay - 500);
  vertex(21, 12 + ay - 500);
  vertex(25, 50 + ay - 500);
  vertex(77, 95 + ay - 500);
  vertex(85, 85 + ay - 500);
  endShape(CLOSE);
  // Set of functions that create asteroid # 5.
  fill(102, 51, 0);
  beginShape();
  vertex(345, 129 + ay - 500);
  vertex(386, 16 + ay - 500);
  vertex(323, 12 + ay - 500);
  vertex(289, 16 + ay - 500);
  vertex(251, 53 + ay - 500);
  vertex(245, 110 + ay - 500);
  vertex(329, 93 + ay - 500);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(340, 124 + ay - 500);
  vertex(380, 13 + ay - 500);
  vertex(320, 10 + ay - 500);
  vertex(260, 12 + ay - 500);
  vertex(260, 50 + ay - 500);
  vertex(255, 105 + ay - 500);
  vertex(323, 85 + ay - 500);
  endShape(CLOSE);
  // Function that determines the increase of the "ay" variable by +4.
  ay = ay + 4;
  // Function that determines the end of the animation.
  if (frameCount > 240) {
    //
    background(255);
  }
}
