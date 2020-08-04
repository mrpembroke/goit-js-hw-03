console.log('--- Task 6 ---');

function mapArray(array) {
	let numbers = new Array(array.length);
	numbers.push(array);
	numbers.splice(0, 3);

	// console.log(numbers);

	for (let i = 0; i < array.length; i += 1) {
		numbers[i] = array[i] * 10;
	}

	return numbers;
}

console.log(mapArray([ -2, 0, 2 ]));
// [-20, 0, 20]

console.log(mapArray([ -2.5, 0, 2.5 ]));
// [-25, 0, 25]

// const arr = [ 1, 2, 3, 4, 5 ];
// console.log(arr);

// for (let i = 0; i < arr.length; i += 1) {
// 	const res = arr[i];

// 	console.log(res);
// }
