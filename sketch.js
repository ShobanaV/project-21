var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(32,52)
  bullet=createSprite(50,200,50,50)
  bullet.velocityX=speed;
  bullet.debug;
  wall=createSprite(1200,200,thickness,height/2)
  createSprite(400, 200, 50, 50);
}

function draw() {
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  background("pink");  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x + bullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}