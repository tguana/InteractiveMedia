//
var ventanasX = 10;
//
var ventanasY = 420;
//
var seg;
//
var min;
//
var hora;
//
var angulo;
//
var angulo1;

function setup() {
  //
  createCanvas(900, 700);
  //
  angleMode(DEGREES);
}

function draw() {
  //
  seg = second();
  //
  min = minute();
  //
  hora = hour();
  //
  angulo = map(hora, 1, 12, 0, 180);
  //
  angulo1 = map(hora, 1, 12, 0, 180);

  //
  if (hora >= 6) {
    //
    background(128, 191, 255);
  }
  //
  if (min >= 45 && min < 60 && hora == 5) {
    //
    background(0 + (min / 5), 13 + (min / 5), 26 + (min / 5));
  }
  //
  if (hora >= 12) {
    //
    background(255, 255, 102);
  }
  //
  if (min >= 45 && min < 60 && hora == 11) {
    //
    background(128 + (min / 5), 191 + (min / 5), 255 - (min / 5));
  }
  //
  if (hora >= 15) {
    //
    background(128);
  }
  //
  if (min >= 45 && min < 60 && hora == 14) {
    //
    background(255 + (min / 5), 255 + (min / 5), 102 + (min / 5));
  }
  //
  if (hora >= 18) {
    //
    background(0, 13, 26);
  }
  //
  if (min >= 45 && min < 60 && hora == 17) {
    //
    background(128 - (min / 5), 128 - (min / 5), 128 - (min / 5));
  }
  if (hora > 18) {
    //
    push();
    //
    translate(width / 2, height / 2);
    //
    rotate(angulo);
    //
    noStroke();
    //
    fill(255);
    //
    ellipse(0, 300, 60, 60);
    //
    fill(255, 255, 255, 90);
    //
    ellipse(0, 300, 100, 100);
    //
    pop();
  }

  if (hora > 6 && hora < 18) {
    //
    push();
    //
    translate(width / 2, height / 2);
    //
    rotate(angulo1);
    //
    if (hora > 10 && hora < 15) {
      //
      fill(255, 255, 0, 80);
      //
      ellipse(0, 250, 200, 200);
      //
      fill(255, 204, 0, 200);
      //
      ellipse(0, 250, 150, 150);
    }
    //
    fill(255, 255, 102, 190);
    //
    ellipse(0, 250, 100, 100);
    //
    fill(255, 255, 153);
    //
    ellipse(0, 250, 50, 50);
    if(hora>15){
    //
    noStroke();
    //
    fill(92, 92, 138);
    //
    ellipse(0, 250, 100, 100)
    //
    ellipse(50, 250, 80, 100)
    //
    ellipse(100, 250, 100, 100)
    //
    ellipse(0, 170, 100, 100)
    //
    ellipse(-60, 170, 90, 90)
    //
    ellipse(-120, 180, 100, 100)
    }
    //
    pop();
  }
  //
  stroke(51);
  //
  if (hora > 18) {
    //
    fill(0);
  }
  //
  if (hora < 18) {
    //
    fill(64);
  }
  //
  rect(0, 450, 100, 300);
  //
  rect(100, 410, 80, 300);
  //
  rect(180, 430, 120, 300);
  //
  rect(770, 420, 100, 300);
  //
  rect(870, 410, 80, 300);
  //
  rect(680, 460, 90, 300);
  //
  rect(400, 440, 100, 300);
  //
  rect(500, 410, 80, 300);
  //
  rect(580, 425, 120, 300);
  //
  stroke(77);
  //
  if (hora > 18) {
    //
    fill(26);
  }
  //
  if (hora < 18) {
    //
    fill(128);
  }
  //
  rect(0, 400, 80, 300);
  //
  rect(80, 500, 80, 300);
  //
  rect(160, 450, 100, 300);
  //
  rect(260, 410, 80, 300);
  //
  rect(340, 430, 120, 300);
  //
  rect(460, 480, 90, 300);
  //
  rect(550, 440, 100, 300);
  //
  rect(650, 400, 80, 300);
  //
  rect(730, 490, 120, 300);
  //
  rect(850, 435, 120, 300);
  //
  if (hora > 18 ) {
    //
    fill(255, 255, 0);
  }
  if (hora < 18) {
    fill(179, 255, 255);
  }
  
  rect(ventanasX, ventanasY, 20, 20);
  //
  rect(ventanasX + 35, ventanasY, 20, 20);
  //
  rect(ventanasX, ventanasY + 35, 20, 20);
  //
  rect(ventanasX + 35, ventanasY + 35, 20, 20);
  //
  rect(ventanasX, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 35, ventanasY + 70, 20, 20);
  //
  rect(ventanasX, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 35, ventanasY + 105, 20, 20);
  //
  rect(ventanasX, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 35, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 35, ventanasY + 175, 20, 20);
  //
  rect(ventanasX, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 35, ventanasY + 70, 20, 20);
  //
  rect(ventanasX, ventanasY + 210, 20, 20);
  //
  rect(ventanasX + 35, ventanasY + 210, 20, 20);
  //****
  //
  rect(ventanasX + 80, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 115, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 80, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 115, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 80, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 115, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 80, ventanasY + 210, 20, 20);
  //
  rect(ventanasX + 115, ventanasY + 210, 20, 20);
  //****
  //
  rect(ventanasX + 160, ventanasY + 35, 80, 20);
  //
  rect(ventanasX + 160, ventanasY + 70, 80, 20);
  //
  rect(ventanasX + 160, ventanasY + 105, 80, 20);
  //
  rect(ventanasX + 160, ventanasY + 140, 80, 20);
  //
  rect(ventanasX + 160, ventanasY + 175, 80, 20);
  //
  rect(ventanasX + 160, ventanasY + 210, 80, 20);
  //***
  //
  rect(ventanasX + 260, ventanasY, 20, 20);
  //
  rect(ventanasX + 295, ventanasY, 20, 20);
  //
  rect(ventanasX + 260, ventanasY + 35, 20, 20);
  //
  rect(ventanasX + 295, ventanasY + 35, 20, 20);
  //
  rect(ventanasX + 260, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 295, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 260, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 295, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 260, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 295, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 295, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 260, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 260, ventanasY + 210, 20, 20);
  //
  rect(ventanasX + 295, ventanasY + 210, 20, 20);
  //****
  //
  rect(ventanasX + 340, ventanasY + 35, 100, 20);
  //
  rect(ventanasX + 340, ventanasY + 70, 100, 20);
  //
  rect(ventanasX + 340, ventanasY + 105, 100, 20);
  //
  rect(ventanasX + 340, ventanasY + 140, 100, 20);
  //
  rect(ventanasX + 340, ventanasY + 175, 100, 20);
  //
  rect(ventanasX + 340, ventanasY + 210, 100, 20);
  //***
  //
  rect(ventanasX + 465, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 505, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 465, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 505, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 465, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 505, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 505, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 465, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 465, ventanasY + 210, 20, 20);
  //
  rect(ventanasX + 505, ventanasY + 210, 20, 20);
  //***
  //
  rect(ventanasX + 560, ventanasY + 35, 20, 20);
  //
  rect(ventanasX + 600, ventanasY + 35, 20, 20);
  //
  rect(ventanasX + 560, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 600, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 560, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 600, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 560, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 600, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 600, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 560, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 560, ventanasY + 210, 20, 20);
  //
  rect(ventanasX + 600, ventanasY + 210, 20, 20);
  //***
  //
  rect(ventanasX + 655, ventanasY, 20, 20);
  //
  rect(ventanasX + 690, ventanasY, 20, 20);
  //
  rect(ventanasX + 655, ventanasY + 35, 20, 20);
  //
  rect(ventanasX + 690, ventanasY + 35, 20, 20);
  //
  rect(ventanasX + 655, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 690, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 655, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 690, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 655, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 690, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 690, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 655, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 655, ventanasY + 210, 20, 20);
  //
  rect(ventanasX + 690, ventanasY + 210, 20, 20);
  //****
  //
  rect(ventanasX + 730, ventanasY + 75, 100, 20);
  //
  rect(ventanasX + 730, ventanasY + 107, 100, 20);
  //
  rect(ventanasX + 730, ventanasY + 140, 100, 20);
  //
  rect(ventanasX + 730, ventanasY + 175, 100, 20);
  //
  rect(ventanasX + 730, ventanasY + 210, 100, 20);
  //***
  //
  rect(ventanasX + 855, ventanasY + 35, 20, 20);
  //
  rect(ventanasX + 855, ventanasY + 70, 20, 20);
  //
  rect(ventanasX + 855, ventanasY + 105, 20, 20);
  //
  rect(ventanasX + 855, ventanasY + 140, 20, 20);
  //
  rect(ventanasX + 855, ventanasY + 175, 20, 20);
  //
  rect(ventanasX + 855, ventanasY + 210, 20, 20);

}