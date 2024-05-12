#include <stdio.h>
#include <time.h>

int main() {
    printf("Hello ASL!\n");

    // Get current time
    time_t now;
    time(&now);
    printf("Today is %s", ctime(&now));

    return 0;
}

