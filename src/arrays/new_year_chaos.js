/***
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. 
Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example
q = [1,2,3,5,4,6,7,8]

If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only 1 bribe is required. Print 1.

q = [4,1,2,3]
Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

Function Description

Complete the function minimumBribes in the editor below.

minimumBribes has the following parameter(s):

int q[n]: the positions of the people after all bribes

Returns

No value is returned. Print the minimum number of bribes necessary or 'Too chaotic' if someone has bribed more than 2 people.

Input Format

The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows:
- The first line contains an integer t, the number of people in the queue
- The second line has n space-separated integers describing the final state of the queue.

Constraints
1 <= t <= 10
1 <= n <= 10^5

Subtasks
For 60% score 1 <= n <= 10^3
For 100% score 1 <= n <= 10^5

Sample Input

STDIN       Function
-----       --------
2           t = 2
5           n = 5
2 1 5 3 4   q = [2, 1, 5, 3, 4]
5           n = 5
2 5 1 3 4   q = [2, 5, 1, 3, 4]

Sample Output

3
Too chaotic
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    var counts = Array(q.length).fill(0);
    
    // Bubble sort
    for (var i = 0; i < q.length; i++) {
        var isSorted = true;
        for (var j = 1; j < q.length; j++) {
            if (q[j-1] > q[j]) {
                counts[q[j-1]-1]++;
                
                if (counts[q[j-1]-1] > 2)  return console.log('Too chaotic');
                
                var tmp = q[j-1];
                q[j-1] = q[j];
                q[j] = tmp; 
                
                isSorted = false;               
            }
        }    
        if (isSorted)  break;
    }
    
    console.log(counts.reduce((sum, a) => sum+a, 0));
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
