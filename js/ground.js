//class for the ground
class Ground
{
    //constructor which accepts x, y, width, height
    constructor(x,y,width,height)
    {
        //making the ground have a bit of friction and making it static
        var options =
        {
            friction : 2000,
            isStatic : true,
        }

        //making the ground's body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //adding it to the world
        World.add(world,this.body);

        //making the sprite to display the ground
        this.groundSprite = createSprite(this.body.position.x,this.body.position.y,this.width,this.height);
    }

    display()
    {
        rectMode(CENTER);

        //updating the position of the ground's sprite
        this.groundSprite.x = this.body.position.x;
        this.groundSprite.y = this.body.position.y;
    }
}