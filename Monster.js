class Monster  {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.2,
          'friction':10.0,
          'density':1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("Monster-01.png"); 
      this.image.scale = 0.2
      World.add(world, this.body);
    }
    display(){
      /*var pos =this.body.position;
      var angle = this.body.angle;*/
      push();
      
   
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    
      pop();
    }
  }
  