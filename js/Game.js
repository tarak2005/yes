class Game{

    constructor(){

    }

getState(){

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState=data.val();
        })
}

    update(State){

        database.ref('/').update({
            gameState :State
            
        }
        )

    }

async start(){

if(gameState===0){

casuality = new Casuality();
var casualCountRef=await database.ref('casualityNumber').once("value");
    if(casualCountRef.exists()){
    casualityNumber=casualCountRef.val();
    casuality.getCount();
    }
form = new Form();
form.display();
console.log(casualityNumber);
}



}


end(){
   }



}




