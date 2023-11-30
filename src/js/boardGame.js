const numbersBingoElement = document.getElementById('numbersBingo');
export const cardBingoPlayerElement =
	document.getElementById('cardBingoPlayer');
export const cardBingoPcElement = document.getElementById('cardBingoPc');

const gp1Element = document.getElementById('gp1');
const pp1Element = document.getElementById('pp1');
const bingoElement = document.getElementById('bingo');
const gpcElement = document.getElementById('gpc');
const ppcElement = document.getElementById('ppc');

const numbersToPlay = Array(99)
	.fill()
	.map((n, index) => index + 1);

export const generateBoardGame = () => {
	for (let i = 0; i < numbersToPlay.length; i++) {
		const number = document.createElement('span');
		number.dataset.number = numbersToPlay[i];
		number.textContent = numbersToPlay[i];
		number.classList.add('cell');
		numbersBingoElement.append(number);
	}
};

export const extractRandomNumber = () => {
	const random = Math.floor(Math.random() * numbersToPlay.length);
	const selectedNumber = numbersToPlay[random];
	numbersToPlay.splice(random, 1);
	return selectedNumber;
};
export const checkNumbersPlayers = () => {
	const intervalId = setInterval(() => {
		const number = extractRandomNumber();

		const userNumber = cardBingoPlayerElement.querySelector(
			`span[data-number = '${number}']`
		);
		console.log(`numero del usuario ${userNumber}`);
		const pcNumber = cardBingoPcElement.querySelector(
			`span[data-number = '${number}']`
		);
		console.log(`numero del pc ${pcNumber}`);
		const bingoNumber = numbersBingoElement.querySelector(
			`span[data-number = '${number}']`
		);
		console.log(`numero del bingo ${bingoNumber}`);
		bingoNumber.classList.add('orange');
		if (userNumber) {
			userNumber.classList.add('green');
		}
		if (pcNumber) {
			pcNumber.classList.add('red');
		}
		const playerNumbers = cardBingoPlayerElement.querySelectorAll('.green');
		const pcNumbers = cardBingoPcElement.querySelectorAll('.red');

		if (playerNumbers.length === 15 || pcNumbers.length === 15) {
			console.log('BINGO');
			if (playerNumbers.length === 15) {
				gp1Element.classList.remove('hide-result');
				ppcElement.classList.remove('hide-result');
				bingoElement.classList.remove('hide-result');
			} else {
				gpcElement.classList.remove('hide-result');
				pp1Element.classList.remove('hide-result');
				bingoElement.classList.remove('hide-result');
			}
			clearInterval(intervalId);
		}
	}, 50);
	buttonGameElement.disabled = true;
};
