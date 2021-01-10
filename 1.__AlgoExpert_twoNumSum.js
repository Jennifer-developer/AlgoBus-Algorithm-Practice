/* 

Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. If any two numbers in the input array sum
up to the target sum, the function should return them in an array, in any
order. If no two numbers sum up to the target sum, the function should return
an empty array.
Note that the target sum has to be obtained by summing two different integers
in the array; you can't add a single integer to itself in order to obtain the
target sum.

You can assume that there will be at most one pair of numbers summing up to
the target sum.

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Output
[-1, 11] // the numbers could be in reverse order<

*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
  //this is nested loop
  //step#1: for loop
  for ( var i =0; i< array.length; i++) {
    //1.1] create a variable for each ele
    var ele = array[i]; // intermediate variable
    //2.0] second loop, inner loop, loop thru j
    for (var j=i + 1; j < array.length; j++) {
      //2.1] create 2nd intermediate variable for j
      var eleSecond = array[j];
      // the outer loop is runing, save the outer loop variable, then the inner loop run.
        // this inner loop will iterate over the entire array
        //  If we don't find a target number by the time the loop ends, 
        // We then jump back to the outer loop, and start the process again
        //step#3: inner loop, weather ele + eleSecond ?= targetSum
        if (ele + eleSecond === targetSum) {
          // if this equation works, return the qualified array
          return [ele, eleSecond];//this exist the function
        }


    }

  }
  return [];
}
/* Big O Explain
Time Complexity: not linear, not going thru array once --> 
--> O(n^2)
Space Complexity: any addional space we use to solve the function.
--> O(1)

Space complexity only accounts for variables that we create inside of our function. 
Space complexity is based on how the size of our declared variables grows based on the function arguments given.

*/

/* Solution#2 */
function twoNumberSum(array, targetSum) {
  // Write your code here.
// [1.0] Sort the array
array.sort((a,b) => a - b); // ASC order
// [1.1] initiate the left and right pointers
let left = 0;
let right = array.length - 1;
// while left < right
while (left < right) {
// => leftEle + rightElt = intermediateVraible (currentSum)
const currentSum = array[left] + array[right];
// conditional check

// if currentSum === targetSum
if (currentSum === targetSum) {

// if true,  then return [leftEle, rightEle]
return [array[left], array[right]]
// else if, currentSum < targetSum
} else if (currentSum < targetSum) {
// => then, we will increase left(index) by 1
left++
// else if, currentSum > targetSum
} else if (currentSum > targetSum) {
//=> then, we will decrease right(index) by 1
right--
}
}
// else, retrun empty array
return [];
}

/* Big O Explain
Time Complexity: since sorted, so not linear, going thru array Once --> 
Space Complexity: any addional space we use to solve the function. 
--> Sort Time O(nlog(n)) + While Loop Time O(n) = O(nlog(n) + n) -> round down O(nlog(n))
--> Space Complexity O(1)

Space complexity only accounts for variables that we create inside of our function. 
Space complexity is based on how the size of our declared variables grows based on the function arguments given.

*/

/* Solution#3: Hash Table Solution: 
O(n) Time, O(n) Space */
function twoNumberSum(array, targetSum) {
  // Write your code here.
	const numbers = {} //=> hash table emulator
	array.forEach(number => {
    // We save the value of the number as a key
    // We save the pair we need to reach the target sum as the value
		numbers[number] = targetSum - number // we store potential match as our value {numInArray: potentialMatch}
	})
	return array.filter(
    // We check to see if the numbers object has a matching pair in our numbers object
    // this means that the number was in our array. 
    number => numbers.hasOwnProperty(targetSum - number) && 
    (targetSum - number !== number)//=> eachNum need to be unique.
)
}
// [3, 5, -4, 8, 11, 1, -1, 6]
// {3: 7, 5: 5, -4: 14, 8: 2, 1: 9}
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
