var sea,ship;
var seaImg, shipImg;
var fish, fish_image;
var fish_image2;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship1.png","ship1.png",
                            "ship2.png","ship1.png");
  fish_image = loadImage("fish.png")
  fish_image2 = loadImage("myfish.png")
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
  
  /*fish = createSprite(140, 365, 25, 25);
  fish.addImage("fish", fish_image);
  fish.scale = 0.2;
  
  fish2 = createSprite(345, 322, 25, 25);
  fish2.addImage("myfish", fish_image2);
  fish2.scale = 0.2;*/
}

function draw() {
  background(0);
  sea.velocityX = -3;
  createFish();
  /*if(fish.x < -25){
    fish.x = 445;
  }
  fish.velocityX = -0.8;
  if(fish2.x < -25){
    fish2.x = 445;
  }
  fish2.velocityX = -0.8;*/
  //código para redefinir o fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}
function createFish(){
  if(frameCount%120==0){
  fish = createSprite(420, 330, 25, 25);
  fish.y = Math.round(random(255, 375));
  fish.velocityX = -0.8;
  fish.scale = 0.2;
  fish.depth = ship.depth;
  ship.depth = ship.depth+1;
  fish.lifetime = 560;
  var aleatorio = Math.round(random(1, 2));
  switch(aleatorio){
    case 1:fish.addImage(fish_image2);
    break;
    case 2:fish.addImage(fish_image);
    break;
    default:break;
  }
 }
}
