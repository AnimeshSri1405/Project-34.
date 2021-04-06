class Ball {
    constructor(x, y, r) {
      var options = { 
        density: 1, 
        friction: 1
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r = r;
      this.image=loadImage("Superhero-01.png")
      this.image.scale=0.2
      
      World.add(world, this.body);
    }

  
    display() {
     // var angle = this.body.angle;
     push();
   
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
       pop();
      } 
  }