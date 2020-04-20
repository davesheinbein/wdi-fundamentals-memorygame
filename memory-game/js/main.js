console.log("Up and running!");

var cards = [
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
  	cardImage: "images/king-of-hearts.png"

  },
  { 

  	rank: "king",
  	suit: "diamonds",
  	cardImage: "images/king-of-diamonds.png"

  }
];

var cardsInPlay = [];
var plays = 0;
var score = 0;

//not sure if i should delete following 3 lines
cardsInPlay.push(cards[cardId].rank);
console.log(cardImage)
console.log(suit)

// need help understanding functions, DOM, loops 
function checkForMatch() { 
	if(cardsInPlay.length === 2) {
		// add something later to disable flipping after this condition is true
		plays += 1; 
		document.getElementById('plays-value').innerHTML = plays;
        console.log("plays" + plays);
        if (cardsInPlay[0] === cardsInPlay[1]) {
                score += 150; 
                document.getElementById('score-value').innerHTML = score;
                console.log("score" + score);
                window.alert("You found a match!");
                } else {
                window.alert("Sorry, try again.");
				}
            }
        }

// need help understanding functions, DOM, loops

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);


// need help understanding functions, DOM, loops

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}	
}

//Found help online via - https://github.com/mau-dev/wdi-fundamentals-memorygame/blob/master/memory-game/js/main.js

var resetGame = function() {
    while(cardsInPlay.length > 0) {
    	cardsInPlay.pop();
    	console.log(cardsInPlay);
    }
     resetCard = document.getElementsByTagName("img");    
    for(i=0; i<resetCard.length; i++){
      resetCard[i].setAttribute("src", "images/back.png");
    }
 // alert("new game");
}

createBoard();

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);
console.log(cardsInPlay);

