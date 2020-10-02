//class for the story at the beginning
class Story
{
    constructor()
    {
        //creating the elements and buttons
        this.nextButton = createButton('NEXT');

        this.weAreConnected = createElement('h1');
        this.askingName = createInput("")

        this.interestingName = createElement('h1'); 

        this.screen1 = createElement('h1'); 

        this.screen2 = createElement('h1'); 

        this.screen3 = createElement('h1'); 

        this.screen4 = createElement('h1'); 

        this.screen5 = createElement('h1'); 

        this.screen6 = createElement('h1');

        this.screen7 = createElement('h1');

        this.screen8 = createElement('h1');  

        this.screen9 = createElement('h1'); 
    }

    hide()
    {
        //hiding the nextButton and screen9
        this.nextButton.hide();
        this.screen9.hide();
    }
    
    displayButton()
    {
        //giving style to the nextButton
        this.nextButton.style('font-size','30px');
        this.nextButton.style('font-face','georgia');
        this.nextButton.style('background-color','white');
        this.nextButton.style('border','5px solid #555555');
        this.nextButton.position(580,600);
    }

    displayWeAreConnected()
    {
        //making the element and giving it position
        this.weAreConnected.html("We are connected... <br> <br> Why do you look so confused? <br> <br> Do you even remember your name?");
        this.weAreConnected.position(500,100);

        //givng style to the input and making the value of player be equal to the input given by user
        this.askingName.position(500,400);
        this.askingName.style('font-size','30px');
        this.askingName.style('font-face','forte');
        player.name = this.askingName.value();
    }

    displayInterestingName()
    {
        //hiding the previous element and the input
        this.weAreConnected.hide();
        this.askingName.hide();

        //displaying the "Interesting Name Dialougue"
        this.interestingName.html(player.name+", Ah! Interesting... <br> <br> very, <br> <br> very, <br> <br> interesting...");
        this.interestingName.position(500,100);
    }

    displayScreen1()
    {
        //hiding the previous element
        this.interestingName.hide();

        //displaying screen1
        this.screen1.html("You seem to be suffering from Amnesia... <br> <br> So let me remind you of your goal... <br> <br> again...");
        this.screen1.position(500,100);
    }

    displayScreen2()
    {
        //hiding the previous element
        this.screen1.hide();

        //displaying screen2
        this.screen2.html("Long, Long ago... In the place I, <br> <br> or I should say we... call our hometown");
        this.screen2.position(500,100);
    }

    displayScreen3()
    {
        //hiding the previous element
        this.screen2.hide();

        //displaying screen3
        this.screen3.html("There was a huge rebellion against... <br> <br> The so believed 'EVIL' ruler of the place...");
        this.screen3.position(500,100);
    }

    displayScreen4()
    {
        //hiding the previous element
        this.screen3.hide();

        //displaying screen4
        this.screen4.html("DRACO")
        this.screen4.position(580,100);
    }

    displayScreen5()
    {
        //hiding the previous element
        this.screen4.hide();

        //displaying screen5
        this.screen5.html("The people believed, <br> <br> he was the evil spirit <br> <br> who was driving 'their' place towards ruin")
        this.screen5.position(500,100);
    }

    displayScreen6()
    {
        //hiding the previous element
        this.screen5.hide();

        //displaying screen6
        this.screen6.html("The strongest people of the place <br><br> rebelled against Draco <br><br> and succeeded in making him... <br><br> A Meagre Spirit");
        this.screen6.position(500,100);
    }

    displayScreen7()
    {
        //hiding the previous element
        this.screen6.hide();

        //displaying screen7
        this.screen7.html("However... <br><br> they knew that his return was inevitable...");
        this.screen7.position(500,100);
    }

    displayScreen8()
    {
        //hiding the previous element
        this.screen7.hide();

        //displaying screen8
        this.screen8.html("NO, we seem to be losing our connection");
        this.screen8.position(500,100);
    }
    
    displayScreen9()
    {
        //hiding the previous element
        this.screen8.hide();
    
        //displaying screen9
        this.screen9.html("PLEASE... <br><br> remember your task and don't lose your way........");
        this.screen9.position(500,100);    
    }
}