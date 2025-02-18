//Variáveis do Ator
let xAtor = 100
let yAtor = 370

function showActor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 30);
}

function actorMove(){
  if (keyIsDown(87)){
    yAtor -= 3
  }
  if (keyIsDown(83)){
    yAtor += 3
  }
}