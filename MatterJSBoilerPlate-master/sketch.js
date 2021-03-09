
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var tree, treeImg, boy, boyImg,monkey,monkeyImg,monkey1,monkey1Img;
var score =0 ;


function preload()
{
 treeImg = loadImage("pic/tree.png");
 boyImg = loadImage("pic/happy.jpg");
 boyImg1 = loadImage("pic/angry.jpg");
 boyImg2 = loadImage("pic/mowgli.jpg");
 monkeyImg  = loadImage("pic/monkey.jpg");
 monkey1Img = loadImage("pic/monkey1.jpg");
 sadImg  = loadImage("pic/download.jpg");
}

function setup()
 {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

//  score = 0;
    
	//Create the Bodies Here.
    tree = createSprite(600,400,20,20);
	tree.addImage(treeImg);
	tree.scale = 0.6;

    boy = createSprite(200,525,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.5;

	monkey = createSprite(900,450,20,20);
	monkey.addImage(monkeyImg);
	monkey.scale = 0.5;

	monkey1 = createSprite(350,450,20,20);
	monkey1.addImage(monkey1Img);
	monkey1.scale = 0.5;

	
	ground = new Ground(500,590,1000,20);
	stone = new Stone(200,150,70);
	string = new Chain(stone.body,{x:145, y:470});
	mango1 = new Mango(700,300,60);
	mango2 = new Mango(760,250,60);
	mango3 = new Mango(800,390,60);
	mango4 = new Mango(675,400,60);
	mango5 = new Mango(900,400,60);
	mango6 = new Mango(870,300,60);
	mango7 = new Mango(550,350,60);
	mango8 = new Mango(800,200,60);
	apple1 = new Apple(400,150,60);
	apple2 = new Apple(300,400,60);
	grapes1 = new Grapes(300,350,60);
	grapes2 = new Grapes(763,60,60);
	banana1 = new Banana(900,250,60);
	banana2 = new Banana(850,100,60);
  pear1 = new Pear(700,200,60);
  pear2 = new Pear(600,300,60);	
  pear3 = new Pear(500,240,60);	
  pear4 = new Pear(400,200,60);	
  pear5 = new Pear(600,70,60);	
  pear6 = new Pear(600,150,60);	
  	
	
	
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");

 // score = 0;

  //fill("black");
  //text("score : " + score,100,40);

  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  string.display();
  ground.display();
  stone.display(); 
  apple1.display();
  apple2.display();
  banana1.display();
  banana2.display();
  grapes1.display();
  grapes2.display();
  pear1.display();
  pear2.display();
  pear3.display();
  pear4.display();
  pear5.display();
  pear6.display();
 


  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollisionAgain(stone,apple1);
  detectCollisionAgain(stone,apple2);
  detectCollisionThis(stone,banana1);
  detectCollisionThis(stone,banana2);
  detectCollision1(stone,grapes1);
  detectCollision1(stone,grapes2);
  detectCollision2(stone,pear1);
  detectCollision2(stone,pear2);
  detectCollision2(stone,pear3);
  detectCollision2(stone,pear4);
  detectCollision2(stone,pear5);
  detectCollision2(stone,pear6);

  fill("black");
 // size("30");
 // text("score : ",100,40);
}


function mouseDragged()
{
 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
 string.fly();
 boy.addImage(boyImg1);
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
	  
  }

  
 
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		string.attach(stone.body);
	}
  boy.addImage(boyImg);
}

function detectCollisionAgain(lstone, lapple)
{
 appleBodyPosition = lapple.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,appleBodyPosition.x, appleBodyPosition.y)
  
  if(distance<=lapple.r+lstone.r)
  {
	  Matter.Body.setStatic(lapple.body, false);
	  
  }
}

function detectCollisionThis(lstone, lbanana)
{
 bananaBodyPosition = lbanana.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,bananaBodyPosition.x, bananaBodyPosition.y)
  
  if(distance<=lbanana.r+lstone.r)
  {
	  Matter.Body.setStatic(lbanana.body, false);
	  
  }

  

 
}

function detectCollision1(lstone, lgrapes)
{
 grapesBodyPosition = lgrapes.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,grapesBodyPosition.x, grapesBodyPosition.y)
  
  if(distance<=lgrapes.r+lstone.r)
  {
	  Matter.Body.setStatic(lgrapes.body, false);
	  
  }

}

function detectCollision2(lstone, lpear)
{
 pearBodyPosition = lpear.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,pearBodyPosition.x, pearBodyPosition.y)
  
  if(distance<=lpear.r+lstone.r)
  {
	  Matter.Body.setStatic(lpear.body, false);
	  
  }

}

function detectCollision3(lstone, lmonkey)
{
 monkeyBodyPosition = lmonkey.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,monkeyBodyPosition.x, monkeyBodyPosition.y)
  
  if(distance<=lmonkey.r+lstone.r)
  {
	  Matter.Body.setStatic(lmonkey.body, false);
	  
  }

}