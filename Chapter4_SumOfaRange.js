//range
let p = (start, end) => {
  let m = [...Array(end + 1).keys()];
  let z = m.slice(start);
  return z;
}

//sum
let e = (entry) => {
  let counter = 0;
  for (let i = 0; i < entry.length; i++) {
    counter += entry[i];
  }
  return counter;
} 

// range with step
let range = (start, end, step) => {
	let m = [];
	if (step == null) {step = 1;}
	if (step > 0) {
		for (let i = start; i <= end; i+=step) {
			m.push(i);
		}
	}
	else if (step < 0) {
		for (let i = start; i >= end; i+=step) {
			m.push(i);
		}
	}
	return m;
}

console.log(range(1,10,2));



console.log(p(1, 2));



