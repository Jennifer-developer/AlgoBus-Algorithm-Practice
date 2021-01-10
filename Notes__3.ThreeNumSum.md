# AlgoBUS: 3rd Meeting

- Time: 11-13-2020 Friday @8p.m. to 10p.m.
- Question: AlgoExpert: 3.ThreeNumSum
- Level: Intermediate
- Categroy: Array

# Notes Taking:

# Sugguestions to improve for next meeting

Sample Input
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

Sample Output
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

# solution#2: pointer system solution

step#1: sort the inpute array
sorttedArray = [-8, -6, 1, 2, 3, 5, 6, 12]

[-8, -6, 1, 2, 3, 5, 6, 12] i = 0
[ -6, 1, 2, 3, 5, 6, 12] i = 1
[1, 2, 3, 5, 6, 12] i = 2
[-2, 3, 5, 6, 12] i = 3
[3, 5, 6, 12] i = 4
[ 5, 6, 12] i = 5
[6, 12] i = 6,[7th number in array, 8th number in array]
array.length = 8
CN = 6,LN,12,RN, 12
(i < array.length - 2)

tagetSum = 0
initiate:
a.] currentNum
b.] Left Pointer
c.] Right Pointer
d.] currentSum = CN + LN + RN ??? targetSum

step#2: 1st iteration:
CN = -8 (array[i])
LP = i + 1;
RP = array.length -1;
1st round:

-8+ (-6) +(12) = -2 ??? 0 ==> Need Bigger Num
So, move LP -> Right
2nd Round
-8 +(1) + (12) = 5 ??? > 0 ==> Need Small Num
so, RP-> left
3rd Round:
-8 + (1) + (6) = -1 < 0 ===> Need Bigger Num
so, LP --> right
-8 + (2) + (6) = 0 ??? 0 =>YES
[[-8, 2, 6]]
Find Triplet
5th Round:
so, LP --> Right && RP --> Left
-8 + (3) + (5) = 0 ??? 0 =>YES
Find 2nd Triplet
[[-8, 2, 6], [-8, 3, 5]]
What's next?
END 1st Iteration!!!!

Start 2nd Iteration:
CN= -6
LP = i + 1 ==> LN= 1
RP = array.length -1 ==> RN = 12
2nd Iteration:
1st round:
(-6) + (1) + (12) = 7 > 0 ==> SmallerNUM
So, move RP --> Left by 1 index
(-6) + (1) + (6) = 1 > 0 ==> SmmallerNum
So, move RP --> Left by 1 index
(-6) + (1) + (5) = 0 ==0
So, find 3rd Triplet
[-6, 1, 5]
Answer =
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
Next?
So, we move LP --> Right && PL --> Left same time
(-6) + (2) + (3) = -1 < 0 ==> Need Bigger
So, we move LP --> Right
(-6) + (3)+ (3) == 0 == 0 ??? Find Triplet BUT question say no repeated Num (overlap)
System End!!!
