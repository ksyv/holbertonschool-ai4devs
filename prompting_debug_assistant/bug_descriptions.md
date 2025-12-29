# Bug Descriptions for AI Debugging Exercise

This document outlines the intended behavior and the specific issues contained within the `bug_snippets/` directory files.

## Bug 1 – bug1.py (Python)
**Intended Behavior**: A function that appends a user action to a log list. If no log is provided, it should start a new one.
**Issue Type**: Logical Error / Mutable Default Argument.
**Notes**: The default argument `log=[]` is evaluated only once at function definition. This causes the list to persist across different function calls, accumulating data unexpectedly.

## Bug 2 – bug2.js (JavaScript)
**Intended Behavior**: A `UserManager` class that simulates fetching user data asynchronously and then processes it using a class method.
**Issue Type**: Runtime Error / Scope (`this` context).
**Notes**: Inside the `setTimeout` callback, the `this` keyword loses the context of the class instance, causing `this.processUser` to fail (is undefined or points to the global object).

## Bug 3 – bug3.c (C)
**Intended Behavior**: To safely copy a source string into a destination buffer and print it.
**Issue Type**: Off-by-one Error / Memory Safety.
**Notes**: The loop condition uses `<=` instead of `<` (or fails to account for the null terminator `\0` within the fixed buffer size), leading to a potential buffer overflow.

## Bug 4 – bug4.py (Python)
**Intended Behavior**: To calculate the average of all even numbers in a given list.
**Issue Type**: Syntax Error + Runtime Error (Division by Zero).
**Notes**:
1. Syntax: Missing colon (`:`) after the `if` statement.
2. Runtime: If the list is empty or contains no even numbers, the code attempts to divide by zero.

## Bug 5 – bug5.js (JavaScript)
**Intended Behavior**: To calculate the total price of items in a shopping cart array.
**Issue Type**: Misuse of Data Types (Type Coercion).
**Notes**: Prices are stored as strings (e.g., "10.00"). The `+` operator concatenates these strings (resulting in "010.002.50...") instead of performing arithmetic addition.