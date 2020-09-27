// ******************************************************************
// ******************************************************************
// IF BY ARTEFACT YOU MEAN, A DUSTY OBJECT? by Sam Koesterke s3663521
// ******************************************************************
// ******************************************************************


// Thanks to Jinni for showing me how to add a starting menu for the sketch
let mode;


let walkers = [];
let walkerCount = 2000;


let images = [];
function preload() {
  for (let i = 0; i < 3; i++) {
    images[i] = loadImage('data/trialrug'+i+'.png');
  }
}



function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  background(30);
  imageMode (CENTER);

  // this is the 'for loop' which initializes walker threads
  for (let i = 0; i < walkerCount; i++) {
    walkers[i] = new Walker();
  }

  //while loop makes the warp of the tapestry! L=lines (While loop learned via Daniel Shiffman)
  var l = 0;
  while (l < width) {
    strokeWeight(0.8);
    stroke(50);
    line (l, 0, l, height);
    l = l +6;
  }


  //var randImg = floor(random(0, 3));
  //image(images[randImg], 500, 500);

  //This controls the speed of the sketch
  //frameRate(15);
}



function draw() { 
  if (mode==0) {
    textSize(30);
    fill(255);
    text('IF BY ARTEFACT YOU MEAN, A DUSTY OBJECT?', 20, 40);

    textSize(14);
    text('The tapestries are made up of several pictures', 20, 80);
    text('sourced from Google Images using a randomized', 20, 100);
    text('4 digit code. They are simultaneously meaningful', 20, 120);
    text('and meaningless, they have outlived usefulness,', 20, 140);
    text('they are long forgotten, they are digital artefacts', 20, 160);
    text('uncovered by chance but repurposed by design.', 20, 180);

    text('Once the tapestry has finished weaving, take a', 20, 220);
    text('screenshot and push it back out into the ether.', 20, 240);
    text('A circular economy of images and data.', 20, 260);

    text('Press ENTER to begin.', 20, 360);
  }

  if (mode==1) {
    for (let i = 0; i < walkerCount; i++) {
      walkers[i].move();
      walkers[i].show();
    }
  }
}


function keyPressed() {
  if (keyCode===ENTER) {
    mode = 1;
  }
}










// ******************************************************************
// ******************************************************************
// WALKER CLASS
// ******************************************************************
// ******************************************************************

class Walker {
  constructor() {
    this.x = 400; //random(350, 400); // starting position of the threads on the x axis
    this.y = random(800); // starting position of the threads on the y axis
  }

  move() {
    var r = random(1);
    if (r < 0.5) {
      this.x++;
    } else if (r < 0.76) {
      this.y++;
    } else {
      this.y--;
    }
    // this if statement makes the random walker stop moving
    if (this.x > windowWidth) {
      this.x = windowWidth;
    }
  }

  show() {
    var randImg = floor(random(0,3));
    var col = images[randImg].get(this.x-400, this.y-20);
    stroke(col);
    strokeWeight(1);
    point(this.x, this.y);
  }
} 
