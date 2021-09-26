class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }
  display() {
    var position = this.body.position;
    if(this.body.speed>3) 
    {
      World.remove(world, this.body);
      push();
      tint(255, this.visibility)

      image(this.image, position.x, position.y, 50, 50)
      this.visibility = this.visibility -5
      pop();
    }
    else{
      super.display()
    }
  }
    score() {
      if (this.visibility > 0 && this.visibility < 255) 
        score = score +5
    }
};
