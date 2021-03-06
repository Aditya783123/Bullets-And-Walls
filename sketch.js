var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 20, 20);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
} 
  
function draw() {
  background(255,255,255);
  bullet.shapeColor = "black";
  if(hasCollided(bullet, wall)){
     bullet.velocityX = 0;
     var damage = 0.5*speed*speed*weight/(thickness*thickness*thickness);
     if(damage >= 10){
      wall.shapeColor = "red";
      }
      
      if(damage < 10){
          wall.shapeColor = "green";
      }
  }      
 
      
  drawSprites();
}

function hasCollided(lbullet, lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if (bulletRightEdge >= wallLeftEdge){
        return true;
    }
    return false;
}