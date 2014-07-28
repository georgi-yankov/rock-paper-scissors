(function() {
	var choice1, // User's choice
	choice2, // Computer's choice
	whoWins, // Holds the winner of the game
	
	gameIsWon = false,
	gameCounter = 0, // Reset value to zero for the game counter
	
	firstPlayerScore = document.getElementById("first-player-score"), // First player's score
	secondPlayerScore = document.getElementById("second-player-score"), // Second player's score
	showResult = document.getElementById("show-result"),
	gameCounterId = document.getElementById("game-counter"),
	rock = document.getElementById("rock"),
	paper = document.getElementById("paper"),
	scissors = document.getElementById("scissors"),
	firstPlayerImg = document.getElementById("first-player-img"),
	secondPlayerImg = document.getElementById("second-player-img"),
	newGame = document.getElementById("new-game"),
	showResult = document.getElementById("show-result");
	
	// Computer makes its choice at random
	function computerChoice() {
		choice2 = Math.round(Math.random() * 2) + 1;
		
		switch (choice2) {
			case 1: 
				choice2 = "rock";
				break;
			case 2:
				choice2 = "paper";
				break;
			case 3:
				choice2 = "scissors";
				break;
		}
	}

	// First player wins the game
	function firstPlayerWins() {
		firstPlayerScore.innerHTML = parseInt(firstPlayerScore.innerHTML) + 1;
		gameIsWon = true;
	}

	// Second player wins the game
	function secondPlayerWins() {
		secondPlayerScore.innerHTML = parseInt(secondPlayerScore.innerHTML) + 1;
		gameIsWon = true;
	}

	// Compare both choices and shows the result
	function compare( choice1, choice2 ) {
		if ( choice1 === choice2 ) {
			whoWins = "The result is a tie!";
			firstPlayerWins();
			secondPlayerWins();
		} else if ( choice1 === "rock" ) {
			if ( choice2 === "paper" ) {
				whoWins = "Computer wins!";
				secondPlayerWins();
			} else {
				whoWins = "You win!";
				firstPlayerWins();
			}
		} else if ( choice1 === "paper") {
			if ( choice2 === "rock" ) {
				whoWins = "You win!";
				firstPlayerWins();
			} else {
				whoWins = "Computer wins!!";
				secondPlayerWins();
			}
		} else if ( choice1 === "scissors" ) {
			if ( choice2 === "rock" ) {
				whoWins = "Computer wins!!";
				secondPlayerWins();
			} else {
				whoWins = "You win!";
				firstPlayerWins();
			}
		}

		showResult.innerHTML = whoWins;
		gameCounter = gameCounter + 1;
		gameCounterId.innerHTML = gameCounter;
	}
	
	function addEvent(a, b) {
		a.onclick = function() {
			if (gameIsWon) return;
			computerChoice();
			choice1 = b;
			playersImgs();
			compare(choice1, choice2);
		};
	}
	
	// Change Player's Images on choice
	function playersImgs() {
		firstPlayerImg.src = "img/" + choice1 + ".png";
		secondPlayerImg.src = "img/" + choice2 + ".png";
	}

	addEvent(rock, "rock");
	addEvent(paper, "paper");
	addEvent(scissors, "scissors");

	newGame.onclick = function() {
		gameIsWon = false;
		firstPlayerImg.src = "img/loader.gif";
		secondPlayerImg.src = "img/loader.gif";

		showResult.innerHTML = "";
		
		computerChoice();
	};
})();