console.log("Up and running!");

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
]

const cardsInPlay = []
cardsInPlay.push(cards[cardId].rank);
///is this correct
console.log(cardImage)
console.log(suit)

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} 	
	else {
  	console.log("Sorry, try again.");
}

// I think I missed a step im the control flow project 
// This has made it difficult to move forward with the coding



}
function flipCard(cardId) {
	console.log("User flipped" + cards[cardId].rank)
}

checkForMatch(flipCard);
