var sea,ship;
var seaImg,shipImg;
var fish, fish_image;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship1.png","ship1.png",
                            "ship2.png","ship1.png");
  fish_image = loadImage("fish.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
  fish = createSprite(140, 365, 25, 25);
  fish.addImage("fish", fish_image);
  fish.scale = 0.2;
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  if(fish.x < -25){
    fish.x = 445;
  }
    fish.velocityX = -0.8;
  drawSprites();
}
