class Polygon {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 20, options);
    
        this.radius=20
        World.add(world, this.body);
      
      this.image = loadImage("polygon.png");
    }
  
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image( this.image,0, 0, this.radius*2, this.radius*2);
        pop();
    }
  }