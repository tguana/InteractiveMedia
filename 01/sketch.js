function setup() 
{
  
  createCanvas(600, 600);
	background(251, 240, 199);
  
  //3er plano  
  fill(123,158,186,120);
  beginShape();
  vertex(206, 368);
	vertex(373, 199);
	vertex(374, 194);
	vertex(758, 510);
  endShape();
  
  line(123,378,517,266);
  
  fill(9,9,11);
  beginShape();
  vertex(322, 581);
	vertex(146, 477);
	vertex(150, 471);
	vertex(330, 568);
  endShape();
  
  fill(255);
  stroke(195,177,164);
  bezier(345,380,350,360,387,335,410,410);
  
  fill(92,111,95);
  noStroke();
  bezier(350,390,350,360,387,345,400,410);
  
  stroke(0);
  fill(255);
  bezier(350,410,350,360,385,355,391,400);
  
  stroke(239,148,143);
  strokeWeight(2);
  arc(433,391,50,70,PI,PI);
  
  noStroke();
  fill(102,172,196);
  arc(433,391,45,55,PI,PI);
  
  fill(255);
  arc(433,391,35,45,PI,PI);
  
  stroke(0);
	arc(433,391,30,40,PI,PI);
  
  //Estructura cuadros
  fill(117,157,57);
  beginShape();
  vertex(330, 568);
	vertex(350, 548);
	vertex(334, 533);
	vertex(311, 558);
  endShape();

  fill(251, 240, 199);
  beginShape();
  vertex(311, 558);
	vertex(334, 533);
	vertex(318, 519);
	vertex(296, 550);
  endShape();
  
  fill(178, 188, 197);
  beginShape();
  vertex(296, 550);
	vertex(318, 519);
	vertex(307, 509);
	vertex(287, 544);
  endShape();
  
  fill(145, 92, 14);
  beginShape();
  vertex(287, 544);
	vertex(307, 509);
	vertex(268, 476);
	vertex(248, 523);
  endShape();
  
  fill(251, 240, 199);
  beginShape();
  vertex(307, 509);
	vertex(326, 476);
	vertex(280, 448);
	vertex(268, 476);
  endShape();
  
  fill(57, 89, 24);
  beginShape();
  vertex(326, 476);
	vertex(341, 451);
	vertex(292, 420);
	vertex(280, 448);
  endShape();
  
  fill(251, 240, 199);
  beginShape();
  vertex(341, 451);
	vertex(356, 427);
	vertex(306, 388);
	vertex(292, 420);
  endShape();
  
  fill(21);
  beginShape();
  vertex(356, 427);
	vertex(371, 404);
	vertex(323, 349);
	vertex(306, 388);
  endShape();
  
  fill(3);
  beginShape();
  vertex(318, 519);
	vertex(345, 487);
	vertex(326, 476);
	vertex(307, 509);
  endShape();
  
  fill(205,206,176);
  beginShape();
  vertex(334, 533);
	vertex(362, 502);
	vertex(345, 487);
	vertex(318, 519);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(350, 548);
	vertex(378, 517);
	vertex(362, 502);
	vertex(334, 533);
  endShape();
  
  beginShape();
  vertex(345, 487);
	vertex(372, 466);
	vertex(341, 451);
	vertex(326, 476);
  endShape();
  
  beginShape();
  vertex(362, 502);
	vertex(388, 473);
	vertex(372, 466);
	vertex(345, 487);
  endShape();
  
  fill(205,206,176);
  beginShape();
  vertex(378, 517);
	vertex(413, 481);
	vertex(388, 473);
	vertex(362, 502);
  endShape();
  
  fill(109,156,184);
  beginShape();
  vertex(372, 466);
	vertex(390, 449);
	vertex(356, 427);
	vertex(341, 451);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(388, 473);
	vertex(405, 457);
	vertex(390, 449);
	vertex(372, 466);
  endShape();
  
  fill(248,169,164);
  beginShape();
  vertex(413, 481);
	vertex(429, 466);
	vertex(405, 457);
	vertex(388, 473);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(390, 449);
	vertex(400, 432);
	vertex(371, 404);
	vertex(356, 427);
  endShape();
  
  fill(19,73,39);
  beginShape();
  vertex(405, 457);
	vertex(417, 443);
	vertex(400, 432);
	vertex(390, 449);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(429, 466);
	vertex(442, 455);
	vertex(417, 443);
	vertex(405, 457);
  endShape();
  
  fill(3);
  beginShape();
  vertex(400, 432);
	vertex(412, 415);
	vertex(385, 385);
	vertex(371, 404);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(417, 443);
	vertex(428, 428);
	vertex(412, 415);
	vertex(400, 432);
  endShape();
  
  fill(3);
  beginShape();
  vertex(442, 455);
	vertex(452, 442);
	vertex(428, 428);
	vertex(417, 443);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(412, 415);
	vertex(420, 406);
	vertex(390, 377);
	vertex(385, 385);
  endShape();
  
  fill(3);
  beginShape();
  vertex(428, 428);
	vertex(435, 418);
	vertex(420, 406);
	vertex(412, 415);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(452, 442);
	vertex(457, 435);
	vertex(435, 418);
	vertex(428, 428);
  endShape();
  
  fill(3);
  beginShape();
  vertex(420, 406);
	vertex(434, 387);
	vertex(403, 357);
	vertex(390, 377);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(435, 418);
	vertex(450, 400);
	vertex(434, 387);
	vertex(420, 406);
  endShape();
  
  fill(145,97,15);
  beginShape();
  vertex(457, 435);
	vertex(469, 417);
	vertex(450, 400);
	vertex(435, 418);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(450, 400);
	vertex(477, 366);
	vertex(460, 353);
	vertex(434, 387);
  endShape();
  
  beginShape();
  vertex(469, 417);
	vertex(494, 379);
	vertex(477, 366);
	vertex(450, 400);
  endShape();
  
  beginShape();
  vertex(477, 366);
	vertex(496, 340);
	vertex(480, 325);
	vertex(460, 353);
  endShape();
  
  fill(3);
  beginShape();
  vertex(494, 379);
	vertex(513, 352);
	vertex(496, 340);
	vertex(477, 366);
  endShape();
  
  beginShape();
  vertex(496, 340);
	vertex(512, 319);
	vertex(495, 305);
	vertex(480, 325);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(513, 352);
	vertex(527, 330);
	vertex(512, 319);
	vertex(496, 340);
  endShape()
  
  fill(3);
  beginShape();
  vertex(527, 330);
	vertex(533, 320);
	vertex(520, 310);
	vertex(512, 319);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(533, 320);
	vertex(544, 305);
	vertex(529, 295);
	vertex(520, 310);
  endShape()
  
  fill(3);
  beginShape();
  vertex(544, 305);
	vertex(550, 295);
	vertex(536, 285);
	vertex(529, 295);
  endShape();
  
  fill(235,227,224);
  beginShape();
  vertex(550, 295);
	vertex(556, 285);
	vertex(543, 275);
	vertex(536, 285);
  endShape()
  
  fill(3);
  beginShape();
  vertex(556, 285);
	vertex(562, 276);
	vertex(547, 265);
	vertex(543, 275);
  endShape();
  
  //1er plano
  noFill();
	bezier(217,507,217,461,241,434,285,434);
  stroke(228,225,138);
  bezier(216,507,218,461,242,434,285,433);
  
  stroke(0)
  strokeWeight(1);
  bezier(315,257,383,245,399,230,417,163);
  bezier(315,256,383,245,399,230,417,163);
  strokeWeight(2);
  bezier(315,255,383,245,399,230,417,163);
  bezier(315,253,383,245,399,230,417,163);
  bezier(315,251,383,245,399,230,417,163);
  bezier(315,249,383,245,399,230,417,163);
  bezier(315,249,383,245,399,230,417,163);
	bezier(315,247,383,245,399,224,417,163);
  bezier(315,245,383,245,399,222,417,163);
  bezier(315,244,383,245,399,220,417,163);
  bezier(315,243,383,245,399,219,417,163);
  bezier(315,241,383,245,399,218,417,163);
  bezier(315,240,383,245,399,217,417,163);
  bezier(315,239,383,245,399,216,417,163);
  bezier(315,238,383,245,399,215,417,163);
  bezier(315,237,383,245,399,215,417,163); 
  
  strokeWeight(1);
  bezier(527,261,476,259,434,274,407,297);
  bezier(527,261,476,259,434,274,408,297);
  
  strokeWeight(1.5);
  bezier(408,297,378,326,368,329,343,316)
  bezier(408,297,378,326,368,329,346,316)
  
  strokeWeight(2);
  bezier(345,316,314,289,290,289,273,336);
	bezier(346,316,314,289,290,289,275,335);
  bezier(344,316,314,289,290,289,273,336);
  
  bezier(273,336,261,359,240,369,212,353);
  bezier(274,336,261,359,240,370,210,353);
  bezier(274,336,261,359,240,371,208,354);
  bezier(274,336,261,359,240,375,206,354);
  
  strokeWeight(3);
  bezier(209,353,166,323,150,329,154,369);
  bezier(211,353,166,323,150,329,152,370);
  bezier(206,353,166,323,150,329,150,370);
  bezier(206,353,166,323,150,329,156,369);
  bezier(206,353,166,328,150,332,158,369);
  
  strokeWeight(4);
  strokeCap(SQUARE);
  bezier(150,369,157,391,160,399,183,414);
  bezier(157,369,159,391,168,399,185,412);
  bezier(154,369,157,391,160,399,187,409);

  fill(64,11,4);
  strokeWeight(1);
  beginShape();
  vertex(600, 446);
	vertex(345, 522);
	vertex(342, 527);
	vertex(600, 451);
  endShape();
  
  fill(11,6,10);
  beginShape();
  vertex(600, 428);
	vertex(357, 476);
	vertex(356, 483);
	vertex(600, 435);
  endShape();
	
  line(600,276,582,284);

  line(600,281,583,287);
  
  stroke(90,24,30);
  line(600,302,574,312);
  
  stroke(0);
  line(600,303,575,313);
  
  line(600,315,552,378);
  line(600,316,552,378);
  line(600,317,552,378);
  line(600,318,552,378);
  
  strokeWeight(2);
  line(600,87,566,67);
  
  strokeWeight(2);
  line(600,123,572,113);
  
  stroke(0)
  strokeWeight(2);
	line(600,520,378,517);
  line(600,275,513,600);
  
  strokeWeight(1.5);
  line(457,600,489,577);
  
  strokeWeight(1);
  line(373,68,373,266);
  
  line(334,73,469,136);
  
  line(346,138,410,138);
  
  strokeWeight(1.5);
  line(353,152,419,151);
  
  noFill();
  strokeWeight(1);
  bezier(474, 238, 487, 168, 513, 129, 576,103);
  
  bezier(469, 215, 492, 133, 524, 88, 592,41);

	noFill();
	arc(577,571,100,100, PI, PI );
    
	strokeWeight(2);
  arc(525,519,85,85, PI, PI );
  
  stroke(204);
  strokeWeight(2);
  arc(525,519,83,83, PI, PI );
  
  stroke(0);
  arc(630,519,120,100, PI, PI + HALF_PI);
  
  strokeWeight(2);
  stroke(255,204,102);
  arc(630,519,117,99, PI, PI + HALF_PI);
  
  //Circulos y contornos
  noStroke();
  smooth(80);
  fill(100,167,197,100);
  ellipse(113,549,110);
  fill(100,167,197,90);
  ellipse(113,549,120);
  fill(100,167,197,80);
  ellipse(113,549,125);
  fill(131,114,164,70);
  ellipse(113,549,140);

  noSmooth();
  stroke(0);
  fill(231,193,74);
  ellipse(113,549,90);
  
  noStroke();
  fill(238,186,75,180);
  ellipse(220,260,100);
  fill(238,186,75,170);
  ellipse(220,260,110);
  fill(238,186,75,160);
  ellipse(220,260,120);
    
  smooth(80);
  fill(207,96,78,100);
  ellipse(137,141,275);
  fill(207,96,78,140);
  ellipse(137,141,265);
  fill(207,96,78,170);
  ellipse(137,141,255);
  fill(207,96,78,200);
  ellipse(137,141,240);
  
  noSmooth();
  fill(176,12,8);
  ellipse(220,260,90);
  
  noSmooth();
  fill(11,11,33);
  ellipse(137,141,220);
  
  fill(64,25,100);
  ellipse(137,141,100);
  
  stroke(0);
  fill(188,33,46);
  ellipse(555,150,25);
  
  fill(255);
  ellipse(557,230,78);
  
  noStroke();
  fill(48,48,51);
  ellipse(557,230,55);
  
  stroke(90,24,30)
  fill(255);
  ellipse(557,230,45);
  
}

function draw() 
{
	
}