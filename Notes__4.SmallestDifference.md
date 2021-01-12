# AlgoBUS: 4th Meeting

- Time: 11-20-2020 Friday @8p.m. to 10p.m.
- Question: AlgoExpert: 3.SmallestDifference
- Level: Intermediate
- Categroy: Array

# Notes Taking:

# Sugguestions to improve for next meeting

Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
sorrtedOne = [-1, 3, 5, 10, 20, 28]

arrayTwo = [26, 134, 135, 15, 17]
sorrtedTwo = [15, 17, 26, 134, 135]

Sample Output
[28, 26]

# solution#2: pointer system solution

step#1: sort the inpute array
step#2: Pick Numbers
step#3: compute the abslute difference value
--> how? start pointer system
Round#1: X1 = -1, Y1 = 15
|-1 -15| = 16
init currentDifference = 16
step#4: Compare x1 and y1, then make pointer movement desicion:
-1 < 15 ==> need bigger number
so, move pinter in sorrtedOne to Right by 1 index
#######
Round#2: X1 = 3, Y1 =15
|3 - 15| = |-12| = 12
now, a desicipj needed to be made:
currentAbs = 16 , newAbs = 12
do we need to update the currentAbs? or not
step#3.2: update currentAbs ==> 12
3 < 15 ==> Bigger Number
so, move pointer in sortOne to right
##########
Round#3: X1 = 5, Y1 =15
|5-15| = |-10| = 10
step#3.2: compare 10 with 12
update the currentAbs = 10
5 < 15 ===> Bigger Number
################
Round#4: X1 = 10, Y1 = 15
|10 - 15 | = |-5| = 5
step#3.2: currentAbs = 5
compare 5 with 10 ?
decision: ==> update the currentAbs = 5
10 < 15 ==> Bigger Number
move sortOne to right
#################
Round#5: X1 = 20, Y1 = 15
|20 - 15 | = 5
step#3,2: currentAbs = 5
compare 5 with 5 ? ==> same
descison: ==> |do we need update currentAbs or not|
20 > 15 ==> need Smaller Number
decison: move left pointer in sortTwo to right
##################
Roun#6: X1 = 20. Y1 = 17
|20 - 17 ] = |-3| = 3
step#3.2: currentAbs = 3
compare 5 with 3n ??? =
decsion: update currentAbs ==> 3
20 > 17 ==> need Smaller Number
move lefter pointer in sortTwo to right
##############
Round#7: X1 = 20, Y1 = 26
|20-26| = 6 ==> currentAbs
step#3.2: 6 with 3 ?
decison: do not update currentAbs ==> 3
20 < 26 ==> need Bigger Number
move pointer on sortOne to right
###############
Round#8:X1 = 28, Y1 =26
|28 - 26 | = |2| = 2 ==>currentAbs
step#3.2: 2 with 3 ???
decisoon making? ==> update currentAbs ==> 2
28 > 26 ==> Smaller Number
move left pointer in sortTwo
to the right
###############
Round#9: X1 = 28, Y1 = 134
|28 - 134| = 106 ==> currentAbs
step#3.2: 106 with 2 ???
decision: ==> DO NOT update currentAbs ===> 2
28 < 134 ===> need Bigger Number
move left pointer in sortOne to the right
##########
Round #10:
since 28 is the largest number, we cannot find bigger number than 28. we exit the Loop
what sample output???
find the optimal cuurentAbs "smallestDifference" ==> 2
[28, 26]
