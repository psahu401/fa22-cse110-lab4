1. values added: 20
2. final result: 20
3. values added: 20
4. There is an error thrown. The error thrown is ReferenceError, and that is because it result is not defined for line 13. We declare
result in the if condition block, and the line 13 is outside it, so let only defines a variable inside the block, hence, line 13 cannot
read it.
5. An error is thrown now, because we are trying to reassign the result variable which has been defined by the const and is 0. 
6. There is nothing outputted as the error in the previous line means the code exited, but also that it would throw a reference error
as const has a block scope as well and hence, cannot be accessed outside the if else condition scope. 
