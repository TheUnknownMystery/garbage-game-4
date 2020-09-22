//constant for engine,world,body and bodies(object).......
const Engine   = Matter.Engine;

const World    = Matter.World ;

const Bodies   = Matter.Bodies;

const Body     = Matter.Body  ;

const Render   = Matter.Render;

//variables for ball and ground and dustbin....

var ball,ground_1,dustbin_1,dustbin_2,dustbin_3,dustbin_pic;


function setup() {

//creating canvas of size 990,400.....

	createCanvas(990, 400);

 //nameSpacing the engine.....

  engine = Engine.create();
  
	world  = engine.world;
  
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});
  //Create the Bodies Here and making the engine run....

    ball         =  new paperBall(300,300,30,30);

    ground_1     =  new ground(480,380,1000,20);

    dustbin_1    =  new dustbin(660,327,20,120);

    dustbin_2    =  new dustbin(770,327,20,120);

   dustbin_3     =  new dustbin(720,380,100,20);

   dustbin_pic   =  new dustbinGreen(718,330,88,88);

   Engine.run(engine);
   Render.run(render)
    }


function draw() {
 //making background of color black(0)

   background("white");

 //updaing engine

  Engine.update(engine);

  rectMode(CENTER);

 //displaying 

  ground_1.display();

  dustbin_1.display();
  
  dustbin_2.display();

  dustbin_3.display();

  dustbin_pic.display();

  ball.display();

 
               }



function keyPressed(){

 //if key pressed up arrow /up button then it will apply force

 if(keyCode === UP_ARROW){

 Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145})

                         }

                    }



