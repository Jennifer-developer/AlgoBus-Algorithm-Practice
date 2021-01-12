/* 
Q.4: Smallest Difference

Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array of the first position.

Note that the absolute difference of two integers is the difference between them on the real number line. 

For example, the absolute difference of '-5' and 5 is 10, and the absolute difference of '-5' and '-4' is 1.

You can assume that there will only be one pair of numbers with the smallest difference.

Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output
[28, 26]

*/

/*
sorrtedOne = [-1, 3, 5, 10, 20, 28]

sorrtedTwo = [15, 17, 26, 134, 135]
*/
/*


*/

function smallestDifference (arrayOne, arrayTwo) {
  // step#1: sort both arrays
  const asc = (a,b) => a - b;
  arrayOne.sort(asc);
  arrayTwo.sort(asc);
  
  // step#2: pick number [init number]
  //let idxOne = 0; idxTwo = 0;
  let [idxOne, idxTwo] = [0, 0];
  let result = [];

  //step#3: Compute the absolute difference [ create a variable named 'currentAbs']
  //==> step#3.2: decision making: update the currentAbs or not?
  let smallestAbs =  Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]);
  
  // make sure as long as Both index number < the length of the arrays, the while Loop will run 
  while ((idxOne < arrayOne.length) && (idxTwo < arrayTwo.length)) {
    //declare variables
    const currentAbs = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]),
          x1 = arrayOne[idxOne],
          y1 = arrayTwo[idxTwo];

    //step#4: Compare two numbers X1, Y1
    //==> make decision to move pointer
    // step#4.3: while (X1 = Y1)==> (edge case), this is the perfect number, stop the loop, throw the two numbers in the array.
    if (currentAbs === 0) {
      //re-assign the result array
      result = [x1, y1];
      // then, break out of the loop, and return the result
      break;
    }

    if (currentAbs < smallestAbs) {
      // update smallestAbs with new currentAbs
      smallestAbs = currentAbs
      result = [x1, y1];
    }

    //==>step#4.1: while (X1 < Y1), need bigger number
    //===> steo#4.1.a: indexOne for X1 pointer to the Right ==> indexOne ++
    if (x1 < y1) idxOne++;
    //==>step#4.2: while (X1 > Y1), need smaller number
    //===> step#4.2.a: indexTwo for Y1 pointer to the Righ ==> indexTwo ++
    if (x1 > y1) idxTwo++;
    //step#5: find the smallestDifference, Exit the Loop

    // if (currentAbs < smallestAbs) {
    //   // update smallestAbs with new currentAbs
    //   smallestAbs = currentAbs
    //   result = [x1, y1];
    // }

  }

  return result;
}




/* Big O Explain
Time Complexity: 
Nlog(n) is the sorting array, n is the length array for the sorting algorithm
while loop, do need to compare 
O(N)log(N) + Mlog(M)

Space Complexity:
O(1)

*/