#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void safe_copy(char *input) {
    char buffer[10];
    int len = strlen(input);
    for (int i = 0; i <= len; i++) {
        buffer[i] = input[i];
    }
    
    printf("Copied buffer: %s\n", buffer);
}

int main() {
    char *my_str = "0123456789"; 
    
    printf("Original: %s\n", my_str);
    safe_copy(my_str);
    
    return 0;
}
