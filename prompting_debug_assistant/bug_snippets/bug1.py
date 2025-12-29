def add_user_to_log(user, action, log=[]):
    """
    Appends a user action to the log.
    If no log is provided, creates a new one.
    """
    entry = f"{user}: {action}"
    log.append(entry)
    return log

# Test cases
print("--- Run 1 ---")
print(add_user_to_log("Alice", "Login")) 

print("\n--- Run 2 (Should start fresh, but won't) ---")
print(add_user_to_log("Bob", "Logout"))