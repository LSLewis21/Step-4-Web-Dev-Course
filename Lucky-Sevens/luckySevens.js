var diceSum;
var die1;
var die2;
var bet;
var gameMoney = 0;
var roll = 0;
var totalRolls = 0;
var maxMoney = 0;
var rollMaxMoney = 0;
var endBet;

function validateBet(){
	bet = document.forms["playGame"]["startingBet"].value;

	if(bet <= 0){
		alert("Please bet a number amount greater than zero");
	}else{
		gameMoney = bet;
		checkMoneyAmount(gameMoney,maxMoney,roll,rollMaxMoney);
	}
}

function checkMoneyAmount(gameMoney,maxMoney){

	if(gameMoney > maxMoney){
		maxMoney = gameMoney;
		rollMaxMoney = roll;
	}
	if(gameMoney > 0){
		rollDice(gameMoney,maxMoney);
	}else{
		endBet = bet;
		bet = 0;
		gameOver(roll,endBet,maxMoney,rollMaxMoney);
	}
}

function rollDice(gameMoney,maxMoney){

	roll++;

	die1 = Math.floor(Math.random() * 6)+ 1;
	die2 = Math.floor(Math.random() * 6)+ 1;
	diceSum = die1 + die2;

	if(diceSum == 7){
		/*gameMoney = gameMoney + 4;
				If I get a 7 on the first roll with this code, gameMoney becomes (bet)4. Ie if bet = 5 and first roll is a 7, gameMoney = 54. gameMoney - 1 has worked fine every time. What in the WORLD??? Why is it reading a number without quotes around it as a string???
				gameMoney += 4 isn't working for the first roll either*/
		gameMoney = gameMoney + 4;
	}else{
		gameMoney = gameMoney - 1;
	}

	checkMoneyAmount(gameMoney,maxMoney);
}

function gameOver(roll,endBet,maxMoney,rollMaxMoney){
	totalRolls = roll;
	document.getElementById("endStartingBet").innerText = endBet;
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("maxMoney").innerText = maxMoney;
	document.getElementById("rollMaxMoney").innerText = rollMaxMoney;

	gameMoney = 0;

	return false;
	/* Inputs everything in the table fine, then clears it for some reason. Tried return true, tried return, tried omitting return entirely */
}