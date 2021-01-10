/*
Validate Subsequence

Given two non-empty arrays of integers, write a function that determines
whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. 

For instance, the numbers [1, 3, 4] form a subsequence of the array
[1, 2, 3, 4], and so do the numbers [2, 4]

Note that a single number in an array and the array itself are both valid subsequences of the array.

Sample Input:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

Sample Output: true

*/

function isValidSubsequence(array, sequence) {
  // Write your code here.
//  step#1: array_idx = 0, sequence_idx = 0
    let array_idx = 0, sequence_idx = 0
//  step#2: create outer for loop for the array starting from array_idx to end of array and

//Step#2-whileLoop: use a while loop and run following conditions while array_idx is less than array length and sequence_idx is less than length of sequence
    
  while (array_idx < array.length && sequence_idx < sequence.length) {
      // step#3: compare each value in array to value in sequence and do the following verifications:
      //step#3.1.A: IF Equal: if value in array and sequence match, THEN==> increment both array_idx and sequence_idx
    if (array[array_idx] === sequence[sequence_idx]) {
      array_idx++
      sequence_idx++
    }
    if (array[array_idx] !== sequence[sequence_idx]){
    //step#3.1.B:If NOT MATCH: if values in array and sequence do not match, THEN==> increment only array_idx
      array_idx++
    }
  }
  //step#4 outSide the outer loop: if sequence_idx reaches to end of sequence array, we return True
  // if (sequence_idx === sequence.length) {
  //     return true;
  // } else {
  //     //if sequence_idx never reaches to end of sequence array, return false
  //     return false;
  // }

  //step#4.Extra step: Refactor
  return sequence_idx === sequence.length;
  
}
// Time Complexities
/*
O(n) = One loop through the array
O(2n) Two loops through an array, one starting after the other
O(nlogn) A nested loop where the inner loop doesn't itereate through the entire array.
O(n^2) Nested for loops, comparing every element in both outer and inner loops
*/

//Time Complexity: Subject 1
// O(nlogn)--> wrong!, usually sorted algorithm
// Note: Nested Loop: O(n^2)
// Spacity Complexity:
// O(1) --> n is the length of array.

//Time Complexity: Subject 2--Correct Answer for this question.
// O(n)
// Spacity Complexity:
// O(1) --> n is the length of array.