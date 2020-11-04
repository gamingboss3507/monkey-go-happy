var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
 createCanvas(400,400);
  
  monkey=createSprite(50,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  banana=createSprite(350,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1; 
  banana.visible=false;
 
 
    
  ground=createSprite(390,380,900,10);       
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
   survivalTime=0; 
  score=0;
}


function draw() {

   background(240);
  
  
  if(ground.x<0){
   ground.x=ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 280 ){
    monkey.velocityY=-14;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
    
     if(monkey.isTouching(banana)){
    score=score+1; 
    banana.destroy();
  }
    
   
   
  
  
  stroke("white");
  textSize(20);
  fill("black");
  text("score: "+ score, 310,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime,50,50);
  
  
   if (frameCount % 60 === 0) {
     banana=createSprite(400,200,20,20);
    banana.y = Math.round(random(180,230));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX = -6;
    banana.lifetime=80;
    
  }
 
  
  Enemy();
  
  drawSprites();   
    
  }

  function Enemy(){
     
    if (frameCount % 150 === 0) {
    enemy=createSprite(400,360,20,20);
    enemy.y = Math.round(random(355,365)); 
     enemy.addImage(obstacleImage);
     enemy.scale=0.1;
     enemy.velocityX = -7;
     enemy.lifetime=100;
    
    }  
   
    }

