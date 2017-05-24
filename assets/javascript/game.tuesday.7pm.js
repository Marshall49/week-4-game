$(document).ready(function() {
	//numbers
	debugger;
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

	 function addTotal(teamValue){
        if (currentScore > targetScore){
            //LOSING
            alert("LOST");
            losses = losses + 1;
            $("#losses").html("Losses: " + losses);
            // resetValues();
        }

        if (targetScore == currentScore){
            alert("WIN");
            //WINNING
            wins = wins + 1;
            $("#wins").html("Wins: " + String(wins));
            // resetValues();
        }
    }

    	

    	function takingAturn () {
	// middle of the game, taking a 'turn':
	 $("#falcons").on("click", function() {
        var currentScore = currentScore + falconsNumber;
        // resetValues();
        $("#total-score").append(totalScore);
        addTotal();
	});
	
	 $("#uga").on("click", function() {
        var currentScore = currentScore + ugaNumber;
        // resetValues();
        $("#total-score").append(totalScore);
    });

	   $("#gaTech").on("click", function() {
        var currentScore = currentScore + gaTechNumber;
        // resetValues();
        $("#total-score").append(totalScore);
    });
	
		$("#hawks").on("click", function() {
        var currentScore = currentScore + hawksNumber;
        // resetValues();
        $("#total-score").append(totalScore);

	});
	}

	takingAturn();











	//function that checks to see if the game is over:
	// function checkGameStatus () {
	// 	if (currentScore = targetScore) {
	// 		$('#scorebox').text('You won!!!!');
	// 		wins++;
	// 		// some other stuff happens, aka we either start a new game, display "you win!", etc;
	// 	} else if (currentScore > targetScore) {
	// 		$('#scorebox').text('You lose!!!!');
	// 		losses++;
	// 		// some other stuff happens, start a new game, display "you lose!", etc.
	// 	} else { return }

	// }

	// checkGameStatus();
		
	

		 // function addTotal(teamValue){
   //      targetScore = currentScore + currentScore;
   //      $("#total-score").html(targetScore);
   //      if (currentScore > targetScore){
   //          //LOSING
   //          console.log("LOST");
   //          losses = losses + 1;
   //          $("#losses").html("Losses: " + losses);
   //          resetValues();
   //      } else if (targetScore == targetScore){
   //          console.log("WIN");
   //          //WINNING
   //          wins = wins + 1;
   //          $("#wins").html("Wins: " + String(wins));
   //          resetValues();
   //      }
   //  }

   //  	addTotal();
    





});




	






	// 	var add = [1,2,3,4];
	// 	var total = 0;
	// 	for(var i = 0; i < add.length; i++) {
 //   		 total += add[i];
	// }





	







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





















// var wins = 0;
// var losses = 0;

// var scorebox = 0;

// var guessingnumberbox = Math.floor((Math.random()* 100)
// var falconsNumber = Math.floor((Math.random()* 10) + 1);
// var ugaNumber = Math.floor((Math.random()* 10) + 1);
// var gaTechNumber = Math.floor((Math.random()* 10) + 1);
// var hawksNumber = Math.floor((Math.random()* 10) + 1);


// var updateScorebox = function (){
// 	$('.scorebox').empty();
// 	$('.scorebox').append(add);
// 	$('#wins').empty();
// 	$('#wins').append(wins);
// 	$('#losses').empty();
// 	$('#losses').append(losses);
// }

// var restart = function(){
// 	scorebox = 0;
//     guessingnumberbox = Math.floor((Math.random()* 100);

// 	$('.scorebox').empty();
// 	$('.scorebox').append(scorebox);

// 	falconsNumber = Math.floor((Math.random()* 12) + 1);
//     ugaNumber = Math.floor((Math.random()* 12) + 1);
//     hawksNumber = Math.floor((Math.random()* 12) + 1);
//     gaTechNumber = Math.floor((Math.random()* 12) + 1);
//     //alert('restart');
//     updateScorebox();
// }
// var takingAturn = function (){
// 	if (scorebox == guessingnumberbox) {
// 		wins = wins + 1;
		
		
// 		restart();
// 	}else if(scorebox > guessingnumberbox){
// 		losses = losses + 1;
		
		
// 		restart();
// 	}else{
// 		updateScorebox();
// 	}
// }
// $('.guessingnumberbox').append(scorebox);

// $('.scorebox').append(scorebox);
// //function

// $(document).ready(function(){
// 	$('#falcons').click(function(){
// 		scorebox = scorebox + falconsNumber;
// 		takingAturn();
// 	})
// 	$('#uga').click(function(){
// 		scorebox = scorebox + ugaNumber;
// 		takingAturn();
// 	})
// 	$('#gaTech').click(function(){
// 		scorebox = scorebox + gaTechNumber;
// 		takingAturn();
// 	})
// 	$('#hawks').click(function(){
// 		scorebox = scorebox + hawksNumber;
// 		takingAturn();
// 	})
// });








































