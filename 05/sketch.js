//Variable que determina la posición en X de las ventanas de los edificios.
var ventanasX = 10;
//Variable que determina la posición en Y de las ventanas de los edificios.
var ventanasY = 420;
//Variable que guarda los segundos.
var seg;
//Variable que guarda los minutos.
var min;
//Variable que guarda la hora.
var hora;
//Variable que determina el ángulo de movimineto de la Luna.
var angulo;
//Variable que determina el ángulo de movimineto del Sol.
var angulo1;

function setup() {
  //Función que determina el tamaño del canvas.
  createCanvas(900, 700);
  //Función que determina el sistema que se va a utilizar en las medidas.
  angleMode(DEGREES);
}

function draw() {
  //Función que determina el contenido de la variable "seg".
  seg = second();
  //Función que determina el contenido de la variable "min".
  min = minute();
  //Función que determina el contenido de la variable "hora".
  hora = hour();
  //Función que determina el contenido de la variable "ángulo".
  angulo = map(hora, 1, 24, 0, 180);
  //Función que determina el contenido de la variable "ángulo1".
  angulo1 = map(hora, 1, 12, 0, 180);

  //Función condicional que se activa cuando la hora es mayor que 6. 6am
  if (hora >= 6) {
    //Función que determina el color del fondo.
    background(128, 191, 255);
  }
  //Función condicional que se activa cuando los minutos son mayores que 45 y la hora es igual a 5. 5:45am
  if (min >= 45 && min < 60 && hora == 5) {
    //Función que determina el color del fondo.
    background(0 + (min / 5), 13 + (min / 5), 26 + (min / 5));
  }
  //Función condicional que se activa cuando la hora es mayor que 12. 12m
  if (hora >= 12) {
    //Función que determina el color del fondo.
    background(255, 255, 102);
  }
  //Función condicional que se activa cuando los minutos son mayores que 45 y la hora es igual a 11. 11:45am
  if (min >= 45 && min < 60 && hora == 11) {
    //Función que determina el color del fondo.
    background(128 + (min / 5), 191 + (min / 5), 255 - (min / 5));
  }
  //Función condicional que se activa cuando la hora es mayor que 15. 3pm
  if (hora >= 15) {
    //Función que determina el color del fondo.
    background(128);
  }
  //Función condicional que se activa cuando los minutos son mayores que 45 y la hora es igual a 14. 2:45pm
  if (min >= 45 && min < 60 && hora == 14) {
    //Función que determina el color del fondo.
    background(255 + (min / 5), 255 + (min / 5), 102 + (min / 5));
  }
  //Función condicional que se activa cuando la hora es mayor que 18. 6pm
  if (hora >= 18) {
    //Función que determina el color del fondo.
    background(0, 13, 26);
  }
  //Función condicional que se activa cuando los minutos son mayores que 45 y la hora es igual a 17. 5:45pm
  if (min >= 45 && min < 60 && hora == 17) {
    //Función que determina el color del fondo.
    background(128 - (min / 5), 128 - (min / 5), 128 - (min / 5));
  }
  //Función condicional que se activa cuando son mas de las 6pm.
  if (hora > 18) {
    //Función que determina que contenidos se ven afectados.
    push();
    //Función que determia el cambio de eje sobre el cual gira la figura.
    translate(width / 2, height / 2);
    //Función que determina el ángulo al que rota la figura.
    rotate(angulo);
    //Función que determina el contorno.
    noStroke();
    //Función que determina el color del relleno.
    fill(255);
    //Conjunto de funciones que crean la Luna.
    ellipse(0, 300, 60, 60);
    fill(255, 255, 255, 90);
    ellipse(0, 300, 100, 100);
    //Función que determina que contenidos se ven afectados.
    pop();
  }
  //Función condicional que se activa cuando son más de las 6am y menos de las 6pm.
  if (hora > 6 && hora < 18) {
    //Función que determina que contenidos se ven afectados.
    push();
    //Función que determia el cambio de eje sobre el cual gira la figura.
    translate(width / 2, height / 2);
    //Función que determina el ángulo al que rota la figura.
    rotate(angulo1);
    //Función condicional que se activa cuando son más de las 10am y menos de las 3pm.
    if (hora > 10 && hora < 15) {
      //Función que determina el color del relleno.
      fill(255, 255, 0, 80);
      //Conjunto de funciones que crean los rayos exteriores del Sol.
      ellipse(0, 250, 200, 200);
      fill(255, 204, 0, 200);
      ellipse(0, 250, 150, 150);
    }
    //Conjunto de funciones que crean el Sol.
    fill(255, 255, 102, 190);
    ellipse(0, 250, 100, 100);
    fill(255, 255, 153);
    ellipse(0, 250, 50, 50);
    //Función condicional que se activa cuando son más de las 3pm.
    if (hora > 15 && hora < 16) {
      //Función que determina el contorno.
      noStroke();
      //Función que determina el color del relleno.
      fill(92, 92, 138);
      //Conjunto de funciones que crean las nuves.
      ellipse(0, 250, 100, 100)
      ellipse(50, 250, 80, 100)
      ellipse(100, 250, 100, 100)
      ellipse(0, 170, 100, 100)
      ellipse(-60, 170, 90, 90)
      ellipse(-120, 180, 100, 100)
    }
    //Función que determina que contenidos se ven afectados.
    pop();
  }
  //Función que determina el color del contorno.
  stroke(51);
  //Función condicional que se activa cuando son más de las 6pm.
  if (hora > 18) {
    //Función que determina el color del relleno.
    fill(0);
  }
  //Función condicional que se activa cuando son menos de las 6pm.
  if (hora < 18) {
    //Función que determina el color del relleno.
    fill(64);
  }
  //Conjunto de funciones que crean los edificios en segundo plano.
  rect(0, 450, 100, 300);
  rect(100, 410, 80, 300);
  rect(180, 430, 120, 300);
  rect(770, 420, 100, 300);
  rect(870, 410, 80, 300);
  rect(680, 460, 90, 300);
  rect(400, 440, 100, 300);
  rect(500, 410, 80, 300);
  rect(580, 425, 120, 300);
  //Función que determina el color del contorno.
  stroke(77);
  //Función condicional que se activa cuando son más de las 6pm.
  if (hora > 18) {
    //Función que determina el color del relleno.
    fill(26);
  }
  //Función condicional que se activa cuando son menos de las 6pm.
  if (hora < 18) {
    //Función que determina el color del relleno.
    fill(128);
  }
  //Conjunto de funciones que crean los edificios en primer plano.
  rect(0, 400, 80, 300);
  rect(80, 500, 80, 300);
  rect(160, 450, 100, 300);
  rect(260, 410, 80, 300);
  rect(340, 430, 120, 300);
  rect(460, 480, 90, 300);
  rect(550, 440, 100, 300);
  rect(650, 400, 80, 300);
  rect(730, 490, 120, 300);
  rect(850, 435, 120, 300);
  //Función condicional que se activa cuando son más de las 6pm.
  if (hora > 18) {
    //Función que determina el color del relleno.
    fill(255, 255, 0);
  }
  //Función condicional que se activa cuando son menos de las 6pm.
  if (hora < 18) {
    //Función que determina el color del relleno.
    fill(179, 255, 255);
  }
  //Conjunto de funciones de crean las ventanas de los edificios.
  rect(ventanasX, ventanasY, 20, 20);
  rect(ventanasX + 35, ventanasY, 20, 20);
  rect(ventanasX, ventanasY + 35, 20, 20);
  rect(ventanasX + 35, ventanasY + 35, 20, 20);
  rect(ventanasX, ventanasY + 70, 20, 20);
  rect(ventanasX + 35, ventanasY + 70, 20, 20);
  rect(ventanasX, ventanasY + 105, 20, 20);
  rect(ventanasX + 35, ventanasY + 105, 20, 20);
  rect(ventanasX, ventanasY + 140, 20, 20);
  rect(ventanasX + 35, ventanasY + 140, 20, 20);
  rect(ventanasX + 35, ventanasY + 175, 20, 20);
  rect(ventanasX, ventanasY + 175, 20, 20);
  rect(ventanasX + 35, ventanasY + 70, 20, 20);
  rect(ventanasX, ventanasY + 210, 20, 20);
  rect(ventanasX + 35, ventanasY + 210, 20, 20);
  rect(ventanasX + 80, ventanasY + 105, 20, 20);
  rect(ventanasX + 115, ventanasY + 105, 20, 20);
  rect(ventanasX + 80, ventanasY + 140, 20, 20);
  rect(ventanasX + 115, ventanasY + 140, 20, 20);
  rect(ventanasX + 80, ventanasY + 175, 20, 20);
  rect(ventanasX + 115, ventanasY + 175, 20, 20);
  rect(ventanasX + 80, ventanasY + 210, 20, 20);
  rect(ventanasX + 115, ventanasY + 210, 20, 20);
  rect(ventanasX + 160, ventanasY + 35, 80, 20);
  rect(ventanasX + 160, ventanasY + 70, 80, 20);
  rect(ventanasX + 160, ventanasY + 105, 80, 20);
  rect(ventanasX + 160, ventanasY + 140, 80, 20);
  rect(ventanasX + 160, ventanasY + 175, 80, 20);
  rect(ventanasX + 160, ventanasY + 210, 80, 20);
  rect(ventanasX + 260, ventanasY, 20, 20);
  rect(ventanasX + 295, ventanasY, 20, 20);
  rect(ventanasX + 260, ventanasY + 35, 20, 20);
  rect(ventanasX + 295, ventanasY + 35, 20, 20);
  rect(ventanasX + 260, ventanasY + 70, 20, 20);
  rect(ventanasX + 295, ventanasY + 70, 20, 20);
  rect(ventanasX + 260, ventanasY + 105, 20, 20);
  rect(ventanasX + 295, ventanasY + 105, 20, 20);
  rect(ventanasX + 260, ventanasY + 140, 20, 20);
  rect(ventanasX + 295, ventanasY + 140, 20, 20);
  rect(ventanasX + 295, ventanasY + 175, 20, 20);
  rect(ventanasX + 260, ventanasY + 175, 20, 20);
  rect(ventanasX + 260, ventanasY + 210, 20, 20);
  rect(ventanasX + 295, ventanasY + 210, 20, 20);
  rect(ventanasX + 340, ventanasY + 35, 100, 20);
  rect(ventanasX + 340, ventanasY + 70, 100, 20);
  rect(ventanasX + 340, ventanasY + 105, 100, 20);
  rect(ventanasX + 340, ventanasY + 140, 100, 20);
  rect(ventanasX + 340, ventanasY + 175, 100, 20);
  rect(ventanasX + 340, ventanasY + 210, 100, 20);
  rect(ventanasX + 465, ventanasY + 70, 20, 20);
  rect(ventanasX + 505, ventanasY + 70, 20, 20);
  rect(ventanasX + 465, ventanasY + 105, 20, 20);
  rect(ventanasX + 505, ventanasY + 105, 20, 20);
  rect(ventanasX + 465, ventanasY + 140, 20, 20);
  rect(ventanasX + 505, ventanasY + 140, 20, 20);
  rect(ventanasX + 505, ventanasY + 175, 20, 20);
  rect(ventanasX + 465, ventanasY + 175, 20, 20);
  rect(ventanasX + 465, ventanasY + 210, 20, 20);
  rect(ventanasX + 505, ventanasY + 210, 20, 20);
  rect(ventanasX + 560, ventanasY + 35, 20, 20);
  rect(ventanasX + 600, ventanasY + 35, 20, 20);
  rect(ventanasX + 560, ventanasY + 70, 20, 20);
  rect(ventanasX + 600, ventanasY + 70, 20, 20);
  rect(ventanasX + 560, ventanasY + 105, 20, 20);
  rect(ventanasX + 600, ventanasY + 105, 20, 20);
  rect(ventanasX + 560, ventanasY + 140, 20, 20);
  rect(ventanasX + 600, ventanasY + 140, 20, 20);
  rect(ventanasX + 600, ventanasY + 175, 20, 20);
  rect(ventanasX + 560, ventanasY + 175, 20, 20);
  rect(ventanasX + 560, ventanasY + 210, 20, 20);
  rect(ventanasX + 600, ventanasY + 210, 20, 20);
  rect(ventanasX + 655, ventanasY, 20, 20);
  rect(ventanasX + 690, ventanasY, 20, 20);
  rect(ventanasX + 655, ventanasY + 35, 20, 20);
  rect(ventanasX + 690, ventanasY + 35, 20, 20);
  rect(ventanasX + 655, ventanasY + 70, 20, 20);
  rect(ventanasX + 690, ventanasY + 70, 20, 20);
  rect(ventanasX + 655, ventanasY + 105, 20, 20);
  rect(ventanasX + 690, ventanasY + 105, 20, 20);
  rect(ventanasX + 655, ventanasY + 140, 20, 20);
  rect(ventanasX + 690, ventanasY + 140, 20, 20);
  rect(ventanasX + 690, ventanasY + 175, 20, 20);
  rect(ventanasX + 655, ventanasY + 175, 20, 20);
  rect(ventanasX + 655, ventanasY + 210, 20, 20);
  rect(ventanasX + 690, ventanasY + 210, 20, 20);
  rect(ventanasX + 730, ventanasY + 75, 100, 20);
  rect(ventanasX + 730, ventanasY + 107, 100, 20);
  rect(ventanasX + 730, ventanasY + 140, 100, 20);
  rect(ventanasX + 730, ventanasY + 175, 100, 20);
  rect(ventanasX + 730, ventanasY + 210, 100, 20);
  rect(ventanasX + 855, ventanasY + 35, 20, 20);
  rect(ventanasX + 855, ventanasY + 70, 20, 20);
  rect(ventanasX + 855, ventanasY + 105, 20, 20);
  rect(ventanasX + 855, ventanasY + 140, 20, 20);
  rect(ventanasX + 855, ventanasY + 175, 20, 20);
  rect(ventanasX + 855, ventanasY + 210, 20, 20);
}
