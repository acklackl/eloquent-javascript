// any character
let countChar = (target, letter) => {
	let counter = 0;
		for (i = 0; i < target.length; i++) {
			if (target.charAt(i) == letter) {
				counter += 1;
			}
		}
	return counter;
}

console.log(countChar("kakkerlak", "k"));

//b character only
let countBs = (target) => {
	let counter = 0;
		for (i = 0; i < target.length; i++) {
			if (target.charAt(i) == "B") {
				counter += 1;
			}
		}
	return counter;
}

console.log(countBs("BBC"));