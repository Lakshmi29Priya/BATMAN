class Drop{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.2
        }
   this.x=x;
   this.y=y;
   this.r=10;
   this.body=Bodies.circle(x,y,this.r,options);
   World.add(world,this.body);  
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle); 
    noStroke();
    fill("blue")
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y , this.r,this.r);
    pop();
}
}