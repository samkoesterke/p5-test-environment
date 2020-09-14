let rug;
function preload(){
  rug = loadImage("data/rug.jpg");
}

let walkers = [];
var walkerCount = 100;

function setup() {
  createCanvas(600, 800);
  background(0);

  for (let i = 0; i < walkerCount; i++) {
    walkers[i] = new Walker();
  }

  //while loop makes the warp of the tapestry! L=lines (While loop learned via Daniel Shiffman)
  var l = 0;
  while (l < width) {
    strokeWeight(0.2);
    stroke(255);
    line (l, 0, l, height);
    l = l +6;
  }
}


function draw() {
  for (let i = 0; i < walkerCount; i++) {
    walkers[i].display();
    walkers[i].move();
  }
}



function Walker() {
  this.x = 15;
  this.y = random(100, 600);

  this.display = function() {
    //image (rug, this.x, this.y);
    //color c = rug.get(int(x), int(y));
    //stroke(c);
    stroke(255);
    point(this.x, this.y);
  };

  this.move = function() {

    var r = random(1);
    if (r < 0.5) {
      this.x++;
    } else if (r < 0.76) {
      this.y++;
    } else {
      this.y--;
    }
    // this if statement makes the random walker stop moving
    if (this.x > 550) {
      this.x = 550;
    }
  };
}
