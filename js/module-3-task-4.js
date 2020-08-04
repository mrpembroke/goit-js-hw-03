console.log('--- Task 4 ---');

function formatString(string, maxLength = 40) {
	// Write code under this line
	if (string.length > maxLength) {
		let newString = string.slice(0, maxLength);

		return (newString += '...');
	}

	return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

// console.log(String.length);

// let outputStrings = [];
// for (let i = 0, n = inputValues.length; i < n; ++i) {
// 	outputStrings.push(String(inputValues[i]));
// }
