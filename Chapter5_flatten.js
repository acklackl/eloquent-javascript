let a = [[1, 2, 3], [4, 5], [6]];
let b = a.reduce((x, y) => {return x.concat(y)});
console.log(b);