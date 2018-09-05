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
  createCanvas(windowWidth, windowHeight);
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
  ellipse(250*width/390, (py - 50)*height/380, 50*width/390, 50*height/380);
  fill(153, 0, 153);
  ellipse(400*width/390, (py - 300)*height/380, 200*width/390, 200*height/380);
  fill(51, 204, 51);
  ellipse(30*width/390, (py - 30)*height/380, 150*width/390, 150*height/380);
  fill(102, 153, 153);
  ellipse(150*width/390, (py - 400)*height/380, 100*width/390, 100*height/380);
  fill(151, 204, 51);
  ellipse(250*width/390, (py - 600)*height/380, 150*width/390, 150*height/380);
	// Función que determina que no debe haber contorno.
  noStroke();
  // Con junto de rectangulos que conforman las "lineas de velocidad".
  fill(255);
  rect(40*width/390, (ry - 40)*height/380, 3*width/390, 30*height/380);
  rect((200 - rx)*width/390, (ry - 40)*height/380, 3*width/390, 30*height/380);
  rect((340 + rx)*width/390, (ry - 40)*height/380, 3*width/390, 30*height/380);
  rect(150*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect(100*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect((250 + rx)*width/390, (ry - 100)*height/380, 3*width/390, 30*height/380);
  rect((280 - rx)*width/390, (ry - 40)*height/380, 3*width/390, 30*height/380);
  rect((40 - rx)*width/390, (ry - 100)*height/380, 3*width/390, 30*height/380);
  rect(200*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect(340*width/390, (ry - 40)*height/380, 3*width/390, 30*height/380);
  rect(150*width/390, (ry - 100)*height/380, 3*width/390, 30*height/380);
  rect((100 + rx)*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect(250*width/390, (ry - 100)*height/380, 3*width/390, 30*height/380);
  rect(280*width/390, (ry - 100)*height/380, 3*width/390, 30*height/380);
  rect((40 + rx)*width/390, (ry - 60)*height/380, 3*width/390, 30*height/380);
  rect(200*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect(340*width/390, (ry - 40)*height/380, 3*width/390, 30*height/380);
  rect(150*width/390, (ry - 100)*height/380, 3*width/390, 30*height/380);
  rect(100*width/390, (ry - 40)*height/380, 3*width/390, 30*height/380);
  rect((250 - rx)*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect((280 + rx)*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect(40*width/390, (ry - 60)*height/380, 3*width/390, 30*height/380);
  rect((200 - rx)*width/390, (ry - 70)*height/380, 3*width/390, 30*height/380);
  rect((340 + rx)*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect(150*width/390, (ry - 60)*height/380, 3*width/390, 30*height/380);
  rect(100*width/390, (ry - 70)*height/380, 3*width/390, 30*height/380);
  rect((250 + rx)*width/390, (ry - 90)*height/380, 3*width/390, 30*height/380);
  rect((280 - rx)*width/390, (ry - 60)*height/380, 3*width/390, 30*height/380);
  rect((40 - rx)*width/390, (ry - 80)*height/380, 3*width/390, 30*height/380);
  rect(200*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect(340*width/390, (ry - 60)*height/380, 3*width/390, 30*height/380);
  rect(150*width/390, (ry - 100)*height/380, 3*width/390, 30*height/380);
  rect((100 + rx)*width/390, (ry - 70)*height/380, 3*width/390, 30*height/380);
  rect(250*width/390, (ry - 90)*height/380, 3*width/390, 30*height/380);
  rect(280*width/390, (ry - 60)*height/380, 3*width/390, 30*height/380);
  rect((40 + rx)*width/390, (ry - 80)*height/380, 3*width/390, 30*height/380);
  rect(200*width/390, (ry - 70)*height/380, 3*width/390, 30*height/380);
  rect(340*width/390, (ry - 50)*height/380, 3*width/390, 30*height/380);
  rect(150*width/390, (ry - 100)*height/380, 3*width/390, 30*height/380);
  rect(100*width/390, (ry - 90)*height/380, 3*width/390, 30*height/380);
  rect((250 - rx)*width/390, (ry - 80)*height/380, 3*width/390, 30*height/380);
  rect((280 + rx)*width/390, (ry - 60)*height/380, 3*width/390, 30*height/380);
  rect(0*width/390, (fy - 1000)*height/380, 400*width/390, 900*height/380);
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
  ellipse(x*width/390, (y2 + 10)*height/380, tam*width/390, tam*height/380);
  stroke(255, 204, 0);
  // Funcion que determina el color del relleno.
  fill(204, 0, 0);
  // Función que crea el exterior de la nave.
  beginShape();
  vertex(x*width/390, (y - 15)*height/380);
  vertex((x1 + 10)*width/390, (y1 + 10)*height/380);
  vertex(x*width/390, (y2 + 10)*height/380);
  vertex((x2 - 10)*width/390, (y1 + 10)*height/380);
  endShape(CLOSE);
  // Función que determina que no debe haber contorno.
  noStroke();
  // Función que determina el color del relleno.
  fill(0, 0, 204);
  //Función que crea el interior de la nave.
  beginShape();
  vertex(x*width/390, y*height/380);
  vertex(x1*width/390, y1*height/380);
  vertex(x*width/390, y2*height/380);
  vertex(x2*width/390, y1*height/380);
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
  vertex((160 + 5)*width/390, (109 + ay - 80)*height/380);
  vertex((146 + 5)*width/390, (36 + ay - 80)*height/380);
  vertex((103 + 5)*width/390, (12 + ay - 80)*height/380);
  vertex((69 + 5)*width/390, (36 + ay - 80)*height/380);
  vertex((31 + 5)*width/390, (93 + ay - 80)*height/380);
  vertex((54 + 5)*width/390, (110 + ay - 80)*height/380);
  vertex((109 + 5)*width/390, (103 + ay - 80)*height/380);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex((155 + 5)*width/390, (104 + ay - 80)*height/380);
  vertex((140 + 5)*width/390, (30 + ay - 80)*height/380);
  vertex((100 + 5)*width/390, (20 + ay - 80)*height/380);
  vertex((40 + 5)*width/390, (70 + ay - 80)*height/380);
  vertex((40 + 5)*width/390, (90 + ay - 80)*height/380);
  vertex((50 + 5)*width/390, (100 + ay - 80)*height/380);
  vertex((103 + 5)*width/390, (100 + ay - 80)*height/380);
  endShape(CLOSE);
  // Conjunto de funciones que crean el asteroide #2.
  fill(102, 51, 0);
  beginShape();
  vertex(345*width/390, (109 + ay - 205)*height/380);
  vertex(386*width/390, (56 + ay - 205)*height/380);
  vertex(323*width/390, (12 + ay - 205)*height/380);
  vertex(289*width/390, (36 + ay - 205)*height/380);
  vertex(251*width/390, (93 + ay - 205)*height/380);
  vertex(274*width/390, (110 + ay - 205)*height/380);
  vertex(329*width/390, (103 + ay - 205)*height/380);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(340*width/390, (104 + ay - 205)*height/380);
  vertex(380*width/390, (50 + ay - 205)*height/380);
  vertex(320*width/390, (20 + ay - 205)*height/380);
  vertex(260*width/390, (70 + ay - 205)*height/380);
  vertex(260*width/390, (90 + ay - 205)*height/380);
  vertex(270*width/390, (100 + ay - 205)*height/380);
  vertex(323*width/390, (100 + ay - 205)*height/380);
  endShape(CLOSE);
  // Conjunto de funciones que crean el asteroide #3.
  fill(102, 51, 0);
  beginShape();
  vertex(135*width/390, (79 + ay - 300)*height/380);
  vertex(166*width/390, (36 + ay - 300)*height/380);
  vertex(83*width/390, (12 + ay - 300)*height/380);
  vertex(19*width/390, (23 + ay - 300)*height/380);
  vertex(01*width/390, (93 + ay - 300)*height/380);
  vertex(24*width/390, (110 + ay - 300)*height/380);
  vertex(89*width/390, (96 + ay - 300)*height/380);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(130*width/390, (74 + ay - 300)*height/380);
  vertex(160*width/390, (30 + ay - 300)*height/380);
  vertex(80*width/390, (20 + ay - 300)*height/380);
  vertex(20*width/390, (30 + ay - 300)*height/380);
  vertex(10*width/390, (90 + ay - 300)*height/380);
  vertex(20*width/390, (100 + ay - 300)*height/380);
  vertex(83*width/390, (90 + ay - 300)*height/380);
  endShape(CLOSE);
  // Conjunto de funciones que crean el asteroide #4.
  fill(102, 51, 0);
  beginShape();
  vertex(115*width/390, (129 + ay - 500)*height/380);
  vertex(166*width/390, (16 + ay - 500)*height/380);
  vertex(133*width/390, (2 + ay - 500)*height/380);
  vertex(19*width/390, (16 + ay - 500)*height/380);
  vertex(21*width/390, (53 + ay - 500)*height/380);
  vertex(74*width/390, (100 + ay - 500)*height/380);
  vertex(79*width/390, (93 + ay - 500)*height/380);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(112*width/390, (124 + ay - 500)*height/380);
  vertex(160*width/390, (13 + ay - 500)*height/380);
  vertex(120*width/390, (10 + ay - 500)*height/380);
  vertex(21*width/390, (12 + ay - 500)*height/380);
  vertex(25*width/390, (50 + ay - 500)*height/380);
  vertex(77*width/390, (95 + ay - 500)*height/380);
  vertex(85*width/390, (85 + ay - 500)*height/380);
  endShape(CLOSE);
  // Conjunto de funciones que crean el asteroide #5.
  fill(102, 51, 0);
  beginShape();
  vertex(345*width/390, (129 + ay - 500)*height/380);
  vertex(386*width/390, (16 + ay - 500)*height/380);
  vertex(323*width/390, (12 + ay - 500)*height/380);
  vertex(289*width/390, (16 + ay - 500)*height/380);
  vertex(251*width/390, (53 + ay - 500)*height/380);
  vertex(245*width/390, (110 + ay - 500)*height/380);
  vertex(329*width/390, (93 + ay - 500)*height/380);
  endShape(CLOSE);
  fill(153, 102, 51);
  beginShape();
  vertex(340*width/390, (124 + ay - 500)*height/380);
  vertex(380*width/390, (13 + ay - 500)*height/380);
  vertex(320*width/390, (10 + ay - 500)*height/380);
  vertex(260*width/390, (12 + ay - 500)*height/380);
  vertex(260*width/390, (50 + ay - 500)*height/380);
  vertex(255*width/390, (105 + ay - 500)*height/380);
  vertex(323*width/390, (85 + ay - 500)*height/380);
  endShape(CLOSE);
  // Función que determina el incremento de la variable "ay" en +4.
  ay = ay + 4;
  // Funcion que determina el fin de la animación.
  if (frameCount > 240) {
    //
    background(255);
   }
  // //
  // if(frameCount<=240){
  // if(frameCount % 2 == 0){
  //  saveCanvas("FlipBook" + frameCount, 'jpg');
  // }
  // }
}
