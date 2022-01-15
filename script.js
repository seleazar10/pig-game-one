let btn = document.querySelectorAll('.btn');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let currScore0El = document.querySelector('.currScore--0');
let currScore1El = document.querySelector('.currScore--1');

let player0El = document.querySelector('.game-sec-one');
let player1El = document.querySelector('.game-sec-two');

const totalScore0El = document.getElementById(`score--0`);

score0El.innerHTML = 0;
score1El.innerHTML = 0;
currScore0El.innerHTML = 0;
currScore1El.innerHTML = 0;

let scores = [0, 0];
let currentScorePlayerOne = 0;
let userCurrScore = 0;
let activePlayer = 0;

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', function () {
		let btnId = btn[i].id;

		if (btnId === 'btn-one') {
			//start new game function
			init();
			console.log('start new game function');
		} else if (btnId === 'btn-two') {
			// roll dice function
			rollDiceFunc();
			console.log('rolde dice func');
		} else if (btnId === 'btn-three') {
			//hold btn
			console.log('hold');
			holdPlayFunc();
		}
	});
}

let holdPlayFunc = function () {
	scores[activePlayer] += userCurrScore;

	document.getElementById(`score--${activePlayer}`).textContent =
		scores[activePlayer];

	switchPlayerFunc();
};

//starting condition

let init = function () {
	console.log('new game');
	scores = [0, 0];
	score0El.innerHTML = 0;
	score1El.innerHTML = 0;
	currScore0El.innerHTML = 0;
	currScore1El.innerHTML = 0;
	dice.classList.add('hidden');
};

init();

let rollDiceFunc = function () {
	//generate a random number
	let randNumber = Math.floor(Math.random() * 6) + 1;
	dice.classList.remove('hidden');
	dice.src = `dice-${randNumber}.png`;

	//check if random number = 1 before continue
	if (randNumber !== 1) {
		userCurrScore += randNumber;
		document.querySelector(`.currScore--${activePlayer}`).innerHTML =
			userCurrScore;
	} else {
		console.log('rand numb is 1 - switch player');
		switchPlayerFunc();
	}
};

let switchPlayerFunc = function () {
	document.querySelector(`.currScore--${activePlayer}`).textContent = 0;
	activePlayer = activePlayer == 0 ? 1 : 0;
	userCurrScore = 0;
	player0El.classList.toggle(`active--player`);
	player1El.classList.toggle(`active--player`);
};
