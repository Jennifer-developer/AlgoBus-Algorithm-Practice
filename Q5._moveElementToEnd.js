/* Q.5: Move Element To End
 Prompt: 
 You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

 The function should perform this in place(i.e., it should mutate the Input Array) and doesn't need to maintain the order of the other integers.

 Sample Input: 
 array = [2, 1, 2, 2, 2, 3, 4, 2]
 toMove = 2

 Sample Output:
 [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently

*/

function moveElementToEnd(array, toMove) {
  // Write your code here.



  // inititate two pointers (left, right)

  let left = 0; 

  let right = --array.length; // array.length - 1

  while (left < right) {

    if (array[left] === toMove) {
      while ( array[right] === toMove ) {right--}
      if (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        right--;
      }
    }
    left++;
  } 

  return array
}


/* Big O Explainations:

Time Complexity: O(n)
- Since it is not sorrted Array, Note: sorrtedArray is: (nlog(n))
- In our worst case scenerio, our toMove value doen't exist, or is at the end of the array
- In those cases, we loop through the entire array, but only one time
- so our time is O(n)


Space Complexity: O(1)
- Since it does NOT create extra memory / space
- We are only keeping track of our 2 pointers (left and right)
- So at worst case thats still all we'd be keeping track of so our space complexity is constant
- The amount of space (memory) we need to run our function does not change when the size of our input grows or shrinks


 */