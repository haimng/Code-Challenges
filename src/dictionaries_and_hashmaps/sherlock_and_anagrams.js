/***
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

Example
s = "mom"

The list of all anagrammatic pairs is [m,m], [mo,om].

Function Description

Complete the function sherlockAndAnagrams in the editor below.

sherlockAndAnagrams has the following parameter(s):

string s: a string

Returns

int: the number of unordered anagrammatic pairs of substrings in s

Input Format

The first line contains an integer q, the number of queries.
Each of the next q lines contains a string s to analyze.

Constraints
1 <= q <= 10
2 <= s.length <= 100

s contains only lowercase letters in the range ascii[a-z].

Sample Input 0

2
abba
abcd

Sample Output 0

4
0

Explanation 0

The list of all anagrammatic pairs is [a,a], [ab,ba], [b,b] and [abb,bba].

No anagrammatic pairs exist in the second query as no character repeats.

Sample Input 1

2
ifailuhkqq
kkkk

Sample Output 1

3
10

Explanation 1

For the first query, we have anagram pairs [i,i], [q,q] and [ifa,fai].

For the second query:
There are 6 anagrams of the form [k,k].
There are 3 anagrams of the form [kk,kk].
There is 1 anagram of the form [kkk,kkk].

Sample Input 2

1
cdcd
Sample Output 2

5
Explanation 2

There are two anagrammatic pairs of length 1: [c,c] and [d,d].
There are three anagrammatic pairs of length 2: [cd,dc], [cd,cd], [dc,dc]
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
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

String.prototype.sort = function() {
    return Array.from(this).sort().join('');
}

function sherlockAndAnagrams(s) {
    let map = {};    
    for (let j = 0; j < s.length-1; j++) {
        for (let i = 0; i < s.length - j; i++) {
            let sub = s.substring(i, i + j + 1).sort();            
            map[sub] = map[sub] ? map[sub] + 1 : 1;
        }
    }
    // console.log(map);
    
    let count = 0;
    for (let sub in map) {
        let n = map[sub]-1;        
        count += (n*(n+1)/2);
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = sherlockAndAnagrams(s);

        ws.write(result + '\n');
    }

    ws.end();
}
