const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var snow;
var boy;

function preload(){
 snow=loaImage("snow4.png")
 snow=loadImage("snow5.png")
 boy=loadImage("boy.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow=new Snow(300,200);
  boy=new Boy(50,200);

}

function draw() {
  background(snow);  
  
  snow.addImage(snow);
  boy.addImage(boy);
  
 for(vari=0;i<100;i++){
   snow.display;
 }
 
 
 
  drawSprites();
}