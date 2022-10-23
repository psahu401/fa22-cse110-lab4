1. The bug was that we were reading in num1 and num2 as strings and then not converting them to integers before calculating the sum. Hence the '+' was taken as a concatenation of the strings.
2. I fixed it using parseInt method which converts a given string to an int.
