let playerScore = 0, computerScore = 0;

function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min+1)) + min;
}

function computerPlay() {
	nbr = randomInt(1, 3);

	switch(nbr) {
		case 1 :
			return 'rock';
			break;

		case 2 :
			return 'paper';
			break;

		case 3 :
			return 'scissors';
			break;

		default :
			return undefined;
			break;
	}
}

function playerSelection(e) {
	select = e.explicitOriginalTarget.firstChild.textContent.toLowerCase();
	play(select, computerPlay());
}


function play(playerSelection, computerSelection) {
	const result = document.querySelector("#result");


	if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" 
		&& computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper") {
		result.firstChild.innerHTML = "You win: " + playerSelection + " beat " + computerSelection;
		playerScore++;
	} else if (playerSelection == computerSelection) {
		result.firstChild.innerHTML = "Equality: " + playerSelection + " and " + computerSelection + " are the sames";
	} else {
		result.firstChild.innerHTML = "You loose: " + computerSelection + " beat " + playerSelection;
		computerScore++;
	}

	if (computerScore == 5) {
		result.firstChild.innerHTML += '<br/><br/>' + 'THE COMPUTER WIN THE PARTY';
		computerScore = playerScore = 0;
	} else if (playerScore == 5) {
		result.firstChild.innerHTML += '<br/><br/>' + 'YOU WIN THE PARTY';
		computerScore = playerScore = 0;
	}
}

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', playerSelection));