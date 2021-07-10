class Stone {
    constructor(x, y,weidth,height) {
      var options = {
        'density':0.8,
        'friction': 0.9,
        'restitution':12
      };
      this.body = Bodies.rectangle(x, y, 20, 10, options);
      this.width = 50;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var pos= this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);

      rectMode(CENTER)
      fill('black')
      stroke("black")
      rect(0, 0, this.width, this.height);
      pop();
    };
  };