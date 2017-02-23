let board = "";
let grid = 8;
for (let i = 0; i < grid; i++) {
	for (let e = 0; e < grid; e++) {
		if ((e + i) % 2 == 0) {board += " "}
		else {board += "#"}
	}
	board += "\n";
}
console.log(board);
