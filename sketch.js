var fixedRect, movingRect;
var gameobject1,gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1=createSprite(50,50,50,50);
  gameobject1.shapeColor="green";
  gameobject1.debug=true;

  gameobject2=createSprite(100,50,50,50);
  gameobject2.shapeColor="green";
  gameobject2.debug="true";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 



if(isTouching(movingRect,gameobject1)){
  movingRect.shapeColor = "red";
  gameobject1.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
}


  drawSprites();
}
// true/false-boolean values
