class Form {
    constructor () {
        this.input = createInput ("Name") ;
        this.button = createButton ("Play");
        this.greeting = createElement ("h2");
        var title = createElement ("h2");
        title.html ("Car Racing Game");
        title.position (displayWidth/2 - 50 ,0);

        this.input.position (displayWidth/2 - 40 , displayHeight/2 - 80);

        this.button.position (displayWidth/2 + 30 , displayHeight/2);        
            
    }

    hide () {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        
    }
    
    display () {

   
        this.button.mousePressed (()=> {
            this.input.hide ();
            this.button.hide ();

            player.name = this.input.value (); // player's name 

            playerCount=playerCount+1; // player joined
            player.index = playerCount;   
            // update player's details in DB
            player.updatePlayerNameAndDistance (name);
            player.updatePlayerCount (playerCount);

            this.greeting.html ("Hello " +player.name);
            this.greeting.position (displayWidth/2 - 70, displayHeight/4);
        });
    

    }
}