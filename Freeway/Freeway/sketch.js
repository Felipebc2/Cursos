function setup() {
  createCanvas(500, 400);
  velocidadeR1 = random(2,5);
  velocidadeR2 = random(2.5,5);
  velocidadeR3 = random(3,5);
  velocidadeR4 = random(4,6);
  velocidadeR5 = random(3,6);
}

function draw() {
  background(imagemDaEstrada);
  showActor();
  showCar();
  carMove();
  actorMove();
  backPosition();
}