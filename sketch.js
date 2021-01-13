
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObject;
var Tree,treeIMG;
var Boy;
var Stone,StoneIMG;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var Sling;
function preload()
{
	//treeIMG = loadImage("plucking mangoes/tree.png");
	

}

function setup() {
	createCanvas(1600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject=new ground(width/2,570,width,10);
	mango1 = new mango(1150,300,35);
	mango2 = new mango(1340,240,35);
	mango3 = new mango(1150,100,35);
	mango4 = new mango(1120,250,35);
	mango5 = new mango(1010,200,35);
	mango6 = new mango(1215,200,35);
	mango7 = new mango(1125,150,35);
	mango8 = new mango(1300,300,35);
	mango9 = new mango(1015,250,35);
	mango10 = new mango(960,300,35);
	mango11 = new mango(1000,155,35);
	
	
	Tree  = new tree(1100, 330, 500,500);


	Boy = new boy();
	Stone = new stone(110,455,25);

	Sling = new sling(Stone.body,{x:100, y:455})

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  detectollision(Stone,mango1);
  detectollision(Stone,mango2);
  detectollision(Stone,mango3);
  detectollision(Stone,mango4);
  detectollision(Stone,mango5);
  detectollision(Stone,mango6);
  detectollision(Stone,mango7);
  detectollision(Stone,mango8);
  detectollision(Stone,mango9);
  detectollision(Stone,mango10);
  detectollision(Stone,mango11);



  Boy.display();
 
  Tree.display();
  mango1.display();
  mango2.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  Sling.display();
  Stone.display();
  groundObject.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode  === 32){
		Matter.Body.setPosition(Stone.body,{x:110,y:455});
	    Sling.attach(Stone.body,{x:100, y:455});
	}

}

function detectollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance <= lmango.r + lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}

}


function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Sling.fly();
}