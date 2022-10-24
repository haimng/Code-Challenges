/***
HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to 2x the client's median spending for a trailing number of days, they send the client a notification about potential fraud. 
The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

Given the number of trailing days d and a client's total daily expenditures for a period of n days, determine the number of times the client will receive a notification over all n days.

Example
expenditure = [10,20,30,40,50]
d = 3

On the first three days, they just collect spending data. At day 4, trailing expenditures are [10,20,30]. The median is 20 and the day's expenditure is 40. Because 40 >= 2*20, there will be a notice. 
The next day, trailing expenditures are [20,30,40] and the expenditures are 50. This is less than 2*30 so no notice will be sent. Over the period, there was one notice sent.

Note: The median of a list of numbers can be found by first sorting the numbers ascending. If there is an odd number of values, the middle one is picked. 
If there is an even number of values, the median is then defined to be the average of the two middle values.

Function Description

Complete the function activityNotifications in the editor below.

activityNotifications has the following parameter(s):

int expenditure[n]: daily expenditures
int d: the lookback days for median spending

Returns

int: the number of notices sent

Input Format

The first line contains two space-separated integers n and d, the number of days of transaction data, and the number of trailing days' data used to calculate median spending respectively.
The second line contains n space-separated non-negative integers where each integer i denotes expenditure[i].

Constraints
1 <= n <= 2*10^5
1 <= d <= n
0 <= expenditure[i] <= 200

Output Format

Sample Input 0

STDIN               Function
-----               --------
9 5                 expenditure[] size n =9, d = 5
2 3 4 2 3 6 8 4 5   expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]

Sample Output 0

2

Sample Input 1

5 4
1 2 3 4 4

Sample Output 1

0

There are 4 days of data required so the first day a notice might go out is day 5. Our trailing expenditures are [1,2,3,4] with a median of 2.5. The client spends 4 which is less than 2*2.5 so no notification is sent.
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
 * Complete the 'activityNotifications' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY expenditure
 *  2. INTEGER d
 */

function median(map, d) {
    const MAX_EXPENSE = 200;    
    let v = 0;
    let c = 0;
    let mid = (d % 2 == 0) ? d/2 : Math.floor(d/2) + 1;
    
    // Count til mid point
    for (v = 0; c < mid && v <= MAX_EXPENSE; v++) {        
        c += map[v] || 0;
    }
    v--;
    
    if (c > mid || d % 2 == 1)  return v;
    else  return (v * 2 + 1) / 2.0;
}

function activityNotifications(expenditure, d) {
    let count = 0;
    let map = {};    
    
    for (let i = 0; i < d; i++) {
        map[expenditure[i]] = map[expenditure[i]] ? map[expenditure[i]] + 1 : 1;
    }
    
    for (let i = 0, j = d; j < expenditure.length; i++, j++) {        
        if (expenditure[j] >= 2 * median(map,d))  count++;
        
        map[expenditure[i]] = map[expenditure[i]] ? map[expenditure[i]] - 1 : -1;
        map[expenditure[j]] = map[expenditure[j]] ? map[expenditure[j]] + 1 : 1;        
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const expenditure = readLine().replace(/\s+$/g, '').split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    const result = activityNotifications(expenditure, d);

    ws.write(result + '\n');

    ws.end();
}
