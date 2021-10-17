var cloudGroup;
function preload(){
    thorImage  = loadImage("images/thor.png")
    cloudImage = loadImage("images/cloud.png")
}

function setup(){
    createCanvas(1000,600);
    thor = createSprite(100,100,20,20)
    thor.addImage(thorImage);
    thor.scale = 0.55;
    below = createSprite(100,600,1000,10)
    below.visible = false;
    above = createSprite(100,0,1000,10)
    above.visible = false;
    cloudGroup = new Group; 
}

function draw(){
    background("#8BE4F0");
    thor.debug = true;
    if(keyDown("space")){
        thor.velocityY = -12;
    }
    thor.velocityY = thor.velocityY + 1  ;
    if(thor.isTouching(below)){
        thor.destroy();
        generateClouds = none;
    }
    if(thor.isTouching(above)){
        thor.destroy();
        generateClouds = none;
    }    
    for( var i = 0 ; i<cloudGroup.length; i++){
        var temp = (cloudGroup).get(i);
        if(temp.isTouching(thor)){
            thor.destroy();
            stroke = "red";    
            textSize (50) ;
            text("YOU LOSE !",200,200);
            generateClouds=  none;
        }
    }
    generateClouds();
    drawSprites();
}
function generateClouds(){
    if(frameCount%100 == 0){
        var cloud = createSprite(1200,random(0,600),40,10);
        cloud.addImage (cloudImage);
        cloud.scale = 0.2 ; 
        cloud.velocityX = -4 ;
        cloud.lifetime = 350;
        cloudGroup.add (cloud);
    }
}