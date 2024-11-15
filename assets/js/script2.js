let tiles = []


class Tile {
  constructor(name, permittedOccupants  = [], occupiedBy = "empty") {
    this.name = name;
    this.occupiedBy = occupiedBy;
    this.permittedOccupants = permittedOccupants;
    
  
  }




}

function turnBlue(tile) {
  



  
}

let topBank1 = new Tile("top-bank-1", ["empty","wolf"], "wolf"), 
  topBank2 = new Tile("top-bank-2", ["empty","goat"], "goat") ,
  topBank3 = new Tile("top-bank-3", ["empty","beans"], "beans"), 

topBoatCargo = new Tile("top-boat-cargo", ["empty","goat", "wolf","beans"], "empty"),

topBoat = new Tile("top-boat", ["empty","boat"], "boat"),
 
bottomBoat = new Tile("bottom-boat", ["empty","boat"], "empty"),


bottomBoatCargo = new Tile("bottom-boat-cargo", ["empty","goat", "wolf","beans"], "empty"),

 bottomBank1 = new Tile("bottom-bank-1", ["empty","wolf"], "empty"),
 
 bottomBank2 = new Tile("bottom-bank-2", ["empty","goat"], "empty"),
 bottomBank3= new Tile("bottom-bank-3", ["empty","beans"], "empty")

 tiles = [topBank1,topBank2,topBank3,topBoatCargo,topBoat,bottomBoat,bottomBoatCargo,bottomBank1,bottomBank2,bottomBank3]



 tiles.forEach(tile => {
   element = document.getElementById(tile.name);

 if (element) {
 element.innerHTML = tile.occupiedBy;

  if (tile.occupiedBy == "empty") {
    element.style.visibility = "hidden"; 
  }
 
 element.addEventListener("click", function() {
  
  tiles.forEach(tile => {
    element = document.getElementById(tile.name);

    /*

  if(element.classList.includes("shaking")) {
    element.classList.remove("shaking")
  }
  })
*/


  /* case where the tile is one of the top bank ones */
  if ([topBank1,topBank2,topBank3].includes(tile)){
  
    if (tile.occupiedBy != "empty") {
    
        if (topBoatCargo.occupiedBy == "empty" && topBoat.occupiedBy != "empty"){
          
          if (tile == topBank1){
            
            topBoatCargo.occupiedBy = "wolf"

          }

          if (tile == topBank2){
            topBoatCargo.occupiedBy = "goat"
          }

          if (tile == topBank3){
            topBoatCargo.occupiedBy = "beans"
          }

          tile.occupiedBy = "empty"


        }


    }
  }
  if (tile == topBoatCargo){
    if (topBoatCargo.occupiedBy == "wolf"){
      topBank1.occupiedBy = "wolf"


    }

    if (topBoatCargo.occupiedBy == "goat"){
      topBank2.occupiedBy = "goat"


    }
    if (topBoatCargo.occupiedBy == "beans"){
      topBank3.occupiedBy = "beans"


    }



    topBoatCargo.occupiedBy = "empty"
  }
  
  if (tile == topBoat){
    if (tile.occupiedBy == "boat" 
      
      && !(topBank1.occupiedBy == "wolf" && topBank2.occupiedBy == "goat")
      && !(topBank2.occupiedBy == "goat" && topBank3.occupiedBy == "beans")  

    ){
      bottomBoat.occupiedBy = "boat";
      bottomBoatCargo.occupiedBy = topBoatCargo.occupiedBy;
      topBoatCargo.occupiedBy = "empty"
      topBoat.occupiedBy = "empty"
    }
    else{
      shakingelement = document.getElementById(topBoatCargo.name)
      shakingelement.classList.add("shaking");
    }

  }

  if (tile == bottomBoat){
    if (tile.occupiedBy == "boat"  
      && !(bottomBank1.occupiedBy == "wolf" && bottomBank2.occupiedBy == "goat")
      && !(bottomBank2.occupiedBy == "goat" && bottomBank3.occupiedBy == "beans")  ){
      topBoat.occupiedBy = "boat";
      topBoatCargo.occupiedBy = bottomBoatCargo.occupiedBy;
      bottomBoatCargo.occupiedBy = "empty"
      bottomBoat.occupiedBy = "empty"
    }


  }

  if (tile == bottomBoatCargo){
    if (bottomBoatCargo.occupiedBy == "wolf"){
      bottomBank1.occupiedBy = "wolf"


    }

    if (bottomBoatCargo.occupiedBy == "goat"){
      bottomBank2.occupiedBy = "goat"


    }
    if (bottomBoatCargo.occupiedBy == "beans"){
      bottomBank3.occupiedBy = "beans"


    }



    bottomBoatCargo.occupiedBy = "empty"
  }
  

  if ([bottomBank1,bottomBank2,bottomBank3].includes(tile)){
  
    if (tile.occupiedBy != "empty") {
    
        if (bottomBoatCargo.occupiedBy == "empty" && bottomBoat.occupiedBy != "empty"){
          
          if (tile == bottomBank1){
            bottomBoatCargo.occupiedBy = "wolf"
          }

          if (tile == bottomBank2){
            bottomBoatCargo.occupiedBy = "goat"
          }

          if (tile == bottomBank3){
            bottomBoatCargo.occupiedBy = "beans"
          }

          tile.occupiedBy = "empty"


        }


    }
  }



  tiles.forEach(tile => {
    document.getElementById(tile.name).innerText = tile.occupiedBy;
    element = document.getElementById(tile.name);

  if (tile.occupiedBy == "empty") {
      element.style.visibility = "hidden"; 
    }

    else if (tile.occupiedBy != "empty") {
      element.style.visibility = "visible"; 
    }

 
  




  }

  )

  ; }); }
  
  });
  


