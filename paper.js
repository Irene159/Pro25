class paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.2,
            'friction':0.3,
            'density':1.2,
            'isStatic' : false
        }
         this.radius = radius
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(x, y, radius-10, options);
	    World.add(world, this.body);
       
        
   }
   display(){
    
    ellipseMode(RADIUS);
   
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, this.radius+30,this.radius+30)
    
}
}