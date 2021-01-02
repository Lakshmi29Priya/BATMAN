class Batman{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:1.9,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
     this.animation=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle); 
    noStroke();
   // fill("blue")
  //  ellipseMode(RADIUS);
//rect(this.x,this.y,this.width,this.height);
imageMode(CENTER);
image(this.animation,x,y,width,height);  
pop();
}
}