class Slingshot {
    constructor(body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.7
        }
         
         this.slingshot = Constraint.create(options);
         this.sling1 = loadImage("sprites/sling1.png")
         this.sling2 = loadImage("sprites/sling2.png")
         this.sling3 = loadImage("sprites/sling3.png")
         World.add (world, this.slingshot);
    }
    display() {
        image(this.sling1, 270, 80, 40, 140);
        image(this.sling2, 243, 70, 40, 90);

        if (this.slingshot.bodyA) {
            var birdPos = this.slingshot.bodyA.position
            var point2 = this.slingshot.pointB
            push();
            if(birdPos.x>=220 && birdPos.x <= 290)
            {
                stroke("#54270F")
                strokeWeight(7)
                line(birdPos.x+10, birdPos.y, point2.x-30, point2.y);
                line(birdPos.x+20, birdPos.y, point2.x+20, point2.y);
            }
            else
            {
                stroke("#54270F")
                strokeWeight(3)
                line(birdPos.x+10, birdPos.y, point2.x-30, point2.y);
                line(birdPos.x+20, birdPos.y, point2.x+20, point2.y);
            }
          pop();
        } 
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    attach(body1) {
       this.slingshot.bodyA = body1 
    }
}