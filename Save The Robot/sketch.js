// State 0 = Introduction
// State 1 = Game
// State 2 = Lose
// State 3 = Instructions
//Determines the position of the character on the X axis.
var moviX;
//Determines the speed of the character on the X axis.
var velx;
//Starting state
var estado = 10;
//
var rocas = [];
//
var bonos = [];
//
var bonos1 = [];
//
var bonos2 = [];
//
var puntajes = [];
//
var color1 = 100;
//
var color2 = 100;
//
var color3 = 100;
//
var cselect;
//Determines the size of the player.
var tam = 80;
//Determines the size of the player.
var tam1 = 355;
//Set of variables that determine the location of button # 1.
var bx0;
var by0;
//Set of variables that determine the location of button # 2.
var bx1;
var by1;
//Set of variables that determine the location of button # 3.
var bx2;
var by2;
//
var aX
var aY
//
var bX
var bY
//
var cX
var cY
//
var dX
var dY
//
var r = (255, 0, 0);
//
var cantidad1;
//
var cantidad2;
//
var tiempoAnterior;
//
var best = 0;
//
var current;
//
var bonosG;
var bonosR;
var bonosB;
var roboG;
var roboB;
var roboR;
var roboE;
var robo;
var obstaculo;
var jugador;
var volver;
var back1;
var title;
var title2;
var title3;
var title4;
var instrucciones;
var scoreUlti1;
var scoreUlti2;
//
var y;
//
var alto;
//
var bonus = 0;
//
var mus;
//
var input;
var input1;
var button;
var button1;
var button2;
var button4;
var play1;
var play2;
var jugando = false;
var final = false;
var contar = false;
var player1;
var player2;
var contador = 0;


function preload() {

  bonosG = loadImage('media/bonoG.png');
  bonosR = loadImage('media/bonoR.png');
  bonosB = loadImage('media/bonoB.png');
  roboG = loadImage('media/roboG.png');
  roboB = loadImage('media/roboB.png');
  roboR = loadImage('media/roboR.png');
  robo = loadImage('media/robo.png');
  roboE = loadImage('media/robo.png');
  obstaculo = loadImage('media/obs.png');
  back1 = loadImage('meida/back3.jpg');
  line1 = loadImage('meida/black.png');
  title = loadImage('media/title.png');
  title2 = loadImage('media/title2.png');
  title3 = loadImage('media/title3.png');
  title4 = loadImage('media/title4.png');
  instrucciones = loadImage('media/instruc2.png');
  contra = loadImage('meida/contra.png');
  toca = loadImage('media/toca.png');
  juga1 = loadImage('media/jugador1.png');
  juga2 = loadImage('media/jugador2.png');
  volver = loadImage('media/volver.png');
  mus = loadSound('media/musica.mp3');
}

function setup() {

  textFont("Roboto");
  //
  y = windowHeight - (windowHeight / 4);
  //
  alto = windowHeight;

  //Creates a canvas the size of the window.
  createCanvas(windowWidth, windowHeight);

  //
  tiempoAnterior = millis();
  //
  cantidad1 = random(15, 25);
  //
  cantidad2 = random(3, 5);

  //Initiates the  player in the center of the screen.
  x = width / 2;

  bx0 = 0;
  bx1 = (windowWidth / 3);
  bx2 = (windowWidth / 3) * 2;

  by0 = windowHeight - (windowHeight / 4) + (tam / 2);
  by1 = windowHeight - (windowHeight / 4) + (tam / 2);
  by2 = windowHeight - (windowHeight / 4) + (tam / 2);

  //Function that runs, creates and stores the rocks in the arrangement.
  for (var i = 0; i < cantidad1; i = i + 1) {
    aX = random(0, windowWidth - 10);
    aY = random(-100, -1500);
    rocas[i] = new roca(aX, aY);
  }
  //Function that runs, creates and saves score bonuses in the array.
  for (var i1 = 0; i1 < cantidad2; i1 = i1 + 1) {
    bX = random(0, windowWidth - 10);
    bY = random(-100, -1500);
    bonos[i1] = new bonoR(bX, bY);
    //Function that runs, creates and saves score bonuses in the array.
    for (var i2 = 0; i2 < cantidad2; i2 = i2 + 1) {
      cX = random(0, windowWidth - 10);
      cY = random(-100, -1500);
      bonos1[i2] = new bonoG(bX, bY);
    }
    //Function that runs, creates and saves score bonuses in the array.
    for (var i3 = 0; i3 < cantidad2; i3 = i3 + 1) {
      dX = random(0, windowWidth - 10);
      dY = random(-100, -1500);
      bonos2[i3] = new bonoB(bX, bY);
    }
  }

  // for (var i11 = 0; i11 < 3; i11 = i11 + 1) {
  //   puntajes[i11] = scoreUlti;
  // }
  // if (estado == 4) {
  //   if (jugando == false) {
  background(0);

  image(title, (windowWidth / 2) + 30, windowHeight / 4, 500, 200);

  image(contra, (windowWidth / 2) + 30, (windowHeight / 2) * 1.4, 350, 100);

  // image(toca,(windowWidth / 2)+30, (windowHeight / 2)*1.9, 400, 50);

  input = createInput();
  input.position((windowWidth / 2) * 1.3, windowHeight / 2);

  button = createButton('Confirmar');
  button.position(input.x + input.width, windowHeight / 2);
  button.mousePressed(greet);

  input1 = createInput();
  input1.position(windowWidth / 8, windowHeight / 2);

  button2 = createButton('Confirmar');
  button2.position(input1.x + input1.width, windowHeight / 2);
  button2.mousePressed(greet1);

  play1 = createElement('h2', 'Jugador 2');
  play1.position((windowWidth / 2) * 1.45, (windowHeight / 2) - 60);
  play2 = createElement('h2', 'Jugador 1');
  play2.position((windowWidth / 8) * 1.60, (windowHeight / 2) - 60)

  noStroke();
  fill(128);
  rect((windowWidth / 2) * 1.3, (windowHeight / 2) - 60, 235, 70);
  rect((windowWidth / 8), (windowHeight / 2) - 60, 235, 70);
  button1 = createButton('Jugar');
  button1.size(100, 50);
  button1.position(windowWidth / 2 - 10, windowHeight / 2 - 10);
  button1.mousePressed(cambio);

  button4 = createButton('Modo 1 Jugador');
  button4.size(200, 50);
  button4.position(windowWidth / 2 - 60, (windowHeight / 2) * 1.7);
  button4.mousePressed(modo);

  //   }
  // } 
}

function draw() {

  if (estado == 0) {
    push();
    background(0);
    textAlign(CENTER);
    textSize(50);
    image(title, width / 2, windowHeight / 2, 500, 200);

    image(title2, width / 2, (height / 4) * 3, 100, 30);
    pop();
  } else if (estado == 11) {
    push();
    background(0);
    textAlign(CENTER);
    textSize(50);
    image(title, width / 2, windowHeight / 2, 500, 200);

    image(title2, width / 2, (height / 4) * 3, 100, 30);
    pop();
  } else if (estado == 1) {
    if (mus.isPlaying() == false) {
      //
      mus.play();
      // mus.loop();
    }
    // background(0, 204, 255);
    image(back1, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
    noStroke();
    jugando = true;
    fill(102, 102, 51);

    // //Función que recorre el arreglo y dibuja las rocas.
    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].dibujarse();
      rocas[i].moverse();
      if (dist(rocas[i].x, rocas[i].y, x, y) < tam - 35) {
        color1 = 0;
        color2 = 0;
        color3 = 0;
        estado = 2;
      }
    }
    //Function that records the arrangement and draws the score bonuses.
    for (var i1 = 0; i1 < bonos.length; i1 = i1 + 1) {
      bonos[i1].dibujarse();
      bonos[i1].moverse();
      bonos1[i1].dibujarse();
      bonos1[i1].moverse();
      bonos2[i1].dibujarse();
      bonos2[i1].moverse();
      if (dist(bonos[i1].x, bonos[i1].y, x, y) < tam - 27) {
        if (robo == roboG || robo == roboB) {
          estado = 2;
        }
      }
      if (dist(bonos1[i1].x, bonos1[i1].y, x, y) < tam - 27) {
        if (robo == roboR || robo == roboB) {
          estado = 2;
        }
      }
      if (dist(bonos2[i1].x, bonos2[i1].y, x, y) < tam - 7) {
        if (robo == roboG || robo == roboR) {
          estado = 2;
        }
      }
      if (dist(bonos[i1].x, bonos[i1].y, x, y) < tam - 7) {
        if (robo == roboR) {
          bonos[i1].morirse();
          bonus = bonus + 1;
        }
      }
      if (dist(bonos1[i1].x, bonos1[i1].y, x, y) < tam - 7) {
        if (robo == roboG) {
          bonos1[i1].morirse();
          bonus = bonus + 1;
        }
      }
      if (dist(bonos2[i1].x, bonos2[i1].y, x, y) < tam - 7) {
        if (robo == roboB) {
          bonos2[i1].morirse();
          bonus = bonus + 1;
        }
      }
    }

    //Set of functions that create button # 3.
    fill(255, 0, 0);
    rect(bx0, by0, tam1, tam1);
    //Set of functions that create button # 4.
    fill(0, 255, 0);
    rect(bx1, by1, tam1, tam1);
    //Set of functions that create button # 5.
    fill(0, 0, 255);
    rect(bx2, by2, tam1, tam1);

    //Assigns values to the speed according to the rotation of the device.
    velx = map(rotationY, -90, 90, -10, 10);

    //Crea al jugador.
    // push();
    // fill(color1, color2, color3);
    // strokeWeight(2);
    // stroke(255);
    jugador = image(robo, x, y, tam, tam);
    // image(roboR, x, windowHeight - (windowHeight / 4), tam, tam);
    // ellipse(x, windowHeight - (windowHeight / 4), tam, tam);
    // pop();

    push();
    stroke(100, 100, 100);
    fill(100, 100, 100);
    strokeWeight(5);
    //Creates the floor.
    line(0, windowHeight - (windowHeight / 4) + (tam / 2), windowWidth, windowHeight - (windowHeight / 4) + (tam / 2))
    pop();
    push();
    stroke(50, 50, 50);
    fill(50, 50, 50);
    rect(0, 0, windowWidth, 50);
    image(title, width / 2, height / 30, 100, 50);
    pop();

    //adds the velocity in x and y to the positions of the ellipse.
    x = x + velx;

    //Determines the limits of player movement.
    x = constrain(x, tam / 2, width - tam / 2);

    //Function that determines the color selected in color button # 1.
    if (mouseX > bx0 && mouseX < bx0 + tam1 && mouseY > by0 && mouseY < by0 + tam1) {
      cselect = 0;
    }
    //Function that determines the color selected in color button # 2.
    if (mouseX > bx1 && mouseX < bx1 + tam1 && mouseY > by1 && mouseY < by1 + tam1) {
      cselect = 1;
    }
    //Function that determines the color selected in color button # 3.
    if (mouseX > bx2 && mouseX < bx2 + tam1 && mouseY > by2 && mouseY < by2 + tam1) {
      cselect = 2;
    }


    //Conditional function that is activated when the mouse is pressed or clicked.
    if (mouseIsPressed) {
      //Conditional function that is activated when color button # 1 is selected.
      if (cselect == 0) {
        //Function that determines the color of the fill.
        color1 = 255;
        color2 = 0;
        color3 = 0;
        robo = roboR;
      }
      //Conditional function that is activated when color button # 2 is selected.
      if (cselect == 1) {
        //Function that determines the color of the fill.
        color1 = 0;
        color2 = 255;
        color3 = 0;
        robo = roboG;
      }
      //Conditional function that is activated when color button # 3 is selected.
      if (cselect == 2) {
        //Function that determines the color of the fill.
        color1 = 0;
        color2 = 0;
        color3 = 255;
        robo = roboB;
      }
    }

    push();
    fill(0);

    textSize(20);
    textFont("Roboto")
    fill(255);
    text("SCORE: " + (0 + floor((millis() / 100 - tiempoAnterior / 100) + bonus)), width / 24, height / 24);
    //
    if (contar == false) {
      scoreUlti1 = 0 + floor((millis() / 100 - tiempoAnterior / 100) + bonus);
    }
    if (contar == true) {
      scoreUlti2 = 0 + floor((millis() / 100 - tiempoAnterior / 100) + bonus);
    }
    pop();
  } else if (estado == 2 && contador == 1) {

    background(0);
    // text("Perdió", width / 2, height / 2);
    textSize(30);
    textFont("Roboto");
    push();
    textAlign(CENTER);
    fill(255);
    text("Tu puntaje: " + scoreUlti1, width / 2, height / 4);
    pop();
    image(title3, width / 2, windowHeight / 2, 400, 100);
    image(title4, width / 2, (height / 4) * 3, 120, 30);
    if (mus.isPlaying() == true) {
      //
      mus.stop();
    }
  } else if (estado == 2 && contador == 2) {
    estado = 7;
    tiempoAnterior = millis();
  } else if (estado == 2 && final == true) {
    estado = 9;
  } else if (estado == 3) {
    background(0);
    image(instrucciones, width / 2, windowHeight / 2, width - 100, height - 200);
    if (mus.isPlaying() == false) {
      //
      mus.play();
      // mus.loop();
    }
  } else if (estado == 5) {
    background(0);
    image(instrucciones, width / 2, windowHeight / 2, width - 100, height - 200);
    if (mus.isPlaying() == false) {
      //
      mus.play();
      // mus.loop();
    }
  } else if (estado == 6) {
    background(0);

    image(juga1, width / 2, windowHeight / 2, 600, 100);
    push();
    textAlign(CENTER);
    fill(140);
    textSize(50);
    text(player2, width / 2, (windowHeight / 2) + 90);
    pop();
    if (mus.isPlaying() == false) {
      //
      mus.play();
      // mus.loop();
    }
  } else if (estado == 7 && contador == 2) {
    background(0);
    // text(scoreUlti1, width / 2, height / 4);
    image(juga2, width / 2, windowHeight / 2, 600, 100);
    push();
    textAlign(CENTER);
    fill(140);
    textSize(50);
    text(player1, width / 2, (windowHeight / 2) + 90);
    pop();
    if (mus.isPlaying() == false) {
      //
      mus.play();
      // mus.loop();
    }
  } else if (estado == 9) {
    push();
    //
    col1 = random(0, 255);
    //
    col2 = random(0, 255);
    //
    col3 = random(0, 255);

    background(0);
    // text(scoreUlti2, width / 2, height / 4);

    textAlign(CENTER);
    textSize(40);
    // text("Perdistes", windowWidth / 2,windowHeight /2, 500,500);
    if (scoreUlti1 > scoreUlti2) {
      fill(col1, col2, col3);
      text("Ganador: " + player2 + " con " + scoreUlti1 + " puntos", windowWidth / 2, windowHeight / 2);
      textSize(20);
      fill(255);
      text("Perdedor: " + player1 + " con " + scoreUlti2 + " puntos", windowWidth / 2, (windowHeight / 2) * 1.3);
    } else {
      fill(col1, col2, col3);
      text("Ganador: " + player1 + " con " + scoreUlti2 + " puntos", windowWidth / 2, windowHeight / 2);
      textSize(20);
      fill(255);
      text("Perdedor: " + player2 + " con " + scoreUlti1 + " puntos", windowWidth / 2, (windowHeight / 2) * 1.3);
    }
    pop();
    push();
    imageMode(CENTER);
    image(volver, windowWidth / 2, (windowHeight / 4) - 40, 500, 50);
    image(obstaculo, windowWidth / 2, (windowHeight / 4) + 70, 150, 150);
    image(obstaculo, (windowWidth / 2) - 100, (windowHeight / 4) + 70, 100, 100);
    image(obstaculo, (windowWidth / 2) + 100, (windowHeight / 4) + 70, 100, 100);
    image(obstaculo, windowWidth / 2, (windowHeight / 2) * 1.7, 250, 250);
    pop();
    if (mus.isPlaying() == true) {
      //
      mus.stop();
    }
  }
}

// 0= Start / 1=Game / 2=Lose / 3=Instructions / 4? / 5=Instructions / 6= 1st Turn / 7= 2nd Turn.
function mouseReleased() {
  if (estado == 0 && contador == 1) {
    estado = 3;
    tiempoAnterior = millis();
    bonus = 0;
    robo = roboE;
    cselect = 10;
  } else if (estado == 3 && contador == 1) {
    estado = 1;
  } else if (estado == 11 && contador == 2) {
    estado = 5;
  } else if (estado == 5) {
    estado = 6;
    tiempoAnterior = millis();
    bonus = 0;
    robo = roboE;
    cselect = 10;
  } else if (estado == 6 && contador == 2) {
    estado = 1;
    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].reset();
    }
    for (var i1 = 0; i1 < bonos.length; i1 = i1 + 1) {
      bonos[i1].reset();
      bonos1[i1].reset();
      bonos2[i1].reset();
    }
    bonus = 0;
    robo = roboE;
    cselect = 10;
  } else if (estado == 7 && contador == 2) {
    estado = 1;
    contar = true;
    for (var i4 = 0; i4 < rocas.length; i4 = i4 + 1) {
      rocas[i4].reset();
    }
    for (var i5 = 0; i5 < bonos.length; i5 = i5 + 1) {
      bonos[i5].reset();
      bonos1[i5].reset();
      bonos2[i5].reset();
    }
    bonus = 0;
    robo = roboE;
    cselect = 10;
    contador = 0;
    final = true;
  } else if (estado == 9) {
    if (mouseY < (windowHeight / 4) - 10) {
      estado = 5;
    }
    contador = 2;
  } else if (estado == 2 && contador == 1) {
    estado = 0;
    for (var i2 = 0; i2 < rocas.length; i2 = i2 + 1) {
      rocas[i2].reset();
    }
    for (var i13 = 0; i13 < bonos.length; i13 = i13 + 1) {
      bonos[i13].reset();
      bonos1[i13].reset();
      bonos2[i13].reset();
    }
    bonus = 0;
    robo = roboE;
    cselect = 10;
  }
}

function roca(aX, aY) {
  imageMode(CENTER);
  // Characteristics
  this.x = aX;
  this.y = aY;
  // Skills
  //Function that creates the shape of the rock.
  this.dibujarse = function() {
    image(obstaculo, this.x, this.y, 60, 60);
    // rect(this.x, this.y, 30, 30);
  }
  //Function that determines the movement of the rock.
  this.moverse = function() {
    this.y = this.y + 5;
    if (this.y > windowHeight) {
      this.y = random(-100, -1500);
      this.x = random(0, windowWidth - 10);
    }
  }

  this.reset = function() {
    this.y = random(-100, -1500);
    this.x = random(0, windowWidth - 10);
  }
}

function bonoR(cX, cY) {
  // Characteristics
  this.x = cX;
  this.y = cY;
  var aceptado = false;
  // Skills
  //Function that creates the shape of the red score bonus.
  this.dibujarse = function() {
    if (aceptado == false) {
      image(bonosR, this.x, this.y, 60, 60);
      // fill(255, 0, 0);
      // rect(this.x, this.y, 50, 30);
    }
  }
  //Function that determines the movement of the red score bonus.
  this.moverse = function() {
    this.y = this.y + 5;
    if (this.y > windowHeight) {
      this.y = random(-100, -1500);
      this.x = random(0, windowWidth - 10);
    }
  }
  this.reset = function() {
    this.y = random(-100, -1500);
    this.x = random(0, windowWidth - 10);
  }
  this.morirse = function() {
    aceptado = true;
  }
}

function bonoG(dX, dY) {
  // Characteristics
  this.x = dX;
  this.y = dY;
  var aceptado = false;
  // Skills
  //Function that creates the shape of the green score bonus.
  this.dibujarse = function() {
    if (aceptado == false) {
      image(bonosG, this.x, this.y, 60, 60);
      // fill(0, 255, 0);
      // rect(this.x, this.y, 50, 30);
    }
  }
  //Function that determines the movement of the green score bonus.
  this.moverse = function() {
    this.y = this.y + 5;
    if (this.y > windowHeight) {
      this.y = random(-100, -1500);
      this.x = random(0, windowWidth - 10);
    }
  }
  this.reset = function() {
    this.y = random(-100, -1500);
    this.x = random(0, windowWidth - 10);
  }
  this.morirse = function() {
    aceptado = true;
  }
}

function bonoB(bX, bY) {
  // Characteristics
  this.x = bX;
  this.y = bY;
  var aceptado = false;
  // Skills
  //Function that creates the shape of the blue score bonus.
  this.dibujarse = function() {
    if (aceptado == false) {
      image(bonosB, this.x, this.y, 60, 60);
      // fill(0, 0, 255);
      // rect(this.x, this.y, 50, 30);
    }
  }
  //Function that determines the movement of the blue score bonus.
  this.moverse = function() {
    this.y = this.y + 5;
    if (this.y > windowHeight) {
      this.y = random(-100, -1500);
      this.x = random(0, windowWidth - 10);
    }
  }
  this.reset = function() {
    this.y = random(-100, -1500);
    this.x = random(0, windowWidth - 10);
  }
  this.morirse = function() {
    aceptado = true;
  }
}

function greet() {
  player1 = input.value();
  play1.html('Hola ' + player1);
  input.value('');
}

function greet1() {
  player2 = input1.value();
  play2.html('Hola ' + player2);
  input1.value('');
}

function cambio() {
  estado = 11;
  contador = 2;
  input.remove();
  input1.remove();
  button.remove();
  button1.remove();
  button2.remove();
  button4.remove();
  play1.remove();
  play2.remove();
}

function modo() {
  contador = 1;
  estado = 0;
  input.remove();
  input1.remove();
  button.remove();
  button1.remove();
  button2.remove();
  button4.remove();
  play1.remove();
  play2.remove();
}
