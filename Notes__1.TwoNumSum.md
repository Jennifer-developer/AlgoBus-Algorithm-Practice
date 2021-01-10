# AlgoBUS: 1st Meeting

- Time: 11-6-2020 Friday @8p.m. to 10p.m.
- Question: AlgoExpert: 1.TwoNumSum
- Level: Easy
- Categroy: Array

# Notes Taking:

# Sugguestions to improve for next meeting

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Output
[-1, 11] // the numbers could be in reverse order<

# outer loop

= i

# inner loop = j

For each element in the outer loop
we're going to compare the entire array

# solution#3: pointer system solution

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
sortedArray =
[-4, -1, 1, 3, 5, 6, 8, 11]

example#2
targetSum = 13
sample Output = [8, 5]

// targetSum = 10

Sample Output
[-1, 11] // the numbers could be in reverse order

# Explainations

LP = 0;
RP = array.length -1
ideaL LN + RN =?= tarNum
e.g.#1: -4 + 11 =7 ??? 10 => need bigger num
-1 + 11 = 10??? 10 => equal
[-1, 11]

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
sortedArray =
[-4, -1, 1, 3, 5, 6, 8, 11]

example#2
targetSum = 13
sample Output = [8, 5]

Example#2:
LP = 0;
RP = array.length -1
ideaL LN + RN =?= tarNum
e.g.#1: -4 +11 = 7??? 13 => need bigger number
LN = -1
RN = 11
-1 + 11 = 10 ??? 13 => < ==> Bigger Num
LN = 1
RN =11
1 + 11 = 12 ?? 13 <==> bigger
LN = 3
RN = 11
3 + 11 = 14 > 13 ==> smaller
LN = 3
RN = 8
3 + 8 = 11 < 13 ==> bigger
LN = 5
RN = 8
5 + 8 = 13 === 13 --> DONE
[5, 8]
