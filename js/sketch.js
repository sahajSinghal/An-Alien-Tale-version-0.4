//name-spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//making variables for engine and world
var engine, world;

//making variables for player and ground
var player;
var ground;

function setup()
{
    //creating the canvas
    createCanvas(1200,800);

    //creating the engine and world
    engine = Engine.create();
    world = engine.world;

    //creating the player body
    player = new Player(300,780);

    //creating the ground body
    ground = new Ground(600,790,1200,20);
        
    //running the engine
    Engine.run(engine);
}

function draw()
{
    //background is white
    background("white");

    //displaying and moving the player
    player.display();

    //displaying the ground
    ground.display();

    //making sprites visible
    drawSprites();
}

function keyPressed()
{
    if(keyCode === RIGHT_ARROW)
    {
        Matter.Body.applyForce(player.body,player.body.position,{x : 20 , y : -100});
    }

    if(keyCode === LEFT_ARROW)
    {
        Matter.Body.applyForce(player.body,player.body.position,{x : -20 , y : -100});
    }
}