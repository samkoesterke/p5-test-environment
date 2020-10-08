// ******************************************************************
// ******************************************************************
// IF BY ARTEFACT YOU MEAN, A DUSTY OBJECT? by Sam Koesterke s3663521
// ******************************************************************
// ******************************************************************

// 80% of all knowledge has come from 'The Coding Train' by Daniel Shiffman. This includes for loops, while loops, arrays and random walkers

// Thanks to Jinni for showing me how to add a starting menu for the sketch
let mode;

let walkers = [];
let walkerCount = 2800;
let randImg;


let images = [];
function preload() {
  for (let i = 0; i < 4; i++) {
    images[i] = loadImage('data/rug'+i+'.png');
  }
}


function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  background(240);
  imageMode (CENTER);

  // this is the 'for loop' which initializes walker threads
  for (let i = 0; i < walkerCount; i++) {
    walkers[i] = new Walker();
  }

  //while loop makes the warp of the tapestry! L=lines
  var l = 0;
  while (l < width) {
    strokeWeight(0.8);
    stroke(220);
    line (l, 0, l, height);
    l = l +6;
  }

  //Thanks to Karen for the help
  randImg = floor(random(0, 4));

  //This controls the speed of the sketch
  frameRate(120);
}


function draw() { 
  if (mode==0) {
    fill(0);
    textSize(50);
    text('IF BY ARTEFACT YOU MEAN, A DUSTY OBJECT?', 20, 50);
    textSize(14);
    //Thanks Karen for the tip
    text('What gives an image it’s significance? How prolific it is, or it’s age? Or could it be the message the image delivers?\n\nThese tapestries consist of a range of pictures sourced from Google Images using a randomized 4 digit code. They are simultaneously meaningless & meaningful, they have outlived their purpose & usefulness, they are long forgotten; they are digital artefacts uncovered by chance but repurposed by design.\n\nOnce the tapestry has finished weaving, take a screenshot, draw it, trace it, destroy it, bury it under the algorithm, push it back out into the ether. A circular economy of insignificant images. There are X tapestries in total; refresh your page to load a new one.\n\nMade using typefaces by Lena Weber: @lenaweber404 and Ollie Schwan: @ollieschwandesign.', 20, 70, 365, 700);
    textSize(20);
    text('Press ENTER to begin.', 20, 500);
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
    this.x = random(100, 440); // starting position of the threads on the x axis
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
  }

  show() {
    var col = images[randImg].get(this.x-400, this.y-20);
    stroke(col);
    strokeWeight(1);
    point(this.x, this.y);
  }
} 
