/* 

Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending ordering, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.


Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

Sample Output
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

*/

/* Jennifer modified solution --Correct Answer Now! */
function threeNumberSum (array, targetSum) {
  // step#1: sort the array ascending order ==> [-8, -6, 1, 2, 3, 5, 6, 12]
  array.sort((a,b) => a - b); 

  // step#2: we need a place to store triplets ==> triplte = []
  const triplet = [];

  // step#3: iteration, 1st to find the currentNum position to start the loop, ==> use 'For Loop'
  
  for ( let i = 0; i < array.length - 2; i++ ) {
    //==> 3.1: init variables: 1) CurrentNum, 2) LP(LN), 3)RP(RN):==> LP = i +1; RP = array.length-1
    let currentNum = array[i];
    let leftPointer = i + 1; 
    let rightPointer = array.length - 1;
    //let leftNum = array[i+1];
    //let rightNum = array[array.length-1];

    // 3.2: Check if the LP and RP overlapping or not, 
    // If LP < RP, ==yes, which means NOT overlapping
    while ( leftPointer < rightPointer) {
      // Then => find if CurrentSum ?=? targetSum or not 
      // currentSum = CurrentNum + LN + RN compare targetSum
      let currentSum = array[i] + array[leftPointer] + array[rightPointer];
        //=> if currentSum < targeSum
        // ==> move LP to right
       //===> LP + 1
      if(currentSum < targetSum ) {
        leftPointer ++;
      } else if (currentSum > targetSum ){
        // else if ( currentSum > targetSum) 
        //==> move RP to left
        //==> RP -1 
        rightPointer --;
      }
      // else if (currentSum === targetSum)
      //==>  update triplet array = [[currentNum, LN, RN]]
      else if (currentSum === targetSum) {
        triplet.push([currentNum, array[leftPointer], array[rightPointer]]);
        // then, update both pointers, leftPointer && rightPointer
        leftPointer ++;
        rightPointer --;
      }
      
    }
     // Exit While Loop
     //step#2: continue 'for loop'
     // For Loop continue
    // update CurrentNum index number
    // reset currentNum = i+1, //indexNumber

    // currentNum = array(i+1); 

    // start while loop same logic again
    
  
  }
   return triplet;
}

/*
// Devin's solution
function threeNumberSum (array, targetSum) {
  array.sort((a,b) => a - b); 
  const triplet = [];

  for ( let i = 0; i < array.length - 2; i++ ) {
    let leftPointer = i + 1; 
    let rightPointer = array.length - 1;
    while ( leftPointer < rightPointer) {
      let currentSum = array[i] + array[leftPointer] + array[rightPointer];
      if (currentSum < targetSum) leftPointer++;
			if (currentSum > targetSum) rightPointer--;
      if (currentSum === targetSum) {
        triplet.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer++;
        rightPointer--;
      }
    }
  }
  return triplet; 
}

*/

/* Big O Explain
Time Complexity: since sorted, so not linear, going thru array Once --> 
Space Complexity: any addional space we use to solve the function. 
--> Sort Time O(nlog(n)) + For Loop Time O(n) > While Loop Time O(n) = O(nlog(n) + n^2) -> round down O(n^2)
--> Space Complexity O(n) because worst case we have the entirity of our array stored as triplets

Space complexity only accounts for variables that we create inside of our function. 
Space complexity is based on how the size of our declared variables grows based on the function arguments given.

*/


