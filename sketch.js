const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	pImage = loadImage("polygon.png")
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.

    ground = new Ground(800, 795, 1600, 10)
    ground2 = new Ground(840, 700 , 300, 7)
    ground3 = new Ground(1325, 400 , 210, 7)

    
    block = new Box(750, 676, 30, 40)
    block2 = new Box(780, 676, 30, 40)
    block3 = new Box(810, 676, 30, 40)
    block4 = new Box(840, 676, 30, 40)
    block5 = new Box(870, 676, 30, 40)
    block6 = new Box(900, 676, 30, 40)
    block7 = new Box(930, 676, 30, 40)
    block8 = new Box2(780, 636, 30, 40)
    block9 = new Box2(810, 636, 30, 40)
    block10 = new Box2(840, 636, 30, 40)
    block11 = new Box2(870, 636, 30, 40)
    block12 = new Box2(900, 636, 30, 40)
    block13 = new Box3(810, 596, 30, 40)
    block14 = new Box3(840, 596, 30, 40)
    block15 = new Box3(870, 596, 30, 40)
    block16 = new Box4(840, 556, 30, 40)

    b1 = new Box(1265, 376, 30, 40)
    b2 = new Box(1295, 376, 30, 40)
    b3 = new Box(1325, 376, 30, 40)
    b4 = new Box(1355, 376, 30, 40)
    b5 = new Box(1385, 376, 30, 40)
    b6 = new Box3(1295, 336, 30, 40)
    b7 = new Box3(1325, 336, 30, 40)
    b8 = new Box3(1355, 336, 30, 40)
    b9 = new Box2(1325, 296, 30, 40)
    
    var options={
        density : 2
    }

    polygon = Bodies.circle(150, 650, 20, options);
    World.add(world, polygon);

    sling = new SlingShot(this.polygon, {x:150, y : 650})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  text (mouseX+ ":"+ mouseY, 400, 200)

  

  fill ("blue")

  ground.display();
  ground2.display();
  ground3.display();
  block.display();
  block2.display();
  block4.display();
  block3.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display(); 
  block14.display(); 
  block15.display();
  block16.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  imageMode (CENTER);
  image(pImage, polygon.position.x, polygon.position.y, 40, 40) 

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}





