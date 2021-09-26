const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var slingshot

var gameState = "onSling"

var score = 0

function preload() {
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 175);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(270,75);

    slingshot = new Slingshot(bird.body, {x:280, y:100});
}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
    else 
    background ("white")
    Engine.update(engine);
   // console.log(box2.body.position.x);
 //   console.log(box2.body.position.y);
  //  console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    platform.display();

    slingshot.display(); 

    bird.display();

    pig1.score()
    pig3.score()

    textSize (20)
    fill ("white")
    text("Score: " + score, 100, 100)
}

function mouseDragged() {
if (gameState === "onSling") 
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY})
}

function mouseReleased () {
    slingshot.fly()
    gameState = "launched"
}

async function getBackgroundImg () {
    var response = await fetch ("http://worldclockapi.com/api/json/est/now")
    var responsedata = await response.json();
    var dateTime = responsedata.currentDateTime
    var hour = dateTime.slice(11,13)

if (hour > 8 && hour < 17)
{
    backgroundImg = loadImage("sprites/bg2.jpg");
}

else 
{
    backgroundImg = loadImage("sprites/bg.png");
}

}
// function keyPressed(){
//     if(keyCode === 32) {
//         slingshot.attach (bird.body)
//         gameState = "onSling"
//     } 
// }