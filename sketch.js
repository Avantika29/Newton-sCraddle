
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bob,bob2,bob3,bob4,bob5,bob6;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob = new Bob(300,450,50);
	bob2 = new Bob(350,450,50);
	bob3 = new Bob(400,450,50);
	bob4 = new Bob(450,450,50);
	bob5 = new Bob(500,450,50);
	bob6 = new Bob(550,450,50);


	roof = new Roof(400, 200, width,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  roof.display();
  
  drawSprites();
 
}



