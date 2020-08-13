var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.shapeColor = "blue";
      movingRect.shapeColor = "blue";
    }
    else{
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }
  
  drawSprites();
}