class boy{
    constructor(x, y, width, height, ) {
        var options = {
          isStatic : true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(180,515,50,50,options);
        this.width = 220;
        this.height = 220;
        this.image = loadImage("plucking mangoes/boy.png");
        this.body.scale = 1;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push()  
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
