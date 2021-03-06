


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


const gameContainer = document.getElementById("game");
let cardOne = null;
let cardTwo = null;
let cardsFlipped = 0;
let noClicking = false;


// TODO: Implement this function!
function handleCardClick(event) {
  if(noClicking) return;
  if(event.target.classList.contains("up")) return;

  let currentCard = event.target;
  currentCard.style.backgroundColor = currentCard.classList[0];
//selecting the back ground color



if (!cardOne || !cardTwo) {
  currentCard.classList.add("up");
  cardOne = cardOne || currentCard;
  cardTwo = currentCard === cardOne ? null : currentCard;
}
//classname cant be read make variable
if(cardOne && cardTwo){
  noClicking = true;
  let flippedOne= cardOne.className;
  let flippedTwo = cardTwo.className;

  if(flippedOne === flippedTwo) {
    cardsFlipped += 2;
    cardOne.removeEventListener("click", handleCardClick)
    cardTwo.removeEventListener("click", handleCardClick)
    cardOne = null;
    cardTwo = null;
    noClicking = false;
  } else {
    setTimeout(function() {
      cardOne.style.backgroundColor = "";
      cardTwo.style.backgroundColor = "";
      cardOne.classList.remove("up");
      cardTwo.classList.remove("up");
      cardOne = null;
      cardTwo = null;
      noClicking = false;
  }, 750);
}
if (cardsFlipped === COLORS.length) alert("game over!");
}


}

// when the DOM loads
createDivsForColors(shuffledColors);
