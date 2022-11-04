/***
  Pick a color randomly from a package of marbles.
*/

const numberOfColors = 4;
const numberOfMarbles = 10;

// A package of marble: { color: count }
const marbles = {
  0: 4, 
  1: 2, 
  2: 1, 
  3: 3
};
// Example:
// 0 0 0 0 1 1 2 3 3 3
// 0 1 2 3 4 5 6 7 8 9

function pickAColor() {
	const marbleIndex = Math.floor(Math.random() * numberOfMarbles);
  
  let c = 0;
  for (const color in marbles) {
  	const count = marbles[color];
    
    if (marbleIndex >= c && marbleIndex < c + count)  return color;
    
    c += count;
  }
}

// Test
const numberOfTests = 1000000;
let countOfColors = {};

for (let i = 0; i < numberOfTests; i++) {
	let color = pickAColor();	
  if (!countOfColors[color])  countOfColors[color] = 1;
	else  countOfColors[color]++;
}

for (let color in countOfColors) {
  const percent = 100.0 * countOfColors[color] / numberOfTests;
  console.log(`color ${color} percent: ${percent}%`);
}
