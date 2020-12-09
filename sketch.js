
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var slingShot,rock;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	rock = new Rock(600,height,800,700);
	slingShot = new SlingShot(rock.body,{x:200,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rock.display();
  slingShot.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}



