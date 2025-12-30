# Fix Validation Report

## Bug 1 – bug1_fixed.py
- **Test Scenario**: Call the function twice without providing a log list.
- **Input**: `add_user_to_log("Alice", "Login")` then `add_user_to_log("Bob", "Logout")`
- **Expected Output**: Run 2 should contain ONLY "Bob: Logout".
- **Actual Output**: ['Bob: Logout'] ✅

## Bug 2 – bug2_fixed.js
- **Test Scenario**: Run the script and wait for the async timeout.
- **Input**: `node bug2_fixed.js`
- **Expected Output**: "Processing user: JohnDoe" (Access to `this` context successful).
- **Actual Output**: Processing user: JohnDoe ✅

## Bug 3 – bug3_fixed.c
- **Test Scenario**: Compile and run the C program with a string of length 10.
- **Input**: String "0123456789" into a buffer of size 11.
- **Expected Output**: "Copied buffer: 0123456789" (No segfault, no overflow).
- **Actual Output**: Copied buffer: 0123456789 ✅

## Bug 4 – bug4_fixed.py
- **Test Scenario**: Run with a standard list and an empty list/no evens list.
- **Input 1**: `[1, 3, 5, 7]` (No evens)
- **Expected Output 1**: 0 (Handled division by zero)
- **Actual Output 1**: 0 ✅
- **Input 2**: `[2, 4]`
- **Expected Output 2**: 3.0
- **Actual Output 2**: 3.0 ✅

## Bug 5 – bug5_fixed.js
- **Test Scenario**: Calculate total of string prices.
- **Input**: `[{price: "10.00"}, {price: "2.50"}, {price: "5.00"}]`
- **Expected Output**: 17.5
- **Actual Output**: 17.5 ✅