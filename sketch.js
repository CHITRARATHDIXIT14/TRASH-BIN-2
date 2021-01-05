
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3
var gound1
var paper1,paper2,paper3
var dust1,dust2

function preload()
{
	
dust2=loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//box1=new box(850,435,120,10)
	//box2=new box(790,400,10,90)
	//box2.visible=false;
	//box3=new box(910,400,10,90)
	//box3.bisible=false;
    ground1=new ground(500,450,1000,20)
  
    paper1=new paper(50,380,40,20)
	dust1=new dust(850,380,150,100)

    dust1.scale=6;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
//box1.display();
//box2.display();
//box3.display();
ground1.display();
dust1.display();
paper1.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:21,y:-45})
	
		}
	







}
