class Casuality{

constructor(){
    this.index=null;
    this.veh = null;
    this.vehn=null;   
    this.add= null;
    this.tim=null;
    this.loc=null;

};

//fetch the data from data base
getCount(){    
    var casualityRef= database.ref('casualityNumber');
    casualityRef.on("value",function(data){
        casualityNumber=data.val();})
}

//update the number of casualities
updateCount(Count){

    database.ref('/').update({
    casualityNumber:Count
})
}

//make an update function to return to the datbase
update(){
var casualityIndex = "casualities/casuality"+this.index;

    database.ref(casualityIndex).set({

    vehicleType:this.veh,
    vehicleNumber:this.vehn,
    location:this.loc,
    time: this.tim,
    additionalDetails:this.add
})
}




}