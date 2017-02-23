//reverseArray by pushing into new array
let reverseArray = (array) => {
	let m = [];
	for (let i = array.length - 1; i >= 0; i--) {
		m.push(array[i]);
	}
	return m;
}

console.log(reverseArray([2, 3, 4]));

//arrayPlace

let arrayInPlace = (array) => {
	let temp = [];
	for (let i = 0; i < array.length; i++) {
		temp.push(array[i]);
	}
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		array[i] = array[array.length - 1 - i];
	}
	for (let i = Math.ceil(array.length / 2); i < array.length; i++) {
		array[i] = temp[temp.length - 1 - i];
	}
	return array;
}

console.log(arrayInPlace([1, 2, 4, 5, 10]));