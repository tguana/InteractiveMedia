//Set of variables that determine the location of button # 1.
var bx0 = 10;
var by0 = 10;
//Set of variables that determine the location of button # 2.
var bx1 = 30;
var by1 = 10;
//Set of variables that determine the location of button # 3.
var bx2 = 10;
var by2 = 30;
//Set of variables that determine the location of button #4.
var bx3 = 30;
var by3 = 30;
//Set of variables that determine the location of button #5.
var bx4 = 10;
var by4 = 50;
//Set of variables that determine the location of button #6.
var bx5 = 30;
var by5 = 50;
//Set of variables that determine the location of button #7.
var bx6 = 10;
var by6 = 70;
//Set of variables that determine the location of button #8.
var bx7 = 30;
var by7 = 70;
//Set of variables that determine the location of button #9.
var bx8 = 10;
var by8 = 90;
//Set of variables that determine the location of button #10.
var bx9 = 30;
var by9 = 90;
//Set of variables that determine the location of button #11.
var bx10 = 10;
var by10 = 120;
//Set of variables that determine the location of button #12.
var bx11 = 30;
var by11 = 120;
//Set of variables that determine the location of button #13.
var bx12 = 10;
var by12 = 140;
//Set of variables that determine the location of button #14.
var bx13 = 30;
var by13 = 140;
//Set of variables that determine the location of button #15.
var bx14 = 10;
var by14 = 160;
//Set of variables that determine the location of button #16.
var bx15 = 30;
var by15 = 160;
//Set of variables that determine the location of button #17.
var bx16 = 10;
var by16 = 180;
//Set of variables that determine the location of button #18.
var bx17 = 30;
var by17 = 180;
//Set of variables that determine the location of button #19.
var bx18 = 10;
var by18 = 200;
//Set of variables that determine the location of button #20.
var bx19 = 30;
var by19 = 200;
//Variable that determines the size of the buttons (0-20).
var tam = 15;
//Variable that determines the selected color.
var cselect = 0;
//Variable that determines the selected tool.
var select = 0;

function setup() {
  //Function that creates the canvas and determines its size.
  createCanvas(700, 700);
  //Function that determines the background color.
  background(255);
}

function draw() {
  //Function that determines the color of the fill.
  fill(200);
  //Function that determines the thickness of the outline.
  strokeWeight(1);
  //Function that determines the color of the outline.
  stroke(0);
  //Function that creates the rectangle by delimiting the color buttons.
  beginShape();
  vertex(0, 0);
  vertex(55, 0);
  vertex(55, 115);
  vertex(0, 115);
  endShape(CLOSE);
  //Function that creates the rectangle by delimiting the tool buttons.
  fill(200);
  beginShape();
  vertex(55, 115);
  vertex(0, 115);
  vertex(0, 225);
  vertex(55, 225);
  endShape(CLOSE);
  //Set of functions that create the button #1.
  fill(255);
  rect(bx0, by0, tam, tam);
  //Set of functions that create the button #2.
  fill(0);
  rect(bx1, by1, tam, tam);
  //Set of functions that create the button #3.
  fill(255, 0, 0);
  rect(bx2, by2, tam, tam);
  //Set of functions that create the button #4.
  fill(0, 255, 0);
  rect(bx3, by3, tam, tam);
  //Set of functions that create the button #5.
  fill(0, 0, 255);
  rect(bx4, by4, tam, tam);
  //Set of functions that create the button #6.
  fill(255, 255, 0);
  rect(bx5, by5, tam, tam);
  //Set of functions that create the button #7.
  fill(0, 255, 255);
  rect(bx6, by6, tam, tam);
  //Set of functions that create the button #8.
  fill(255, 0, 255);
  rect(bx7, by7, tam, tam);
  //Set of functions that create the button #9.
  fill(102, 51, 0);
  rect(bx8, by8, tam, tam);
  //Set of functions that create the button #10.
  fill(102, 0, 102);
  rect(bx9, by9, tam, tam);
  //Set of functions that create the button #11.
  fill(255);
  ellipse(bx10 + (tam / 2), by10 + (tam / 2), tam, tam);
  point(bx10 + (tam / 2) - 3, by10 + (tam / 2) - 3);
  point(bx10 + (tam / 2) + 1, by10 + (tam / 2) - 3);
  noFill();
  arc(bx10 + (tam / 2), by10 + (tam / 2), 7, 7, 0, HALF_PI + HALF_PI);
  //Set of functions that create the button #12.
  fill(255);
  rect(bx11, by11, tam, tam);
  line(bx11, by11, bx11 + tam, by11 + tam);
  strokeWeight(2);
  point(bx11 + 5, by11 + 11);
  point(bx11 + 11, by11 + 5);
  //Set of functions that create the button #13.
  strokeWeight(1);
  rect(bx12, by12 + 5, tam - 5, tam - 5);
  line(bx12, by12 + 5, bx12 + tam, by12);
  line(bx12 + 10, by12 + 5, bx12 + tam, by12);
  line(bx12 + 10, by12 + 15, bx12 + tam, by12);
  //Set of functions that create the button #14.
  line(bx13, by13, bx13 + tam, by13 + tam)
  line(bx13, by13 + 3, bx13 + 7, by13 + tam)
  line(bx13 + 3, by13, bx13 + tam, by13 + 7)
  //Set of functions that create the button #15.
  fill(mouseY, mouseX, 255);
  ellipse(bx14 + (tam / 2), by14 + (tam / 2), tam, tam);
  fill(mouseX, 0, mouseY);
  ellipse(bx14 + (tam / 2), by14 + (tam / 2), tam - 5, tam - 5);
  //Set of functions that create the button #16.
  fill(255);
  triangle(bx15 + tam, by15, bx15 + 10, by15 + tam, bx15, by15 + tam);
  noFill();
  //Set of functions that create the button #17.
  triangle(bx16, by16 + 5, bx16 + 8, by16 + tam, bx16 + tam, by16 + 5);
  triangle(bx16, by16 + 12, bx16 + 8, by16, bx16 + tam, by16 + 12);
  //Set of functions that create the button #18.
  fill(255);
  rect(bx17+2,by17, tam/2-3,tam/2-3);
  rect(bx17+tam/2+2,by17, tam/2-3,tam/2-3);
  rect(bx17+2,by17+tam/2, tam/2-3,tam/2-3);
  rect(bx17+tam/2+2,by17+tam/2, tam/2-3,tam/2-3);
  //Set of functions that create the button #19.
  fill(mouseY, 255, mouseX);
  rect(bx18, by18, tam, tam);
  //Set of functions that create the button #20.
  fill(255);
  rect(bx19, by19, tam, tam);
  line(bx19, by19, bx19 + tam, by19 + tam);
  line(bx19 + tam, by19, bx19, by19 + tam);
  //Function that determines the color selected in the color button #1.
  if (mouseX > bx0 && mouseX < bx0 + 10 && mouseY > by0 && mouseY < by0 + 10) {
    cselect = 0;
  }
  //Function that determines the color selected in the color button #2.
  if (mouseX > bx1 && mouseX < bx1 + 10 && mouseY > by1 && mouseY < by1 + 10) {
    cselect = 1;
  }
  //Function that determines the color selected in the color button #3.
  if (mouseX > bx2 && mouseX < bx2 + 10 && mouseY > by2 && mouseY < by2 + 10) {
    cselect = 2;
  }
  //Function that determines the color selected in the color button #4.
  if (mouseX > bx3 && mouseX < bx3 + 10 && mouseY > by3 && mouseY < by3 + 10) {
    cselect = 3;
  }
  //Function that determines the color selected in the color button #5.
  if (mouseX > bx4 && mouseX < bx4 + 10 && mouseY > by4 && mouseY < by4 + 10) {
    cselect = 4;
  }
  //Function that determines the color selected in the color button #6.
  if (mouseX > bx5 && mouseX < bx5 + 10 && mouseY > by5 && mouseY < by5 + 10) {
    cselect = 5;
  }
  //Function that determines the color selected in the color button #7.
  if (mouseX > bx6 && mouseX < bx6 + 10 && mouseY > by6 && mouseY < by6 + 10) {
    cselect = 6;
  }
  //Function that determines the color selected in the color button #8.
  if (mouseX > bx7 && mouseX < bx7 + 10 && mouseY > by7 && mouseY < by7 + 10) {
    cselect = 7;
  }
  //Function that determines the color selected in the color button #9.
  if (mouseX > bx8 && mouseX < bx8 + 10 && mouseY > by8 && mouseY < by8 + 10) {
    cselect = 8;
  }
  //Function that determines the color selected in the color button #10.
  if (mouseX > bx9 && mouseX < bx9 + 10 && mouseY > by9 && mouseY < by9 + 10) {
    cselect = 9;
  }
  //Function that determines the color selected in the tool #1.
  if (mouseX > bx10 && mouseX < bx10 + 10 && mouseY > by10 && mouseY < by10 + 10) {
    select = 0;
  }
  //Function that determines the color selected in the tool #2.
  if (mouseX > bx11 && mouseX < bx11 + 10 && mouseY > by11 && mouseY < by11 + 10) {
    select = 1;
  }
  //Function that determines the color selected in the tool #3.
  if (mouseX > bx12 && mouseX < bx12 + 10 && mouseY > by12 && mouseY < by12 + 10) {
    select = 2;
  }
  //Function that determines the color selected in the tool #4.
  if (mouseX > bx13 && mouseX < bx13 + 10 && mouseY > by13 && mouseY < by13 + 10) {
    select = 3;
  }
  //Function that determines the color selected in the tool #5.
  if (mouseX > bx14 && mouseX < bx14 + 10 && mouseY > by14 && mouseY < by14 + 10) {
    select = 4;
  }
  //Function that determines the color selected in the tool #6.
  if (mouseX > bx15 && mouseX < bx15 + 10 && mouseY > by15 && mouseY < by15 + 10) {
    select = 5;
  }
  //Function that determines the color selected in the tool #7.
  if (mouseX > bx16 && mouseX < bx16 + 10 && mouseY > by16 && mouseY < by16 + 10) {
    select = 6;
  }
  //Function that determines the color selected in the tool #8.
  if (mouseX > bx17 && mouseX < bx17 + 10 && mouseY > by17 && mouseY < by17 + 10) {
    select = 7;
  }
  //Function that determines the color selected in the tool #9.
  if (mouseX > bx18 && mouseX < bx18 + 10 && mouseY > by18 && mouseY < by18 + 10) {
    select = 8;
  }
  //Function that determines the color selected in the tool #10.
  if (mouseX > bx19 && mouseX < bx19 + 10 && mouseY > by19 && mouseY < by19 + 10) {
    select = 9;
  }
  //Conditional function that is activated when the mouse is pressed or clicked.
  if (mouseIsPressed) {
    //Conditional function that is activated when color button # 1 is selected.
    if (cselect == 0) {
      //Function that determines the color of the fill.
      fill(255);
    }
    //Conditional function that is activated when color button # 2 is selected.
    if (cselect == 1) {
      //Function that determines the color of the fill.
      fill(0);
    }
    //Conditional function that is activated when color button # 3 is selected.
    if (cselect == 2) {
      //Function that determines the color of the fill.
      fill(255, 0, 0);
    }
    //Conditional function that is activated when color button # 4 is selected.
    if (cselect == 3) {
      //Function that determines the color of the fill.
      fill(0, 255, 0);
    }
    //Conditional function that is activated when color button # 5 is selected.
    if (cselect == 4) {
      //Function that determines the color of the fill.
      fill(0, 0, 255);
    }
    //Conditional function that is activated when color button # 6 is selected.
    if (cselect == 5) {
      //Function that determines the color of the fill.
      fill(255, 255, 0);
    }
    //Conditional function that is activated when color button # 7 is selected.
    if (cselect == 6) {
    //Function that determines the color of the fill.
      fill(0, 255, 255);
    }
    //Conditional function that is activated when color button # 8 is selected.
    if (cselect == 7) {
      //Function that determines the color of the fill.
      fill(255, 0, 255);
    }
    //Conditional function that is activated when color button # 9 is selected.
    if (cselect == 8) {
      //Function that determines the color of the fill.
      fill(102, 51, 0);
    }
    //Conditional function that is activated when color button # 10 is selected.
    if (cselect == 9) {
      //Function that determines the color of the fill.
      fill(102, 0, 102);
    }
    //Conditional function that is activated when tool # 1 is selected.
    if (select == 0) {
      //Conditional function that is activated when the color button #1 is selected.
      if (cselect == 1) {
        //Function that determines the color of the outline.
        stroke(255);
      }
      //Function that determines the thickness of the outline.
      strokeWeight(2);
      //Set of functions that create tool #1.
      ellipse(mouseX, mouseY, 50, 50);
      point(mouseX - 10, mouseY - 5);
      point(mouseX + 10, mouseY - 5);
      arc(mouseX, mouseY, 30, 30, 0, HALF_PI + HALF_PI);
    }
    //Conditional function that is activated when tool # 2 is selected.
    if (select == 1) {
      //Function that determines the color of the fill.
      noStroke();
      //Conditional function that is activated when the # 1 color button is selected.
      if (cselect == 0) {
        //Function that defines the color of the outline.
        stroke(1);
      }
      //Set of functions that create tool #2.
      ellipse(mouseX, mouseY, 5, 5);
      ellipse(mouseY, mouseX, 5, 5);
    }
    //Conditional function that is activated when tool # 3 is selected.
    if (select == 2) {
      //Set of functions that create tool #3.
      triangle(700, 0, mouseX, mouseY, mouseX + 20, mouseY)
      triangle(700, 0, mouseX + 20, mouseY, mouseX + 20, mouseY + 20)
      rect(mouseX, mouseY, 20, 20)
    }
    //Conditional function that is activated when tool # 4 is selected.
    if (select == 3) {
      //Set of conditional functions that determine the color change of the contour.
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
      //Function that creates tool #4.
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX / 2, mouseY / 2);
      endShape(CLOSE);
    }
    //Conditional function that is activated when tool # 5 is selected.
    if (select == 4) {
      //Set of functions that create tool #5.
      fill(mouseY, mouseX, 255);
      ellipse(mouseX, mouseY, 40, 40);
      fill(mouseX, 0, 255);
      ellipse(mouseX, mouseY, 30, 30);
      fill(mouseY, 255.0);
      ellipse(mouseX, mouseY, 20, 20);
      fill(mouseX, mouseY, 0);
      ellipse(mouseX, mouseY, 10, 10);
    }
    //Conditional function that is activated when tool # 6 is selected.
    if (select == 5) {
      //Function that creates tool #6.
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseY + 10, mouseX - 18);
      vertex(mouseY - 30, mouseX + 14);
      vertex(mouseY + 30, mouseX + 20);
      vertex(mouseX + 10, mouseY - 10);
      endShape(CLOSE);
    }
    //Conditional function that is activated when tool # 7 is selected.
    if (select == 6) {
      //Function that determines the color of the fill.
      noFill();
      //Set of conditional functions that determine the color change of the contour.
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
      //Function that determines the color of the fill.
      noFill();
      //Set of functions that create tool #7.
      triangle(mouseX, mouseY, mouseX + 28, mouseY - 45, mouseX + 56, mouseY);
      triangle(mouseX, mouseY - 30, mouseX + 28, mouseY + 20, mouseX + 56, mouseY - 30);
    }
    //Conditional function that is activated when tool # 8 is selected.
    if (select == 7) {
      //Set of functions that create tool #8.
      ellipse(mouseX + 5, mouseY + 5, 20, 20)
      ellipse(mouseY + 5, mouseX + 5, 20, 20)
      ellipse(mouseY + 5, mouseY + 5, 20, 20)
      ellipse(mouseX + 5, mouseX + 5, 20, 20)
      //Function that determines the color of the fill.
      fill(255, 153, 0);
      rect(mouseX, mouseY, 10, 10)
      rect(mouseY, mouseX, 10, 10)
      rect(mouseY, mouseY, 10, 10)
      rect(mouseX, mouseX, 10, 10)
    }
    //Conditional function that is activated when tool # 9 is selected.
    if (select == 8) {
      //Function that determines the background color.
      background(mouseY, 255, mouseX);
    }
    //Conditional function that is activated when tool # 10 is selected.
    if (select == 9) {
      //Function that determines the background color.
      background(255);
    }
  }
}
