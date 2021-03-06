const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1=new Ground(390,300,250,10)
    stand2=new Ground(700,200,200,10)
    polygon=new Polygon(50,200)
    slingShot=new SlingShot(polygon.body,{x:100,y:200})
    box1=new Box(300,275,30,40)
    box2=new Box(330,275,30,40)
    box3=new Box(360,275,30,40)
    box4=new Box(390,275,30,40)
    box5=new Box(420,275,30,40)
    box6=new Box(450,275,30,40)
    box7=new Box(480,275,30,40)
    box8 =new Box(330,235,30,40);
    box9=new Box(360,235,30,40)
    box10=new Box(390,235,30,40)
    box11=new Box(420,235,30,40)
    box12=new Box(450,235,30,40)
    box13=new Box(360,195,30,40)
    box14=new Box(390,195,30,40)
    box15=new Box(420,195,30,40)
    box16=new Box(390,155,30,40)
    b1=new Box(640,175,30,40)
    b2=new Box(670,175,30,40)
    b3=new Box(700,175,30,40)
    b4=new Box(730,175,30,40)
    b5=new Box(760,175,30,40)
    b6=new Box(670,135,30,40)
    b7=new Box(700,135,30,40)
    b8=new Box(730,135,30,40)
    b9 = new Box(700,95,30,40);



}
function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
   // box1.display();
    //box2.display();
    ground.display();
    stand1.display();
    stand2.display();
    polygon.display();
    slingShot.display();
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    box6.display()
    box7.display()
    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("light blue")
    box13.display();
    box14.display();
    box15.display();
    fill("yellow")
    box16.display();
    fill("blue")
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    fill("pink")
    b6.display()
    b7.display()
    b8.display()
    fill("yellow")
    b9.display()
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
    slingShot.attach(polygon.body)
    }
}
