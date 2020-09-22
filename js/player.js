//class for the player
class Player
{
    //making constructor which accepts x and y
    constructor(x,y)
    {
        //making the player have a bit of friction and making it non-static
        var options = 
        {
            friction : 1,
            isStatic : false
        }

        //creating the player's body
        this.body = Bodies.rectangle(x,y,displayWidth/20,displayHeight/20,options);
        this.width = displayWidth/20;
        this.height = displayHeight/20;

        //adding it to the world
        World.add(world,this.body);

        //creating a property this.init as false
        this.init = false;
    }

    display()
    {
        //making rectMode as center and making the rectangular body
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

        //if this.init is false, only then the playerSprite will get created and making this.init true
        if(!this.init)
        {
            this.playerSprite = createSprite(this.body.position.x,this.body.position.y,this.width,this.height);
            this.init = true;
        }

        //making the playerSprite's position equal to player's body's
        this.playerSprite.x = this.body.position.x;
        this.playerSprite.y = this.body.position.y;
    }

    move()
    {
        //if space is pressed then we apply force upward and towards right
        if(keyCode===32)
        {
            Matter.Body.applyForce(this.body,this.body.position,{x : displayWidth/100 , y : -(displayHeight/100)}); 
        }

        //if a is pressed then we apply force upward and towards left
        if(keyCode ===97)
        {
            Matter.Body.applyForce(this.body,this.body.position,{x : -(displayWidth/100) , y : -(displayHeight/100)}); 
        }
    }
}