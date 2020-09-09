var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600, 200, 100, 50);
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"

  fixedRect.debug="true"
  movingRect.debug="true"


}

function draw() {
  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;


  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x <  fixedRect.width/2+movingRect.width/2){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"

  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"

  }


  drawSprites();
}