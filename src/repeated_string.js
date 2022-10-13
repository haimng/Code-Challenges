/***
There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

Example
s = 'abcac'
n = 10

The substring we consider is 'abcacabcac', the first 10 characters of the infinite string. There are 4 occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider

Returns

int: the frequency of a in the substring

Input Format

The first line contains a single string, s.
The second line contains an integer, n.

Constraints
1 <= s.length <= 100
1 <= n <= 10^12

For 25% of the test cases, n <= 10^6.

Sample Input

Sample Input 0

aba
10

Sample Output 0

7

Explanation 0
The first n = 10 letters of the infinite string are 'abaabaabaa'. Because there are 7 a's, we return 7.

Sample Input 1

a
1000000000000

Sample Output 1

1000000000000

Explanation 1
Because all of the first n = 1000000000000 letters of the infinite string are a, we return 1000000000000.
*/

'use strict';

// const fs = require('fs');

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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    var count = 0;    
    var loop = Math.floor(n / s.length);
    var remain = n % s.length;
        
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (c == 'a')  count++;         
    }
    
    count *= loop;
    
    for (var i = 0; i < remain; i++) {
        var c = s.charAt(i);
        if (c == 'a')  count++;         
    }
    
    return count;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    // ws.write(result + '\n');
    // ws.end();
    
    console.log(result);
    process.exit();
}
