console.log('--- Task 3 ---');

function findLongestWord(string = '') {
	// Write code under this line

	let wordsArr = string.split(' ');
	let wordLength = '';
	let longestWord = '';
	// console.log('Массив ' + wordsArr);
	// console.log('Начальное значение слова ' + longestExpectedWord);

	for (let i = 0; i < wordsArr.length; i += 1) {
		if (wordsArr[i].length > wordLength) {
			wordLength = wordsArr[i].length;
			longestWord = wordsArr[i];

			// console.log(wordsArr[i].length);
			// console.log('Наибольшая длинна слова ' + wordLength);
			// console.log(longestWord);
		}
	}

	return longestWord;
}

console.log(findLongestWord('The ewds ew jumped ews ew w essw'));
// 'jumped'
console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

// ------------------------------------------------------------------------------------
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке
