function preload() {
  fly = loadImage('data/fly.png');
  pence = loadImage('data/pence.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode (CENTER);
}


function draw() {
  image(pence, windowWidth/2, windowHeight/2, 1440, 750);
  image(fly, mouseX, mouseY, 60, 60);
  textAlign(CENTER);
  textSize(50);
  fill(255,0,0);
  text('TRUMP . PENCE . FLY . 2020', windowWidth/2, 200);
}
