//Listas
let yCarros = [25, 60, 95, 127, 165];

//Randomizador de Velocidade
let velocidadeR1;
let velocidadeR2;
let velocidadeR3;
let velocidadeR4;
let velocidadeR5;

//Variáveis X dos Carros
let xCarro1 = 660;
let xCarro2 = 690;
let xCarro3 = 580;
let xCarro4 = 620;
let xCarro5 = 550;

function showCar(){
    image(imagemCarros[0], xCarro1, yCarros[0], 45, 25);
    image(imagemCarros[1], xCarro2, yCarros[1], 45, 25);
    image(imagemCarros[2], xCarro3, yCarros[2], 45, 25);
    image(imagemCarros[3], xCarro4, yCarros[3], 55, 35);
    image(imagemCarros[4], xCarro5, yCarros[4], 49, 29);
}

function carMove(){
  xCarro1 -= velocidadeR1;
  xCarro2 -= velocidadeR2;
  xCarro3 -= velocidadeR3;
  xCarro4 -= velocidadeR4;
  xCarro5 -= velocidadeR5;
}

function backPosition(){
  if (xCarro1 < -40){
    xCarro1 = 660;
  }
  if (xCarro2 < -40){
    xCarro2 = 690;
  }
  if (xCarro3 < -40){
    xCarro3 = 580;
  }
  if (xCarro4 < -40){
    xCarro4 = 620;
  }
  if (xCarro5 < -40){
    xCarro5 = 550;
  }
}
