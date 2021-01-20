
var gameState = "level1";
var gameState2 = 0;
var star;
var man, man_running;
var ground, invisibleGround, groundImage;
var edu,unemp, poll, pand, gw;
var eduGroup, pollGroup,pandGroup, unempGroup, gwGroup;

var poll,unemp,edu;
var score=0;

var yes, no;

var gameOver, restart, bg;

function preload(){
 // man_running =   loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png", "man10.png", "man11.png");
  man_running =   loadAnimation("man1.png", "man4.png", "man6.png"); 
  pollImg = loadImage("poll123.png");
  umempImg=loadImage('unemployment.png');
  eduImg=loadImage('noBook.png');
  gwImg=loadImage('gw.png');
  pandImg=loadImage('pandemic.png');
  starImg=loadImage('star.png');
  bgImg=loadImage('bg999.jpg');
  pencilImg=loadImage('pencil.png');
  jobImg=loadImage('briefcase.png');
  treeImg=loadImage('tree.png');
  vaccineImg=loadImage('vaccine.png');
  lawsImg=loadImage('laws123.png');
  yesImg = loadImage('yes.png');
  noImg = loadImage('no.png');
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg= createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImg);
  bg.scale=3.5;
  bg.velocityY=-2;
  
  restart = createSprite(windowWidth/2,340);
  restart.addImage(restartImg);
  restart.scale = 0.1;
  restart.visible = false;

  star=createSprite(420,57,10,10);
  star.addImage(starImg);
  star.scale=0.2;

  

  man= createSprite(900,600);
  //man.velocityY=2;
  man.addAnimation("running", man_running);
  man.scale = 0.6;

  problem = createSprite(man.x,30);

  yes=createSprite(700,400,50,50);
  yes.addImage(yesImg);
  yes.scale =0.2;
  yes.visible = false;
  no=createSprite(1200,400,50,50);
  no.addImage(noImg);
  no.scale = 0.2;
  no.visible = false;

  eduGroup = new Group();
  unempGroup = new Group();
  pollGroup = new Group();
  pandGroup = new Group();
  gwGroup = new Group();
}

function draw() {
  background("white");
  
    problem.x = man.x;
    if(bg.y<200){
      bg.y=windowHeight/2 + 100;
    }
    if(gameState2===0){
    switch(gameState){
    case "level1": problem.addImage(eduImg);
                   problem.scale =0.5;
                   problem.velocityY = 0.1;
                   bg.velocityY=-2;
                  EduCollection();
                  break;
    case "level2":
                  problem.addImage(umempImg);
                  problem.velocityY = 0.2;
                  problem.scale =0.5;
                  bg.velocityY=-3;
                  unempCollection();
                  break;   
    case "level3": 
                  problem.addImage(pollImg);
                  problem.velocityY = 0.3;
                  problem.scale =0.5;
                  bg.velocityY=-4;
                  pollCollection();
                  break;          
    case "level4": 
                  problem.addImage(pandImg);
                  problem.velocityY = 0.4;
                  problem.scale =0.5;
                  bg.velocityY=-5;
                  pandCollection();
                  break; 
    case "level5": 
                  problem.addImage(gwImg);
                  problem.velocityY = 0.5;
                  problem.scale =0.5;
                  bg.velocityY=-5;
                  gwCollection();
                  break;
    default: break;
      
  }}
  
  if (gameState!=="end"){
    if(keyDown("RIGHT_ARROW")){
      man.x=man.x+5;
    }
    if(keyDown("LEFT_ARROW")){
      man.x=man.x-5;
    }
    if(keyDown("UP_ARROW")){
      man.y=man.y-5;
    }
    if(keyDown("DOWN_ARROW")){
      man.y=man.y+5;
    }
    if (eduGroup.isTouching(man)){
     eduGroup.destroyEach();
    score=score+1;

   }
   if (pollGroup.isTouching(man)){
    pollGroup.destroyEach();
   score=score+1;

  }
  if (pandGroup.isTouching(man)){
    pandGroup.destroyEach();
   score=score+1;
  }
  if (gwGroup.isTouching(man)){
    gwGroup.destroyEach();
   score=score+1;
  }
  if (unempGroup.isTouching(man)){
    unempGroup.destroyEach();
   score=score+1;
  }
 
 

  drawSprites();
  fill('pink');
    rect(479,30,120,40);
    
  fill('red');
  textSize(25);
   text("STARS: "+ score, 484.9,55);
  if(score === 5){
    gameState2 = 1;
  Questions();
   }
   }
   if (problem.isTouching(man)){
    gameState = "end";
  }

  
  if(gameState ==="end"){ 
    background(0);
    fill('red');
    textSize(30);
    text('GO AGAIN TO SAVE THE EARTH', windowWidth/2-200,450);
    restart.visible = true;
   man.visible = false;
   bg.visible = false;
   star.visible = false;
   problem.visible = false;
   eduGroup.destroyEach();
   unempGroup.destroyEach();
   pollGroup.destroyEach();
   pandGroup.destroyEach();
   gwGroup.destroyEach();
   if(mousePressedOver(restart)) {
    reset();
    }
  drawSprites();
 }
}
function EduCollection(){
  if (frameCount%50===0 && gameState=="level1"&& gameState2 === 0){
    pencil = createSprite(random(400, windowWidth-600), random(problem.y, windowHeight), 100, 100);
    pencil.velocityX = 6;
    pencil.lifetime=500;
    pencil.addImage(pencilImg);
    pencil.scale =0.1;
    eduGroup.add(pencil);
      }
    
  }
function unempCollection(){
    if (frameCount%50===0 && gameState=="level2"&& gameState2 === 0){
      job = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
      job.velocityX = 6;
      job.lifetime=500;
      job.addImage(jobImg);
      job.scale =0.2;
      unempGroup.add(job);
      }
      
    }
function pollCollection(){
      if (frameCount%50===0  && gameState=="level3"&& gameState2 === 0){
       tree = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
       tree.velocityX = 6;
       tree.lifetime=500;
       tree.addImage(treeImg);
       tree.scale =0.2;
       pollGroup.add(tree);
       }
        
      }
      
function pandCollection(){
     if (frameCount%50===0 && gameState=="level4"&& gameState2 === 0){
          vaccine = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
          vaccine.velocityX = 6;
          vaccine.lifetime=500;
          vaccine.addImage(vaccineImg);
          vaccine.scale =0.5;
          pandGroup.add(vaccine);
         }
          
        }
function gwCollection(){
     if (frameCount%50===0 && gameState=="level5"&& gameState2 === 0){
            laws = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
            laws.velocityX = 6;
            laws.lifetime=500;
            laws.addImage(lawsImg);
            laws.scale =0.1;
            gwGroup.add(laws);
            }
           
          }
        
   function Questions(){
     
    console.log(yes);
                        
       //Change Questions according to level, change gameState according to levels. 
    switch(gameState){
      case "level1":    
                         textSize(40);
                        text(' Do you think that inequalities like gender and cultural identity should affect education’s reach?', 50,250);
                        yes.visible = true;
                        no.visible = true;
                        if(mousePressedOver(yes)){
                          yes.visible = false;
                          no.visible = false;
                        
                         gameState = "end";
                      }else if(mousePressedOver(no)){
                        yes.visible = false;
                        no.visible = false;
                                            
                       gameState = "level2";
                        gameState2 = 0;
                        score = 0;
                        }
                      
                    break;
      case "level2": 
      textSize(30);
      text('If you met a stranger on the road who is looking for a job, would you reference him/her to a potential employee you know of?', 50,250);
      yes.visible = true;
      no.visible = true;
      if(mousePressedOver(no)){
        yes.visible = false;
        no.visible = false;
        gameState = "end";
      }else if(mousePressedOver(yes)){
        yes.visible = false;
        no.visible = false;
        gameState = "level3";
        gameState2 = 0;
        score = 0;
      }
     
    break;
      case "level3": 
      textSize(30);
      text(' Do you believe in reusing materials like newspaper and other scraps and wish to spread awareness about pollution?', 50,250);
      yes.visible = true;
      no.visible = true;
      if(mousePressedOver(no)){
        yes.visible = false;
        no.visible = false;
        gameState = "end";
      }else if(mousePressedOver(yes)){
        yes.visible = false;
        no.visible = false;
        gameState = "level4";
        gameState2 = 0;
        score = 0;
      }
      
    break;
      case "level4": textSize(30);
      text("Do you think that you should obey sanitation rules during a pandemic if others aren't? ", 50,250);
      yes.visible = true;
      no.visible = true;
      if(mousePressedOver(no)){
        yes.visible = false;
       no.visible = false;
        gameState = "end";
      }else if(mousePressedOver(yes)){
        yes.visible = false;
        no.visible = false;
        gameState = "level5";
        gameState2 = 0;
        score = 0;
      }
     
    break;
      case "level5": textSize(30);
      text(' Do you think switching off your lights and fans and reducing water waste can prevent pollution?', 50,250);
      yes.visible = true;
      no.visible = true;
      if(mousePressedOver(yes)){
        yes.visible = false;
       no.visible = false;
        gameState = "end";
      }else if(mousePressedOver(no)){
        yes.visible = false;
       no.visible = false;
        gameState = "end";
      }
   
    break;
      }
                
    }
  
    function reset(){
      gameState = "level1";
      restart.visible = false;
      yes.visible = false;
      no.visible = false;
      man.visible = true;
      bg.visible = true;
      star.visible = true;
      problem.visible = true;
      
      man.y = 650;
      score = 0;
      
    }

