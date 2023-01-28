var box;
function setup() {
  createCanvas(1000,1000);
  box = createSprite(500,500,250,250);
}

function draw() 
{
  background("BLUE");
  if (keyIsDown(RIGHT_ARROW)) 
  { box.position.x = box.position.x +5;
   }
    if (keyIsDown(LEFT_ARROW)) 
   { box.position.x = box.position.x  -5;
    }
  drawSprites();
}




