export const generateRandomNumber = () => {
	return Math.floor(Math.random() * 99 + 1);
};

// generar numeros del carton
export const generateCardNumbers = () => {
	const numbers = [];

	while (numbers.length < 15) {
		const randomNumber = generateRandomNumber();
		if (!numbers.includes(randomNumber)) {
			numbers.push(randomNumber);
		}
	}
	return numbers;
};

// pintar carton
export const printCard = card => {
	const numbers = generateCardNumbers();
	for (let i = 0; i < 15; i++) {
		const cell = document.createElement('span');
		cell.dataset.number = numbers[i];
		cell.classList.add('cell');
		cell.textContent = numbers[i];
		card.append(cell);
	}
};
