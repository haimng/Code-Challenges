/***
Given a 6x6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.

Example
arr =

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
 
The 16 hourglass sums are:

-63, -3s4, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
  
The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:

0 4 3
  1
8 6 6

Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers

Returns

int: the maximum hourglass sum

Input Format

Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

Constraints
-9 <= arr[i][j] <= 9
0 <= i,j <= 5

Output Format

Print the largest (maximum) hourglass sum found in arr.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output

19

The hourglass with the maximum sum (19) is:

2 4 4
  2
1 2 4
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

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {    
    var sums = Array(16).fill(0);
    
    for (var r = 0; r < 6; r++) {
        for (var c = 0; c < 6; c++) {
            var v = arr[r][c];
            
            if (r >= 0 && r <= 3) {
                for (var i = 0; i < 3; i++) {
                    var h = Math.floor(c/3) + i;
                    if (h <= c && h >= c-2)  sums[r*4 + h] += v;
                }
            }
            
            if (r >= 1 && r <= 4) {
                for (var i = 0; i < 3; i++) {
                    var h = Math.floor(c/3) + i;
                    if (h == c-1)  sums[(r-1)*4 + h] += v;
                } 
            }
                        
            if (r >= 2 && r <= 5) {
                for (var i = 0; i < 3; i++) {
                    var h = Math.floor(c/3) + i;
                    if (h <= c && h >= c-2)  sums[(r-2)*4 + h] += v;
                }
            }            
        }    
    }

    return Math.max(...sums);    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
