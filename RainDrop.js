class RainDrops{
    constructor(x,y,radius){
        var options = {
            friction: 0.3
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.velocityY  = 5;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
     fall(speed){
      this.y +=10;
    }
  
    display(){
        
        push();
        colorMode(HSB);
        noStroke();
        //translate(pos.x,pos.y);
       
        fill(this.color);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }