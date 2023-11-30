import {
	cardBingoPcElement,
	cardBingoPlayerElement,
	checkNumbersPlayers,
	generateBoardGame
} from './boardGame';
import { printCard } from './print';

const buttonGameElement = document.getElementById('buttonGame');
const buttonResetElement = document.getElementById('buttonReset');

printCard(cardBingoPlayerElement);
printCard(cardBingoPcElement);

generateBoardGame();

const startGame = () => {
	checkNumbersPlayers();
	resetGame.disabled = false;
};
const resetGame = () => {
	window.location.reload();
};

buttonGameElement.addEventListener('click', startGame);
buttonResetElement.addEventListener('click', resetGame);
