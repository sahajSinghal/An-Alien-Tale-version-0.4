//platform class
class Platform
{
    //construcctor which accepts x, y, width and height
    constructor(x,y,width,height)
    {
        //making the platforms have friction and make them static
        var options = 
        {
            friction: 5,
            isStatic: true
        }

        //making the platform's body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //adding it to the world
        World.add(world,this.body);

        //making the sprite to display the platforms
        this.platformSprite = createSprite(this.body.position.x,this.body.position.y,this.width,this.height);
    }

    display()
    {
        //updating the position of the platform's sprites
        this.platformSprite.x = this.body.position.x;
        this.platformSprite.y = this.body.position.y;
    }
}