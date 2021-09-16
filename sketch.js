var bg
var runner, runnerimg, logimg, lpuddle, lpuddleimg, hearts, heartsimg, branches, branchimg1, branchimg2, stoneimg, lava, lava2,lava3 ,lavaimg, obstacle
function preload(){
   bg=loadImage("volcano2.jpg");
   logimg=loadImage("log.png");
   lpuddleimg=loadImage("lava puddle.png");
   heartsimg=loadImage("heart.png");
   branchimg1=loadImage("branch1.png");
   branchimg2=loadImage("branch2.png");
   stoneimg=loadImage("stone.png")
   runnerimg=loadAnimation("running_girl 1.png", "running_girl 2.png", "running_girl 3.png", "running girl 4.png")
   lavaimg=loadImage("lava.jpg")
  
}
function setup() {
  createCanvas(1500,900);
  
  lava=createSprite(300, 880, 1500, 20);
  lava.addImage(lavaimg)
  lava2=createSprite(880, 880, 1500, 20);
  lava2.addImage(lavaimg);
  lava3=createSprite(1380, 880, 1500, 20);
  lava3.addImage(lavaimg);
  runner=createSprite(90, 760, 30, 30);
  runner.addAnimation("running girl", runnerimg);
  runner.scale=0.5
  
}


function draw() {
  background(bg);  
  drawSprites();
  spawnBranches();
  spwanObstacles();
  spwanHearts();
  spwanLava();
}

function spawnBranches(){
  if(frameCount%100===0){
    var branches=createSprite(1500, random(780, 890), 10,10);
    var rand=Math.round(random(1, 2));
    branches.velocity.x=-5
    switch(rand){
      case 1:branches.addImage(branchimg1);
             break;
      case 2:branches.addImage(branchimg2);
             break;       
    }
    branches.scale=0.3
    branches.lifetime=1000;
  }
}


function spwanObstacles(){
  if(frameCount%100===0){
    var obstacle=createSprite(1500, random(800, 850), 50, 50);
    obstacle.velocity.x=-5
    var rand=Math.round(random(1,2));
    switch(rand){
      case 1 :obstacle.addImage(logimg);
              break;
      case 2:obstacle.addImage(stoneimg)  ;  
              break;    
     }
     obstacle.scale = 0.3;
    obstacle.lifetime = 1000;
    }
  }

  function spwanHearts(){
    if(frameCount%500===0){
      var hearts=createSprite(1500, random(800, 850), 10,10);
      hearts.addImage(heartsimg);
      hearts.scale=0.04
      hearts.velocity.x=-5;
      hearts.lfetime=1000
    }
  }

  function spwanLava(){
    if(frameCount%200===0){
      var lpuddle=createSprite(1500, random(800, 850), 10,10);
      lpuddle.addImage(lpuddleimg);
      lpuddle.scale=0.4
      lpuddle.velocity.x=-5;
      lpuddle.lfetime=1000
    }
  }
