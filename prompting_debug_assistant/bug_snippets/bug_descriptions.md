# Bug Descriptions for AI Debugging Exercise

## Bug 1 – bug1.py
**Intended Behavior**: The function should append a user action to the provided log. If no log argument is passed, it must strictly create a NEW empty list.
**Issue Type**: Logical Error / Mutable Default Argument.
**Notes**: Currently, the default `log=[]` is evaluated only once at definition. This implies the list persists across calls, causing data leakage between different users.

## Bug 2 – bug2.js
**Intended Behavior**: The class should fetch user data asynchronously and then process it using its own `processUser` method.
**Issue Type**: Runtime Error / Scope (`this` context).
**Notes**: The `this` context is lost inside the `setTimeout` callback. The code fails because `this.processUser` becomes undefined. The fix implies binding context or using arrow functions.

## Bug 3 – bug3.c
**Intended Behavior**: The function must safely copy a string into a 10-byte buffer without overflowing memory.
**Issue Type**: Off-by-one Error / Memory Safety.
**Notes**: The loop condition `<=` writes 11 characters (including null terminator) into a 10-byte buffer. This causes a buffer overflow. The fix must stop strictly before the limit.

## Bug 4 – bug4.py
**Intended Behavior**: Calculate the mathematical average of all even numbers present in the list.
**Issue Type**: Syntax Error + Runtime Error (ZeroDivision).
**Notes**: 
1. Syntax: Missing colon (`:`) after `if`.
2. Logic: If the list is empty or has no evens, `count` remains 0, causing a crash. The fix must handle the divide-by-zero case.

## Bug 5 – bug5.js
**Intended Behavior**: Calculate the mathematical sum of the numerical prices in the cart.
**Issue Type**: Misuse of Data Types (Type Coercion).
**Notes**: The input prices are Strings ("10.00"). The `+` operator concatenates them instead of adding them. The fix implies parsing strings to floats before calculation.
