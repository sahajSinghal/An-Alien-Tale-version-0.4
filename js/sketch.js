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
    createCanvas(displayWidth,displayHeight);

    //creating the engine and world
    engine = Engine.create();
    world = engine.world;

    //creating the player body
    player = new Player(displayWidth*1/3,displayHeight*2/3);

    //creating the ground body
    ground = new Ground(displayWidth/2,displayHeight*11/12,displayWidth,displayHeight/39);
        
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

    //logging the player's x and y position
    console.log(player.body.position.x,player.body.position.y);

    //making sprites visible
    drawSprites();
}

function keyPressed()
{
    if(keyCode === RIGHT_ARROW)
    {
        Matter.Body.applyForce(player.body,player.body.position,{x : 40 , y : -30});
    }

    if(keyCode === LEFT_ARROW)
    {
        Matter.Body.applyForce(player.body,player.body.position,{x : -(displayWidth/100) , y : -(displayHeight/100)});
    }
}