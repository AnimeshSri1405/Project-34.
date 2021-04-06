
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
function preload()
{
	bgImg = loadImage("GamingBackground.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	ball=new Ball(200,200,100,20)
  monster=new Monster(900,100,150,150)
//	rope= new Slingshot(ball.body,{x:450,y:100})
ground= new Ground(400,600,1200,20)
box1= new Box(750,100,70,70)
box2= new Box(750,100,70,70)
box3= new Box(750,100,70,70)
box4= new Box(750,100,70,70)
box5= new Box(750,100,70,70)
box6= new Box(750,100,70,70)
box7= new Box(750,100,70,70)
box8= new Box(750,100,70,70)
 
box9= new Box(650,100,70,70)
box10= new Box(650,100,70,70)
box11= new Box(650,100,70,70)
box12= new Box(650,100,70,70)
box13= new Box(650,100,70,70)
box14= new Box(650,100,70,70)
box15= new Box(650,100,70,70)
box16= new Box(650,100,70,70)

box17= new Box(550,100,70,70)
box18= new Box(550,100,70,70)
box19= new Box(550,100,70,70)
box20= new Box(550,100,70,70)
box21= new Box(550,100,70,70)
box22= new Box(550,100,70,70)
box23= new Box(550,100,70,70)
box24= new Box(550,100,70,70)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
 ground.display()
 ball.display()
 monster.display()
 //rope.display()
 box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()

  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
 box21.display() 
  box22.display()
  box23.display()
  box24.display()
  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


