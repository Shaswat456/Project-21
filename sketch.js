var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100,590,175,10);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,590,175,10);
    surface2.shapeColor = "gold";
    
    surface3 = createSprite(500,590,175,10);
    surface3.shapeColor = "green";

    surface4 = createSprite(700,590,175,10);
    surface4.shapeColor = "blue";

    box = createSprite(random(20,750),50,50,50);
    box.velocityX = random(4,6);
    box.velocityY = random(4,6);

    rightEdge = createSprite(800,300,1,600);
    leftEdge = createSprite(0,300,1,600);
    upEdge = createSprite(400,0,800,1);
    downEdge = createSprite(400,600,800,1);
    
}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();


    
    box.bounceOff(rightEdge);
    box.bounceOff(leftEdge);
    box.bounceOff(upEdge);
    box.bounceOff(downEdge);

    if (box.bounceOff(surface1)){
     box.shapeColor = "red";
    }

    if (box.bounceOff(surface2)){
        box.shapeColor = "gold";
       }

    if (box.bounceOff(surface3)){
        box.shapeColor = "green";
       }

    if (box.bounceOff(surface4)){
        box.shapeColor = "blue";
       }
    drawSprites();
}
