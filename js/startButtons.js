//class for the startButtons
class StartButtons
{
    constructor()
    {
        //creating the newGameButton
        this.newGameButton = createButton('New Game');
    }

    display()
    {
        //styling and giving position to the newGameButton
        this.newGameButton.style('background-color','white');
        this.newGameButton.style('font-size','25px');
        this.newGameButton.style('font-face','georgia');
        this.newGameButton.style('border','5px solid #555555');
        this.newGameButton.position(550,600);

        this.newGameButton.mousePressed(()=>
        {
            //gameState should change to askName if the newGameButton is pressed
            gameState = "askName";
        })
    }

    hide()
    {
        //hiding the newGameButton
        this.newGameButton.hide();
    }
}