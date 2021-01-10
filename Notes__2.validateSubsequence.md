# AlgoBUS: 2st Meeting

- Time: 11-08-2020 Sunday @4p.m. to 6p.m.
- Question: AlgoExpert: 2.ValidateSubsequence
- Level: Easy
- Categroy: Array

# Notes Taking:

# Sugguestions to improve for next meeting

# PART#1: Thought Process

Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10]

sequence = [1, 6, -1, 10]

Sample Output
true

# Approach 1:

Sample Input
array = [5, 1, 22, 25, 6, -1, 8, 10, 13, 23]

sequence = [1, 6, -1, 10]

Sample Output
true

create 2 starting pointers at index 0 for each array (array_idx = array[0], sequence_idx = sequence[0])
step#1:
iterate thru each value in the array and compare each value in array to value in sequence
step#2: conditional check
if the value of the sequence is equal to value in array,increment the sequence_idx
if the values are not equal in array and sequence, increment the array_idx

# Approach 2:

# Pointer System
