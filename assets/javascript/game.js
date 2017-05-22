$(document).ready(function() {
	//numbers
	
	//these are all going to get a random value at the START of each game
	var targetScore;

	var ugaNumber;
	var falconsNumber;
	var gaTechNumber;
	var hawksNumber;

	//wins and losses get updated at the END of each game

	var wins = 0;
	var losses = 0;

	//the user's current score gets updated throughout the game, specifically every time you click on a team
	var currentScore;
	//there will be a conditional (if) statement that checks the value of currentScore compared to targetScore
	//if that value is lower, the game continues
	//if the value is HIGHER, the game is over, and we add to losses
	//if the value is EQUAL, the game is over, and we add to wins

	function gameStart() {

	targetScore = Math.floor(Math.random() * 100);
	$("#guessingnumberbox").html(targetScore);
	console.log(targetScore);

	currentScore = 0;
	$("#total-score").html(currentScore);

	ugaNumber = (Math.floor(Math.random() * 10)) +1;
	gaTechNumber = (Math.floor(Math.random() * 10)) +1;
	falconsNumber = (Math.floor(Math.random() * 10)) +1;
	hawksNumber = (Math.floor(Math.random() * 10)) +1;
	console.log(ugaNumber);
	console.log(gaTechNumber);
	console.log(falconsNumber);
	console.log(hawksNumber);

	}

	gameStart();

	//function that checks to see if the game is over:
	function checkGameStatus () {
		if (currentScore = targetScore) {
			$('#scorebox').text('You won!!!!');
			wins++;
			// some other stuff happens, aka we either start a new game, display "you win!", etc;
		} else if (currentScore > targetScore) {
			$('#scorebox').text('You lose!!!!');
			losses++;
			// some other stuff happens, start a new game, display "you lose!", etc.
		} else { return }

	}

	// checkGameStatus();
		
	function takingAturn () {
	//middle of the game, taking a 'turn':
	$("#falcons").on("click", function () {
		currentScore = currentScore + falconsNumber;
		checkGameStatus();
		$("#total-score").html(totalScore);
	});
	
	$("#uga").on("click", function () {
		currentScore = currentScore + ugaNumber;
		checkGameStatus();
		$("#total-score").html(totalScore);
	});

	$("#hawks").on("click", function () {
		currentScore = currentScore + hawksNumber;
		checkGameStatus();
		$("#total-score").html(totalScore);
	});

	$("#gaTech").on("click", function () {
		currentScore = currentScore + gaTechNumber;
		checkGameStatus();
		$("#total-score").html(totalScore);
	});

	}

});

	// takingAturn();





	







	// ^^^make another on of these for each logo;
	// then figure out what else happens when the game is over;







	// function newTeams () {
	// 	var numbers = [];
	// }

	// function newGame() {

	// }



	// $('#win').text(wins);
	// $('#loss').text(losses);

// console.log("Hello from game.js")