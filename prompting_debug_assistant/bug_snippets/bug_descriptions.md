# Bug Descriptions for AI Debugging Exercise

## Bug 1 – bug1.py
**Intended Behavior**: Append a user action to a log, creating a new list if none is provided.
**Issue Type**: Logical Error / Mutable Default Argument.
**Notes**: The default `log=[]` persists across calls. The fix must ensure a fresh list is created when the argument is missing.

## Bug 2 – bug2.js
**Intended Behavior**: Fetch user data asynchronously and process it using the class method.
**Issue Type**: Runtime Error / Scope (`this` context).
**Notes**: The `this` context is lost in the callback. The fix requires binding `this` or using an arrow function to access `processUser`.

## Bug 3 – bug3.c
**Intended Behavior**: Safely copy a string into a 10-byte buffer without overflow.
**Issue Type**: Off-by-one Error / Memory Safety.
**Notes**: The loop condition `<=` writes past the buffer limit. The fix must stop before the limit to accommodate the null terminator.

## Bug 4 – bug4.py
**Intended Behavior**: Calculate the average of all even numbers in a list.
**Issue Type**: Syntax Error + Runtime Error (ZeroDivision).
**Notes**: Missing colon (`:`) causes a syntax error. Also, dividing by zero occurs if no evens exist; the fix must handle empty counts.

## Bug 5 – bug5.js
**Intended Behavior**: Calculate the mathematical sum of item prices in a cart.
**Issue Type**: Misuse of Data Types (Type Coercion).
**Notes**: Prices are strings, causing concatenation. The fix must parse strings to numbers (float) before addition.