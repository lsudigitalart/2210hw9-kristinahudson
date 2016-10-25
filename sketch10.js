var objects = []

function preload() {
  song = loadSound("delerueb.mp3");
}

function setup() {
  createCanvas (1800, 600);
  song.loop();
  for (var i = 0; i < 33; i++) {
    var x = 10;
    var y = random(height);
    var r = i + 2;
    objects[i] = new Race(x, y, r);
  }
}

function draw() {
  background(230);
  strokeWeight(2);
  line(1000, 600, 1000, 0);
  for (var i = 0; i < objects.length; i++) {
    objects[i].move();
    objects[i].display();
  }
}

function Race(tempX, tempY, tempD) {
  this.x = tempX;
  this.y = tempY;
  this.d = tempD;
  this.speed = 2.5;

  this.move = function() {
    this.x += random(.05, 1);
  };

  this.display = function() {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x, this.y, this.d, this.d);
  };
}
