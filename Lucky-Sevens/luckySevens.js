var diceSum;
var die1;
var die2;
var bet;
var gameMoney = 0;
var roll = 1;
var totalRolls = 0;
var maxMoney = 0;
var rollMaxMoney = 0;

function validateBet(){
	bet = document.forms["playGame"]["startingBet"].value;

	if(bet <= 0){
		alert("Please bet a number amount greater than zero");
	}else{
		gameMoney = bet;
		checkMoneyAmount(gameMoney,maxMoney);
	}
}

function checkMoneyAmount(gameMoney,maxMoney){

	if(gameMoney > maxMoney){
		maxMoney = gameMoney;
		rollMaxMoney = roll;
	}
	if(gameMoney > 0){
		rollDice(gameMoney);
	}else{
		gameOver();
	}
}

function rollDice(gameMoney){

	roll++;

	die1 = Math.floor(Math.random() * 6)+ 1;
	die2 = Math.floor(Math.random() * 6)+ 1;
	diceSum = die1 + die2;

	if(diceSum == 7){
		gameMoney = gameMoney + 4;
	}else{
		gameMoney = gameMoney - 1;
	}

	checkMoneyAmount(gameMoney);
}

function gameOver(roll,bet,maxMoney,rollMaxMoney){
	totalRolls = roll;
	document.getElementById("endStartingBet").innerText = bet;
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("maxMoney").innerText = maxMoney;
	document.getElementById("rollMaxMoney").innerText = rollMaxMoney;

	return false;
}