// Grupo de variables que determinan el tamaño y movimineto de la nave en el eje x.
var x = 200;
var x1 = 220;
var x2 = 180;
// Grupo de variables que determinan el tamaño y movimineto de la nave en el eje y.
var y = 40;
var y1 = 80;
var y2 = 70;
//Variable que determina la dirección del movimiento lateral de la naves.
var d = 4;
// Variable que determina la dirección del movimiento vertical de la nave.
var dy = 0;
// Variable que determina el tamaño de la llama.
var tam = 20;
// Variable que determina la velocidad de los asteroides.
var ay = 1;
// Variable que determina la velocidad de los planetas.
var py = 1;
// Variable que determina la velocidad de las "lineas de velocidad".
var ry = 1;
//  Variable que separa las "lineas de velocidad" entre ellas.
var rx = 10;
// Variable que determina la velocidad del cuadro final o "hiper-velocidad"
var fy = 10;

function setup() {

  // Función que crea el canvas y determina su tamaño.
  createCanvas(390, 380);
  // Función que determina la velocidad de frames por segundo.
  frameRate(30);
}

function draw() {

  // Función que determina el color del fondo.
  background(0, 13, 26);
  // Función que determina el color del contorno,
  stroke(102, 255, 153);
  // Función que determina el color del relleno.
  fill(255, 102, 0);
  // Conjunto de ellipses que conforman los planetas.
  ellipse(250, py - 50, 50, 50);
  fill(153, 0, 153);
  ellipse(400, py - 300, 200, 200);
  fill(51, 204, 51);
  ellipse(30, py - 30, 150, 150);
  fill(102, 153, 153);
  ellipse(150, py - 400, 100, 100);
  fill(151, 204, 51);
  ellipse(250, py - 600, 150, 150);
	// Función que determina que no debe haber contorno.
  noStroke();
  // Con junto de rectangulos que conforman las "lineas de velocidad".
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
  // Función que determina el incremento en la variable py "+3".
  py = py + 3;
  // Función condicional que determina el incremento en las variables py,ay,ry,fy sí el frameCount es mayor que 195.
  if (frameCount > 195) {
    py = py + 10;
    ay = ay + 10;
    ry = ry + 22;
    fy = fy + 20;
  }
  // Función que determina el color del contorno.
  stroke(255, 0, 0);
  // Función que determina el color del relleno.
  fill(255, 102, 0)
  // Funcion que crea la llama de la nave.
  ellipse(x, y2 + 10, tam, tam);
  stroke(255, 204, 0);
  // Funcion que determina el color del relleno.
  fill(204, 0, 0);
  // Función que crea el exterior de la nave.
  beginShape();
  vertex(x, y - 15);
  vertex(x1 + 10, y1 + 10);
  vertex(x, y2 + 10);
  vertex(x2 - 10, y1 + 10);
  endShape(CLOSE);
  // Función que determina que no debe haber contorno.
  noStroke();
  // Función que determina el color del relleno.
  fill(0, 0, 204);
  //Función que crea el interior de la nave.
  beginShape();
  vertex(x, y);
  vertex(x1, y1);
  vertex(x, y2);
  vertex(x2, y1);
  endShape(CLOSE);
  // Función condicional que determina el incremento de la dirección lateral de la nave si el frameCount se encuentra entre 20 y 175.
  if (frameCount < 175 && frameCount > 20) {
    //
    x = x + 1 * d;
    //
    x1 = x1 + 1 * d;
    //
    x2 = x2 + 1 * d;
  }
  // Función condicional que determina la dirección lateral de la nave si el frameCount se encuentra entre 20 y 175.
  if (x > 300 && frameCount < 175 && frameCount > 20) {
    d = -4;
  }
  // Función condicional que determina la dirección lateral de la nave si el frameCount se encuentra entre 20 y 175.
  if (x < 100 && frameCount < 175 && frameCount > 20) {
    d = 4;
  }
  // Conjunto de funciones que determinan la dirección vertical de la nave.
  y = y + 1 * dy;
  y1 = y1 + 1 * dy;
  y2 = y2 + 1 * dy;
  // Función condicional que determina la dirección y velocidad vertical de la nave si la variable "y" es menor que 300
  if (y < 300) {
    dy = 2;
  }
  // Determina la excepción de la anterior función.
  else {
    dy = 0;
  }
  // Función condicional que determina la dirección y velocidad vertical de la nave si el frameCount es mayor que 200.
  if (frameCount > 200) {
    dy = -15;
  }
  // Función cpndicional que determina el incremento en el tamaño de la llama.
  if (frameCount > 195 && tam < 35) {
    tam = tam + 1;
  }
  // Función que determina el color del relleno.
  fill(102, 51, 0);
  // Conjunto de funciones que crean el asteroide #1.
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
  // Conjunto de funciones que crean el asteroide #2.
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
  // Conjunto de funciones que crean el asteroide #3.
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
  // Conjunto de funciones que crean el asteroide #4.
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
  // Conjunto de funciones que crean el asteroide #5.
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
  // Función que determina el incremento de la variable "ay" en +4.
  ay = ay + 4;
  // Funcion que determina el fin de la animación.
  if (frameCount > 240) {
    //
    background(255);
  }
}