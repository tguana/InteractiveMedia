//
var angulo = 0;
//
var lineas = [];
//
var pescadores = [];
//
var muchosPeques = [];
//
var muchosGrandes = [];
//
var muchosGlobos = [];
//
var muchosKrill = [];
//
var muchasAlgas = [];
//
var muchosTiburones = [];
//
var contador = 0;
//
var contador1 = 0;
//
var vel = 0;
//
var vel1 = 0;
//
var vel2 = 0;
//
var vel3 = 0;
//
var vel4 = 0;
//
var vel1y = 0;
//
var pezPequeño;
//
var pezGrande;
//
var pezGlobo1;
//
var pezGolbo2;
//
var tiburon;
//
var krill;
//
var algas;
//
var pescador;
//
var pezPequeñoR;
//
var pezGrandeR;
//
var pezGlobo1R;
//
var pezGolbo2R;
//
var tiburonR;
//
var krillR;
//
var pescadorR;

function preload() {
  //
  pezPequeño = loadImage('media/peces1-08.png');
  //
  pezGrande = loadImage('media/peces1-04.png');
  //
  pezGlobo1 = loadImage('media/peces1-01.png');
  //
  pezGlobo2 = loadImage('media/peces1-02.png');
  //
  tiburon = loadImage('media/peces1-03.png');
  //
  krill = loadImage('media/peces1-05.png');
  //
  algas = loadImage('media/peces1-07.png');
  //
  pescador = loadImage('media/peces1-06.png');
  //
  pezPequeñoR = loadImage('media/peces2-08.png');
  //
  pezGrandeR = loadImage('media/peces2-04.png');
  //
  pezGlobo1R = loadImage('media/peces2-01.png');
  //
  pezGlobo2R = loadImage('media/peces2-02.png');
  //
  tiburonR = loadImage('media/peces2-03.png');
  //
  krillR = loadImage('media/peces2-05.png');
  //
  pescadorR = loadImage('media/peces2-06.png');
  //
  pezGrandeV = loadImage('meida/pecesVeneno-05.png')
  //
  pezGrandeVR = loadImage('meida/pecesVeneno-04.png')
}

function setup() {

  //
  angleMode(DEGREES);
  //
  createCanvas(1000, 800);
  //
  for (var i11 = 0; i11 < 15; i11 = i11 + 1) {
    var hX = 30;
    var hY = 10;

    pescadores[i11] = new pesca(hX, hY);
  }
  //
  for (var i12 = 0; i12 < 15; i12 = i12 + 1) {
    var jX = 30;
    var jY = 300;

    lineas[i12] = new linea(jX, jY);
  }
  //
  for (var i = 0; i < 15; i = i + 1) {
    var bX = random(-5, -100);
    var bY = random(300, 740);

    muchosPeques[i] = new pezPeque(bX, bY);
  }
  //
  for (var i5 = 0; i5 < 2; i5 = i5 + 1) {
    var gX = random(-1000, -1550);
    var gY = random(190, 740);

    muchosTiburones[i5] = new tibur(gX, gY);
  }
  //
  for (var i4 = 0; i4 < 2; i4 = i4 + 1) {
    var fX = random(300, 700);
    var fY = random(300, 500);

    muchosGlobos[i4] = new pezGlob(fX, fY);
  }
  //
  for (var i1 = 0; i1 < 4; i1 = i1 + 1) {
    var cX = random(1500, 1000);
    var cY = random(100, 390);

    muchosGrandes[i1] = new pezGrand(cX, cY);
  }
  //
  for (var i2 = 0; i2 < 100; i2 = i2 + 1) {
    var dX = random(1000, 1820);
    var dY = random(210, 740);

    muchosKrill[i2] = new pezKrill(dX, dY);
  }
  //
  for (var i3 = 0; i3 < 35; i3 = i3 + 1) {
    var eX = random(0, 850);
    var eY = 720;

    muchasAlgas[i3] = new alga(eX, eY);
  }
}

function draw() {
  //
  background(0, 102, 255);
  //
  push();
  //
  fill(102, 255, 255);
  //
  noStroke();
  //
  rect(0,0,1000,175);
  //
  pop();
  //
  push();
  //
  fill(102, 51, 0);
  //
  noStroke();
  //
  rect(0,135,90,50);
  //
  pop();
  
  //
  for (var i11 = 0; i11 < pescadores.length; i11 = i11 + 1) {
    pescadores[i11].dibujarse();
  }
  //
  for (var i12 = 0; i12 < lineas.length; i12 = i12 + 1) {
    lineas[i12].dibujarse();
    lineas[i12].moverse();
  }

  for (var i5 = 0; i5 < muchasAlgas.length; i5 = i5 + 1) {
    muchasAlgas[i5].dibujarse();
    for (var i6 = 0; i6 < muchosKrill.length; i6 = i6 + 1) {
      if (dist(muchasAlgas[i5].x, muchasAlgas[i5].y, muchosKrill[i6].x, muchosKrill[i6].y) < 3) {
        muchasAlgas[i5].morirse();
      }
    }
  }
  //
  for (var i10 = 0; i10 < muchosTiburones.length; i10 = i10 + 1) {
    muchosTiburones[i10].dibujarse();
    muchosTiburones[i10].moverse();
  }
  //
  for (var i2 = 0; i2 < muchosKrill.length; i2 = i2 + 1) {
    muchosKrill[i2].dibujarse();
    muchosKrill[i2].moverse();
    //
    for (var i4 = 0; i4 < muchosPeques.length; i4 = i4 + 1) {
      if (dist(muchosKrill[i2].x, muchosKrill[i2].y, muchosPeques[i4].x, muchosPeques[i4].y) < 15) {
        muchosKrill[i2].morirse();
      }
    }
  }
  //
  for (var i1 = 0; i1 < muchosPeques.length; i1 = i1 + 1) {
    muchosPeques[i1].dibujarse();
    muchosPeques[i1].moverse();
    //
    for (var i3 = 0; i3 < muchosGrandes.length; i3 = i3 + 1) {
      if (dist(muchosPeques[i1].x, muchosPeques[i1].y, muchosGrandes[i3].x, muchosGrandes[i3].y) < 30) {
        muchosPeques[i1].morirse();
      }
    }
  }
  for (var i = 0; i < muchosGrandes.length; i = i + 1) {
    muchosGrandes[i].dibujarse();
    muchosGrandes[i].moverse();
    for (var i9 = 0; i9 < muchosGlobos.length; i9 = i9 + 1) {
      if (dist(muchosGrandes[i].x, muchosGrandes[i].y, muchosGlobos[i9].x, muchosGlobos[i9].y) < 40) {
        muchosGrandes[i].veneno = true;
      }
    }
  }
  for (var i7 = 0; i7 < muchosGlobos.length; i7 = i7 + 1) {
    muchosGlobos[i7].dibujarse();
    muchosGlobos[i7].moverse();
    for (var i8 = 0; i8 < muchosGrandes.length; i8 = i8 + 1) {
      if (dist(muchosGlobos[i7].x, muchosGlobos[i7].y, muchosGrandes[i8].x, muchosGrandes[i8].y) < 130) {
        muchosGlobos[i7].veneno = true;
      }
    }
  }
}

function pesca(hX, hY) {
  // caraceristicas
  this.x = hX;
  this.y = hY;
  // habilidades
  //
  this.dibujarse = function() {
    //
    image(pescador, this.x, this.y, 200, 200);
  }
}

function linea(jX, jY) {
  // caraceristicas
  this.x = jX;
  this.y = jY;
  // habilidades
  //
  this.dibujarse = function() {
    //
    line(225,50,225,this.y);
  }
  this.moverse = function(){
    if(this.y<400){
      vel4 = random(1,5); 
    }
    if(this.y>700){
      vel4 = random(-1,-5);
    }
      this.y =this.y +vel4;
  }
}

function tibur(gX, gY) {
  // caraceristicas
  this.x = gX;
  this.y = gY;
  this.vivo = true;

  // habilidades
  //
  this.dibujarse = function() {
    //
    if (vel3 == -15) {
      image(tiburonR, this.x, this.y, 230, 110);
    }
    if (vel3 == 15) {
      image(tiburon, this.x, this.y, 230, 110);
    }

  }
  //
  this.moverse = function() {
    if (this.x > width + 1000) {
      vel3 = -15;
    }
    if (this.x <= -1000) {
      vel3 = 15;
    }
    this.x = this.x + 1 * vel3;
  }
}

function alga(eX, eY) {
  // caraceristicas
  this.x = eX;
  this.y = eY;
  this.vivo = true;

  // habilidades
  //
  this.dibujarse = function() {
    if (this.vivo == true) {
      image(algas, this.x, this.y, 90, 90);
    }
  }
  this.morirse = function() {
    this.vivo = false;
  }
}

function pezGlob(fX, fY) {
  // caraceristicas
  //
  this.x = fX;
  this.y = fY;
  this.veneno = false;
  this.vivo = true;

  // habilidades
  //
  this.dibujarse = function() {
    if (this.vivo == true) {
      //
      image(pezGlobo1, this.x, this.y, 90, 90);
      if (this.veneno == true) {
        image(pezGlobo2, this.x, this.y, 90, 90);
      }
    }
  }
  this.moverse = function() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}

function pezPeque(aX, aY) {
  // caraceristicas
  this.x = aX;
  this.y = aY;
  this.veneno = false;
  this.vivo = true;

  // habilidades
  //
  this.dibujarse = function() {
    //
    if (this.vivo == true) {
      //
      if (vel == 2) {
        image(pezPequeño, this.x, this.y, 90, 90);
      }
      if (vel == -2) {
        image(pezPequeñoR, this.x, this.y, 90, 90);
      }
    }
  }
  this.morirse = function() {
    this.vivo = false;
  }
  //
  this.moverse = function() {
    if (this.x > width) {
      vel = -2;
    }
    if (this.x < 0) {
      vel = 2;
    }
    this.x = this.x + 1 * vel;
  }
}

function pezGrand(bX, bY) {
  // caraceristicas
  this.x = bX;
  this.y = bY;
  this.veneno = false;
  this.vivo = true;

  // habilidades
  //
  this.dibujarse = function() {
    //
    if (this.vivo == true) {
      //

      if (vel1 == 2) {
        if (this.veneno == true) {
          image(pezGrandeVR, this.x, this.y, 90, 90);
        } else {
          image(pezGrande, this.x, this.y, 90, 90);
        }
      }
      if (vel1 == -2) {
        if (this.veneno == true) {
          image(pezGrandeV, this.x, this.y, 90, 90);
        } else {
          image(pezGrandeR, this.x, this.y, 90, 90);
        }
      }
    }
  }
  this.morirse = function() {
    this.vivo = false;
  }
  //
  this.moverse = function() {
    if (this.x > width) {
      vel1 = -2;
    }
    if (this.x < 0) {
      vel1 = 2;
    }
    if (this.y > 600) {
      vel1y = -2;
    }
    if (this.y < 200) {
      vel1y = 2;
    }
    this.x = this.x + 1 * vel1;
    this.y = this.y + 1 * vel1y;
  }
}

function pezKrill(dX, dY) {
  // caraceristicas
  this.x = dX;
  this.y = dY;
  this.veneno = false;
  this.vivo = true;
  this.grande = false;

  // habilidades
  //
  this.dibujarse = function() {
    //
    if (this.vivo == true) {
      //
      if (vel2 == 5) {
        image(krill, this.x, this.y, 90, 90);
      }
      if (vel2 == -5) {
        image(krillR, this.x, this.y, 90, 90);
      }
    }
  }
  this.morirse = function() {
    this.vivo = false;
  }
  //
  this.moverse = function() {
    if (this.x > width + 500) {
      vel2 = -5;
    }
    if (this.x < -900) {
      vel2 = 5;
    }
    this.x = this.x + 1 * vel2;
    this.y = this.y + random(-1, 1);
  }
}