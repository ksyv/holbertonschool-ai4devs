#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void safe_copy(char *input) {
    // FIX 1: Buffer size increased to 11 to hold 10 chars + null terminator
    char buffer[11];
    int len = strlen(input);

    // FIX 2: Loop condition changed to strictly < len
    for (int i = 0; i < len; i++) {
        buffer[i] = input[i];
    }
    // FIX 3: Manually add null terminator
    buffer[len] = '\0';
    
    printf("Copied buffer: %s\n", buffer);
}

int main() {
    char *my_str = "0123456789"; 
    
    printf("Original: %s\n", my_str);
    safe_copy(my_str);
    
    return 0;
}