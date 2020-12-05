# Problem To Solve

Move all elements that match the moveTo variable to the end of the passed in array.

## What We Need

step#1
Two Pointers: one at each end of the array (currentIndex, lastFoundMatch)
step#2
We need a while loop to determine when our current index is greater than our last found match.
ex. while (i < j)

step#2.1
Inside of the while loop, we check to see if our current value is equal to toMove.

step#2.1.a:
If it is equal to toMove, then we start our inner while loop and check if our right pointer is equal to toMove.

step#2.1.a.1:
If the rightNum is equal to toMove, ==> we move our right pointer to the left, and keep doing so, until our pointer value doesn't match.

Once our right pointer value doesn't match toMove, we swap the values of our current index, and our end pointer, which then becomes our last found match.
Then we increase our current index pointer by one, and the process repeats.

Once both loops finish, we return our mutated array with our matches at the end of the array.

# Walkthrough

step#1while: init two pointer:
leftPointer(l), rightPointer(r)

step#2:
[2, 1, 2, 2, 2, 3, 4, 2] 2

if rightNum === toMove
move RightPointer to left

# Round#1

leftNum =2
rightNum = 4

if leftNum === toMove, && rightNum !==toMove
then swap the positions.

then, swap the numbers
[4, 1, 2, 2, 2, 3, 2, 2] 2
leftNum = 1 (-> [1])
rightNum = 2(-> [6])

now our
leftNum !==toMove && rightNum === toMove
=> so we should do ?
Do NOT swap
move forward

Round#2:
[4, 1, 2, 2, 2, 3, 2, 2] 2
leftNum = 2 [-> [2]]
rightNum = 2 [-> [6]]

so, we are moving rightPointer to the left

Round#3:
[4, 1, 2, 2, 2, 3, 2, 2] 2
leftNum = 2 [-> [2] ]
rightNum = 3 [--> 5]

met the condtion
leftNum = 2 === MoveTo &&
rightNum = 3 !== MoveTo
swap the numbers
[4, 1, 3, 2, 2, 2, 2, 2] 2
leftNum =3 [--> [2]]
rightNum= 2 [--> [5]]

then, check leftNum?? moveTo
3 !==2
&&
2 === 2
Not swap the numbers

move pointers

# Round#4

move leftPointer
leftNum= 2 [--> [3]]
rightNum = 2 [--> [5]]
check the eqaulity with moveTo
leftNum === moveTo &&
rightNum === moveTo
so, do NOT swap

now, move pointers

# Round#5

[4, 1, 3, 2, 2, 2, 2, 2] 2
leftNum = 2 --> [4]
rightNum = 2[--> [5]]

same decision as Round#4

move pointers

# Round #6

[4, 1, 3, 2, 2, 2, 2, 2] 2
leftNum= [--> 5]
rightNum = 2 [--> 5]

# End the loop

# return the Mutated Array

[4, 1, 3, 2, 2, 2, 2, 2] 2
