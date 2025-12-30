def calculate_even_average(numbers):
    total = 0
    count = 0
    
    for num in numbers:
        # FIX 1: Added missing colon
        if num % 2 == 0:
            total += num
            count += 1
            
    # FIX 2: Handle division by zero
    return total / count if count > 0 else 0

data = [1, 3, 5, 7]
print(f"Average (No evens): {calculate_even_average(data)}")

data2 = [2, 4, 6]
print(f"Average (Evens): {calculate_even_average(data2)}")