const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisionHeight = 300; 

function preload() {
 
}


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);
 
}

var Particles = []
var plinkos = []
var divisions = []

for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
}

 for (var j = 75; j <=width; j=j+50) 
 {
    plinkos.push(new Plinko(j,75))
 }
 for (var j = 50; j <=width-10; j=j+50) 
 {
    plinkos.push(new Plinko(j,175))
 }
  for (var j = 75; j <=width; j=j+50) 
 {
    plinkos.push(new Plinko(j,275))
 }
  for (var j = 50; j <=width-10; j=j+50) 
 {
    plinkos.push(new Plinko(j,375))
 }



function draw() {
  background('black');  
  drawSprites();

  

  

  ground.display();

}