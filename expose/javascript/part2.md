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
