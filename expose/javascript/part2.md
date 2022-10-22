1. It will print out 3 as the variable is declared using var, and hence, has the scope of the entire program and the loop runs 3 times due to the length of prices being 3
2. It will print out 150 as it is declared using var and has the scope of the program and discount at the end of the loop will have the value for the input price 300.
3. It will print out 150 as the variable is declared using var and has the scope of the entire program and also the for the calculation will have (150 * 100) / 100 giving 150.
4. It will print out an array with values [50, 100, 150]
5. This code will cause an error because we are trying to access i from outside the for-loop but because we have declared i using let, the scope is restriced to the loop.
6. discountedPrice is again declared inside the for-loop using let, and hence, cannot be accessed outside the loop, causing an error.
7. It will print out 150 because it calculates the discount for 300 (last number of the array) and then basically with discount 0.5 cuts the price to half. It is also declared outside the for-loop, so can be accessed anywhere inside the function.
8. This function will return the list [50, 100, 150] because the variable discounted is declared outside the loop and so the scope is the entire function. Hence, it halves the input prices and returns the list.
9. For the exact same reason as Q5, the program line will return an error.
10. It will print out 3 as it is declared using the const keyword in the beginning of the function, so has the scope of the entire function.
11. It will return the list [50, 100, 150] as discounted is declared outside the loop using const and has the entire function as the scope. 
12. A. student.name  
    B. student["Grad Year"]  
    C. student.greeting()  
    D. student["Favourite Teacher"].name  
    E. student.courseLoad[0]  
13. A. '32' becuase 2 mapped to the string representation '2'  
    B. 1 becuase '3' maps to its integer representation  
    C. 3 because null is mapped to 0  
    D. '3null' because 3 is mapped to '3'  
    E. 4 because true is mapped to the value 1  
    F. 0 because false is mapped to the int value 0 and null as a string is mapped to the int value 0  
    G. '3undefined' as it takes undefined to be a string and then concatenates them  
    H. NaN becuase undefined is mapped to NaN when it tries to become an integer  
14. A. true as '2' maps to the integer value 2 which is greater than 1  
    B. false as '2' maps to the integer 2 and that is compared to the first character of '12' which is 1, and 2 is not lesser than 1  
    C. true as '2' maps to the integer value 2 which is equal to 2  
    D. false as they are not of the same type  
    E. false as true maps to the value 1, and 2 is not equal to 1  
    G. true as the Boolean(2) maps to only true or false, and 2 is true  
15. '===' is a more stricter operation and what that means is that it also checks the types of the two things being compared, and hence, will return false if the two values are of different types. On the other hand, '==' tries to map the things being compared to the same type of numbers and then tries to make a like-to-like comparision to check if they are equal.
