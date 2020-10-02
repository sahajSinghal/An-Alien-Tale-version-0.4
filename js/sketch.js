//name-spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//making variables for engine and world
var engine, world;

//making variables for player and ground
var player;
var ground;

//variables for platforms
var platform1, platform2, platform3, platform4, platform5;

//creating a variable for the gameState and setting its value to be startPage
var gameState = "startPage";

//creating a variable which stores the startImage
var startImage;

//creating the variable for the start buttons
var startButtons;

//creating the variable for the story object
var story;

function preload()
{
    //loading the startImage
    startImage = loadImage("Images/CoverPage.png");
}

function setup()
{
    //creating the canvas
    createCanvas(1200,800);

    //creating the engine and world
    engine = Engine.create();
    world = engine.world;

    //creating the player body and making it invisible
    player = new Player(100,765);
    player.playerSprite.visible = false;

    //creating the ground body and making it invisible
    ground = new Ground(600,790,1200,20);
    ground.groundSprite.visible = false;

    //creating the platforms and making them invisible
    platform1 = new Platform(320,700,200,20);
    platform1.platformSprite.visible = false;
    platform2 = new Platform(540,500,200,20);
    platform2.platformSprite.visible = false;
    platform3 = new Platform(740,600,200,20);
    platform3.platformSprite.visible = false;
    platform4 = new Platform(990,470,200,20);
    platform4.platformSprite.visible = false;
    platform5 = new Platform(840,260,200,20);
    platform5.platformSprite.visible = false;
        
    //creating the object from the StartButtons class
    startButtons = new StartButtons();

    //creating the object from the Story class
    story = new Story();

    //running the engine
    Engine.run(engine);
}

function draw()
{
    //background is white
    background("white");


    if(gameState === "startPage")
    {   
        //background should be changed to the startImage
        background(startImage);

        //displaying the startButtons
        startButtons.display();
    }

    if(gameState === "askName")
    {
        //changing background to white
        background("white");

        //hiding the startButtons
        startButtons.hide();

        //displaying the dialougue and nextButton
        story.displayWeAreConnected();
        story.displayButton();

        if(player.name!== "")
        {
            //changing gameState to "interesting" if next is pressed and player's name is not null
            story.nextButton.mousePressed(()=>{
                gameState = "interesting";
            })
        }
    }

    if(gameState === "interesting")
    {
        //displaying the dialougue and nextButton
        story.displayInterestingName();
        story.displayButton();

        //changing gameState to "screen1" if next is pressed
        story.nextButton.mousePressed(()=>{
            gameState = "screen1";
        })
    }

    if(gameState === "screen1")
    {
        //displaying the dialougue and nextButton
        story.displayScreen1();
        story.displayButton();

        //changing gameState to "screen2" if next is pressed
        story.nextButton.mousePressed(()=>{
            gameState = "screen2";
        })
    }

    if(gameState === "screen2")
    {
        //displaying the dialougue and nextButton
        story.displayScreen2();
        story.displayButton();

        //changing gameState to "screen3" if next is pressed
        story.nextButton.mousePressed(()=>{
            gameState = "screen3";
        })
    }

    if(gameState === "forest")
    {
        //hiding the startButtons if gameState is forest
        startButtons.hide();

        //displaying the player
        player.display();
        player.playerSprite.visible = true;

        //displaying the ground
        ground.display();
        ground.groundSprite.visible = true;

        //displaying the platforms
        platform1.display();
        platform1.platformSprite.visible = true;
        platform2.display();
        platform2.platformSprite.visible = true;
        platform3.display();
        platform3.platformSprite.visible = true;
        platform4.display();
        platform4.platformSprite.visible = true;
        platform5.display();
        platform5.platformSprite.visible = true;
    }

    //making sprites visible
    drawSprites();
}

//function keyPressed to move the player
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