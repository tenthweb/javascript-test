class Tile {
  constructor(name, permittedOccupants = [], occupiedBy = "empty", bankSide) {
    this.name = name;
    this.occupiedBy = occupiedBy;
    this.permittedOccupants = permittedOccupants;
    this.bankSide = bankSide;
  }
}


function showMessage() {
  element = document.getElementById("messages");
  element.style.visibility = "visible"
}

function hideStartScreen() {
  element = document.getElementById("start-screen");
  element.style.visibility = "hidden"
}

function turnRed(tile) {
  turnRedElement = document.getElementById(tile.name);

  turnRedElement.classList.add("turn-red");
  turnRedElement.style.border="red"
}

function warnPlayer(tile) {
  turnRed(tile);

  if (tile.bankSide == "top") {
    shakingelement = document.getElementById(topBoatCargo.name);
    shakingelement.classList.add("shaking");
    shakingelement = document.getElementById(topBoat.name)
    shakingelement.classList.add("shaking");
  } else {
    shakingelement = document.getElementById(bottomBoatCargo.name);
    shakingelement.classList.add("shaking");
    shakingelement = document.getElementById(bottomBoat.name);
    shakingelement.classList.add("shaking");
  }
  showMessage();
  document.getElementById("messages").innerText =
    "Sorry! you cannot move the boat; the ";

}




// function turnBlue(tile) {}

let topBank1 = new Tile("top-bank-1", ["empty", "wolf"], "wolf", "top")
let topBank2 = new Tile("top-bank-2", ["empty", "goat"], "goat", "top")
let topBank3 = new Tile("top-bank-3", ["empty", "cabbages"], "cabbages", "top")
let topBoatCargo = new Tile("top-boat-cargo", ["empty", "goat", "wolf", "cabbages"], "empty", "top")
let topBoat = new Tile("top-boat", ["empty", "boat"], "boat", "top")
let bottomBoat = new Tile("bottom-boat", ["empty", "boat"], "empty", "bottom")
let bottomBoatCargo = new Tile("bottom-boat-cargo", ["empty", "goat", "wolf", "cabbages"], "empty", "bottom")
let bottomBank1 = new Tile("bottom-bank-1", ["empty", "wolf"], "empty", "bottom");
let bottomBank2 = new Tile("bottom-bank-2", ["empty", "goat"], "empty", "bottom");
let bottomBank3 = new Tile("bottom-bank-3", ["empty", "cabbages"], "empty", "bottom");

const tiles = [
  topBank1,
  topBank2,
  topBank3,
  topBoatCargo,
  topBoat,
  bottomBoat,
  bottomBoatCargo,
  bottomBank1,
  bottomBank2,
  bottomBank3,
];

tiles.forEach((tile) => {
  element = document.getElementById(tile.name);
  if (element) {
    element.innerHTML = `<img src="assets/images/${tile.occupiedBy}.png" alt="${tile.occupiedBy}" style="width: 100%; height: 100%;">`;
    if (tile.occupiedBy == "empty") {
      element.style.visibility = "hidden";
    }

    element.addEventListener("click", function () {
      tiles.forEach((tile) => {
        element = document.getElementById(tile.name);

        /*on each click, switch off the shaking effect on all tiles*/

        if (element.classList.contains("shaking")) {
          element.classList.remove("shaking");
        }

        document.getElementById("messages").innerText = "";
      });

      /* main logic for tile movement */

      /* case where the tile is one of the top bank ones */
      if ([topBank1, topBank2, topBank3].includes(tile)) {
        if (tile.occupiedBy != "empty") {
          if (
            topBoatCargo.occupiedBy == "empty" &&
            topBoat.occupiedBy != "empty"
          ) {
            if (tile == topBank1) {
              topBoatCargo.occupiedBy = "wolf";
            }

            if (tile == topBank2) {
              topBoatCargo.occupiedBy = "goat";
            }

            if (tile == topBank3) {
              topBoatCargo.occupiedBy = "cabbages";
            }

            tile.occupiedBy = "empty";
          }
        }
      }
      if (tile == topBoatCargo) {
        if (topBoatCargo.occupiedBy == "wolf") {
          topBank1.occupiedBy = "wolf";
        }

        if (topBoatCargo.occupiedBy == "goat") {
          topBank2.occupiedBy = "goat";
        }
        if (topBoatCargo.occupiedBy == "cabbages") {
          topBank3.occupiedBy = "cabbages";
        }

        topBoatCargo.occupiedBy = "empty";
      }

      if (tile == topBoat) {
        if (tile.occupiedBy == "boat" &&
          !(topBank1.occupiedBy == "wolf" && topBank2.occupiedBy == "goat") &&
          !(topBank2.occupiedBy == "goat" && topBank3.occupiedBy == "cabbages")
        )

        {
          /*move boat*/
          bottomBoat.occupiedBy = "boat";
          bottomBoatCargo.occupiedBy = topBoatCargo.occupiedBy;

          topBoatCargo.occupiedBy = "empty";
          topBoat.occupiedBy = "empty";

        }

        // behaviour when illegal move is made
        else {
          warnPlayer(tile)
        }
      }

      if (tile == bottomBoat) {
        //we cannot leave these pairs alone on the south bank:
        // wolf and goat
        // goat and cabbages
        //
        if (
          tile.occupiedBy == "boat" &&
          !(
            bottomBank1.occupiedBy == "wolf" && bottomBank2.occupiedBy == "goat"
          ) &&
          !(
            bottomBank2.occupiedBy == "goat" &&
            bottomBank3.occupiedBy == "cabbages"
          )
        ) {
          topBoat.occupiedBy = "boat";
          topBoatCargo.occupiedBy = bottomBoatCargo.occupiedBy;

          bottomBoatCargo.occupiedBy = "empty";
          bottomBoat.occupiedBy = "empty";
        } else {
          warnPlayer(tile)
        }
      }

      if (tile == bottomBoatCargo) {
        if (bottomBoatCargo.occupiedBy == "wolf") {
          bottomBank1.occupiedBy = "wolf";
        }

        if (bottomBoatCargo.occupiedBy == "goat") {
          bottomBank2.occupiedBy = "goat";
        }
        if (bottomBoatCargo.occupiedBy == "cabbages") {
          bottomBank3.occupiedBy = "cabbages";
        }

        bottomBoatCargo.occupiedBy = "empty";
      }

      if ([bottomBank1, bottomBank2, bottomBank3].includes(tile)) {
        if (tile.occupiedBy != "empty") {
          if (
            bottomBoatCargo.occupiedBy == "empty" &&
            bottomBoat.occupiedBy != "empty"
          ) {
            if (tile == bottomBank1) {
              bottomBoatCargo.occupiedBy = "wolf";
            }

            if (tile == bottomBank2) {
              bottomBoatCargo.occupiedBy = "goat";
            }

            if (tile == bottomBank3) {
              bottomBoatCargo.occupiedBy = "cabbages";
            }

            tile.occupiedBy = "empty";
          }
        }
      }

      tiles.forEach((tile) => {
        document.getElementById(
          tile.name
        ).innerHTML = `<img src="assets/images/${tile.occupiedBy}.png" alt="${tile.occupiedBy}" style="width: 100%; height: 100%;">`;
        element = document.getElementById(tile.name);

        if (tile.occupiedBy == "empty") {
          element.style.visibility = "hidden";
        } else if (tile.occupiedBy != "empty") {
          element.style.visibility = "visible";
        }
      });

      /* win condition */

      if (
        bottomBank1.occupiedBy == "wolf" &&
        bottomBank2.occupiedBy == "goat" &&
        bottomBank3.occupiedBy == "cabbages"
      ) {
        document.getElementById("messages").innerText = "You Win!";
      }
    });
  }
});