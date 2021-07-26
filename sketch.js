
var database; 

var game, form, player ;
var gameState = 0;
var playerCount  = 0;
var allPlayers;
 var car1,car2,car3,car4,cars;
 var car1Img , car2Img , car3Img , car4Img , groundImg , trackImg ;

function preload () {
    car1Img = loadImage ("car1.png") ;
    car2Img = loadImage ("car2.png") ;
    car3Img = loadImage ("car3.png") ;
    car4Img = loadImage ("car4.png") ;
    groundImg = loadImage ("ground.png") ;
    trackImg = loadImage ("track.jpg") ;
}


function setup(){
    createCanvas(displayWidth - 20 , displayHeight - 30);
    database = firebase.database(); // connect to DB

    game = new Game ();
    game.getGameState ();
    game.start ();

}

function draw(){
    if (playerCount == 4) {  //no. of players is 4
        game.updateGameState (1);   // game State to START
    }
    // gameState is 1, all players have joined
    // start to play - racing begins
    if (gameState == 1) {
        clear ();
        game.play ();
      
    }
    
    // check for gamne end 
    if (gameState == 2) {

        game.end();
    }
    
}

