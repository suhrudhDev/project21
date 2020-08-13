var wall,thickness;
var bullet,speed,weight;
var bulletRightEdge,wallLeftEdge;



function setup() {

 thickness=random(22,83);
 speed=random(223,321);
 weight=random(30,50)

  createCanvas(1600,400);
  bullet=createSprite(10, 200, 10, 5);
  wall=createSprite(1500,200,thickness,200);

  

}

function draw() {

  wall.shapeColor=color(80,80,80);
  
  bullet.velocityX=speed;

 
  if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  
  }
  
  if(damage<10){
   bullet.shapeColor=color(0,255,0);
    }

  }
  background(0,0,0);  
  drawSprites();
}

function hascollided(lbullet,lwall){
 bulletRightEdge=lbullet.x+lbullet.width;
 wallLeftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true;
}
  return false;
}