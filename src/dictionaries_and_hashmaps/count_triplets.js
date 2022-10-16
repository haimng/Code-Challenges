/***
You are given an array and you need to find number of tripets of indices (i,j,k) such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.

Example
 arr = [1,4,16,64], r = 4

There are [1,4,16] and [4,16,64]. Return 2.

Function Description

Complete the countTriplets function in the editor below.

countTriplets has the following parameter(s):

int arr[n]: an array of integers
int r: the common ratio

Returns

int: the number of triplets

Input Format

The first line contains two space-separated integers n and r, the size of arr and the common ratio.
The next line contains n space-seperated integers arr[i].

Constraints
1 <= n < 10^5
1 <= r <= 10^9
1 <= arr[i] <= 10^9

Sample Input 0

4 2
1 2 2 4

Sample Output 0

2

Explanation 0

There are 2 triplets in satisfying our criteria, 2x [1,2,4]

Sample Input 1

6 3
1 3 9 9 27 81

Sample Output 1

6

Explanation 1

The triplets satisfying are 2x [1,3,9], 2x [3,9,27] and 2x [9,27,81].

Sample Input 2

5 5
1 5 5 25 125

Sample Output 2

4

Explanation 2

The triplets satisfying are 2x [1,5,25] and 2x [5,25,125]
*/

'use strict';

const fs = require('fs');

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

// Complete the countTriplets function below.
function countTriplets(arr, r) { 
    if (arr.length < 3)  return 0;
    
    let count = 0;
    let prev = {}; 
    let next = {};
    let current = 0;
    
    for (let x of arr) { 
        next[x] = next[x] ? next[x] + 1 : 1;
    }
    
    for (let i = 0; i < arr.length; i++) {
        current = arr[i];        
        let left = current / r;
        let right = current * r;
        
        next[current]--;
        
        let sum = 1;
        if (prev[left] && next[right]) {
            sum *= prev[left] 
            sum *= next[right]
            count += sum;
        }
        
        prev[current] = prev[current] ? prev[current] + 1 : 1;        
    }
    
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
