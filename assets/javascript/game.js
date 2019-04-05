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
	// there will be a conditional (if) statement that checks the value of currentScore compared to targetScore
	// if that value is lower, the game continues
	// if the value is HIGHER, the game is over, and we add to losses
	// if the value is EQUAL, the game is over, and we add to wins

	function gameStart() {

	targetScore = Math.floor(Math.random() * 100) + 20;

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

	 function addTotal(teamValue){
        if (currentScore > targetScore){
            //LOSING
            alert("LOST");
            losses = losses + 1;
            $("#losses").html(losses);
            gameStart();
        }

        if (targetScore == currentScore){
            alert("WIN");
            //WINNING
            wins = wins + 1;
            $("#wins").html(wins);
            gameStart();
        }
    }



    	function takingAturn () {
	// middle of the game, taking a 'turn':
	 $("#falcons").on("click", function() {
        currentScore = currentScore + falconsNumber;
        // resetValues();
        $("#total-score").html(currentScore);
        addTotal();
	});

	 $("#uga").on("click", function() {
        currentScore = currentScore + ugaNumber;
        // resetValues();
        $("#total-score").html(currentScore);
        addTotal();
    });

	   $("#gaTech").on("click", function() {
        currentScore = currentScore + gaTechNumber;
        // resetValues();
        $("#total-score").html(currentScore);
        addTotal();
    });

		$("#hawks").on("click", function() {
        currentScore = currentScore + hawksNumber;
        // resetValues();
        $("#total-score").html(currentScore);
        addTotal();
	});
	}

	takingAturn();
