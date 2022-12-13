// x+2y+3z = 600
// x, y, z >= 0
// x, y, z are integers

// reference : https://en.wikipedia.org/wiki/Pseudo-polynomial_time
// used this algorithm mentioned in the above link
const numberOfSolutions = (a, n) => {
	// Dynamic Programming storage.
	// dp[i][j] is the number of ways to get a sum of exactly
	// "i", only using the "j" first terms of the equation
	let dp = new Array(n + 1).fill(0).map(() => new Array(a.length).fill(0));
	// Base case.
	// There is a single way of obtaining a sum of 0
	// (with a value of zero for all the variables)
	dp[0] = new Array(a.length).fill(1);

	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < a.length; j++) {
			// dp[j][i] can be obtained adding two sub-cases:
			// (1). using one term less (j-1), and still target the same sum (i)
			// (2). using the same terms (j), but target a (i-c) sum,
			//      where c is the coefficient of the term eliminated in (1).
			//      This is because all the solutions for (i-c) are also solutions
			//      for i by adding a c to each of them.
			let c = a[j];
			let s1 = 0;
			let s2 = 0;
			if (j > 0) {
				s1 = dp[i][j - 1];
			}
			if (i >= c) {
				s2 = dp[i - c][j];
			}
			dp[i][j] = s1 + s2;
		}
	}
	console.log(dp[n][a.length - 1]);
	return dp[n][a.length - 1];
};

console.time('numberOfSolutions, O(N)');
numberOfSolutions([1, 2, 3], 600);
console.timeEnd('numberOfSolutions, O(N)');
