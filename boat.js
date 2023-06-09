class Boat {
   constructor(x, y, width,  height, boatpos, boatanimation){
    
   this.animation = boatanimation;
   this.speed = 0.05;


     this.body = Bodies.rectangle(x, y, w, h, boat_options);
     this.width = width;
     this.height = height;
     //this.image = loadImage("./assets/boat.png");
     this.boatPosition = boatpos;
     World.add(world, this.body);
   }

    animate(){
      this.speed += 0.05;
    }


   remove(index){
    setTimeout(()=>{
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 3000);
  }

   display(){
    var angle = this.body.angle;
     var pos = this.body.position;
     var index = floor(this.speed%this.animation.length);

     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.animation[index], 0, this.boatPosition, this.width, this.height);
     pop();
   }
}