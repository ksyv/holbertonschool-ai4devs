def add_user_to_log(user, action, log=None):
    # FIX: Use None as default and create list inside function
    if log is None:
        log = []
    entry = f"{user}: {action}"
    log.append(entry)
    return log

# Test cases
print("--- Run 1 ---")
print(add_user_to_log("Alice", "Login")) 

print("\n--- Run 2 (Should start fresh now) ---")
# Expected: ['Bob: Logout']
print(add_user_to_log("Bob", "Logout"))