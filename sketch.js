
let lineas;
let carrosRX;
let carrosRY;
let carroR;
let listaCR;
 //lista de objetos carroRojo
// ArrayList<carroRojo> listaCR; // ArrayList,LinkList y Array === []
let game;
let restart;
let carroA;
let contador;
let x;
let y;

function setupRestart() {
  lineas = 12;
  carrosRX = 1;
  carrosRY = 4;
  /*listaCR = new ArrayList<carroRojo>();*/
  x = 80;
  y = 320;
  listaCR = [];
  game = false;
  restart = false;
  contador = 0;

  posX = 250;
  posY = 80;

  carroA = new carroAzul(x, y);

  //Red cars on the road
  for (i = 0; i < carrosRX; i++) {
    for (j = 0; j < carrosRY; j++) {

      posX += 200;

      if (posX > 500) {
        posX = (random(350, 800));
        posY += 120;
      }

      if (posY > 500) {
        posX = -50;
      }
      listaCR.push(new carroRojo(posX, posY)); // add() === push()
    }
  }
}

function setup() {
  createCanvas(800, 525);

  

  setupRestart();


}

function draw() {
  background(100);
  posX = 10;
  posY = 20;


  //Linea de la calle

  for (i = 0; i < lineas; i++) {
    for (j = 0; j < lineas; j++) {
      strokeWeight(3);
      stroke(255);
      line(posX, posY, posX + 30, posY);

      posX += 50;

      if (posX >= 820) {
        posX = 10;
        posY += 120;
      }
    }
  }

  //Carros rojos
  for (i = 0; i < listaCR.length; i++) { // metodo size() ==== parametro length
    let actual = listaCR[i]; //lista.get(x) ==== lista[x]
    actual.pintar();
    if (game == false) {
      actual.mover();
    }

    //Distancia entre los carros rojos y los azules para perder
    if (dist(carroA.getX(), carroA.getY(), actual.getX(), actual.getY()) < 70) {
      game = true;
    }
  }

  //Carro azul
  carroA.pintar();
  carroA.setY(y);
  if (game == false) {
    carroA.mover();

  }

  //Perdiste mensaje
  if (game == true) {
    fill(224, 251, 252);
    rectMode(CENTER);
    stroke(255);
    rect(width / 2, height / 2 - 20, 400, 100);
    fill(0);
    textSize(64);
    textAlign(CENTER);
    text("Perdiste", width / 2, height / 2);
    contador++;
    if (contador > 150) {
      restart = true;
    }
  }

  //Reiniciar
  if (restart == true) {
    setupRestart();
  }

}

function keyPressed() {
  if (key == 'w') {
    y -= 120;
  }

  if (key == 's') {
    y += 120;
  }
  if (key == 'W') {
    y -= 120;
  }

  if (key == 'S') {
    y += 120;
  }
}
