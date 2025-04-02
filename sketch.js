let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background('rgb(242,77,77)');
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  fill('yellow')
  square(mouseX, mouseY, distancia);
  //square(x, y, 10);

  if (distancia < 3) {
    fill('black')
    text("Encontrou, seu bobão!", 200, 200);
    noLoop();
  }
}
