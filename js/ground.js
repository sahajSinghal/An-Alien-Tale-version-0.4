//class for the ground
class Ground
{
    //constructor which accepts x, y, width, height
    constructor(x,y,width,height)
    {
        //making the player have a bit of friction and making it static
        var options =
        {
            friction : 1,
            isStatic : true
        }

        //making the player's body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //adding it to the world
        World.add(world,this.body);

        //creating a property this.init as false
        this.init = false;
    }

    display()
    {
        //making rectMode center and creating the rect 
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

        //if this.init is false, only then the ground sprite will be created and turning this.init true
        if(!this.init)
        {
            this.groundSprite = createSprite(this.body.position.x,this.body.position.y,this.width,this.height);4
            this.init = true;
        }
    }
}