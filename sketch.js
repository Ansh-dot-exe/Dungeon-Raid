var backgroundImg, invisGround, GroundImg, Ground;
var player, playerImg, Walking;
var sasha, sashaImg;
var txtOrder = 0, txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9;
var txtImg1, txtImg2, txtImg3, txtImg4, txtImg5, txtImg6, txtImg7, txtImg8, txtImg9;
var interact, backgroundMusic;
var mute, muteImg, unmute, unmuteImg;



function preload(){
  backgroundImg = loadImage("images/Background.jpg");
  GroundImg = loadImage("images/ground.png");
  playerImg = loadImage("images/Standing.png");
  Walking = loadAnimation("images/Walking 1.png", "images/Walking 2.png");
  sashaImg = loadImage("images/Girl.png");
  txtImg1 = loadImage("images/txt1.png");
  txtImg2 = loadImage("images/txt2.png");
  txtImg3 = loadImage("images/txt3.png");
  txtImg4 = loadImage("images/txt4.png");
  txtImg5 = loadImage("images/txt5.png");
  txtImg6 = loadImage("images/txt6.png");
  txtImg7 = loadImage("images/txt7.png");
  txtImg8 = loadImage("images/txt8.png");
  txtImg9 = loadImage("images/txt9.png");
  muteImg = loadImage("images/Mute.png");
  unmuteImg = loadImage("images/Unmute.png");
    
  
  interact = loadSound("sound/interact.wav");
  backgroundMusic = loadSound("sound/bgmusic.mp3");
}

function setup() {
  createCanvas(1200,600);
  invisGround = createSprite(50, 500, 12000, 10);
  Ground = createSprite(600, 550,12000,600);
  Ground.addImage("Ground", GroundImg);
  player = createSprite(200, 460, 50,100);
  player.addImage("Player", playerImg);
  player.addAnimation("Walking", Walking);
  sasha = createSprite(400, 460, 50,100)
  sasha.addImage("sasha", sashaImg);

  txt1 = createSprite(490, 380, 50,100);
  txt1.addImage("txt", txtImg1);
  txt2 = createSprite(490, 380, 50,100);
  txt2.addImage("txt", txtImg2);
  txt3 = createSprite(490, 380, 50,100);
  txt3.addImage("txt", txtImg3);
  txt4 = createSprite(490, 380, 50,100);
  txt4.addImage("txt", txtImg4);
  txt5 = createSprite(490, 380, 50,100);
  txt5.addImage("txt", txtImg5);
  txt6 = createSprite(490, 380, 50,100);
  txt6.addImage("txt", txtImg6);
  txt7 = createSprite(490, 380, 50,100);
  txt7.addImage("txt", txtImg7);
  txt8 = createSprite(490, 380, 50,100);
  txt8.addImage("txt", txtImg8);
  txt9 = createSprite(490, 380, 50,100);
  txt9.addImage("txt", txtImg9);
  mute = createSprite(120,30,90,10);
  mute.addImage("mute", muteImg);
  unmute = createSprite(120,70,90,10);
  unmute.addImage("Unmute", unmuteImg);
  backgroundMusic.play();
  backgroundMusic.setVolume(0.2);

  
}

function draw() { 
  background(backgroundImg);
  
  
  Ground.scale = 6;
  player.scale = 1.6;
  sasha.scale = 1.6;
  sasha.depth = player.depth - 1;
  txt1.scale = 0.28;
  txt2.scale = 0.28;
  txt3.scale = 0.28;
  txt4.scale = 0.28;
  txt5.scale = 0.28;
  txt6.scale = 0.28;
  txt7.scale = 0.28;
  txt8.scale = 0.28;
  txt9.scale = 0.28;
  mute.scale = 0.2;
  unmute.scale = 0.2;

  player.depth = 100;
  invisGround.visible = false;
  
  
  
  if(txtOrder === 0){
    txt1.visible = true;
    txt2.visible = false;
    txt3.visible = false;
    txt4.visible = false;
    txt5.visible = false;
    txt6.visible = false;
    txt7.visible = false;
    txt8.visible = false;
    txt9.visible = false;
     txtOrder = 1;
  }

  if(txtOrder === 1 && keyWentDown("q")){
    txt1.visible = false;
    txt2.visible = true;
    txt3.visible = false;
    txt4.visible = false;
    txt5.visible = false;
    txt6.visible = false;
    txt7.visible = false;
    txt8.visible = false;
    txt9.visible = false;
     txtOrder = 2;
     interact.play();
     interact.setVolume(0.8);
  }

  if(txtOrder === 2 && keyWentDown("1")){
    txt1.visible = false;
    txt2.visible = false;
    txt3.visible = true;
    txt4.visible = false;
    txt5.visible = false;
    txt6.visible = false;
    txt7.visible = false;
    txt8.visible = false;
    txt9.visible = false;

     txtOrder = 3;
     interact.play();
     interact.setVolume(0.8);
  }

  if(txtOrder === 3 && keyWentDown("2")){
    txt1.visible = false;
    txt2.visible = false;
    txt3.visible = false;
    txt4.visible = true;
    txt5.visible = false;
    txt6.visible = false;
    txt7.visible = false;
    txt8.visible = false;
    txt9.visible = false;

     txtOrder = 5;
     interact.play();
     interact.setVolume(0.8);
  }

  if(txtOrder === 5 && keyWentDown("3")){
    txt1.visible = false;
    txt2.visible = false;
    txt3.visible = false;
    txt4.visible = false;
    txt5.visible = true;
    txt6.visible = false;
    txt7.visible = false;
    txt8.visible = false;
    txt9.visible = false;

     txtOrder = 6;
     interact.play();
     interact.setVolume(0.8);
  }

  if(txtOrder === 6 && keyWentDown("4")){
    txt1.visible = false;
    txt2.visible = false;
    txt3.visible = false;
    txt4.visible = false;
    txt5.visible = false;
    txt6.visible = true;
    txt7.visible = false;
    txt8.visible = false;
    txt9.visible = false;

     txtOrder = 7;
     interact.play();
     interact.setVolume(0.8);
  }

  if(txtOrder === 7 && keyWentDown("5")){
    txt1.visible = false;
    txt2.visible = false;
    txt3.visible = false;
    txt4.visible = false;
    txt5.visible = false;
    txt6.visible = false;
    txt7.visible = true;
    txt8.visible = false;
    txt9.visible = false;

     txtOrder = 8;
     interact.play();
     interact.setVolume(0.8);
  }

  if(txtOrder === 8 && keyWentDown("6")){
    txt1.visible = false;
    txt2.visible = false;
    txt3.visible = false;
    txt4.visible = false;
    txt5.visible = false;
    txt6.visible = false;
    txt7.visible = false;
    txt8.visible = true;
    txt9.visible = false;

     txtOrder = 9;
     interact.play();
     interact.setVolume(0.8);
  }

  if(txtOrder === 9 && keyWentDown("7")){
    txt1.visible = false;
    txt2.visible = false;
    txt3.visible = false;
    txt4.visible = false;
    txt5.visible = false;
    txt6.visible = false;
    txt7.visible = false;
    txt8.visible = false;
    txt9.visible = true;

     txtOrder = 10;
     interact.play();
     interact.setVolume(0.8);
  }

  


 



  if(keyDown("RIGHT_ARROW")&& txtOrder === 10){
    Ground.velocityX = -3;
    sasha.velocityX = -3;
    txt1.destroy();
    txt2.destroy();
    txt3.destroy();
    txt4.destroy();
    txt5.destroy();
    txt6.destroy();
    txt7.destroy();
    txt8.destroy();
    txt9.destroy();
    player.changeAnimation("Walking", Walking);
    

  }
  else{
    Ground.velocityX = 0;
    player.changeAnimation("Player", playerImg);
    sasha.velocityX = 0;
    
  }

  if(keyDown("m")){
    backgroundMusic.setVolume(0);
  }

  if(keyDown("u")){
    backgroundMusic.setVolume(0.2);
  }

  

 
  

  drawSprites();
}

