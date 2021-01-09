var canvas;
var player;
var backgroundImg;
var playerImg;
var object1Img , object2Img , object3Img;
var objects;
const PLAY = 1;
const END = 0;
var gameState = PLAY;
var gameOver , gameOverImg;

function preload(){
    backgroundImg = loadImage("images/backgroundImg.jpg");
    playerImg = loadImage("images/player.png");
    object1Img = loadImage("images/object1.png");
    object2Img = loadImage("images/object2.png");
    object3Img = loadImage("images/objects.png");
    gameOverImg = loadImage("images/gameOver.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  bg = createSprite(displayWidth/2,displayHeight/2,width,displayHeight);
  bg.velocityY = 2;
  //bg.scale = 1;
  bg.addImage(backgroundImg);

  player = createSprite(displayWidth/2,displayHeight/2+50);
  player.addImage(playerImg);

  objects = new Group();
}

function movement(){

    if(keyDown(LEFT_ARROW)){
      player.x-=10;
    }
    if(keyDown(RIGHT_ARROW)){
      player.x+=10;
    }
}
function spawnObjects(){
    
    if(frameCount % 50 === 0){
      //% divides the frames by 50 and if the reaminder is 0 the if condition works.
      object = createSprite(200,50,20,20);
      object.addImage("ob",object1Img);
      object.x = Math.round(random(30, displayWidth-100))
      object.velocityY = 5;
      object.scale = 0.2;
      objects.add(object);
            var rand = Math.round(random(1, 3));
      switch (rand) {

        case 1:
          object.addImage("ob", object1Img);
          break;
        case 2:
          object.addImage("ob", object2Img);
          break;
        case 3:
          object.addImage("ob", object3Img);
          break;
        default:
          break;
      }
    }
}
function destroyPlayer(){
  if (objects.isTouching(player)) {
      player.destroy();
      gameState = END;
 
}
}
  function gameEnd(){
    gameOver = createSprite(displayWidth/2,displayHeight/2+50);
    gameOver.addImage(gameOverImg);
    objects.setVelocityYEach(0);
    bg.velocityY = 0;
  }
function draw(){
 background(0,0,255);
 //(bbackgroundackgroundImg)
 

  if(gameState=== PLAY){
    destroyPlayer();
    spawnObjects();
    movement();
    if(bg.y>displayHeight){
      bg.y = bg.height/2;
    }
  }
    else if(gameState===END){
      gameEnd();
    }
 
 drawSprites();
 
}
