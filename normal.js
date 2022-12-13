// /**
//  * x+2y+3z=600

// write a function to print the count of all possible combinations of (x,y,z) where x,y,z are non negative integers
//  */
// // x - 600
// // y - 300
// // z - 200
function printCombinationsOLD(x, y, z, t) {
	let c = 0;
	for (let i = 0; i <= x; i++) {
		for (let j = 0; j <= y; j++) {
			for (let k = 0; k <= z; k++) {
				if (i + 2 * j + 3 * k === t) {
					c++;
				}
			}
		}
	}
	console.log(c);
}

console.time('printCombinationsOLD, O(N^3)');
printCombinationsOLD(600, 300, 200, 600);
console.timeEnd('printCombinationsOLD, O(N^3)');
