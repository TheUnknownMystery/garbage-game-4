
//creating class for paper ball......

class paperBall{
   //making constuctor to build the object and define properties

 //giving arguments to the constructor 

   constructor(x,y,width,height){

 //making paper ball a static object(non-moving object)
  
  var options={

  isStatic   : false ,

  restitution:  0.4 ,

  friction   :  0.3 ,

  density    :  1.2

             }
 
//making body by arguments(position and size).....

 this.body   =  Bodies.rectangle( x , y , width , height , options );

 World.add(world,this.body);

 this.width  =  width;

 this.height = height;

 this.image=loadImage("paper_1.png")

 

                               }

  display(){
//nameSpacing the position of a object/image.....

 var pos= this.body.position

 //defining (how to display the image??)(image,Position.x,position.y and width)
 
 imageMode(CENTER);
 
 image(this.image,pos.x,pos.y,this.width,this.height);

          }
            }