 //creating class for ground......

class ground{

//creating constuctor with arguments(x , y , width , height)
    constructor(x , y , width , height){

//making a static variables to make a object static

    var options={

    isStatic:true

                }

    //making body by arguments and making it static using options(x , y , width , height,options)

    this.body= Bodies.rectangle(x , y , width , height,options)

    this.width  =  width  ;

    this.height =  height ;

    World.add(world,this.body);

                                        }

    display(){
   
   // nameSpacing the object position

   var pos= this.body.position

   rectMode(CENTER);

   fill("yellow");;
   //defining body

   
   rect(pos.x , pos.y , this.width , this.height);

  

    }
         }