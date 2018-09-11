//Conjunto de variables que determinann la ubicación del botón #1.
var bx0 = 10;
var by0 = 10;
//Conjunto de variables que determinann la ubicación del botón #2.
var bx1 = 30;
var by1 = 10;
//Conjunto de variables que determinann la ubicación del botón #3.
var bx2 = 10;
var by2 = 30;
//Conjunto de variables que determinann la ubicación del botón #4.
var bx3 = 30;
var by3 = 30;
//Conjunto de variables que determinann la ubicación del botón #5.
var bx4 = 10;
var by4 = 50;
//Conjunto de variables que determinann la ubicación del botón #6.
var bx5 = 30;
var by5 = 50;
//Conjunto de variables que determinann la ubicación del botón #7.
var bx6 = 10;
var by6 = 70;
//Conjunto de variables que determinann la ubicación del botón #8.
var bx7 = 30;
var by7 = 70;
//Conjunto de variables que determinann la ubicación del botón #9.
var bx8 = 10;
var by8 = 90;
//Conjunto de variables que determinann la ubicación del botón #10.
var bx9 = 30;
var by9 = 90;
//Conjunto de variables que determinann la ubicación del botón #11.
var bx10 = 10;
var by10 = 120;
//Conjunto de variables que determinann la ubicación del botón #12.
var bx11 = 30;
var by11 = 120;
//Conjunto de variables que determinann la ubicación del botón #13.
var bx12 = 10;
var by12 = 140;
//Conjunto de variables que determinann la ubicación del botón #14.
var bx13 = 30;
var by13 = 140;
//Conjunto de variables que determinann la ubicación del botón #15.
var bx14 = 10;
var by14 = 160;
//Conjunto de variables que determinann la ubicación del botón #16.
var bx15 = 30;
var by15 = 160;
//Conjunto de variables que determinann la ubicación del botón #17.
var bx16 = 10;
var by16 = 180;
//Conjunto de variables que determinann la ubicación del botón #18.
var bx17 = 30;
var by17 = 180;
//Conjunto de variables que determinann la ubicación del botón #19.
var bx18 = 10;
var by18 = 200;
//Conjunto de variables que determinann la ubicación del botón #20.
var bx19 = 30;
var by19 = 200;
//Variable que determina el tamaño de los botones (0-20).
var tam = 15;
//Variable que determina el color seleccionado.
var cselect = 0;
//Variable que determina la herramienta seleccionada.
var select = 0;

function setup() {
  //Función que crea el canvas y determina su tamaño.
  createCanvas(700, 700);
  //Función que determina el color del fondo.
  background(255);
}

function draw() {
  //Función que determina el color del relleno.
  fill(200);
  //Función que determina el grsor del contorno.
  strokeWeight(1);
  //Función que deermina el color del contorno.
  stroke(0);
  //Función que crea el rectángulo delimitando los botones de color.
  beginShape();
  vertex(0, 0);
  vertex(55, 0);
  vertex(55, 115);
  vertex(0, 115);
  endShape(CLOSE);
  //Función que crea el rectángulo delimitando los botones de herramienta.
  fill(200);
  beginShape();
  vertex(55, 115);
  vertex(0, 115);
  vertex(0, 225);
  vertex(55, 225);
  endShape(CLOSE);
  //Conjunto de funciones que crean el boton #1.
  fill(255);
  rect(bx0, by0, tam, tam);
  //Conjunto de funciones que crean el boton #2.
  fill(0);
  rect(bx1, by1, tam, tam);
  //Conjunto de funciones que crean el boton #3.
  fill(255, 0, 0);
  rect(bx2, by2, tam, tam);
  //Conjunto de funciones que crean el boton #4.
  fill(0, 255, 0);
  rect(bx3, by3, tam, tam);
  //Conjunto de funciones que crean el boton #5.
  fill(0, 0, 255);
  rect(bx4, by4, tam, tam);
  //Conjunto de funciones que crean el boton #6.
  fill(255, 255, 0);
  rect(bx5, by5, tam, tam);
  //Conjunto de funciones que crean el boton #7.
  fill(0, 255, 255);
  rect(bx6, by6, tam, tam);
  //Conjunto de funciones que crean el boton #8.
  fill(255, 0, 255);
  rect(bx7, by7, tam, tam);
  //Conjunto de funciones que crean el boton #9.
  fill(102, 51, 0);
  rect(bx8, by8, tam, tam);
  //Conjunto de funciones que crean el boton #10.
  fill(102, 0, 102);
  rect(bx9, by9, tam, tam);
  //Conjunto de funciones que crean el boton #11.
  fill(255);
  ellipse(bx10 + (tam / 2), by10 + (tam / 2), tam, tam);
  point(bx10 + (tam / 2) - 3, by10 + (tam / 2) - 3);
  point(bx10 + (tam / 2) + 1, by10 + (tam / 2) - 3);
  noFill();
  arc(bx10 + (tam / 2), by10 + (tam / 2), 7, 7, 0, HALF_PI + HALF_PI);
  //Conjunto de funciones que crean el boton #12.
  fill(255);
  rect(bx11, by11, tam, tam);
  line(bx11, by11, bx11 + tam, by11 + tam);
  strokeWeight(2);
  point(bx11 + 5, by11 + 11);
  point(bx11 + 11, by11 + 5);
  //Conjunto de funciones que crean el boton #13.
  strokeWeight(1);
  rect(bx12, by12 + 5, tam - 5, tam - 5);
  line(bx12, by12 + 5, bx12 + tam, by12);
  line(bx12 + 10, by12 + 5, bx12 + tam, by12);
  line(bx12 + 10, by12 + 15, bx12 + tam, by12);
  //Conjunto de funciones que crean el boton #14.
  line(bx13, by13, bx13 + tam, by13 + tam)
  line(bx13, by13 + 3, bx13 + 7, by13 + tam)
  line(bx13 + 3, by13, bx13 + tam, by13 + 7)
  //Conjunto de funciones que crean el boton #15.
  fill(mouseY, mouseX, 255);
  ellipse(bx14 + (tam / 2), by14 + (tam / 2), tam, tam);
  fill(mouseX, 0, mouseY);
  ellipse(bx14 + (tam / 2), by14 + (tam / 2), tam - 5, tam - 5);
  //Conjunto de funciones que crean el boton #16.
  fill(255);
  triangle(bx15 + tam, by15, bx15 + 10, by15 + tam, bx15, by15 + tam);
  noFill();
  //Conjunto de funciones que crean el boton #17.
  triangle(bx16, by16 + 5, bx16 + 8, by16 + tam, bx16 + tam, by16 + 5);
  triangle(bx16, by16 + 12, bx16 + 8, by16, bx16 + tam, by16 + 12);
  //Conjunto de funciones que crean el boton #18.
  fill(255);
  rect(bx17+2,by17, tam/2-3,tam/2-3);
  rect(bx17+tam/2+2,by17, tam/2-3,tam/2-3);
  rect(bx17+2,by17+tam/2, tam/2-3,tam/2-3);
  rect(bx17+tam/2+2,by17+tam/2, tam/2-3,tam/2-3);
  //Conjunto de funciones que crean el boton #19.
  fill(mouseY, 255, mouseX);
  rect(bx18, by18, tam, tam);
  //Conjunto de funciones que crean el boton #20.
  fill(255);
  rect(bx19, by19, tam, tam);
  line(bx19, by19, bx19 + tam, by19 + tam);
  line(bx19 + tam, by19, bx19, by19 + tam);
  //Función que determina el color seleccionado en el botón de color #1.
  if (mouseX > bx0 && mouseX < bx0 + 10 && mouseY > by0 && mouseY < by0 + 10) {
    cselect = 0;
  }
  //Función que determina el color seleccionado en el botón de color #2.
  if (mouseX > bx1 && mouseX < bx1 + 10 && mouseY > by1 && mouseY < by1 + 10) {
    cselect = 1;
  }
  //Función que determina el color seleccionado en el botón de color #3.
  if (mouseX > bx2 && mouseX < bx2 + 10 && mouseY > by2 && mouseY < by2 + 10) {
    cselect = 2;
  }
  //Función que determina el color seleccionado en el botón de color #4.
  if (mouseX > bx3 && mouseX < bx3 + 10 && mouseY > by3 && mouseY < by3 + 10) {
    cselect = 3;
  }
  //Función que determina el color seleccionado en el botón de color #5.
  if (mouseX > bx4 && mouseX < bx4 + 10 && mouseY > by4 && mouseY < by4 + 10) {
    cselect = 4;
  }
  //Función que determina el color seleccionado en el botón de color #6.
  if (mouseX > bx5 && mouseX < bx5 + 10 && mouseY > by5 && mouseY < by5 + 10) {
    cselect = 5;
  }
  //Función que determina el color seleccionado en el botón de color #7.
  if (mouseX > bx6 && mouseX < bx6 + 10 && mouseY > by6 && mouseY < by6 + 10) {
    cselect = 6;
  }
  //Función que determina el color seleccionado en el botón de color #8.
  if (mouseX > bx7 && mouseX < bx7 + 10 && mouseY > by7 && mouseY < by7 + 10) {
    cselect = 7;
  }
  //Función que determina el color seleccionado en el botón de color #9.
  if (mouseX > bx8 && mouseX < bx8 + 10 && mouseY > by8 && mouseY < by8 + 10) {
    cselect = 8;
  }
  //Función que determina el color seleccionado en el botón de color #10.
  if (mouseX > bx9 && mouseX < bx9 + 10 && mouseY > by9 && mouseY < by9 + 10) {
    cselect = 9;
  }
  //Función que determina el color seleccionado en la herramineta #1.
  if (mouseX > bx10 && mouseX < bx10 + 10 && mouseY > by10 && mouseY < by10 + 10) {
    select = 0;
  }
  //Función que determina el color seleccionado en la herramineta #2.
  if (mouseX > bx11 && mouseX < bx11 + 10 && mouseY > by11 && mouseY < by11 + 10) {
    select = 1;
  }
  //Función que determina el color seleccionado en la herramineta #3.
  if (mouseX > bx12 && mouseX < bx12 + 10 && mouseY > by12 && mouseY < by12 + 10) {
    select = 2;
  }
  //Función que determina el color seleccionado en la herramineta #4.
  if (mouseX > bx13 && mouseX < bx13 + 10 && mouseY > by13 && mouseY < by13 + 10) {
    select = 3;
  }
  //Función que determina el color seleccionado en la herramineta #5.
  if (mouseX > bx14 && mouseX < bx14 + 10 && mouseY > by14 && mouseY < by14 + 10) {
    select = 4;
  }
  //Función que determina el color seleccionado en la herramineta #6.
  if (mouseX > bx15 && mouseX < bx15 + 10 && mouseY > by15 && mouseY < by15 + 10) {
    select = 5;
  }
  //Función que determina el color seleccionado en la herramineta #7.
  if (mouseX > bx16 && mouseX < bx16 + 10 && mouseY > by16 && mouseY < by16 + 10) {
    select = 6;
  }
  //Función que determina el color seleccionado en la herramineta #8.
  if (mouseX > bx17 && mouseX < bx17 + 10 && mouseY > by17 && mouseY < by17 + 10) {
    select = 7;
  }
  //Función que determina el color seleccionado en la herramineta #9.
  if (mouseX > bx18 && mouseX < bx18 + 10 && mouseY > by18 && mouseY < by18 + 10) {
    select = 8;
  }
  //Función que determina el color seleccionado en la herramineta #10.
  if (mouseX > bx19 && mouseX < bx19 + 10 && mouseY > by19 && mouseY < by19 + 10) {
    select = 9;
  }
  //Función condicional que se activa cuando el mouse está presionado o click.
  if (mouseIsPressed) {
    //Función condicional que se activa cuando se selecciona el botón de color #1.
    if (cselect == 0) {
      //Función que determina el color del relleno.
      fill(255);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #2.
    if (cselect == 1) {
      //Función que determina el color del relleno.
      fill(0);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #3.
    if (cselect == 2) {
      //Función que determina el color del relleno.
      fill(255, 0, 0);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #4.
    if (cselect == 3) {
      //Función que determina el color del relleno.
      fill(0, 255, 0);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #5.
    if (cselect == 4) {
      //Función que determina el color del relleno.
      fill(0, 0, 255);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #6.
    if (cselect == 5) {
      //Función que determina el color del relleno.
      fill(255, 255, 0);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #7.
    if (cselect == 6) {
      fill(0, 255, 255);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #8.
    if (cselect == 7) {
      //Función que determina el color del relleno.
      fill(255, 0, 255);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #9.
    if (cselect == 8) {
      //Función que determina el color del relleno.
      fill(102, 51, 0);
    }
    //Función condicional que se activa cuando se selecciona el botón de color #10.
    if (cselect == 9) {
      //Función que determina el color del relleno.
      fill(102, 0, 102);
    }
    //Función condicional que se activa cuando se selecciona la herramienta #1.
    if (select == 0) {
      //Función condicional que se activa cuando se selecciona el botón de color #1.
      if (cselect == 1) {
        //Función que determina el color del contorno.
        stroke(255);
      }
      //Función que determina el grosor del contorno.
      strokeWeight(2);
      //Conjunto de funciones que crean la herramienta #1.
      ellipse(mouseX, mouseY, 50, 50);
      point(mouseX - 10, mouseY - 5);
      point(mouseX + 10, mouseY - 5);
      arc(mouseX, mouseY, 30, 30, 0, HALF_PI + HALF_PI);
    }
    //Función condicional que se activa cuando se selecciona la herramienta #2.
    if (select == 1) {
      //Función que determina el relleno.
      noStroke();
      //Funcion condicional que se activa cuando está seleccionado el boton de color #1.
      if (cselect == 0) {
        //Funcion que define el color del contorno.
        stroke(1);
      }
      //Conjunto de funciones que crean la herramienta #2.
      ellipse(mouseX, mouseY, 5, 5);
      ellipse(mouseY, mouseX, 5, 5);
    }
    //Función condicional que se activa cuando se selecciona la herramienta #3.
    if (select == 2) {
      //Conjunto de funciones que crean la herramikenta #3.
      triangle(700, 0, mouseX, mouseY, mouseX + 20, mouseY)
      triangle(700, 0, mouseX + 20, mouseY, mouseX + 20, mouseY + 20)
      rect(mouseX, mouseY, 20, 20)
    }
    //Función condicional que se activa cuando se selecciona la herramienta #4.
    if (select == 3) {
      //Conjunto de funciones condicionales que determinan el cambio de color del contorno.
      if (cselect == 2) {
        stroke(255, 0, 0)
      }
      if (cselect == 3) {
        stroke(0, 255, 0)
      }
      if (cselect == 4) {
        stroke(0, 0, 255)
      }
      if (cselect == 5) {
        stroke(255, 255, 0)
      }
      if (cselect == 6) {
        stroke(0, 255, 255)
      }
      if (cselect == 7) {
        stroke(255, 0, 255)
      }
      if (cselect == 8) {
        stroke(102, 58, 0)
      }
      if (cselect == 9) {
        stroke(102, 0, 102)
      }
      //Función que crea la herramienta #4.
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX / 2, mouseY / 2);
      endShape(CLOSE);
    }
    //Función condicional que se activa cuando se selecciona la herramienta #5.
    if (select == 4) {
      //Conjunto de funciones que crean la herramienta #5. 
      fill(mouseY, mouseX, 255);
      ellipse(mouseX, mouseY, 40, 40);
      fill(mouseX, 0, 255);
      ellipse(mouseX, mouseY, 30, 30);
      fill(mouseY, 255.0);
      ellipse(mouseX, mouseY, 20, 20);
      fill(mouseX, mouseY, 0);
      ellipse(mouseX, mouseY, 10, 10);
    }
    //Función condicional que se activa cuando se selecciona la herramienta #6.
    if (select == 5) {
      //Función que crea la herramienta #6.
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseY + 10, mouseX - 18);
      vertex(mouseY - 30, mouseX + 14);
      vertex(mouseY + 30, mouseX + 20);
      vertex(mouseX + 10, mouseY - 10);
      endShape(CLOSE);
    }
    //Función condicional que se activa cuando se selecciona la herramienta #7.
    if (select == 6) {
      //Función que determina el relleno.
      noFill();
      //Conjunto de funciones condicionales que determinan el cambio de color del contorno.
      if (cselect == 2) {
        stroke(255, 0, 0)
      }
      if (cselect == 3) {
        stroke(0, 255, 0)
      }
      if (cselect == 4) {
        stroke(0, 0, 255)
      }
      if (cselect == 5) {
        stroke(255, 255, 0)
      }
      if (cselect == 6) {
        stroke(0, 255, 255)
      }
      if (cselect == 7) {
        stroke(255, 0, 255)
      }
      if (cselect == 8) {
        stroke(102, 58, 0)
      }
      if (cselect == 9) {
        stroke(102, 0, 102)
      }
      //Función que determina el relleno.
      noFill();
      //Conjunto de funciones que crean la herramienta #7.
      triangle(mouseX, mouseY, mouseX + 28, mouseY - 45, mouseX + 56, mouseY);
      triangle(mouseX, mouseY - 30, mouseX + 28, mouseY + 20, mouseX + 56, mouseY - 30);
    }
    //Función condicional que se activa cuando se selecciona la herramienta #8.
    if (select == 7) {
      //Conjunto de funciones que crean la herramienta #8.
      ellipse(mouseX + 5, mouseY + 5, 20, 20)
      ellipse(mouseY + 5, mouseX + 5, 20, 20)
      ellipse(mouseY + 5, mouseY + 5, 20, 20)
      ellipse(mouseX + 5, mouseX + 5, 20, 20)
      //Función que determina el color del relleno.
      fill(255, 153, 0);
      rect(mouseX, mouseY, 10, 10)
      rect(mouseY, mouseX, 10, 10)
      rect(mouseY, mouseY, 10, 10)
      rect(mouseX, mouseX, 10, 10)
    }
    //Función condicional que se activa cuando se selecciona la herramienta #9.
    if (select == 8) {
      //Función que determina el color del fondo.
      background(mouseY, 255, mouseX);
    }
    //Función condicional que se activa cuando se selecciona la herramienta #10.
    if (select == 9) {
      //Función que determina el color del fondo.
      background(255);
    }
  }
}