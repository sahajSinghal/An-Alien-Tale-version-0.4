//class for the player
class Player
{
    //making constructor which accepts x and y
    constructor(x,y)
    {
        //making the player have a bit of friction, adding density to it and making it non-static
        var options = 
        {
            friction : 10,
            isStatic : false,
            density: 0.8,
        }

        //creating the player's body
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;

        //adding it to the world
        World.add(world,this.body);
    }

    display()
    {
        //making the rectangular body
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

        camera.position.x = this.body.position.x
        camera.position.y = this.body.position.y;
    }
}